const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/div", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    if (b === 0) {
        return res.send("Zero Division Error");
    }
    const result = a / b;
    res.send(`${a} / ${b} = ${result}`);
});

app.get("/is_even", (req, res) => {
    const n = Number(req.query.n);
    const isEven = n % 2 === 0;
    res.send(isEven ? "True" : "False");
});

app.get("/is_number", (req, res) => {
    const value = Number(req.query.value);
    const isNumber = !isNaN(value);
    res.send(isNumber ? "True" : "False");
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
