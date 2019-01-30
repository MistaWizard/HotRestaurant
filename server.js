// Requirements
const express = require("express");
const path = require("path");

// APP Variables
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [
    {
        name: "Table 1",
        phoneNumber: 2222222222,
        email: "tableone@gmail.com",
        uniqueId: "Table 1"
    },
    {
        name: "Table 2",
        phoneNumber: 3333333333,
        email: "tabletwo@gmail.com",
        uniqueId: "Table 2"
    },
    {
        name: "Table 3",
        phoneNumber: 3333333333,
        email: "tabletwo@gmail.com",
        uniqueId: "Table 3"
    },
    {
        name: "Table 4",
        phoneNumber: 3333333333,
        email: "tabletwo@gmail.com",
        uniqueId: "Table 4"
    },
    {
        name: "Table 5",
        phoneNumber: 3333333333,
        email: "tabletwo@gmail.com",
        uniqueId: "Table 5"
    }
];

let waitList = [
    {
        name: "Table 6",
        phoneNumber: 3333333333,
        email: "tabletwo@gmail.com",
        uniqueId: "Table 6"
    },
    {
        name: "Table 7",
        phoneNumber: 3333333333,
        email: "tabletwo@gmail.com",
        uniqueId: "Table 7"
    },
    {
        name: "Table 8",
        phoneNumber: 3333333333,
        email: "tabletwo@gmail.com",
        uniqueId: "Table 8"
    }
];

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

// Routing
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

app.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});