const express = require('express')
const app = express()


app.get("/", (req, res) => {
    res.send("This is Home Page")
})

app.get("/profile", (req, res) => {
    res.send("This is Profile Page")
})


app.listen(5000, () => {
    console.log("server started");
})