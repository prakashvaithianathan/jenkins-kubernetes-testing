pipeline {

  environment {
    dockerImageName = "prakash/nodeapp"
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        // Checkout the source code from the master branch
        git 'https://github.com/prakashvaithianathan/jenkins-kubernetes-testing.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          // Build the Docker image
          dockerImage = docker.build dockerImageName
        }
      }
    }

    stage('Push Docker Image to Docker Hub') {
      environment {
        registryCredential = 'dockerhublogin'
      }
      steps {
        script {
          // Push the Docker image to Docker Hub
          docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploy App to Kubernetes') {
      steps {
        script {
          // Deploy the application to Kubernetes
          kubernetesDeploy(configs: "deployment_service.yml", kubeconfigId: "kubernetes")
        }
      }
    }

  }

}
