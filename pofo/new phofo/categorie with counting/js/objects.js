// Deze file gebruiken we als database voor ons project; Hier komen arrays van objecten.
console.log("Objects loaded");
 

const data =[

    {
        title:"Counter-Strike GO",
        category: "action",
        description :"First person shooter game, de beste game in de hele wereld",
        platform: ["xbox","pc"],
        image: "img/Action/CS_GO.jpg",
        price: "€73.99",
        link:"https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
    },
    {

        title:"Call of Duty",
        category: "action",
        description :"First person shooter game, er is geen ander zoals deze",
        platform: ["xbox","playstaion","pc"],
        image: "img/Action/CoD_Warzone.jpg",
        price: "€38.99",
        link:"https://eu.shop.battle.net/en-gb/product/call-of-duty-modern-warfare-ii",
    },
    {

        title:"Destiny 2",
        category: "action",
        description :"RPG shooter, het beste van 2022, als je geld hebt om alle levels te kopen",
        platform: ["xbox","playstaion","pc"],
        image: "img/Action/destiny2.jpg",
        price: "Gratis",
        link:"https://store.steampowered.com/app/1085660/Destiny_2/",
    },
    {

        title:"Fortnite",
        category: "action",
        description :"Battle royal game, RPG shooter, beste spel als je een kind van 13 jaar bent",
        platform: ["xbox","playstaion","pc"],
        image: "img/Action/fortnite.jpg",
        price: "Gratis",
        link:"https://www.epicgames.com/fortnite/en-US/home",
    },
    {

        title:"God Of War",
        category: "action",
        description :"Een bloederige oorlogsvoering action adventure game",
        platform: ["playstaion","pc"],
        image: "img/Action/GodOfWar.jpg",
        price: "€49.99",
        link:"https://store.steampowered.com/agecheck/app/1593500/",
    },
    {

        title:"Grand Theft Auto V",
        category: "action",
        description :"Je moet deze game kennen, als je deze niet kent dan ben je niet een echte gamer",
        platform: ["xbox","playstaion","pc"],
        image: "img/Action/gtaV.jpg",
        price: "€15.99",
        link:"https://www.rockstargames.com/gta-v",
    },
    {

        title:"Overwatch",
        category: "action",
        description :"Overwatch is een multiplayer first-person shooter ontwikkeld en uitgegeven door Blizzard Entertainment",
        platform: ["pc"],
        image: "img/Action/overwatch.jpg",
        price: "Gratis",
        link:"https://playoverwatch.com/en-gb/",
    },
    {

        title:"Red Dead Redemption",
        category: "action",
        description :"Red Dead Redemption is een videospel, ontwikkeld door Rockstar San Diego",
        platform: ["xbox","pc"],
        image: "img/Action/RedDeadRedemption2.jpg",
        price: "€66.69",
        link:"https://www.rockstargames.com/reddeadredemption/restricted-content/agegate/form?redirect=https%3A%2F%2Fwww.rockstargames.com%2Freddeadredemption%2F&options=&locale=en_us",
    },
    {

        title:"Street Fighter X Tekken",
        category: "action",
        description :"treet Fighter X Tekken is een 2D-vechtspel uit 2012 geproduceerd door Capcom",
        platform: ["xbox","playstaion"],
        image: "img/Action/street.jpg",
        price: "€25.18",
        link:"https://store.steampowered.com/app/209120/Street_Fighter_X_Tekken/",
    },
    {
        title:"Fifa 2022",
        category: "Sport",
        description :"FIFA in oudere edities bekend als FIFA Soccer of FIFA Footbal is een reeks voetbalsimulatiespellen waarmee de spe",
        platform: ["PlayStation","xbox","pc"],
        image: "img/Sports/fifa.jpg",
        price: "€25.99",
        link:"https://www.fifa.com/tournaments/mens/worldcup/qatar2022",
    },
    {

        title:"FootballManager",
        category: "Sport",
        description :"Football Manager (vaak afgekort tot FM) is een voetbalsimulatiespelserie ontwikkeld door",
        platform: ["xbox","pc"],
        image: "img/Sports/footballManager.jpg",
        price: "€19.22",
        link:"https://store.steampowered.com/app/1569040/Football_Manager_2022/",
    },
    {

        title:"NBA",
        category: "Sport",
        description :"NBA 2K22 is a 2021 basketball simulation video game developed by Visual Concepts and publishe",
        platform: ["xbox","playstaion","pc"],
        image: "img/Sports/NBA.jpeg",
        price: "€55.99",
        link:"https://nba.2k.com/nl-NL/",
    },
    {

        title:"Need for speed",
        category: "Sport",
        description :"Need for Speed (afgekort NFS) is een reeks computerspellen die door EA Games ",
        platform: ["pc"],
        image: "img/Sports/NFSU2.jpg",
        price: "€44.99",
        link:"https://www.ea.com/games/need-for-speed",
    },
    {

        title:"Rocket League",
        category: "Sport",
        description :"Rocket League is een voetbalachtig computerspel, dat gespeeld wordt met in-game voertuigen",
        platform: ["playstaion","pc"],
        image: "img/Sports/Rocket_League.jpg",
        price: "€10.00",
        link:"https://store.playstation.com/nl-nl/concept/203715",
    },
    {

        title:"Super Mega Base Ball",
        category: "Sport",
        description :"Honkbal (in het Engels: baseball) is een team- en balsport die vooral populair is in de Verenigde",
        platform: ["pc"],
        image: "img/Sports/SuperMegaBaseball.jpg",
        price: "Gratis",
        link:"https://www.ea.com/games/super-mega-baseball/super-mega-baseball-3",
    },
    {

        title:"Tony Hawk",
        category: "Sport",
        description :"nthony Frank  Hawk (Carlsbad, 12 mei 1968) is een Amerikaanse skateboarder.",
        platform: ["pc","playStation"],
        image: "img/Sports/TonyHawk.jpg",
        price: "€19.99",
        link:"https://www.tonyhawkthegame.com/nl",
    },
    {

        title:"UFC",
        category: "Sport",
        description :"EA Sports UFC 4 is a mixed martial arts fighting video game developed by EA Vancouver ",
        platform: ["xbox","pc","PlayStation"],
        image: "img/Sports/UFC.jpg",
        price: "€17.69",
        link:"https://www.ea.com/games/ufc/ufc-4",
    },
    {

        title:"WWE",
        category: "Sport",
        description :"WWE, afkorting van World Wrestling Entertainment, is een Amerikaans ",
        platform: ["xbox","playstaion"],
        image: "img/Sports/wwe.jpg",
        price: "€10.18",
        link:"https://wwe.2k.com/nl-NL/",
    },
    
    {
        title:"Dungeon Defenders",
        category: "Strategy",
        description :"Dungeon Defenders is a hybrid multiplayer video game developed",
        platform: ["PlayStation","xbox","pc"],
        image: "img/Strategy/De.jpg",
        price: "€25.99",
        link:"https://store.steampowered.com/app/65800/Dungeon_Defenders/",
    },
    {

        title:"HearthStone",
        category: "Strategy",
        description :"Hearthstone is a free-to-play online digital collectible card game developed and.",
        platform: ["pc"],
        image: "img/Strategy/Hearthstone.jpg",
        price: "€51.99",
        link:"https://playhearthstone.com/en-us",
    },
    {

        title:"League of Legends",
        category: "Strategy",
        description :"League of Legends (LoL), commonly referred to as League, is a 2009 multiplayerloped ",
        platform: ["xbox","playstaion","pc"],
        image: "img/Strategy/LoL.jpg",
        price: "Gratis",
        link:"https://www.leagueoflegends.com/en-gb/",
    },
    {

        title:"Planet Coasted",
        category: "Strategy",
        description :"Planet Coaster is a construction and management simulation video game developed  ",
        platform: ["pc","Xbox"],
        image: "img/Strategy/Pl.jpg",
        price: "€44.99",
        link:"https://www.planetcoaster.com/",
    },
    {

        title:"Tropico 6 ",
        category: "Strategy",
        description :"ropico 6 is a construction, management and political simulation game in the Tropico",
        platform: ["playstaion","pc","Xbox"],
        image: "img/Strategy/tropico6.jpg",
        price: "€15.00",
        link:"https://store.steampowered.com/agecheck/app/492720/",
    },
    {

        title:"World of Tanks",
        category: "Strategy",
        description :"fit game mechanics, and also better gameplay. World of Tanks has five different ",
        platform: ["pc","PlayStation"],
        image: "img/Strategy/World-of-Tanks.jpg",
        price: "€20.99",
        link:"https://worldoftanks.eu/",
    },
    {

        title:"World of WarCraft",
        category: "Strategy",
        description :"World of Warcraft takes place within the world of Azeroth, approximately four years .",
        platform: ["pc"],
        image: "img/Strategy/WoW.jpg",
        price: "Gratis",
        link:"https://worldofwarcraft.com/en-us/",
    },
    {

        title:"xCom2",
        category: "Strategy",
        description:" XCOM 2 is a 2016 turn-based tactics video game developed by Firaxis Games and series  ",
        platform: ["PlayStation"],
        image: "img/Strategy/xCom2.jpg",
        price: "€19.69",
        link:"https://store.steampowered.com/app/268500/XCOM_2/",
    },
    {

        title:" General Zero Hour ",
        category: "Strategy",
        description :"ero Hour contains 3 new campaigns of five missions y (GLA) second, ",
        platform: ["PC"],
        image: "img/Strategy/ZeroHour.jpg",
        price: "€25.18",
        link:"https://cnc.fandom.com/wiki/Command_%26_Conquer:_Generals_-_Zero_Hour",
    }
    
]

