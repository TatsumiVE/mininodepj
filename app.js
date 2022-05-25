const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(
    bodyparser.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    let data = req.body;
    let result = 0;
    let firstnum = Number(data.firstnum);
    let secondnum = Number(data.secondnum);
    // console.log(data);
    switch (data.operator) {
        case "+":
            result = firstnum + secondnum;
            break;
        case "-":
            result = firstnum - secondnum;
            break;
        case "*":
            result = firstnum * secondnum;
            break;
        case "/":
            result = firstnum / secondnum;
            break;
        case "%":
            result = firstnum % secondnum;
            break;
        default:
            result = 0;
    }
    // console.log(result);
    res.send(`<h1>Result :${result}<h1>`);
});

app.listen("3000", () => {
    console.log("Server is running");
});
