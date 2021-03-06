// Requirements
const express = require("express");
const path = require("path");

// APP Variables
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var visitorCount = 0;

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

// JSON Routes
app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.get("/api/visitors", function(req, res) {
    return res.json(visitorCount);
});

// Routing
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    visitorCount++;
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

// Add Reservation
app.post("/api/new", function (req, res) {
    let newtable = req.body;

    console.log(newtable);
    if (reservations.length < 5) {
        reservations.push(newtable);
    }
    else {
        waitList.push(newtable);
    }
    // reservations.push(newtable);
    res.json(newtable);
});

app.get("/api/remove/:id?" , function(req, res) {
    let tableId = req.params.id;

    if (tableId) {
        console.log(tableId);
        for (let i = 0; i < reservations.length; i++) {
            if (tableId === reservations[i].uniqueId) {
                reservations.splice(i, 1);
                if (waitList.length > 0) {
                    let tempTable = waitList.splice(0, 1)[0];
                    reservations.push(tempTable);
                }
            return res.json(true);
            }
        }

        for (let i = 0; i < waitList.length; i++) {
            if (tableId === waitList[i].uniqueId) {
                waitList.splice(i, 1);

                return res.json(true);
            }
        }
        return res.json(false);
    }
    return res.json(false);
});

app.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});