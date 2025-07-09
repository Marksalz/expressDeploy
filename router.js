import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, "file.txt");

router.get("/", (req, res) => res.send("hello"));

router.post("/create", async (req, res) => {
    try {
        let data = [];
        try {
            const fileData = await fs.readFile(dataFilePath, "utf8");
            data = JSON.parse(fileData);
        } catch (err) {
            if (err.code !== "ENOENT") throw err;
        }
        data.push(req.body);
        await fs.writeFile(dataFilePath, JSON.stringify(data));
        res.status(201).send("success");
    } catch (err) {
        res.status(err.status || 500).send(err.message || "Server internal error");
    }
});

export default router;