const fs = require("fs");

// ---- config ----------------------------------------------------------
const INPUT = "./music-list.js";
const OUTPUT = "./music-list.transformed.js";

const rules = [
    {
        key: "en",
        contains: "- Red/Blue",
        add: { console: "Game Boy", year: 1998, category: "Mainline", game: "Red/Blue" },
    },
    {
        key: "en",
        contains: "- Yellow",
        add: { console: "Game Boy", year: 1999, category: "Mainline", game: "Yellow" },
    },
    {
        key: "en",
        contains: "- Gold/Silver",
        add: { console: "Game Boy", year: 2000, category: "Mainline", game: "Gold/Silver" },
    },
    {
        key: "en",
        contains: "- Crystal",
        add: { console: "Game Boy Color", year: 2001, category: "Mainline", game: "Crystal" },
    },
    {
        key: "en",
        contains: "- Ruby/Sapphire",
        add: { console: "Game Boy Advance", year: 2003, category: "Mainline", game: "Ruby/Sapphire" },
    },
    {
        key: "en",
        contains: "- FireRed/LeafGreen",
        add: { console: "Game Boy Advance", year: 2004, category: "Remake", game: "FireRed/LeafGreen" },
    },
    {
        key: "en",
        contains: "- Emerald",
        add: { console: "Game Boy Advance", year: 2005, category: "Mainline", game: "Emerald" },
    },
    {
        key: "en",
        contains: "- Diamond/Pearl",
        add: { console: "DS", year: 2007, category: "Mainline", game: "Diamond/Pearl" },
    },
    {
        key: "en",
        contains: "- Platinum",
        add: { console: "DS", year: 2009, category: "Mainline", game: "Platinum" },
    },
    {
        key: "en",
        contains: "- HeartGold/SoulSilver",
        add: { console: "DS", year: 2010, category: "Remake", game: "HeartGold/SoulSilver" },
    },
    {
        key: "en",
        contains: "- Black/White",
        add: { console: "DS", year: 2011, category: "Mainline", game: "Black/White" },
    },
    {
        key: "en",
        contains: "- Black 2/White 2",
        add: { console: "DS", year: 2012, category: "Mainline", game: "Black 2/White 2" },
    },
    {
        key: "en",
        contains: "- X/Y",
        add: { console: "3DS", year: 2013, category: "Mainline", game: "X/Y" },
    },
    {
        key: "en",
        contains: "- Omega Ruby/Alpha Sapphire",
        add: { console: "3DS", year: 2014, category: "Remake", game: "Omega Ruby/Alpha Sapphire" },
    },
    {
        key: "en",
        contains: "- Sun/Moon",
        add: { console: "3DS", year: 2016, category: "Mainline", game: "Sun/Moon" },
    },
    {
        key: "en",
        contains: "- Ultra Sun/Ultra Moon",
        add: { console: "3DS", year: 2017, category: "Mainline", game: "Ultra Sun/Ultra Moon" },
    },
    {
        key: "en",
        contains: "- Let's Go, Pikachu/Eevee!",
        add: { console: "Nintendo Switch", year: 2018, category: "Remake", game: "Let's Go, Pikachu/Eevee!" },
    },
    {
        key: "en",
        contains: "- Sword/Shield",
        add: { console: "Nintendo Switch", year: 2019, category: "Mainline", game: "Sword/Shield" },
    },
    {
        key: "en",
        contains: "- Sword/Shield (The Isle of Armor)",
        add: { console: "Nintendo Switch", year: 2020, category: "DLC", game: "Sword/Shield (The Isle of Armor)" },
    },
    {
        key: "en",
        contains: "- Sword/Shield (The Crown Tundra)",
        add: { console: "Nintendo Switch", year: 2020, category: "DLC", game: "Sword/Shield (The Crown Tundra)" },
    },
    {
        key: "en",
        contains: "- Brilliant Diamond/Shining Pearl",
        add: { console: "Nintendo Switch", year: 2021, category: "Remake", game: "Brilliant Diamond/Shining Pearl" },
    },
    {
        key: "en",
        contains: "- Legends: Arceus",
        add: { console: "Nintendo Switch", year: 2022, category: "Legends", game: "Legends: Arceus" },
    },
    {
        key: "en",
        contains: "- Scarlet/Violet",
        add: { console: "Nintendo Switch", year: 2022, category: "Mainline", game: "Scarlet/Violet" },
    },
    {
        key: "en",
        contains: "- Scarlet/Violet (The Teal Mask)",
        add: { console: "Nintendo Switch", year: 2023, category: "DLC", game: "Scarlet/Violet (The Teal Mask)" },
    },
    {
        key: "en",
        contains: "- Scarlet/Violet (The Indigo Disk)",
        add: { console: "Nintendo Switch", year: 2023, category: "DLC", game: "Scarlet/Violet (The Indigo Disk)" },
    },
];

const src = fs.readFileSync(INPUT, "utf8");
const nameList = extractArray(src, "musicNameList");

const changedIds = new Set();

for (let i = 0; i < nameList.length; i++) {
    const unit = nameList[i];

    for (let j = 0; j < rules.length; j++) {
        const rule = rules[j];
        const val = unit[rule.key];

        if (typeof val === "string" && val.includes(rule.contains)) {
            Object.assign(unit, rule.add);
            changedIds.add(unit.id);
        }
    }
}

const out = "var musicNameList = " + JSON.stringify(nameList, null, 2) + ";\n";
fs.writeFileSync(OUTPUT, out, "utf8");

const unchanged = nameList.filter((u) => !("console" in u));
console.log(`Source:  ${INPUT}`);
console.log(`Output:  ${OUTPUT}`);
console.log(`Changed:   ${changedIds.size} / ${nameList.length} units`);
console.log(`Unchanged: ${unchanged.length} units`);
if (unchanged.length) {
    console.log("\nUnits NOT changed:");
    for (const u of unchanged) {
        console.log(`  id=${u.id}  en=${JSON.stringify(u.en)}`);
    }
}

function extractArray(code, varName) {
    const fn = new Function(`${code}; return ${varName};`);
    return fn();
}
