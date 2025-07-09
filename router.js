import express from "express";
import fs from "fs/promises";
const router = express.Router();

router.get("/", (req, res) => res.send("hello"));

router.post("/create", async (req, res) => {
    try {
        const fileData = await fs.readFile("file.txt", "utf8");
        const data = JSON.parse(fileData);
        if (!data) res.status(500).send("Server internal error");
        data.push(req.body);
        await fs.writeFile("file.txt", JSON.stringify(data));
        res.status(201).send("success");
    } catch (err) {
        res.status(err.status || 500).send(err.message || "Server internal error");
    }
});

export default router;