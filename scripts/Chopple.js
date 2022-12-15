const db1 =[//Database that contains characters, made by Ahmed.
  {
      "name": "Monkey D. Luffy",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Pirate Captain",
          "Emperor",
          "Straw Hat Grand Fleet",
          "Baratie",
          "Bandit"
      ],
      "age": 19,
      "height": 91,
      "bounty": 3000000000
  },
  {
      "name": "Nami",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Navigator",
          "Pirate",
          "Officer"
      ],
      "age": 20,
      "height": 169,
      "bounty": 366000000
  },
  {
      "name": "Roronoa Zoro",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Swordsman",
          "Pirate",
          "Combatant",
          "Officer",
          "Rōnin",
          "Bounty Hunter"
      ],
      "age": 21,
      "height": 178,
      "bounty": 1111000000
  },
  {
      "name": "Sanji",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Cook",
          "Pirate",
          "Officer",
          "Prince"
      ],
      "age": 21,
      "height": 177,
      "bounty": 1032000000
  },
  {
      "name": "Usopp",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Sniper",
          "Pirate",
          "Officer",
          "Captain"
      ],
      "age": 19,
      "height": 174,
      "bounty": 500000000
  },
  {
      "name": "Tony Tony Chopper",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Doctor",
          "Pirate",
          "Officer"
      ],
      "age": 17,
      "height": 90,
      "bounty": 1000
  },
  {
      "name": "Franky",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Shipwright",
          "Bounty Hunter",
          "Pirate",
          "Officer"
      ],
      "age": 36,
      "height": 225,
      "bounty": 394000000
  },
  {
      "name": "Nico Robin",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Archaeologist",
          "Pirate",
          "Officer",
          "Geisha",
          "Assassin",
          "Rain Dinners"
      ],
      "age": 30,
      "height": 188,
      "bounty": 930000000
  },
  {
      "name": "Jimbei",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Pirate",
          "Helmsman",
          "Officer",
          "Captain",
          "Warlord of the Sea",
          "Soldier"
      ],
      "age": 46,
      "height": 301,
      "bounty": 1100000000
  },
  {
      "name": "Brook",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Pirate",
          "Musician",
          "Swordsman",
          "Officer",
          "Captain"
      ],
      "age": 90,
      "height": 266,
      "bounty": 383000000
  },
  {
      "name": "Koby",
      "affiliation": "Marines",
      "occupation": [
          "Marine Captain",
          "Master Chief Petty Officer",
          "Chore Boy",
          "Pirate"
      ],
      "age": 18,
      "height": 167,
      "bounty": 0
  },
  {
      "name": "Shanks",
      "affiliation": "Red Hair Pirates",
      "occupation": [
          "Chief",
          "Emperor",
          "Apprentice"
      ],
      "age": 39,
      "height": 199,
      "bounty": 4048900000
  },
  {
      "name": "Gaimon",
      "affiliation": "none",
      "occupation": [
          "Pirate"
      ],
      "age": 45,
      "height": 130,
      "bounty": 0
  },
  {
      "name": "Kaya",
      "affiliation": "none",
      "occupation": [],
      "age": 19,
      "height": 169,
      "bounty": null
  },
  {
      "name": "Johnny",
      "affiliation": "Yosaku",
      "occupation": [
          "Bounty Hunter"
      ],
      "age": 25,
      "height": 186,
      "bounty": 0
  },
  {
      "name": "Zeff",
      "affiliation": "Baratie",
      "occupation": [
          "Baratie",
          "Pirate",
          "Captain"
      ],
      "age": 67,
      "height": 189,
      "bounty": 0
  },
  {
      "name": "Yosaku",
      "affiliation": "Johnny",
      "occupation": [
          "Bounty Hunter"
      ],
      "age": 26,
      "height": 185,
      "bounty": 0
  },
  {
      "name": "Nojiko",
      "affiliation": "none",
      "occupation": [
          "Orange Farmer"
      ],
      "age": 22,
      "height": 170,
      "bounty": 0
  },
  {
      "name": "Belle-mère",
      "affiliation": "Marines",
      "occupation": [
          "Marine",
          "Officer"
      ],
      "age": 30,
      "height": 186,
      "bounty": 0
  },
  {
      "name": "Higuma",
      "affiliation": "Higuma Bandits",
      "occupation": [
          "Bandit Leader"
      ],
      "age": 46,
      "height": 190,
      "bounty": 8000000
  },
  {
      "name": "Alvida",
      "affiliation": "Cross Guild",
      "occupation": [
          "Pirate Captain"
      ],
      "age": 27,
      "height": 198,
      "bounty": 5000000
  },
  {
      "name": "Morgan",
      "affiliation": "Marines",
      "occupation": [
          "Captain",
          "Lieutenant Commander",
          "Chief Petty Officer"
      ],
      "age": 44,
      "height": 285,
      "bounty": 0
  },
  {
      "name": "Helmeppo",
      "affiliation": "Marines",
      "occupation": [
          "Lieutenant Commander",
          "Chief Petty Officer",
          "Chore Boy"
      ],
      "age": 22,
      "height": 179,
      "bounty": 0
  },
  {
      "name": "Kuro",
      "affiliation": "Black Cat Pirates",
      "occupation": [
          "Pirate",
          "Captain"
      ],
      "age": 35,
      "height": 207,
      "bounty": 16000000
  },
  {
      "name": "Buggy",
      "affiliation": "Cross Guild",
      "occupation": [
          "Pirate Captain",
          "Emperor",
          "Warlord of the Sea",
          "Apprentice"
      ],
      "age": 39,
      "height": 192,
      "bounty": 3189000000
  },
  {
      "name": "Krieg",
      "affiliation": "Krieg Pirates",
      "occupation": [
          "Pirate",
          "Captain",
          "Admiral"
      ],
      "age": 44,
      "height": 243,
      "bounty": 17000000
  },
  {
      "name": "Gin",
      "affiliation": "Krieg Pirates",
      "occupation": [
          "Pirate",
          "Combat Commander"
      ],
      "age": 27,
      "height": 186,
      "bounty": 12000000
  },
  {
      "name": "Nefeltari Vivi",
      "affiliation": "Arabasta Kingdom",
      "occupation": [
          "Princess",
          "Pirate",
          "Bounty Hunter",
          "Frontier Agent"
      ],
      "age": 18,
      "height": 169,
      "bounty": 0
  },
  {
      "name": "Laboon",
      "affiliation": "Rumbar Pirates",
      "occupation": [],
      "age": 53,
      "height": 40000,
      "bounty": 0
  },
  {
      "name": "Arlong",
      "affiliation": "Arlong Pirates",
      "occupation": [
          "Pirate",
          "Captain"
      ],
      "age": 41,
      "height": 263,
      "bounty": 20000000
  },
  {
      "name": "Dorry",
      "affiliation": "Giant Warrior Pirates",
      "occupation": [
          "Pirate",
          "Captain"
      ],
      "age": 60,
      "height": 2260,
      "bounty": 100000000
  },
  {
      "name": "Karoo",
      "affiliation": "Super Spot-Billed Duck Troops",
      "occupation": [
          "Pet",
          "Pirate"
      ],
      "age": 16,
      "height": 150,
      "bounty": 0
  },
  {
      "name": "Broggy",
      "affiliation": "Giant Warrior Pirates",
      "occupation": [
          "Pirate",
          "Captain"
      ],
      "age": 60,
      "height": 2130,
      "bounty": 100000000
  },
  {
      "name": "Dalton",
      "affiliation": "Sakura Kingdom",
      "occupation": [
          "King",
          "Sakura Kingdom",
          "Drum Kingdom"
      ],
      "age": 35,
      "height": 218,
      "bounty": 0
  },
  {
      "name": "Kureha",
      "affiliation": "Sakura Kingdom",
      "occupation": [
          "Doctor",
          "Isshi-100"
      ],
      "age": 141,
      "height": 188,
      "bounty": 0
  },
  {
      "name": "Igaram",
      "affiliation": "Arabasta",
      "occupation": [
          "Frontier Agent",
          "Bounty Hunter",
          "Whisky Peak"
      ],
      "age": 50,
      "height": 218,
      "bounty": 0
  },
  {
      "name": "Koza",
      "affiliation": "Arabasta Kingdom",
      "occupation": [
          "Environmental Minister",
          "Rebel Army leader"
      ],
      "age": 22,
      "height": 177,
      "bounty": 0
  },
  {
      "name": "Portgas D. Ace",
      "affiliation": "Whitebeard Pirates",
      "occupation": [
          "Commander",
          "Pirate",
          "Captain",
          "Bandit"
      ],
      "age": 20,
      "height": 185,
      "bounty": 550000000
  },
  {
      "name": "Nefeltari Cobra",
      "affiliation": "Arabasta Kingdom",
      "occupation": [
          "King"
      ],
      "age": 50,
      "height": 182,
      "bounty": 0
  },
  {
      "name": "Wapol",
      "affiliation": "Evil Black Drum Kingdom",
      "occupation": [
          "King",
          "Drum Kingdom",
          "Pirate",
          "Captain"
      ],
      "age": 29,
      "height": 207,
      "bounty": 0
  },
  {
      "name": "Smoker",
      "affiliation": "Marines",
      "occupation": [
          "Vice Admiral",
          "Commodore",
          "Captain"
      ],
      "age": 36,
      "height": 209,
      "bounty": 0
  },
  {
      "name": "Miss Valentine",
      "affiliation": "New Spiders Cafe",
      "occupation": [
          "Cafe Pâtissier",
          "Officer Agent"
      ],
      "age": 24,
      "height": 177,
      "bounty": 7500000
  },
  {
      "name": "Mr. 5",
      "affiliation": "New Spiders Cafe",
      "occupation": [
          "Cafe Employee",
          "Officer Agent",
          "Sniper"
      ],
      "age": 26,
      "height": 197,
      "bounty": 10000000
  },
  {
      "name": "Miss Goldenweek",
      "affiliation": "New Spiders Cafe",
      "occupation": [
          "Cafe Employee",
          "Officer Agent"
      ],
      "age": 18,
      "height": 145,
      "bounty": 29000000
  },
  {
      "name": "Mr. 3",
      "affiliation": "Cross Guild",
      "occupation": [
          "Pirate",
          "Officer Agent"
      ],
      "age": 37,
      "height": 179,
      "bounty": 24000000
  },
  {
      "name": "Bentham",
      "affiliation": "Newkama Land",
      "occupation": [
          "Newkama Land",
          "Officer Agent"
      ],
      "age": 32,
      "height": 238,
      "bounty": 32000000
  },
  {
      "name": "Miss Doublefinger",
      "affiliation": "New Spiders Cafe",
      "occupation": [
          "Spiders Cafe Owner",
          "Assassin",
          "Officer Agent"
      ],
      "age": 28,
      "height": 187,
      "bounty": 35000000
  },
  {
      "name": "Daz Bonez",
      "affiliation": "Cross Guild",
      "occupation": [
          "Pirate",
          "Assassin",
          "Officer Agent",
          "Bounty Hunter"
      ],
      "age": 31,
      "height": 212,
      "bounty": 75000000
  },
  {
      "name": "Mont Blanc Cricket",
      "affiliation": "Saruyama Alliance",
      "occupation": [
          "Pirate",
          "Captain"
      ],
      "age": 43,
      "height": 242,
      "bounty": 25000000
  },
  {
      "name": "Conis",
      "affiliation": "Pumpkin Cafe",
      "occupation": [],
      "age": 21,
      "height": 176,
      "bounty": 0
  },
  {
      "name": "Crocodile",
      "affiliation": "Cross Guild",
      "occupation": [
          "Pirate",
          "Officer",
          "Baroque Works",
          "Rain Dinners"
      ],
      "age": 46,
      "height": 253,
      "bounty": 1965000000
  },
  {
      "name": "Pagaya",
      "affiliation": "none",
      "occupation": [],
      "age": 54,
      "height": 179,
      "bounty": 0
  },
  {
      "name": "Ganfor",
      "affiliation": "Skypiea",
      "occupation": [
          "God",
          "Mercenary"
      ],
      "age": 68,
      "height": 180,
      "bounty": 0
  },
  {
      "name": "Wyper",
      "affiliation": "Shandia",
      "occupation": [
          "Shandia"
      ],
      "age": 24,
      "height": 183,
      "bounty": null
  },
  {
      "name": "Aisa",
      "affiliation": "Shandia",
      "occupation": [],
      "age": 11,
      "height": 140,
      "bounty": 0
  },
  {
      "name": "Kalgara",
      "affiliation": "Shandia",
      "occupation": [
          "Warrior"
      ],
      "age": 39,
      "height": 222,
      "bounty": 0
  },
  {
      "name": "Mont Blanc Noland",
      "affiliation": "Lvneel",
      "occupation": [
          "Explorer",
          "Admiral"
      ],
      "age": 39,
      "height": 220,
      "bounty": 0
  },
  {
      "name": "Eneru",
      "affiliation": "God's Army",
      "occupation": [
          "God",
          "Skypiea"
      ],
      "age": 39,
      "height": 266,
      "bounty": 0
  },
  {
      "name": "Bellamy",
      "affiliation": "Donquixote Pirates",
      "occupation": [
          "Pirate",
          "Captain"
      ],
      "age": 27,
      "height": 240,
      "bounty": 195000000
  },
  {
      "name": "Satori",
      "affiliation": "God's Army",
      "occupation": [
          "Priest",
          "Enel"
      ],
      "age": 27,
      "height": 179,
      "bounty": 0
  },
  {
      "name": "Shura",
      "affiliation": "God's Army",
      "occupation": [
          "Priest",
          "Enel"
      ],
      "age": 33,
      "height": 191,
      "bounty": 0
  },
  {
      "name": "Ohm",
      "affiliation": "God's Army",
      "occupation": [
          "Priest",
          "Enel"
      ],
      "age": 29,
      "height": 189,
      "bounty": 0
  },
  {
      "name": "Gedatsu",
      "affiliation": "Ukkari Hot-Spring Island",
      "occupation": [
          "Priest",
          "Enel",
          "Hot Springs Resort"
      ],
      "age": 31,
      "height": 220,
      "bounty": 0
  },
  {
      "name": "Paulie",
      "affiliation": "Galley-La Company",
      "occupation": [],
      "age": 26,
      "height": 195,
      "bounty": 0
  },
  {
      "name": "Iceberg",
      "affiliation": "Galley-La Company",
      "occupation": [
          "Galley-La Company",
          "Water 7"
      ],
      "age": 40,
      "height": 199,
      "bounty": 0
  },
  {
      "name": "Rob Lucci",
      "affiliation": "CP0",
      "occupation": [
          "Cipher Pol",
          "Shipwright"
      ],
      "age": 30,
      "height": 212,
      "bounty": 0
  },
  {
      "name": "Fukurô",
      "affiliation": "CP9",
      "occupation": [
          "Cipher Pol"
      ],
      "age": 31,
      "height": 331,
      "bounty": 0
  },
  {
      "name": "Kumadori",
      "affiliation": "CP9",
      "occupation": [
          "Cipher Pol"
      ],
      "age": 36,
      "height": 338,
      "bounty": 0
  },
  {
      "name": "Kuzan",
      "affiliation": "Blackbeard Pirates",
      "occupation": [
          "Pirate",
          "Admiral",
          "Vice Admiral"
      ],
      "age": 49,
      "height": 298,
      "bounty": 0
  },
  {
      "name": "Spandam",
      "affiliation": "CP0",
      "occupation": [
          "CP0"
      ],
      "age": 41,
      "height": 192,
      "bounty": 0
  },
  {
      "name": "Foxy",
      "affiliation": "Foxy Pirates",
      "occupation": [
          "Pirate",
          "Captain"
      ],
      "age": 38,
      "height": 180,
      "bounty": 24000000
  },
  {
      "name": "Charlotte Lola",
      "affiliation": "Rolling Pirates",
      "occupation": [
          "Pirate",
          "Captain",
          "Minister"
      ],
      "age": 26,
      "height": 215,
      "bounty": 24000000
  },
  {
      "name": "Gecko Moria",
      "affiliation": "Thriller Bark Pirates",
      "occupation": [
          "Pirate",
          "Captain",
          "Warlord of the Sea"
      ],
      "age": 50,
      "height": 692,
      "bounty": 320000000
  },
  {
      "name": "Absalom",
      "affiliation": "Thriller Bark Pirates",
      "occupation": [
          "Soldier Zombie",
          "General Zombie"
      ],
      "age": 36,
      "height": 195,
      "bounty": 0
  },
  {
      "name": "Perona",
      "affiliation": "Dracule Mihawk",
      "occupation": [
          "Pirate",
          "Wild Zombies",
          "Surprise Zombies"
      ],
      "age": 25,
      "height": 160,
      "bounty": 0
  },
  {
      "name": "Oars",
      "affiliation": "Thriller Bark Pirates",
      "occupation": [
          "Special Zombie"
      ],
      "age": 159,
      "height": 6700,
      "bounty": 0
  },
  {
      "name": "Shimotsuki Ryuma",
      "affiliation": "Thriller Bark Pirates",
      "occupation": [
          "General Zombie",
          "Samurai"
      ],
      "age": 47,
      "height": 179,
      "bounty": 0
  },
  {
      "name": "Bartholomew Kuma",
      "affiliation": "Seven Warlords of the Sea",
      "occupation": [
          "Pirate",
          "Slave",
          "Warlord of the Sea",
          "King"
      ],
      "age": 47,
      "height": 689,
      "bounty": 296000000
  },
  {
      "name": "Pappagu",
      "affiliation": "Takoyaki 8",
      "occupation": [],
      "age": 33,
      "height": 50,
      "bounty": 0
  },
  {
      "name": "Camie",
      "affiliation": "Takoyaki 8",
      "occupation": [],
      "age": 18,
      "height": 197,
      "bounty": 0
  },
  {
      "name": "Hatchan",
      "affiliation": "Takoyaki 8",
      "occupation": [
          "Pirate"
      ],
      "age": 38,
      "height": 220,
      "bounty": 8000000
  },
  {
      "name": "Silvers Rayleigh",
      "affiliation": "Roger Pirates",
      "occupation": [
          "Coating Mechanic",
          "First Mate",
          "Pirate"
      ],
      "age": 78,
      "height": 188,
      "bounty": 0
  },
  {
      "name": "Boa Hancock",
      "affiliation": "Kuja",
      "occupation": [
          "Pirate Captain",
          "Amazon Lily",
          "Warlord of the Sea"
      ],
      "age": 31,
      "height": 191,
      "bounty": 1659000000
  },
  {
      "name": "Emporio Ivankov",
      "affiliation": "Revolutionary Army",
      "occupation": [
          "Queen"
      ],
      "age": 53,
      "height": 449,
      "bounty": 100000000
  },
  {
      "name": "Edward Newgate",
      "affiliation": "Whitebeard Pirates",
      "occupation": [
          "Pirate Captain",
          "Emperor"
      ],
      "age": 72,
      "height": 666,
      "bounty": 5046000000
  },
  {
      "name": "Marco",
      "affiliation": "Whitebeard Pirates",
      "occupation": [
          "Pirate",
          "Commander",
          "Doctor",
          "Apprentice"
      ],
      "age": 45,
      "height": 203,
      "bounty": 1374000000
  },
  {
      "name": "Saint Charlos",
      "affiliation": "World Government",
      "occupation": [
          "World Noble"
      ],
      "age": 24,
      "height": 230,
      "bounty": 0
  },
  {
      "name": "Duval",
      "affiliation": "Rosy Life Riders",
      "occupation": [
          "Leader of the Rosy Life Riders",
          "Pirate"
      ],
      "age": 25,
      "height": 470,
      "bounty": 0
  },
  {
      "name": "Magellan",
      "affiliation": "Impel Down",
      "occupation": [
          "Warden"
      ],
      "age": 47,
      "height": 491,
      "bounty": 0
  },
  {
      "name": "Marshall D.Teach",
      "affiliation": "Blackbeard Pirates",
      "occupation": [
          "Pirate",
          "Admiral",
          "Emperor",
          "Apprentice",
          "Warlord of the Sea"
      ],
      "age": 40,
      "height": 344,
      "bounty": 3996000000
  },
  {
      "name": "Hannyabal",
      "affiliation": "Impel Down",
      "occupation": [
        "Vice Warden"
      ],
      "age": 35,
      "height": 309,
      "bounty": 0
  },
  {
      "name": "Sakazuki",
      "affiliation": "Marines",
      "occupation": [
          "Fleet Admiral",
          "Admiral",
          "Vice Admiral"
      ],
      "age": 55,
      "height": 306,
      "bounty": 0
  },
  {
      "name": "Kuzan",
      "affiliation": "Blackbeard Pirates",
      "occupation": [
          "Pirate",
          "Admiral",
          "Vice Admiral"
      ],
      "age": 49,
      "height": 298,
      "bounty": 0
  },
  {
      "name": "Sentomaru",
      "affiliation": "Marines",
      "occupation": [
          "Marine",
          "Officer",
          "Dr. Vegapunk"
      ],
      "age": 34,
      "height": 279,
      "bounty": 0
  },
  {
      "name": "Borsalino",
      "affiliation": "Marines",
      "occupation": [
          "Admiral",
          "Vice Admiral"
      ],
      "age": 58,
      "height": 302,
      "bounty": 0
  },
  {
      "name": "Donquixote Doflamingo",
      "affiliation": "Donquixote Pirates",
      "occupation": [
          "Pirate Captain",
          "Broker",
          "King",
          "World Noble"
      ],
      "age": 41,
      "height": 305,
      "bounty": 340000000
  },
  {
      "name": "Dracule Mihawk",
      "affiliation": "Cross Guild",
      "occupation": [
          "Pirate",
          "Officer",
          "Warlord of the Sea"
      ],
      "age": 43,
      "height": 198,
      "bounty": 3590000000
  },
  {
      "name": "Momonga",
      "affiliation": "Marines",
      "occupation": [
          "Vice Admiral"
      ],
      "age": 48,
      "height": 251,
      "bounty": 0
  },
  {
      "name": "Neptune",
      "affiliation": "Neptune Family",
      "occupation": [
          "King"
      ],
      "age": 70,
      "height": 1220,
      "bounty": 0
  },
  {
      "name": "Shirahoshi",
      "affiliation": "Neptune Family",
      "occupation": [
          "Princess",
          "Ryugu Kingdom"
      ],
      "age": 16,
      "height": 1187,
      "bounty": 0
  },
  {
      "name": "Sharley",
      "affiliation": "Mermaid Cafe",
      "occupation": [],
      "age": 29,
      "height": 520,
      "bounty": 0
  },
  {
      "name": "Trafalgar D. Water Law",
      "affiliation": "Heart Pirates",
      "occupation": [
          "Pirate Captain",
          "Doctor"
      ],
      "age": 26,
      "height": 191,
      "bounty": 3000000000
  },
  {
      "name": "Kin'emon",
      "affiliation": "Kozuki Family",
      "occupation": [
          "Samurai"
      ],
      "age": 56,
      "height": 295,
      "bounty": 0
  },
  {
      "name": "Kurozumi Kanjuro",
      "affiliation": "Kurozumi Family",
      "occupation": [
          "Samurai"
      ],
      "age": 54,
      "height": 347,
      "bounty": 0
  },
  {
      "name": "Kozuki Momonosuke",
      "affiliation": "Kozuki Family",
      "occupation": [
          "Shogun"
      ],
      "age": 28,
      "height": 110,
      "bounty": 0
  },
  {
      "name": "Browndros Beardriquez",
      "affiliation": "Caesar Clown",
      "occupation": [
          "Centaur Patrol Unit",
          "Pirate",
          "Captain"
      ],
      "age": 45,
      "height": 691,
      "bounty": 80060000
  },
  {
      "name": "Bartolomeo",
      "affiliation": "Barto Club",
      "occupation": [
          "Straw Hat Grand Fleet",
          "Pirate Captain"
      ],
      "age": 24,
      "height": 220,
      "bounty": 200000000
  },
  {
      "name": "Cavendish",
      "affiliation": "Beautiful Pirates",
      "occupation": [
          "Straw Hat Grand Fleet",
          "Captain",
          "Prince"
      ],
      "age": 26,
      "height": 208,
      "bounty": 330000000
  },
  {
      "name": "Rebecca",
      "affiliation": "Dressrosa",
      "occupation": [
          "Princess"
      ],
      "age": 16,
      "height": 171,
      "bounty": 0
  },
  {
      "name": "Kyros",
      "affiliation": "Corrida Colosseum",
      "occupation": [],
      "age": 44,
      "height": 298,
      "bounty": 0
  },
  {
      "name": "Riku Doldo III",
      "affiliation": "Riku Family",
      "occupation": [
          "King",
          "Corrida Colosseum"
      ],
      "age": 60,
      "height": 261,
      "bounty": 0
  },
  {
      "name": "Caribou",
      "affiliation": "Caribou Pirates",
      "occupation": [
          "Pirate",
          "Captain",
          "Kidnapper"
      ],
      "age": 32,
      "height": 228,
      "bounty": 210000000
  },
  {
      "name": "Sabo",
      "affiliation": "Revolutionary Army",
      "occupation": [
          "Staff",
          "Noble",
          "Bandit"
      ],
      "age": 22,
      "height": 187,
      "bounty": 602000000
  },
  {
      "name": "Vander Decken IX",
      "affiliation": "Flying Pirates",
      "occupation": [
          "Pirate",
          "Captain"
      ],
      "age": 35,
      "height": 352,
      "bounty": 0
  },
  {
      "name": "Hody Jones",
      "affiliation": "New Fish-Man Pirates",
      "occupation": [
          "Pirate",
          "Captain",
          "Soldier"
      ],
      "age": 30,
      "height": 331,
      "bounty": 0
  },
  {
      "name": "Hyouzou",
      "affiliation": "New Fish-Man Pirates",
      "occupation": [
          "Mercenary",
          "Pirate",
          "Assassin",
          "Pirate Officer",
          "Swordsman"
      ],
      "age": 39,
      "height": 327,
      "bounty": 0
  },
  {
      "name": "Monet",
      "affiliation": "Caesar Clown",
      "occupation": [
          "Pirate"
      ],
      "age": 30,
      "height": 227,
      "bounty": 0
  },
  {
      "name": "Caesar Clown",
      "affiliation": "Fire Tank Pirates",
      "occupation": [
          "Scientist"
      ],
      "age": 40,
      "height": 309,
      "bounty": 300000000
  },
  {
      "name": "Trebol",
      "affiliation": "Donquixote Pirates",
      "occupation": [
          "Pirate",
          "Staff",
          "Sugar"
      ],
      "age": 49,
      "height": 349,
      "bounty": 99000000
  },
  {
      "name": "Vergo",
      "affiliation": "Donquixote Pirates",
      "occupation": [
          "Pirate",
          "Vice Admiral",
          "G-5",
          "Marine Captain"
      ],
      "age": 41,
      "height": 247,
      "bounty": 0
  },
  {
      "name": "Diamante",
      "affiliation": "Donquixote Pirates",
      "occupation": [
          "Pirate",
          "Swordsman"
      ],
      "age": 45,
      "height": 525,
      "bounty": 99000000
  },
  {
      "name": "Señor Pink",
      "affiliation": "Donquixote Pirates",
      "occupation": [
          "Pirate",
          "Assassin"
      ],
      "age": 46,
      "height": 244,
      "bounty": 58000000
  },
  {
      "name": "Pica",
      "affiliation": "Donquixote Pirates",
      "occupation": [
          "Pirate"
      ],
      "age": 40,
      "height": 470,
      "bounty": 99000000
  },
  {
      "name": "Buffalo",
      "affiliation": "Donquixote Pirates",
      "occupation": [
          "Pirate",
          "Assassin"
      ],
      "age": 30,
      "height": 696,
      "bounty": 0
  },
  {
      "name": "Baby 5",
      "affiliation": "Happo Navy",
      "occupation": [
          "Pirate",
          "Officer",
          "Assassin"
      ],
      "age": 24,
      "height": 181,
      "bounty": 0
  },
  {
      "name": "Issho",
      "affiliation": "Marines",
      "occupation": [
          "Admiral"
      ],
      "age": 54,
      "height": 270,
      "bounty": 0
  },
  {
      "name": "Raizo",
      "affiliation": "Kozuki Family",
      "occupation": [
          "Ninja",
          "Samurai"
      ],
      "age": 55,
      "height": 311,
      "bounty": 0
  },
  {
      "name": "Pedro",
      "affiliation": "Mokomo Dukedom",
      "occupation": [
          "Pirate",
          "Captain"
      ],
      "age": 32,
      "height": 233,
      "bounty": 382000000
  },
  {
      "name": "Carrot",
      "affiliation": "Mokomo Dukedom",
      "occupation": [
          "Kingsbird"
      ],
      "age": 15,
      "height": 161,
      "bounty": 0
  },
  {
      "name": "Wanda",
      "affiliation": "Mokomo Dukedom",
      "occupation": [],
      "age": 28,
      "height": 181,
      "bounty": 0
  },
  {
      "name": "Cat Viper",
      "affiliation": "Mokomo Dukedom",
      "occupation": [
          "Samurai",
          "Pirate Apprentice"
      ],
      "age": 40,
      "height": 522,
      "bounty": 0
  },
  {
      "name": "Dogstorm",
      "affiliation": "Mokomo Dukedom",
      "occupation": [
          "Samurai",
          "Pirate Apprentice"
      ],
      "age": 40,
      "height": 511,
      "bounty": 0
  },
  {
      "name": "Zunesha",
      "affiliation": "none",
      "occupation": [],
      "age": 1000,
      "height": 3500000,
      "bounty": 0
  },
  {
      "name": "Pekoms",
      "affiliation": "Big Mom Pirates",
      "occupation": [
          "Combatant",
          "Broker"
      ],
      "age": 27,
      "height": 232,
      "bounty": 330000000
  },
  {
      "name": "Capone Bege",
      "affiliation": "Fire Tank Pirates",
      "occupation": [
          "Pirate",
          "Captain",
          "Combatant"
      ],
      "age": 42,
      "height": 166,
      "bounty": 350000000
  },
  {
      "name": "Kaido",
      "affiliation": "Beasts Pirates",
      "occupation": [
          "Pirate",
          "Governor-General",
          "Emperor",
          "Apprentice"
      ],
      "age": 59,
      "height": 710,
      "bounty": 4611100000
  },
  {
      "name": "Jack",
      "affiliation": "Beasts Pirates",
      "occupation": [
          "All-Star",
          "Mammoth"
      ],
      "age": 28,
      "height": 830,
      "bounty": 1000000000
  },
  {
      "name": "Charlotte Linlin",
      "affiliation": "Big Mom Pirates",
      "occupation": [
          "Pirate",
          "Captain",
          "Emperor",
          "Queen",
          "Totto Land"
      ],
      "age": 68,
      "height": 880,
      "bounty": 4388000000
  },
  {
      "name": "Vinsmoke Judge",
      "affiliation": "Vinsmoke Family",
      "occupation": [
          "King",
          "Supreme Commander",
          "Scientist",
          "Mercenary"
      ],
      "age": 56,
      "height": 272,
      "bounty": 0
  },
  {
      "name": "Charlotte Katakuri",
      "affiliation": "Charlotte Family",
      "occupation": [
          "Sweet Commander",
          "Minister"
      ],
      "age": 48,
      "height": 509,
      "bounty": 1057000000
  },
  {
      "name": "Charlotte Pudding",
      "affiliation": "Charlotte Family",
      "occupation": [
          "Pirate",
          "Officer"
      ],
      "age": 16,
      "height": 166,
      "bounty": 0
  },
  {
      "name": "Charlotte Cracker",
      "affiliation": "Charlotte Family",
      "occupation": [
          "Sweet Commander",
          "Minister"
      ],
      "age": 45,
      "height": 307,
      "bounty": 860000000
  },
  {
      "name": "Charlotte Smoothie",
      "affiliation": "Charlotte Family",
      "occupation": [
          "Sweet Commander",
          "Minister"
      ],
      "age": 35,
      "height": 464,
      "bounty": 932000000
  },
  {
      "name": "Kozuki Oden",
      "affiliation": "Kozuki Family",
      "occupation": [
          "Samurai",
          "Daimyo",
          "Pirate",
          "Commander"
      ],
      "age": 39,
      "height": 382,
      "bounty": 0
  },
  {
      "name": "Charlotte Perospero",
      "affiliation": "Charlotte Family",
      "occupation": [
          "Pirate",
          "Officer",
          "Minister"
      ],
      "age": 50,
      "height": 333,
      "bounty": 700000000
  },
  {
      "name": "Kozuki Hiyori",
      "affiliation": "Kozuki Family",
      "occupation": [],
      "age": 26,
      "height": 170,
      "bounty": 0
  },
  {
      "name": "Kikunojo",
      "affiliation": "Kozuki Family",
      "occupation": [
          "Samurai"
      ],
      "age": 42,
      "height": 287,
      "bounty": 0
  },
  {
      "name": "Denjiro",
      "affiliation": "Kozuki Family",
      "occupation": [
          "Samurai"
      ],
      "age": 47,
      "height": 306,
      "bounty": 0
  },
  {
      "name": "Ashura Doji",
      "affiliation": "Mt. Atama Thieves",
      "occupation": [
          "Bandit",
          "Samurai"
      ],
      "age": 56,
      "height": 544,
      "bounty": 0
  },
  {
      "name": "Kawamatsu",
      "affiliation": "Kozuki Family",
      "occupation": [
          "Samurai"
      ],
      "age": 41,
      "height": 271,
      "bounty": 0
  },
  {
      "name": "Shinobu",
      "affiliation": "Kozuki Family",
      "occupation": [
          "Kunoichi",
          "Kozuki Family"
      ],
      "age": 49,
      "height": 180,
      "bounty": 0
  },
  {
      "name": "Hyogoro",
      "affiliation": "none",
      "occupation": [
          "Yakuza",
          "Samurai"
      ],
      "age": 70,
      "height": 100,
      "bounty": 0
  },
  {
      "name": "Shimotsuki Yasuie",
      "affiliation": "none",
      "occupation": [],
      "age": 71,
      "height": 155,
      "bounty": 0
  },
  {
      "name": "Yamato",
      "affiliation": "Ninja-Pirate-Mink-Samurai Alliance",
      "occupation": [],
      "age": 28,
      "height": 263,
      "bounty": 0
  },
  {
      "name": "Queen",
      "affiliation": "Beasts Pirates",
      "occupation": [
          "All-Star"
      ],
      "age": 56,
      "height": 612,
      "bounty": 1320000000
  },
  {
      "name": "Who's-Who",
      "affiliation": "Beasts Pirates",
      "occupation": [
          "Shinuchi",
          "Pirate",
          "Captain",
          "Cipher Pol"
      ],
      "age": 38,
      "height": 336,
      "bounty": 546000000
  },
  {
      "name": "King",
      "affiliation": "Beasts Pirates",
      "occupation": [
          "All-Star"
      ],
      "age": 47,
      "height": 613,
      "bounty": 1390000000
  },
  {
      "name": "Black Maria",
      "affiliation": "Beasts Pirates",
      "occupation": [
          "Shinuchi"
      ],
      "age": 29,
      "height": 820,
      "bounty": 480000000
  },
  {
      "name": "Sasaki",
      "affiliation": "Beasts Pirates",
      "occupation": [
          "Shinuchi",
          "Pirate",
          "Captain"
      ],
      "age": 34,
      "height": 318,
      "bounty": 472000000
  },
  {
      "name": "Page One",
      "affiliation": "Beasts Pirates",
      "occupation": [
          "Shinuchi"
      ],
      "age": 20,
      "height": 171,
      "bounty": 290000000
  },
  {
      "name": "Ulti",
      "affiliation": "Beasts Pirates",
      "occupation": [
          "Shinuchi"
      ],
      "age": 22,
      "height": 173,
      "bounty": 400000000
  },
  {
      "name": "Scratchmen Apoo",
      "affiliation": "On Air Pirates",
      "occupation": [
          "Pirate",
          "Captain",
          "Musician"
      ],
      "age": 31,
      "height": 256,
      "bounty": 350000000
  },
  {
      "name": "Surume",
      "affiliation": "Straw Hat Pirates",
      "occupation": [
          "Pet"
      ],
      "age": 120,
      "height": 30000,
      "bounty": 0
  },
  {
      "name": "Hogback",
      "affiliation": "Thriller Bark Pirates",
      "occupation": [
          "Doctor"
      ],
      "age": 47,
      "height": 223,
      "bounty": 0
  },
  {
      "name": "Kalifa",
      "affiliation": "CP0",
      "occupation": [
          "Cipher Pol",
          "Secretary"
      ],
      "age": 27,
      "height": 185,
      "bounty": 0
  },
  {
      "name": "Blueno",
      "affiliation": "CP0",
      "occupation": [
          "Cipher Pol"
      ],
      "age": 32,
      "height": 258,
      "bounty": 0
  },
  {
      "name": "Jabra",
      "affiliation": "CP9",
      "occupation": [
          "Cipher Pol"
      ],
      "age": 37,
      "height": 212,
      "bounty": 0
  },
  {
      "name": "Kaku",
      "affiliation": "CP0",
      "occupation": [
          "Cipher Pol",
          "Shipwright"
      ],
      "age": 25,
      "height": 193,
      "bounty": 0
  },
  {
      "name": "Kokoro",
      "affiliation": "Tom's Workers",
      "occupation": [
          "Stationmaster"
      ],
      "age": 72,
      "height": 168,
      "bounty": 0
  }
]

//Answer Key.
const aL = ["Monkey D. Luffy","Nami","Roronoa Zoro","Sanji","Usopp","Tony Tony Chopper","Franky","Nico Robin","Jimbei","Brook", "Koby", "Shanks","Gaimon","Kaya","Johnny","Zeff","Yosaku","Nojiko","Belle-mère","Higuma","Alvida","Morgan", "Helmeppo","Kuro","Buggy","Krieg", "Gin","Nefeltari Vivi","Laboon","Arlong","Dorry","Karoo","Broggy","Dalton","Kureha","Igaram","Koza","Portgas D. Ace","Nefeltari Cobra","Wapol","Smoker","Miss Valentine","Mr. 5","Miss Goldenweek","Mr. 3","Bentham","Miss Doublefinger","Daz Bonez","Mont Blanc Cricket","Conis","Crocodile","Pagaya",
    "Ganfor","Wyper","Aisa","Kalgara","Mont Blanc Noland","Eneru","Bellamy","Satori","Shura","Ohm","Gedatsu","Paulie",
    "Iceberg","Rob Lucci","Fukurô","Kumadori","Kuzan","Spandam","Foxy","Charlotte Lola","Gecko Moria","Absalom","Perona",
    "Oars", "Shimotsuki Ryuma","Bartholomew Kuma","Pappagu","Camie","Hatchan","Silvers Rayleigh","Boa Hancock","Emporio Ivankov",
    "Edward Newgate","Marco","Saint Charlos","Duval","Magellan","Marshall D.Teach","Hannyabal","Sakazuki","Kuzan","Sentomaru",
    "Borsalino","Donquixote Doflamingo","Dracule Mihawk","Momonga","Neptune","Shirahoshi","Sharley","Trafalgar D. Water Law",
    "Kin'emon","Kurozumi Kanjuro","Kozuki Momonosuke","Browndros Beardriquez","Bartolomeo","Cavendish","Rebecca","Kyros","Riku Doldo III",
    "Caribou","Sabo","Vander Decken IX","Hody Jones","Hyouzou","Monet","Caesar Clown","Trebol","Vergo","Diamante","Señor Pink","Pica",
    "Buffalo","Baby 5","Issho","Raizo","Pedro","Carrot","Wanda","Cat Viper","Dogstorm","Zunesha","Pekoms","Capone Bege","Kaido","Jack",
    "Charlotte Linlin", "Vinsmoke Judge", "Charlotte Katakuri", "Charlotte Pudding","Charlotte Cracker","Charlotte Smoothie", "Kozuki Oden",
    "Charlotte Perospero", "Kozuki Hiyori", "Kikunojo","Denjiro", "Ashura Doji", "Kawamatsu", "Shinobu", "Hyogoro", "Shimotsuki Yasuie", "Yamato",
    "Queen","Who's-Who", "King", "Black Maria", "Sasaki", "Page One", "Ulti", "Scratchmen Apoo", "Surume", "Hogback", "Kalifa", "Blueno", "Jabra",
    "Kaku", "Kokoro"
]

console.log(aL.length)

const myInput = document.querySelector('.myInput2');
const check = document.querySelector('.check');
const butt = document.querySelector('.butt');
const butt2 = document.querySelector('.butt2');
var score = 6;
var win = 0;
const win_score = "win";
var lose = 0;
const lose_score = "lose";
var avg = 0;
const average = "average";
var random = Math.floor(Math.random() * aL.length);
var answer = aL[random]; //Gives the answer if you really want to check console however after project is graded we will remove the console log of it.
var x = document.getElementById("myTable").rows[0].cells;
var x1 = document.getElementById("myTable").rows[1].cells;
var x2 = document.getElementById("myTable").rows[2].cells;
var x3 = document.getElementById("myTable").rows[3].cells;
var x4 = document.getElementById("myTable").rows[4].cells;
var x5 = document.getElementById("myTable").rows[5].cells;
var x6 = document.getElementById("myTable").rows[6].cells;
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
console.log(answer);

check.addEventListener('click', function () {
  const an = db1.find((names) => names.name === myInput.value);//Users answer 
  const realan = db1.find((names) => names.name === answer);//Actual answer
  var h1 = realan.height - 10;
  var h2 = realan.height + 10;
  var a1 = realan.age -5;
  var a2 = realan.age +5;

  if(myInput.value === ""){
    if(score ===6){
      document.querySelector(".r1").style.opacity = "0";
    }
    if(score ===5){
      document.querySelector(".r2").style.opacity = "0";
    }
    if(score ===4){
      document.querySelector(".r3").style.opacity = "0";
    }
    if(score ===3){
      document.querySelector(".r4").style.opacity = "0";
    }
    if(score ===2){
      document.querySelector(".r5").style.opacity = "0";
    }
    if(score ===1){
      document.querySelector(".r6").style.opacity = "0";
    }   
  }
  else if ((myInput.value) === aL[random]) {//If user guesses correctly it will label field green and win screen will pop up.
    win++;
    localStorage.setItem(win_score, win);
    document.querySelector('.info').textContent = an.name;
    document.querySelector('.win').style.display = "inline"
    document.querySelector(".autocomplete").style.display = "none";
    document.querySelector(".check").style.display = "none";
    if(score ===6){
      document.querySelector(".r1").style.opacity = "1";
      x1[0].innerHTML = an.name;
      if(an.name === realan.name){
        x1[0].style.backgroundColor = "#538d4e"
      }
      x1[1].innerHTML = an.affiliation;
        if(an.affiliation === realan.affiliation){
          x1[1].style.backgroundColor = "#538d4e"
        }

      x1[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x1[2].style.backgroundColor = "#538d4e";
        }

      x1[3].innerHTML = an.height;
        if(an.height === realan.height){
          x1[3].style.backgroundColor = "#538d4e";
        } 
      x1[4].innerHTML = an.age;
      if(an.age === realan.age){
        x1[4].style.backgroundColor = "#538d4e"
      }
      x1[5].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x1[5].style.backgroundColor = "#538d4e"
      }
    }

    if(score ===5){
      document.querySelector(".r2").style.opacity = "1";
      x2[0].innerHTML = an.name;
        if(an.name === realan.name){
          x2[0].style.backgroundColor = "#538d4e"
        }
      x2[1].innerHTML = an.affiliation;
        if(an.affiliation === realan.affiliation){
          x2[1].style.backgroundColor = "#538d4e"
        }

      x2[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x2[2].style.backgroundColor = "#538d4e";
        }

      x2[3].innerHTML = an.height;
        if(an.height === realan.height){
          x2[3].style.backgroundColor = "#538d4e";
        } 
      x2[4].innerHTML = an.age;
      if(an.age === realan.age){
        x2[4].style.backgroundColor = "#538d4e"
      }
      x2[5].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x2[5].style.backgroundColor = "#538d4e"
      }
    }

    if(score ===4){
      document.querySelector(".r3").style.opacity = "1";
      x3[0].innerHTML = an.name;
      if(an.name === realan.name){
        x3[0].style.backgroundColor = "#538d4e"
      }
      x3[1].innerHTML = an.affiliation;
        if(an.affiliation === realan.affiliation){
          x3[1].style.backgroundColor = "#538d4e"
        }

      x3[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x3[2].style.backgroundColor = "#538d4e";
        }

      x3[3].innerHTML = an.height;
        if(an.height === realan.height){
          x3[3].style.backgroundColor = "#538d4e";
        } 
      x3[4].innerHTML = an.age;
      if(an.age === realan.age){
        x3[4].style.backgroundColor = "#538d4e"
      }
      x3[5].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x3[5].style.backgroundColor = "#538d4e"
      }
    }
    
    if(score ===3){
      document.querySelector(".r4").style.opacity = "1";
      x4[0].innerHTML = an.name;
      if(an.name === realan.name){
        x4[0].style.backgroundColor = "#538d4e"
      }
      x4[1].innerHTML = an.affiliation;
        if(an.affiliation === realan.affiliation){
          x4[1].style.backgroundColor = "#538d4e"
        }

      x4[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x4[2].style.backgroundColor = "#538d4e";
        }

      x4[3].innerHTML = an.height;
        if(an.height === realan.height){
          x4[3].style.backgroundColor = "#538d4e";
        } 
      x4[4].innerHTML = an.age;
      if(an.age === realan.age){
        x4[4].style.backgroundColor = "#538d4e"
      }
      x4[5].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x4[5].style.backgroundColor = "#538d4e"
      }
    }

    if(score ===2){
      document.querySelector(".r5").style.opacity = "1";
      x5[0].innerHTML = an.name;
      if(an.name === realan.name){
        x5[0].style.backgroundColor = "#538d4e"
      }
      x5[1].innerHTML = an.affiliation;
        if(an.affiliation === realan.affiliation){
          x5[1].style.backgroundColor = "#538d4e"
        }

      x5[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x5[2].style.backgroundColor = "#538d4e";
        }

      x5[3].innerHTML = an.height;
        if(an.height === realan.height){
          x5[3].style.backgroundColor = "#538d4e";
        } 
      x5[4].innerHTML = an.age;
      if(an.age === realan.age){
        x5[4].style.backgroundColor = "#538d4e"
      }
      x5[5].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x5[5].style.backgroundColor = "#538d4e"
      }
    }

    if(score ===1){
      document.querySelector(".r6").style.opacity = "1";
      x6[0].innerHTML = an.name;
      if(an.name === realan.name){
        x6[0].style.backgroundColor = "#538d4e"
      }
      x6[1].innerHTML = an.affiliation;
        if(an.affiliation === realan.affiliation){
          x6[1].style.backgroundColor = "#538d4e"
        }

      x6[2].innerHTML = an.occupation;
        if(an.occupation === realan.occupation){
          x6[2].style.backgroundColor = "#538d4e";
        }

      x6[3].innerHTML = an.height;
        if(an.height === realan.height){
          x6[3].style.backgroundColor = "#538d4e";
        } 
      x6[4].innerHTML = an.age;
      if(an.age === realan.age){
        x6[4].style.backgroundColor = "#538d4e"
      }
      x6[5].innerHTML = an.bounty;
      if(an.bounty === realan.bounty){
        x6[5].style.backgroundColor = "#538d4e"
      }
    }
    
  }

  else if((myInput.value) != aL[random]){//If user has an incorrect guess it will check which fields are correct.
      if(score ===6){
        document.querySelector(".r1").style.opacity = "1";
        x1[0].innerHTML = an.name;
          
        x1[1].innerHTML = an.affiliation;
          if(an.affiliation === realan.affiliation){
            x1[1].style.backgroundColor = "#538d4e";
          }else{
            x1[1].style.backgroundColor = "--white";
          }

        x1[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x1[2].style.backgroundColor = "#538d4e";
          }else{
            x1[2].style.backgroundColor = "--white";
          }

        x1[3].innerHTML = an.height;
          if(an.height === realan.height){
            x1[3].style.backgroundColor = "#538d4e";
          } 
          if ( (h1 <= an.height) && (an.height <= h2)){
            x1[3].style.backgroundColor = "#b59f3b";
          }
          if ((an.height < h1) || (h2 < an.height)){
            x1[3].style.backgroundColor = "--white";
          }
        x1[4].innerHTML = an.age;
        if(an.age === realan.age){
          x1[4].style.backgroundColor = "#538d4e";
        }if ( (a1 <= an.age) && (an.age <= a2)){
          x1[4].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < a1) || (a2 < an.height)){
          x1[4].style.backgroundColor = "--white";
        }
        x1[5].innerHTML = an.bounty;

        if(an.bounty === realan.bounty){
          x1[5].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x1[5].style.backgroundColor = "--close";
        }else {
          x1[5].style.backgroundColor = "--white";
        }
      }

      if(score ===5){
        document.querySelector(".r2").style.opacity = "1";
        x2[0].innerHTML = an.name;

        x2[1].innerHTML = an.affiliation;
          if(an.affiliation === realan.affiliation){
            x2[1].style.backgroundColor = "#538d4e"
          } else{
            x2[1].style.backgroundColor = "--white";
          }

        x2[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x2[2].style.backgroundColor = "#538d4e";
          } else{
            x2[2].style.backgroundColor = "--white"
          }

        x2[3].innerHTML = an.height;
        if(an.height === realan.height){
          x2[3].style.backgroundColor = "#538d4e";
        } 
        if ( (h1 <= an.height) && (an.height <= h2)){
          x2[3].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < h1) || (h2 < an.height)){
          x2[3].style.backgroundColor = "--white";
        }
        x2[4].innerHTML = an.age;
        if(an.age === realan.age){
          x2[4].style.backgroundColor = "#538d4e";
        }if ( (a1 <= an.age) && (an.age <= a2)){
          x2[4].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < a1) || (a2 < an.height)){
          x2[4].style.backgroundColor = "--white";
        }

        x2[5].innerHTML = an.bounty;
        if(an.bounty === realan.bounty){
          x2[5].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x2[5].style.backgroundColor = "--close";
        }else {
          x2[5].style.backgroundColor = "--white";
        }
      }

      if(score ===4){
        document.querySelector(".r3").style.opacity = "1";
        x3[0].innerHTML = an.name;

        x3[1].innerHTML = an.affiliation;
          if(an.affiliation === realan.affiliation){
            x3[1].style.backgroundColor = "#538d4e"
          } else{
            x3[1].style.backgroundColor = "--white"
          }

        x3[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x3[2].style.backgroundColor = "#538d4e";
          } else{
            x3[2].style.backgroundColor = "--white"
          }

        x3[3].innerHTML = an.height;
        if(an.height === realan.height){
          x3[3].style.backgroundColor = "#538d4e";
        } 
        if ( (h1 <= an.height) && (an.height <= h2)){
          x3[3].style.backgroundColor = "#b59f3b";// WHY DOES IT KEEP COMING UP YELLOW ??? THE IF STATEMENT ???
        }
        if ((an.height < h1) || (h2 < an.height)){
          x3[3].style.backgroundColor = "--white";
        }
        x3[4].innerHTML = an.age;
        if(an.age === realan.age){
          x3[4].style.backgroundColor = "#538d4e";
        }if ( (a1 <= an.age) && (an.age <= a2)){
          x3[4].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < a1) || (a2 < an.height)){
          x3[4].style.backgroundColor = "--white";
        }

        x3[5].innerHTML = an.bounty;
        if(an.bounty === realan.bounty){
          x3[5].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x3[5].style.backgroundColor = "--close";
        }else {
          x3[5].style.backgroundColor = "--white";
        }
      }
      
      if(score ===3){
        document.querySelector(".r4").style.opacity = "1";
        x4[0].innerHTML = an.name;

        x4[1].innerHTML = an.affiliation;
          if(an.affiliation === realan.affiliation){
            x4[1].style.backgroundColor = "#538d4e"
          } else{
            x4[1].style.backgroundColor = "--white"
          }

        x4[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x4[2].style.backgroundColor = "#538d4e";
          } else{
            x4[2].style.backgroundColor = "--white"
          }

        x4[3].innerHTML = an.height;
        if(an.height === realan.height){
          x4[3].style.backgroundColor = "#538d4e";
        } 
        if ( (h1 <= an.height) && (an.height <= h2)){
          x4[3].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < h1) || (h2 < an.height)){
          x4[3].style.backgroundColor = "--white";
        }
        
        x4[4].innerHTML = an.age;
        if(an.age === realan.age){
          x4[4].style.backgroundColor = "#538d4e";
        }if ( (a1 <= an.age) && (an.age <= a2)){
          x4[4].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < a1) || (a2 < an.height)){
          x4[4].style.backgroundColor = "--white";
        }

        x4[5].innerHTML = an.bounty;
        if(an.bounty === realan.bounty){
          x4[5].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x4[5].style.backgroundColor = "--close";
        }else {
          x4[5].style.backgroundColor = "--white";
        }
      }

      if(score ===2){
        //cropImage(realan.pic);
        //This will work when database is updated takes in url to image of character

        document.querySelector(".r5").style.opacity = "1";
        x5[0].innerHTML = an.name;

        x5[1].innerHTML = an.affiliation;
          if(an.affiliation === realan.affiliation){
            x5[1].style.backgroundColor = "#538d4e"
          } else{
            x5[1].style.backgroundColor = "--white"
          }

        x5[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x5[2].style.backgroundColor = "#538d4e";
          } else{
            x5[2].style.backgroundColor = "--white"
          }

        x5[3].innerHTML = an.height;
        if(an.height === realan.height){
          x5[3].style.backgroundColor = "#538d4e";
        } 
        if ( (h1 <= an.height) && (an.height <= h2)){
          x5[3].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < h1) || (h2 < an.height)){
          x5[3].style.backgroundColor = "--white";
        }

        x5[4].innerHTML = an.age;
        if(an.age === realan.age){
          x5[4].style.backgroundColor = "#538d4e";
        }if ( (a1 <= an.age) && (an.age <= a2)){
          x5[4].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < a1) || (a2 < an.height)){
          x5[4].style.backgroundColor = "--white";
        }

        x5[5].innerHTML = an.bounty;
        if(an.bounty === realan.bounty){
          x5[5].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x5[5].style.backgroundColor = "--close";
        }else {
          x5[5].style.backgroundColor = "--white";
        }
      }

      if(score ===1){
        document.querySelector(".r6").style.opacity = "1";
        x6[0].innerHTML = an.name;

        x6[1].innerHTML = an.affiliation;
          if(an.affiliation === realan.affiliation){
            x6[1].style.backgroundColor = "#538d4e"
          } else{
            x6[1].style.backgroundColor = "--white"
          }

        x6[2].innerHTML = an.occupation;
          if(an.occupation === realan.occupation){
            x6[2].style.backgroundColor = "#538d4e";
          } else{
            x6[2].style.backgroundColor = "--white"
          }

        x6[3].innerHTML = an.height;
        if(an.height === realan.height){
          x6[4].style.backgroundColor = "#538d4e";
        } 
        if ( (h1 <= an.height) && (an.height <= h2)){
          x6[3].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < h1) || (h2 < an.height)){
          x6[3].style.backgroundColor = "--white";
        }

        x6[4].innerHTML = an.age;
        if(an.age === realan.age){
          x6[4].style.backgroundColor = "#538d4e";
        }if ( (a1 <= an.age) && (an.age <= a2)){
          x6[4].style.backgroundColor = "#b59f3b";
        }
        if ((an.height < a1) || (a2 < an.height)){
          x6[4].style.backgroundColor = "--white";
        }

        x6[5].innerHTML = an.bounty;
        if(an.bounty === realan.bounty){
          x6[5].style.backgroundColor = "#538d4e";
        } else if ((realan.bounty - 500000) <= an.bounty || an.bounty < (realan.bounty + 500000) ){
          x6[5].style.backgroundColor = "--close";
        }else {
          x6[5].style.backgroundColor = "--white";
        }
      }

      score--;
      document.getElementById("lives").innerHTML="Lives: "+score;
  }

  if(score === 0){ //When you lose the lose screen pops up.
    //document.querySelector('.info2').textContent = an.name;
    lose++;
    localStorage.setItem(lose_score, lose);
    document.querySelector('.info2').textContent = realan.name;
    document.querySelector('.lose').style.display = "inline"
    document.querySelector(".autocomplete").style.display = "none";
    document.querySelector(".check").style.display = "none";
  }
  myInput.value = "";
});

function autocomplete(inp, arr) {//Function for the autocompleting search bar.
  var cf = 0;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      
      closeLists();
      if (!val) { return false;}
      cf = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        cf++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        cf--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (cf > -1) {
          if (x) x[cf].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (cf >= x.length) cf = 0;
    if (cf < 0) cf = (x.length - 1);
    x[cf].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeLists(elmnt) {//After the choice is clicked the list will close and show the element.
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

document.addEventListener("click", function (e) {
    closeLists(e.target);
});
}

autocomplete(document.getElementById("myInput"), aL);

//Darkmode screen, also swaps Chopple title.
var img1 = document.getElementById('myImage');
var img2 = document.getElementById('myImage2');
function dm() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if((img1.style.display="inline") && (img2.style.display="none")){
    img1.style.display = "none";
    img2.style.display ="inline";
  }
  
}

function dm2() {//This bring it back to lightmode.
  var element = document.body;
  element.classList.toggle("dark-mode");
  if((img1.style.display="none") && (img2.style.display="inline")){
    img2.style.display = "none";
    img1.style.display = "inline";
  }
}

//Modal Box for instructions & stats.
//Instruct Modal
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

//Instructions Modal.
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

//Close Button.
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

//Instructions window open and close.
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//Stat Modal
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    var scoreStr1 = localStorage.getItem(win_score); //Stores win score.
    if (scoreStr1 == null) {
      win = 0;
    } else {
      win = parseInt(scoreStr1);
    }
    document.querySelector('.pc1').textContent = " " + win;

   
    
    var scoreStr2 = localStorage.getItem(lose_score);//Stores lose score.
    if (scoreStr2 == null) {
      lose = 0;
    } else {
      lose = parseInt(scoreStr2);
    }
    document.querySelector('.pc2').textContent = " " + lose;
    avg = (win / (win+lose)).toFixed(2); //Average score.
    document.querySelector('.pc3').textContent = " " + avg;
    const modal2 = document.querySelector("modal2")
    openModal(modal2)
  })
  
})

//Stats modal background
overlay.addEventListener('click', () => {
  const modals2 = document.querySelectorAll('.modal.active')
  modals2.forEach(modal2 => {
    closeModal(modal2)
  })
})

//Close Button.
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal2)
  })
})

//Stats window open and close
function openModal(modal2) {
  if (modal2 == null) return
  modal2.classList.add('active')
  overlay.classList.add('active')
  
}

function closeModal(modal2) {
  if (modal2 == null) return
  modal2.classList.remove('active')
  overlay.classList.remove('active')
}

//Reset Button
butt.addEventListener('click', function () {
  
  document.querySelector('.win').style.display = "none"
  score =6;
  random = Math.floor(Math.random() * aL.length);
  answer = aL[random];
  console.log(answer);
  document.querySelector(".r1").style.opacity = "0";
  x1[0].style= "--white";
  x1[0].innerHTML = "";
  x1[1].style= "--white";
  x1[1].innerHTML = "";
  x1[2].style = "--white";
  x1[2].innerHTML = "";
  x1[3].style = "--white";
  x1[3].innerHTML = "";
  x1[4].style = "--white";
  x1[4].innerHTML = "";
  x1[5].style= "--white";
  x1[5].innerHTML = "";

  document.querySelector(".r2").style.opacity = "0";
  x2[0].style= "--white";
  x2[0].innerHTML = "";
  x2[1].style= "--white";
  x2[1].innerHTML = "";
  x2[2].style = "--white";
  x2[2].innerHTML = "";
  x2[3].style = "--white";
  x2[3].innerHTML = "";
  x2[4].style = "--white";
  x2[4].innerHTML = "";
  x2[5].style= "--white";
  x2[5].innerHTML = "";

  document.querySelector(".r3").style.opacity = "0";
  x3[0].style= "--white";
  x3[0].innerHTML = "";
  x3[1].style= "--white";
  x3[1].innerHTML = "";
  x3[2].style = "--white";
  x3[2].innerHTML = "";
  x3[3].style = "--white";
  x3[3].innerHTML = "";
  x3[4].style = "--white";
  x3[4].innerHTML = "";
  x3[5].style= "--white";
  x3[5].innerHTML = "";

  document.querySelector(".r4").style.opacity = "0";
  x4[0].style= "--white";
  x4[0].innerHTML = "";
  x4[1].style= "--white";
  x4[1].innerHTML = "";
  x4[2].style = "--white";
  x4[2].innerHTML = "";
  x4[3].style = "--white";
  x4[3].innerHTML = "";
  x4[4].style = "--white";
  x4[4].innerHTML = "";
  x4[5].style= "--white";
  x4[5].innerHTML = "";

  document.querySelector(".r5").style.opacity = "0";
  x5[0].style= "--white";
  x5[0].innerHTML = "";
  x5[1].style= "--white";
  x5[1].innerHTML = "";
  x5[2].style = "--white";
  x5[2].innerHTML = "";
  x5[3].style = "--white";
  x5[3].innerHTML = "";
  x5[4].style = "--white";
  x5[4].innerHTML = "";
  x5[5].style= "--white";
  x5[5].innerHTML = "";

  document.querySelector(".r6").style.opacity = "0";
  x6[0].style= "--white";
  x6[0].innerHTML = "";
  x6[1].style= "--white";
  x6[1].innerHTML = "";
  x6[2].style = "--white";
  x6[2].innerHTML = "";
  x6[3].style = "--white";
  x6[3].innerHTML = "";
  x6[4].style = "--white";
  x6[4].innerHTML = "";
  x6[5].style= "--white";
  x6[5].innerHTML = "";

  document.querySelector(".autocomplete").style.display = "inline-block";
  document.querySelector(".check").style.display = "inline-block";
});

butt2.addEventListener('click', function () {
  document.querySelector('.lose').style.display = "none"
  score =6;
  random = Math.floor(Math.random() * aL.length);
  answer = aL[random];
  console.log(answer);
  document.querySelector(".r1").style.opacity = "0";
  x1[0].style= "--white";
  x1[0].innerHTML = "";
  x1[1].style= "--white";
  x1[1].innerHTML = "";
  x1[2].style = "--white";
  x1[2].innerHTML = "";
  x1[3].style = "--white";
  x1[3].innerHTML = "";
  x1[4].style = "--white";
  x1[4].innerHTML = "";
  x1[5].style= "--white";
  x1[5].innerHTML = "";

  document.querySelector(".r2").style.opacity = "0";
  x2[0].style= "--white";
  x2[0].innerHTML = "";
  x2[1].style= "--white";
  x2[1].innerHTML = "";
  x2[2].style = "--white";
  x2[2].innerHTML = "";
  x2[3].style = "--white";
  x2[3].innerHTML = "";
  x2[4].style = "--white";
  x2[4].innerHTML = "";
  x2[5].style= "--white";
  x2[5].innerHTML = "";

  document.querySelector(".r3").style.opacity = "0";
  x3[0].style= "--white";
  x3[0].innerHTML = "";
  x3[1].style= "--white";
  x3[1].innerHTML = "";
  x3[2].style = "--white";
  x3[2].innerHTML = "";
  x3[3].style = "--white";
  x3[3].innerHTML = "";
  x3[4].style = "--white";
  x3[4].innerHTML = "";
  x3[5].style= "--white";
  x3[5].innerHTML = "";

  document.querySelector(".r4").style.opacity = "0";
  x4[0].style= "--white";
  x4[0].innerHTML = "";
  x4[1].style= "--white";
  x4[1].innerHTML = "";
  x4[2].style = "--white";
  x4[2].innerHTML = "";
  x4[3].style = "--white";
  x4[3].innerHTML = "";
  x4[4].style = "--white";
  x4[4].innerHTML = "";
  x4[5].style= "--white";
  x4[5].innerHTML = "";

  document.querySelector(".r5").style.opacity = "0";
  x5[0].style= "--white";
  x5[0].innerHTML = "";
  x5[1].style= "--white";
  x5[1].innerHTML = "";
  x5[2].style = "--white";
  x5[2].innerHTML = "";
  x5[3].style = "--white";
  x5[3].innerHTML = "";
  x5[4].style = "--white";
  x5[4].innerHTML = "";
  x5[5].style= "--white";
  x5[5].innerHTML = "";

  document.querySelector(".r6").style.opacity = "0";
  x6[0].style= "--white";
  x6[0].innerHTML = "";
  x6[1].style= "--white";
  x6[1].innerHTML = "";
  x6[2].style = "--white";
  x6[2].innerHTML = "";
  x6[3].style = "--white";
  x6[3].innerHTML = "";
  x6[4].style = "--white";
  x6[4].innerHTML = "";
  x6[5].style= "--white";
  x6[5].innerHTML = "";

  document.querySelector(".autocomplete").style.display = "inline-block";
  document.querySelector(".check").style.display = "inline-block";
});
function cropImage(imagePath) {
  // Connnects canvas
  const canvas = document.getElementById('canvas'); 
  const ctx = canvas.getContext('2d');
  
  //create an image object from the path
  const originalImage = new Image();
  originalImage.src = imagePath;

  var array=[0,originalImage.width/2];
  var array2=[0,originalImage.height/2];
    console.log(array2);

    newWidth=originalImage.width/2;
    newHeight=originalImage.height/2;

    canvas.width = originalImage.width/2;
    canvas.height = originalImage.height/2;
  
    newX=array[Math.floor(Math.random() * array.length)];
    newY=array2[Math.floor(Math.random() * array2.length)];
         
    //draw the image
    console.log(originalImage.width);
    ctx.drawImage(originalImage, newX, newY, newWidth, newHeight, 0, 0, newWidth, newHeight);  
}