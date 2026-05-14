import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
    res.send("HOME");
});

app.get("/test", async (req, res) => {

    await mongoose.connect("mongodb://127.0.0.1:27017/videotube");

    await mongoose.connection.db.collection("users").insertOne({
        name: "Vansh",
        age: 21,
        learning:"MERN"
    });

    res.send("DATA INSERTED");

});

app.listen(4000, () => {
    console.log("SERVER RUNNING");
});