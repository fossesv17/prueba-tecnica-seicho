import fs from "fs";
import path from "path";

const DB_PATH = path.join(__dirname, "../../db.json");
console.log(DB_PATH);

export function readDB() {
    const raw_db = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(raw_db);
}

export function writeDB(data) : void {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}