const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/addition", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 + num2

    if (isNaN(result)) {
        res.send("ERROR! input is not a number")
    }
    else {
        res.send(result.toString())
    }
})

app.post("/subtraction", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 - num2

    if (isNaN(result)) {
        res.send("ERROR! input is not a number")
    }
    else {
        res.send(result.toString())
    }
})

app.post("/multiplication", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 * num2
    
    if (isNaN(result)) {
        res.send("ERROR! input is not a number")
    }
    else {
        res.send(result.toString())
    }
})

app.post("/division", (req, res) => {
    var num1 = Number(req.body.num1)
    var num2 = Number(req.body.num2)

    var result = num1 / num2

    if (isNaN(result)) {
        res.send("ERROR! input is not a number")
    }
    else {
        res.send(result.toString())
    }
})

port = 8000
app.listen(port, function() {
    console.log("server listening on port " + port)
})
