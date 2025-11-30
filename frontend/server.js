const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express Frontend" });
});

app.listen(3000, () => console.log("Frontend running on port 3000"));
