const valid_players = [
    {
        name: "TenZ",
        team: "Sentinels",
        region: "Americas",
        role: "Duelist",
        agent1: "Jett",
        agent2: "KAY/O",
        agent3: "N/A",
    },
    {
        name: "Sacy",
        team: "Sentinels",
        region: "Americas",
        role: "Initiator",
        agent1: "Skye",
        agent2: "Fade",
        agent3: "Sova",
    },
    {
        name: "Marved",
        team: "Sentinels",
        region: "Americas",
        role: "Controller",
        agent1: "Brimstone",
        agent2: "Viper",
        agent3: "Astra",
    },
    {
        name: "pANcada",
        team: "Sentinels",
        region: "Americas",
        role: "Sentinel",
        agent1: "Killjoy",
        agent2: "Viper",
        agent3: "N/A",
    },
    {
        name: "zekken",
        team: "Sentinels",
        region: "Americas",
        role: "Flex",
        agent1: "Raze",
        agent2: "Sova",
        agent3: "Skye",
    },

    {
        name: "saadhak",
        team: "LOUD",
        region: "Americas",
        role: "Flex",
        agent1: "KAY/O",
        agent2: "Raze",
        agent3: "Viper",
    },
    {
        name: "tuyz",
        team: "LOUD",
        region: "Americas",
        role: "Controller",
        agent1: "Omen",
        agent2: "Harbor",
        agent3: "Brimstone",
    },
    {
        name: "cauanzin",
        team: "LOUD",
        region: "Americas",
        role: "Initiator",
        agent1: "Skye",
        agent2: "Sova",
        agent3: "Breach",
    },
    {
        name: "Less",
        team: "LOUD",
        region: "Americas",
        role: "Sentinel",
        agent1: "Viper",
        agent2: "Killjoy",
        agent3: "N/A",
    },
    {
        name: "aspas",
        team: "LOUD",
        region: "Americas",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Neon",
        agent3: "Raze",
    },

    {
        name: "nAts",
        team: "Team Liquid",
        region: "EMEA",
        role: "Sentinel",
        agent1: "Cypher",
        agent2: "Killjoy",
        agent3: "Viper",
    },
    {
        name: "soulcas",
        team: "Team Liquid",
        region: "EMEA",
        role: "Initiator",
        agent1: "Fade",
        agent2: "KAY/O",
        agent3: "Skye",
    },
    {
        name: "Sayf",
        team: "Team Liquid",
        region: "EMEA",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Raze",
        agent3: "N/A",
    },
    {
        name: "Redgar",
        team: "Team Liquid",
        region: "EMEA",
        role: "Controller",
        agent1: "Omen",
        agent2: "Brimstone",
        agent3: "N/A",
    },
    {
        name: "Jamppi",
        team: "Team Liquid",
        region: "EMEA",
        role: "Initiator",
        agent1: "Skye",
        agent2: "Breach",
        agent3: "Sova",
    },

    {
        name: "ANGE1",
        team: "NAVI",
        region: "EMEA",
        role: "Flex",
        agent1: "Omen",
        agent2: "Cypher",
        agent3: "KAY/O",
    },
    {
        name: "Shao",
        team: "NAVI",
        region: "EMEA",
        role: "Controller",
        agent1: "Astra",
        agent2: "Omen",
        agent3: "Killjoy",
    },
    {
        name: "Zyppan",
        team: "NAVI",
        region: "EMEA",
        role: "Initiator",
        agent1: "Skye",
        agent2: "KAY/O",
        agent3: "Fade",
    },
    {
        name: "SUYGETSU",
        team: "NAVI",
        region: "EMEA",
        role: "Sentinel",
        agent1: "Viper",
        agent2: "Cypher",
        agent3: "Killjoy",
    },
    {
        name: "cNed",
        team: "NAVI",
        region: "EMEA",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Yoru",
        agent3: "Raze",
    },

    {
        name: "qRaxs",
        team: "FUT",
        region: "EMEA",
        role: "Initiator",
        agent1: "KAY/O",
        agent2: "Gekko",
        agent3: "N/A",
    },
    {
        name: "MOJJ",
        team: "FUT",
        region: "EMEA",
        role: "Sentinel",
        agent1: "Killjoy",
        agent2: "Cypher",
        agent3: "N/A",
    },
    {
        name: "AtaKaptan",
        team: "FUT",
        region: "EMEA",
        role: "Controller",
        agent1: "Viper",
        agent2: "Breach",
        agent3: "Omen",
    },
    {
        name: "MrFaliN",
        team: "FUT",
        region: "EMEA",
        role: "Flex",
        agent1: "Omen",
        agent2: "Sova",
        agent3: "Skye",
    },
    {
        name: "qw1",
        team: "FUT",
        region: "EMEA",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Neon",
        agent3: "Raze",
    },

    {
        name: "Boaster",
        team: "FNATIC",
        region: "EMEA",
        role: "Controller",
        agent1: "Astra",
        agent2: "Brimstone",
        agent3: "Omen",
    },
    {
        name: "Chronicle",
        team: "FNATIC",
        region: "EMEA",
        role: "Flex",
        agent1: "Viper",
        agent2: "Breach",
        agent3: "KAY/O",
    },
    {
        name: "Leo",
        team: "FNATIC",
        region: "EMEA",
        role: "Initiator",
        agent1: "Fade",
        agent2: "Skye",
        agent3: "Sova",
    },
    {
        name: "Derke",
        team: "FNATIC",
        region: "EMEA",
        role: "Duelist",
        agent1: "Raze",
        agent2: "Jett",
        agent3: "N/A",
    },
    {
        name: "Alfajer",
        team: "FNATIC",
        region: "EMEA",
        role: "Sentinel",
        agent1: "Killjoy",
        agent2: "Cypher",
        agent3: "N/A",
    },

    {
        name: "Jinggg",
        team: "PRX",
        region: "Pacific",
        role: "Duelist",
        agent1: "Raze",
        agent2: "Phoenix",
        agent3: "Sage",
    },
    {
        name: "mindfreak",
        team: "PRX",
        region: "Pacific",
        role: "Controller",
        agent1: "Astra",
        agent2: "Brimstone",
        agent3: "Omen",
    },
    {
        name: "f0rsakeN",
        team: "PRX",
        region: "Pacific",
        role: "Flex",
        agent1: "Harbour",
        agent2: "Neon",
        agent3: "Cypher",
    },
    {
        name: "d4v41",
        team: "PRX",
        region: "Pacific",
        role: "Flex",
        agent1: "Skye",
        agent2: "Viper",
        agent3: "Killjoy",
    },
    {
        name: "something",
        team: "PRX",
        region: "Pacific",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Reyna",
        agent3: "N/A",
    },

    {
        name: "Sayaplayer",
        team: "T1",
        region: "Pacific",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Raze",
        agent3: "N/A",
    },
    {
        name: "ban",
        team: "T1",
        region: "Pacific",
        role: "Controller",
        agent1: "Omen",
        agent2: "Harbour",
        agent3: "N/A",
    },
    {
        name: "Carpe",
        team: "T1",
        region: "Pacific",
        role: "Initiator",
        agent1: "Skye",
        agent2: "Breach",
        agent3: "Brimstone",
    },
    {
        name: "Munchkin",
        team: "T1",
        region: "Pacific",
        role: "Sentinel",
        agent1: "Killjoy",
        agent2: "Skye",
        agent3: "N/A",
    },
    {
        name: "xeta",
        team: "T1",
        region: "Pacific",
        role: "Flex",
        agent1: "Sova",
        agent2: "Viper",
        agent3: "Breach",
    },

    {
        name: "Boostio",
        team: "EG",
        region: "Americas",
        role: "Sentinel",
        agent1: "Killjoy",
        agent2: "Astra",
        agent3: "N/A",
    },
    {
        name: "C0M",
        team: "EG",
        region: "Americas",
        role: "Initiator",
        agent1: "Sova",
        agent2: "Viper",
        agent3: "Breach",
    },
    {
        name: "JAWGEMO",
        team: "EG",
        region: "Americas",
        role: "Flex",
        agent1: "Raze",
        agent2: "Omen",
        agent3: "N/A",
    },
    {
        name: "Ethan",
        team: "EG",
        region: "Americas",
        role: "Initiator",
        agent1: "Skye",
        agent2: "Breach",
        agent3: "KAY/O",
    },
    {
        name: "Demon1",
        team: "EG",
        region: "Americas",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Brimstone",
        agent3: "N/A",
    },

    {
        name: "crashies",
        team: "NRG",
        region: "Americas",
        role: "Initiator",
        agent1: "Skye",
        agent2: "Sova",
        agent3: "N/A",
    },
    {
        name: "ardiis",
        team: "NRG",
        region: "Americas",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Killjoy",
        agent3: "Sage",
    },
    {
        name: "Victor",
        team: "NRG",
        region: "Americas",
        role: "Flex",
        agent1: "Killjoy",
        agent2: "Raze",
        agent3: "KAY/O",
    },
    {
        name: "FNS",
        team: "NRG",
        region: "Americas",
        role: "Flex",
        agent1: "Viper",
        agent2: "Breach",
        agent3: "Killjoy",
    },
    {
        name: "s0m",
        team: "NRG",
        region: "Americas",
        role: "Controller",
        agent1: "Harbour",
        agent2: "Omen",
        agent3: "Astra",
    },

    {
        name: "MaKo",
        team: "DRX",
        region: "Pacific",
        role: "Controller",
        agent1: "Viper",
        agent2: "Omen",
        agent3: "Brimstone",
    },
    {
        name: "stax",
        team: "DRX",
        region: "Pacific",
        role: "Initiator",
        agent1: "Skye",
        agent2: "Breach",
        agent3: "KAY/O",
    },
    {
        name: "Rb",
        team: "DRX",
        region: "Pacific",
        role: "Flex",
        agent1: "Killjoy",
        agent2: "Harbour",
        agent3: "Neon",
    },
    {
        name: "Zest",
        team: "DRX",
        region: "Pacific",
        role: "Flex",
        agent1: "Sova",
        agent2: "Fade",
        agent3: "Harbour",
    },
    {
        name: "BuZz",
        team: "DRX",
        region: "Pacific",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Killjoy",
        agent3: "Raze",
    },

    {
        name: "nobody",
        team: "EDG",
        region: "China",
        role: "Initiator",
        agent1: "Skye",
        agent2: "Sova",
        agent3: "KAY/O",
    },
    {
        name: "ZmjjKK",
        team: "EDG",
        region: "China",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Gekko",
        agent3: "Raze",
    },
    {
        name: "Haodong",
        team: "EDG",
        region: "China",
        role: "Controller",
        agent1: "Omen",
        agent2: "Harbour",
        agent3: "Brimstone",
    },
    {
        name: "Smoggy",
        team: "EDG",
        region: "China",
        role: "Flex",
        agent1: "Breach",
        agent2: "Jett",
        agent3: "Killjoy",
    },
    {
        name: "CHICHOO",
        team: "EDG",
        region: "China",
        role: "Sentinel",
        agent1: "Viper",
        agent2: "Cypher",
        agent3: "Killjoy",
    },

    {
        name: "Life",
        team: "ASE",
        region: "China",
        role: "Duelist",
        agent1: "Jett",
        agent2: "Raze",
        agent3: "N/A",
    },
    {
        name: "YHchen",
        team: "ASE",
        region: "China",
        role: "Initiator",
        agent1: "Breach",
        agent2: "KAY/O",
        agent3: "N/A",
    },
    {
        name: "YHchen",
        team: "ASE",
        region: "China",
        role: "Initiator",
        agent1: "Breach",
        agent2: "KAY/O",
        agent3: "N/A",
    },
    {
        name: "monk",
        team: "ASE",
        region: "China",
        role: "Sentinel",
        agent1: "Killjoy",
        agent2: "Skye",
        agent3: "Viper",
    },
    {
        name: "bunt",
        team: "ASE",
        region: "China",
        role: "Controller",
        agent1: "Omen",
        agent2: "Brimstone",
        agent3: "Harbour",
    },
    {
        name: "hfmi0dzjc9zj",
        team: "ASE",
        region: "China",
        role: "Flex",
        agent1: "Raze",
        agent2: "Sova",
        agent3: "Skye",
    },
];
