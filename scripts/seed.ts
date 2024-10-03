import { hashSync } from "bcrypt";
import fs from "node:fs";
import path from "node:path";
import readXlsxFile from "read-excel-file/node";
import { MoneyValue } from "../src/components/moneyValue/model";
import { Treasure } from "../src/components/treasure/model";
import { User } from "../src/components/user/model";
import { SALT } from "../src/config/meta";
import { sequelize } from "../src/config/sequelize";

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

    const users = []
    for (const record of records) {
        users.push({
            id: Number(record[UserIndex.id]),
            name: String(record[UserIndex.name]),
            age: Number(record[UserIndex.age]),
            email: String(record[UserIndex.email]),
            password: hashSync(String(record[UserIndex.password]), SALT)
        })
    }

    await User.bulkCreate(users);
}

async function seedTreasures() {
    enum TreasureIndex {
        null,
        id,
        latitude,
        longitude,
        name
    }

    const records = await read("treasures");

    const treasures = []
    for (const record of records) {
        treasures.push({
            id: Number(record[TreasureIndex.id]),
            latitude: Number(record[TreasureIndex.latitude]),
            longitude: Number(record[TreasureIndex.longitude]),
            name: String(record[TreasureIndex.name]),
        })
    }

    await Treasure.bulkCreate(treasures);
}

async function seedMoneyValues() {
    enum MoneyValueIndex {
        null,
        treasureId,
        amount
    }

    const records = await read("money_values");

    const moneyValues = []
    for (const record of records) {
        moneyValues.push({
            treasure_id: Number(record[MoneyValueIndex.treasureId]),
            amount: Number(record[MoneyValueIndex.amount])
        })
    }

    await MoneyValue.bulkCreate(moneyValues);
}

async function seed() {
    console.log("Connecting to database");
    await sequelize.authenticate();

    console.log("Synchronizing ORM");
    User.sync()
    Treasure.sync()
    MoneyValue.sync()

    console.log("Seeding users");
    await seedUsers();

    console.log("Seeding treasures");
    await seedTreasures();

    console.log("Seeding money values");
    await seedMoneyValues();

    process.exit(0)
}

seed()