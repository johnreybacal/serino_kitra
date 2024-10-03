import fs from "node:fs";
import path from "node:path";
import readXlsxFile from "read-excel-file/node";

enum UserIndex {
    null,
    id,
    name,
    age,
    password,
    email
}

enum TreasureIndex {
    null,
    id,
    name,
    age,
    password,
    email
}

enum MoneyValueIndex {
    null,
    treasureId,
    amount
}

async function read() {
    const filePath = path.join(__dirname, "../data/Serino-Mini-Project-Data.xlsx");
    const file = fs.readFileSync(filePath);

    const users = await readXlsxFile(file, {
        sheet: "users"
    })


    for (const user of users) {
        console.log(user)
    }

    const treasures = await readXlsxFile(file, {
        sheet: "treasures"
    })


    for (const treasure of treasures) {
        console.log(treasure)
    }

    const moneyValues = await readXlsxFile(file, {
        sheet: "treasures"
    })


    for (const moneyValue of moneyValues) {
        console.log(moneyValue)
    }

    process.exit(0)
}

read();