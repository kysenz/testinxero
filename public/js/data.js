const items = [

  // --- RIFLE ---
    { name: "Air Gun", type: "Rifle", range: "Mid", sp: false, year: null, emojis: ["💨","🔫","🟦","⚡"], imageUrl: "assets/img/items/air-gun.png" },
    { name: "Assault Rifle", type: "Rifle", range: "Mid", sp: false, year: 2011, emojis: ["🔫","🎖️","🔥","💨"], imageUrl: "assets/img/items/assault-rifle.png" },

  // --- MELEE ---
    { name: "Breaker", type: "Melee", range: "Close", sp: false, year: 2009, emojis: ["🔨","💥","🪨","💪"], imageUrl: "assets/img/items/breaker.png" },

  // --- RIFLE ---
    { name: "Burst Shotgun", type: "Rifle", range: "Close", sp: false, year: 2010, emojis: ["🔫","💥","🛑","🚪"], imageUrl: "assets/img/items/burst-shotgun.png" },

  // --- SNIPER ---
    { name: "Cannonade", type: "Sniper", range: "Long", sp: false, year: 2008, emojis: ["💣","🚀","💥","🐢"], imageUrl: "assets/img/items/cannonade.png" },

  // --- MELEE ---
    { name: "Dagger Sword", type: "Melee", range: "Close", sp: false, year: null, emojis: ["🔪","🩸","⚔️","🤫"], imageUrl: "assets/img/items/dagger-sword.png" },

  // --- RIFLE ---
    { name: "Dual Magnum", type: "Rifle", range: "Mid", sp: false, year: null, emojis: ["🔫","🔫","⚡","🤠"], imageUrl: "assets/img/items/dual-magnum.png" },

  // --- HEAVY ---
    { name: "Earth Bomber", type: "Heavy", range: "Mid", sp: false, year: 2010, emojis: ["💣","🌍","🕸️","🕷️"], imageUrl: "assets/img/items/earth-bomber.png" },

  // --- MELEE ---
    { name: "Exo Scythe", type: "Melee", range: "Close", sp: true, year: null, emojis: ["🪓","🟣","⚡","🌙"], imageUrl: "assets/img/items/exo-scythe.png" },

  // --- RIFLE ---
    { name: "Gauss Rifle", type: "Rifle", range: "Mid", sp: false, year: 2008, emojis: ["🔫","⚡","🟢","🔋"], imageUrl: "assets/img/items/gauss-rifle.png" },
    { name: "Hand Gun", type: "Rifle", range: "Mid", sp: false, year: 2008, emojis: ["🔫","🤝","👮","🟦"], imageUrl: "assets/img/items/hand-gun.png" },

  // --- HEAVY ---
    { name: "Heavy Machine Gun", type: "Heavy", range: "Mid", sp: false, year: 2007, emojis: ["🦾","🔫","🔥","🏋️"], imageUrl: "assets/img/items/heavy-machine-gun.png" },

  // --- RIFLE ---
    { name: "Homing Rifle", type: "Rifle", range: "Auto", sp: true, year: 2009, emojis: ["👻","🎯","🌀","🔍"], imageUrl: "assets/img/items/homing-rifle.png" },

  // --- MELEE ---
    { name: "Iron Boots", type: "Melee", range: "Close", sp: false, year: 2014, emojis: ["👞","🦵","💥","🛑"], imageUrl: "assets/img/items/iron-boots.png" },
    { name: "Katana", type: "Melee", range: "Close", sp: false, year: 2011, emojis: ["🗡️","🇯🇵","👺","🌑"], imageUrl: "assets/img/items/katana.png" },

  // --- HEAVY ---
    { name: "Light Machine Gun", type: "Heavy", range: "Mid", sp: false, year: null, emojis: ["🔫","🔥","🦾","💨"], imageUrl: "assets/img/items/light-machine-gun.png" },

  // --- HEAVY ---
    { name: "Lightning Bomber", type: "Heavy", range: "Mid", sp: false, year: 2011, emojis: ["💣","⚡","🔋","🌩️"], imageUrl: "assets/img/items/lightning-bomber.png" },

  // --- SKILL ---
    { name: "Mind Energy", type: "Skill", range: "-", sp: true, year: null, emojis: ["🧠","🟣","✨","🔋"], imageUrl: "assets/img/items/mind-energy.png" },
    { name: "Mind Shock", type: "Skill", range: "-", sp: true, year: null, emojis: ["🧠","⚡","💥","🟣"], imageUrl: "assets/img/items/mind-shock.png" },

  // --- INSTALL ---
    { name: "Mine Gun", type: "Install", range: "Area", sp: true, year: null, emojis: ["💣","📍","🛑","🟩"], imageUrl: "assets/img/items/mine-gun.png" },

  // --- MELEE ---
    { name: "Plasma Sword", type: "Melee", range: "Close", sp: false, year: 2007, emojis: ["⚔️","⚡","🟦","🏃"], imageUrl: "assets/img/items/plasma-sword.png" },

  // --- SNIPER ---
    { name: "Rail Gun", type: "Sniper", range: "Very Long", sp: false, year: 2007, emojis: ["🔭","🔴","💥","💀"], imageUrl: "assets/img/items/rail-gun.png" },

  // --- RIFLE ---
    { name: "Rescue Gun", type: "Install", range: "Area", sp: true, year: null, emojis: ["➕","🩺","🔫","🟩"], imageUrl: "assets/img/items/rescue-gun.png" },
    { name: "Revolver", type: "Rifle", range: "Mid", sp: false, year: 2007, emojis: ["🤠","💥","🌵","🔫"], imageUrl: "assets/img/items/revolver.png" },
    { name: "Rocket Launcher", type: "Heavy", range: "Long", sp: false, year: null, emojis: ["🚀","💥","🎯","🦾"], imageUrl: "assets/img/items/rocket-launcher.png" },
    { name: "Semi Rifle", type: "Rifle", range: "Long", sp: false, year: 2007, emojis: ["🎯","🔫","👀","🚶"], imageUrl: "assets/img/items/semi-rifle.png" },

  // --- INSTALL ---
    { name: "Sentry Gun", type: "Install", range: "Auto", sp: true, year: 2009, emojis: ["🤖","👀","🔫","🔧"], imageUrl: "assets/img/items/sentry-gun.png" },
    { name: "Sentry Nell", type: "Install", range: "Auto", sp: true, year: 2010, emojis: ["💖","⚡","🏥","🤖"], imageUrl: "assets/img/items/sentry-nell.png" },

  // --- SNIPER ---
    { name: "Sharp Shooter", type: "Sniper", range: "Very Long", sp: false, year: null, emojis: ["🎯","🔭","💀","⚡"], imageUrl: "assets/img/items/sharp-shooter.png" },

  // --- RIFLE ---
    { name: "Shockwave Gun", type: "Rifle", range: "Mid", sp: false, year: null, emojis: ["🌊","💥","🔫","🟦"], imageUrl: "assets/img/items/shockwave-gun.png" },
    { name: "Sigma Blade", type: "Melee", range: "Close", sp: false, year: 2012, emojis: ["🗡️","🟣","⚡","🌀"], imageUrl: "assets/img/items/sigma-blade.png" },
    { name: "Smash Rifle", type: "Rifle", range: "Mid", sp: false, year: 2009, emojis: ["🔨","🔫","💥","🤕"], imageUrl: "assets/img/items/smash-rifle.png" },
    { name: "Spark Rifle", type: "Sniper", range: "Long", sp: false, year: null, emojis: ["⚡","🔫","🎯","🟦"], imageUrl: "assets/img/items/spark-rifle.png" },

  // --- MELEE ---
    { name: "Storm Bat", type: "Melee", range: "Close", sp: false, year: 2008, emojis: ["🏏","🌪️","💥","🦇"], imageUrl: "assets/img/items/storm-bat.png" },

  // --- RIFLE ---
    { name: "Submachine Gun", type: "Rifle", range: "Mid", sp: false, year: 2007, emojis: ["🔫","💨","🔥","🤖"], imageUrl: "assets/img/items/submachine-gun.png" },

  // --- MELEE ---
    { name: "Sword Counter", type: "Melee", range: "Close", sp: false, year: 2007, emojis: ["🛡️","⚔️","🛑","👊"], imageUrl: "assets/img/items/sword-counter.png" },

  // --- INSTALL ---
  {  name: "Turret", type: "Install", range: "Auto", sp: true, year: null, emojis: ["🛡️","🔫","🤖","🔧"], imageUrl: "assets/img/items/turret.png" },

  // --- MELEE ---
    { name: "Twin Blade", type: "Melee", range: "Close", sp: true, year: 2010, emojis: ["🗡️","🗡️","🔥","🌪️"], imageUrl: "assets/img/items/twin-blade.png" },

  // --- SKILL ---
    { name: "Vital Shock", type: "Skill", range: "-", sp: true, year: null, emojis: ["❤️","⚡","💥","🟣"], imageUrl: "assets/img/items/vital-shock.png" },

];

// MAPS (Haritalar - Visual mode ile birleştirilecek)
const maps = [
    // --- NEW MAPS (from screenshot) ---
    { name: "Alice House", year: null, imageUrl: "assets/img/maps/alice-house.png", type: "Map", range: "-", sp: false },
    { name: "Azit", year: null, imageUrl: "assets/img/maps/azit.png", type: "Map", range: "-", sp: false },
    { name: "Azit EX", year: null, imageUrl: "assets/img/maps/azit-ex.png", type: "Map", range: "-", sp: false },
    { name: "Bio Lab", year: null, imageUrl: "assets/img/maps/bio-lab.png", type: "Map", range: "-", sp: false },
    { name: "Blade City", year: null, imageUrl: "assets/img/maps/blade-city.png", type: "Map", range: "-", sp: false },
    { name: "Blockbuster", year: null, imageUrl: "assets/img/maps/blockbuster.png", type: "Map", range: "-", sp: false },
    { name: "Circle 1", year: null, imageUrl: "assets/img/maps/circle-1.png", type: "Map", range: "-", sp: false },
    { name: "Circle 2", year: null, imageUrl: "assets/img/maps/circle-2.png", type: "Map", range: "-", sp: false },
    { name: "Colosseum", year: null, imageUrl: "assets/img/maps/colosseum.png", type: "Map", range: "-", sp: false },
    { name: "Connest 2", year: null, imageUrl: "assets/img/maps/connest-2.png", type: "Map", range: "-", sp: false },
    { name: "Construction Site", year: null, imageUrl: "assets/img/maps/construction-site.png", type: "Map", range: "-", sp: false },
    { name: "Galleon", year: null, imageUrl: "assets/img/maps/galleon.png", type: "Map", range: "-", sp: false },
    { name: "Highway", year: null, imageUrl: "assets/img/maps/highway.png", type: "Map", range: "-", sp: false },
    { name: "Holiday", year: null, imageUrl: "assets/img/maps/holiday.png", type: "Map", range: "-", sp: false },
    { name: "Hyperium", year: null, imageUrl: "assets/img/maps/hyperium.png", type: "Map", range: "-", sp: false },
    { name: "Ice Square", year: null, imageUrl: "assets/img/maps/ice-square.png", type: "Map", range: "-", sp: false },
    { name: "Iron Heart", year: null, imageUrl: "assets/img/maps/iron-heart.png", type: "Map", range: "-", sp: false },
    { name: "Luna 2", year: null, imageUrl: "assets/img/maps/luna-2.png", type: "Map", range: "-", sp: false },
    { name: "Neden 1", year: null, imageUrl: "assets/img/maps/neden-1.png", type: "Map", range: "-", sp: false },
    { name: "Neden 2", year: null, imageUrl: "assets/img/maps/neden-2.png", type: "Map", range: "-", sp: false },
    { name: "Neden 3", year: null, imageUrl: "assets/img/maps/neden-3.png", type: "Map", range: "-", sp: false },
    { name: "Neden J", year: null, imageUrl: "assets/img/maps/neden-j.png", type: "Map", range: "-", sp: false },
    { name: "Neoniac", year: null, imageUrl: "assets/img/maps/neoniac.png", type: "Map", range: "-", sp: false },
    { name: "Nightmare", year: null, imageUrl: "assets/img/maps/nightmare.png", type: "Map", range: "-", sp: false },
    { name: "Office", year: null, imageUrl: "assets/img/maps/office.png", type: "Map", range: "-", sp: false },
    { name: "Skyline", year: null, imageUrl: "assets/img/maps/skyline.png", type: "Map", range: "-", sp: false },
    { name: "Spade A", year: null, imageUrl: "assets/img/maps/spade-a.png", type: "Map", range: "-", sp: false },
    { name: "Square", year: null, imageUrl: "assets/img/maps/square.png", type: "Map", range: "-", sp: false },
    { name: "Station 1", year: null, imageUrl: "assets/img/maps/station-1.png", type: "Map", range: "-", sp: false },
    { name: "Station 2", year: null, imageUrl: "assets/img/maps/station-2.png", type: "Map", range: "-", sp: false },
    { name: "Temple 0", year: null, imageUrl: "assets/img/maps/temple-0.png", type: "Map", range: "-", sp: false },
    { name: "Treasure", year: null, imageUrl: "assets/img/maps/treasure.png", type: "Map", range: "-", sp: false },
    { name: "Tunnel", year: null, imageUrl: "assets/img/maps/tunnel.png", type: "Map", range: "-", sp: false },
    { name: "Wonderland", year: null, imageUrl: "assets/img/maps/wonderland.png", type: "Map", range: "-", sp: false },

];  

// ÇEVİRİLER (Güncellenmiş - Sezon ve Skill kaldırıldı)
