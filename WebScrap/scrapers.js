const puppeteer = require('puppeteer');
const fs = require('fs');
const character = require('./characters.json');
const { Cluster } = require('puppeteer-cluster');

async function scrapeNames() {
    const browser = await puppeteer.launch({ defaultViewport: false });
    const page = await browser.newPage();
    await page.goto('https://onepiece.fandom.com/wiki/One_Piece_Wiki');
    //returns names of one piece characters: strawhats
    const names = await page.evaluate(() => {
        let characters = [];
        for (let i = 0; i < 9; i++) {
            //if the character name is under aria > ul > li > a
            characters.push(...Array.from(document.querySelectorAll(`[aria-labelledby="ui-id-${18 + i}"] > ul > li > a`)).map(x => ({
                name: x.textContent,
                link: x.href
            })))
            //if the character name is under aria > div > ul > li > a
            characters.push(...Array.from(document.querySelectorAll(`[aria-labelledby="ui-id-${18 + i}"] > div > ul > li > a`)).map(x => ({
                name: x.textContent,
                link: x.href
            })))
        }
        return characters;
    })
    writeFiles(names);

    await browser.close();
}
// scrapeNames();

function writeFiles(names) {
    //create a txt files with the names of all our characters
    fs.writeFile('characters.json', JSON.stringify(names), (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('File successfully written');
        }
    })
}

function appendFiles(value) {
    //check if file exist
    if (!fs.existsSync('updateCharacters.json')) {
        //create new file if not exist
        fs.closeSync(fs.openSync('updateCharacters.json', 'w'));
    }
    const file = fs.readFileSync('updateCharacters.json')

    if (file.length == 0) {
        //add data to json file
        fs.writeFileSync("updateCharacters.json", JSON.stringify([value]))
    } else {
        //append data to json file
        const json = JSON.parse(file.toString())
        //add json element to json object
        json.push(value);
        fs.writeFileSync("updateCharacters.json", JSON.stringify(json))
    }
}

async function scrapeCategories(url) {

    const browser = await puppeteer.launch({ headless: false, defaultViewport: false });
    const page = await browser.newPage();
    await page.goto(url)

    //finds our characters name
    let name = await page.$eval('[data-source="ename"] > div', a => a.innerHTML)
    //finds our characters affiliation
    let affiliation = await page.$eval('[data-source="affiliation"] > div > a', a => a.innerText)
    //finds our characters occupation/s
    let occupation = await page.$$eval('[data-source="occupation"] > div > a', a => a.map((o) => o.innerText))
    //find characters age
    let age;
    if ((await page.$('[data-source="age2"]') != null)) {
        age = await page.$eval('[data-source="age2"] > div', a => a.innerHTML)
    }
    else {
        age = await page.$eval('[data-source="age"] > div', a => a.innerHTML)
    }
    //find our characters height
    let height = await page.$eval('[data-source="height"] > div', a => a.innerText)
    //find our characters bounty
    let bounty;
    if ((await page.$('[data-source="bounty"]') != null)) {
        bounty = await page.$eval('[data-source="bounty"] > div', a => a.innerText)
        if (bounty.indexOf('[')) {
            bounty = bounty.substring(0, bounty.indexOf('['));
        }
    }
    else {
        bounty = 'null';
    }

    if (name.indexOf('(') != -1) {
        name = name.substring(0, name.indexOf('(')).trim();
    }
    let charUnfinised = { "name": name, "affiliation": affiliation, "occupations": occupation, "age": age, "height": height, "bounty": bounty }
    writeFiles(charUnfinised);
    await browser.close();
}

(async () => {
    const cluster = await Cluster.launch({
        concurrency: Cluster.CONCURRENCY_PAGE,
        maxConcurrency: 2,
        puppeteerOptions: {
            headless: false,
            monitor: true,
            defaultViewport: false,
            userDataDir: "./tmp",
        },
    });
    cluster.on('taskerror', (err, data) => {
        console.log(`Error crawling ${data}: ${err.message}`);
    });
    const urls = character.map(c => c.link)
    await cluster.task(async ({ page, data: url }) => {
        await page.goto(url);

        //finds our characters affiliation
        let affiliation;
        if ((await page.$('[data-source="affiliation"] > div > a') != null)) {
            affiliation = await page.$eval('[data-source="affiliation"] > div > a', a => a.innerHTML)
        }
        else if((await page.$('[data-source="affiliation"] > div') != null)){
            affiliation = await page.$eval('[data-source="affiliation"] > div', a => a.innerHTML)
        }
        else{
            affiliation = 'null';
        }

        //finds our characters name
        let name;
        if ((affiliation != "New Spiders Cafe")) {
            name = await page.$eval('[data-source="ename"] > div', a => a.innerText)
            if (name.indexOf('(') != -1) {
                name = name.substring(0, name.indexOf('(')-1).trim();
            }
            else if (name.indexOf(';') != -1) {
                name = name.substring(0, name.indexOf(';')-1).trim();
            }
            else if (name.indexOf('<') != -1) {
                name = name.substring(0, name.indexOf('<')-1).trim();
            }
        }
        else {
            name = await page.$eval('[data-source="alias"] > div', a => a.innerText)
            if (name.indexOf('(') != -1) {
                name = name.substring(0, name.indexOf('(')).trim();
            }
            else if (name.indexOf(';') != -1) {
                name = name.substring(0, name.indexOf(';')).trim();
            }
            else if (name.indexOf('<') != -1) {
                name = name.substring(0, name.indexOf('<')).trim();
            }
        }

        //finds our characters occupation/s
        let occupation = await page.$$eval('[data-source="occupation"] > div > a', a => a.map((o) => o.innerText))

        //find characters age
        let age;
        if ((await page.$('[data-source="age2"]') != null)) {
            age = await page.$eval('[data-source="age2"] > div', a => a.innerHTML)
        }
        else {
            age = await page.$eval('[data-source="age"] > div', a => a.innerHTML)
        }
        if (age.indexOf('(after timeskip)') != -1)
            age = age.substring(age.indexOf('(after timeskip)') - 3, age.indexOf('(after timeskip)')).trim();

        //find our characters height
        let height = await page.$eval('[data-source="height"] > div', a => a.innerText)
        if(height.indexOf('(After timeskip)') != -1){
            height = height.substring(height.indexOf('\n'), height.indexOf('cm')).trim();
        }
        else{
            height = height.substring(0, height.indexOf('cm')).trim();
        }

        //find our characters bounty
        let bounty;
        if ((await page.$('[data-source="bounty"]') != null)) {
            bounty = await page.$eval('[data-source="bounty"] > div', a => a.innerText)
            if (bounty.indexOf('[')) {
                bounty = bounty.substring(0, bounty.indexOf('['));
            }
        }
        else {
            bounty = 'null';
        }
        let charUnfinised = { "name": name, "affiliation": affiliation, "occupations": occupation, "age": age, "height": height, "bounty": bounty };
        appendFiles(charUnfinised);
        console.log(name + ' added')
    });
    for (let url of urls) {
        await cluster.queue(url)
    }
    // many more pages

    await cluster.idle();
    await cluster.close();
})();