import fs from "node:fs";
import path from "node:path";
import readXlsxFile from "read-excel-file/node";

async function read(sheet: string) {
    const filePath = path.join(__dirname, "../data/Serino-Mini-Project-Data.xlsx");
    const file = fs.readFileSync(filePath);
    const records = await readXlsxFile(file, {
        sheet
    })

    // Remove first two rows (empty row and header)
    records.splice(0, 2);

    return records
}

async function seedUsers() {
    enum UserIndex {
        null,
        id,
        name,
        age,
        password,
        email
    }

    const records = await read("users");

    for (const record of records) {
        console.log(record);
    }
}

async function seedTreasures() {
    enum TreasureIndex {
        null,
        id,
        name,
        age,
        password,
        email
    }

    const records = await read("treasures");

    for (const record of records) {
        console.log(record);
    }
}

async function seedMoneyValues() {
    enum MoneyValueIndex {
        null,
        treasureId,
        amount
    }

    const records = await read("money_values");

    for (const record of records) {
        console.log(record);
    }
}

async function seed() {
    console.log("Seeding users");
    await seedUsers();
    console.log("Seeding treasures");
    await seedTreasures();
    console.log("Seeding money values");
    await seedMoneyValues();

    process.exit(0)
}

seed()