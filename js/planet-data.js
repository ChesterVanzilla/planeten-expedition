const planetData = [
  {
    id: "merkur",
    name: "Merkur",
    image: "bilder/merkur.png",
    order: 1,
    sizeRank: 1,
    moons: 0,
    facts: [
      "Merkur ist der sonnennächste Planet.",
      "Ein Jahr auf Merkur dauert nur 88 Erdentage.",
      "Merkur ist der kleinsten Planeten im Sonnensystem.",
      "Merkur gehört zu den Gesteinsplaneten.",
      "Auf Merkur gibt es keine dichte Atmosphäre."
    ],
quizfacts: [
      "Dieser Planet ist der sonnennächste Planet.",
      "Ein Jahr auf mir dauert nur 88 Erdentage.",
      "Ich bin der kleinsten Planeten im Sonnensystem.",
      "Die Oberfläche ähnelt der des Mondes.",
      "Ich habe weder Monde noch Ringe."
    ],
    quizClues: [
      "Ich bin der sonnennächste Planet.",
      "Ein Jahr auf mir dauert nur 88 Erdentage.",
      "Ich bin sehr klein und heiß."
    ]
  },
  {
    id: "venus",
    name: "Venus",
    image: "bilder/venus.png",
    order: 2,
    sizeRank: 3,
    moons: 0,
    facts: [
      "Die Venus ist der heißeste Planet im Sonnensystem.",
      "Die Venus ist fast so groß wie die Erde.",
      "Dichte Wolken hüllen die Venus ein.",
      "Ein Tag auf der Venus dauert 243 Erdentage.",
      "Die Venus wird oft  „Morgenstern“ oder „Abendstern“ genannt."
    ],
quizfacts: [
      "Dieser Planet ist der heißeste im Sonnensystem.",
      "Ich bin fast so groß wie die Erde.",
      "Dichte Wolken hüllen diesen Planeten ein.",
      "Ein Tag auf mir dauert 243 Erdentage.",
      "Dieser Planet wird oft „Morgenstern“ oder „Abendstern“ genannt."
    ],
    quizClues: [
      "Ich bin der heißeste Planet.",
      "Ich werde oft „Morgenstern“ oder „Abendstern“ genannt.",
      "Ich bin fast so groß wie die Erde."
    ]
  },
  {
    id: "erde",
    name: "Erde",
    image: "bilder/erde.png",
    order: 3,
    sizeRank: 4,
    moons: 1,
    facts: [
      "Die Erde ist unser Heimatplanet.",
      "Die Erde ist der einzige bekannte Planet mit Leben.",
      "Etwa 70 Prozent der Erdoberfläche sind mit Wasser bedeckt.",
      "Die Erde hat einen Mond.",
      "Die Erde gehört zu den Gesteinsplaneten."
    ],
quizfacts: [
      "Dieser Planet ist unser Heimatplanet.",
      "Dieser Planet ist der einzige bekannte, auf welchem es nachweislich Leben gibt",
      "Etwa 70 Prozent der Oberfläche sind mit Wasser bedeckt.",
      "Ich habe nur einen Mond.",
      "Ich gehöre zu den Gesteinsplaneten."
    ],
    quizClues: [
      "Auf mir leben Menschen, Tiere und Pflanzen.",
      "Ich bin unser Heimatplanet.",
      "Ich habe genau einen Mond."
    ]
  },
  {
    id: "mars",
    name: "Mars",
    image: "bilder/mars.png",
    order: 4,
    sizeRank: 2,
    moons: 2,
    facts: [
      "Der Mars wird auch der „Rote Planet“ genannt.",
      "Auf dem Mars gibt es riesige Vulkane.",
      "Der Mars hat zwei kleine Monde, Phobos und Deimos.",
      "Auf dem Mars ist es kälter als auf der Erde.",
      "Viele Raumsonden haben den Mars bereits untersucht."
    ],
quizfacts: [
      "Dieser Planet wird auch der „Rote Planet“ genannt.",
      "Auf diesem Planeten gibt es riesige Vulkane.",
      "Ich habe zwei kleine Monde, Phobos und Deimos.",
      "Auf mir ist es kälter als auf der Erde.",
      "Viele Raumsonden haben diesen Planeten bereits untersucht."
    ],
    quizClues: [
      "Man nennt mich den „Roten Planeten“.",
      "Ich habe zwei kleine Monde, Phobos und Deimos.",
      "Viele Raumsonden haben mich untersucht."
    ]
  },
  {
    id: "jupiter",
    name: "Jupiter",
    image: "bilder/jupiter.png",
    order: 5,
    sizeRank: 8,
    moons: 95,
    facts: [
      "Jupiter ist der größte Planet im Sonnensystem.",
      "Jupiter ist ein Gasriese.",
      "Auf Jupiter gibt es einen riesigen Sturm, den Großen Roten Fleck.",
      "Jupiter hat viele Monde.",
      "Jupiter ist viel größer als die Erde."
    ],
quizfacts: [
      "Ich bin der größte Planet im Sonnensystem.",
      "Dieser Planet ist ein Gasriese.",
      "Auf diesen Planeten gibt es einen riesigen Sturm, den Großen Roten Fleck.",
      "Mehr als 100 Monde umkreisen mich",
      "Über 1300 Planeten mit Erdgröße würden in diesen Planeten passen."
    ],
    quizClues: [
      "Ich bin der größte Planet.",
      "Auf mir gibt es den Großen Roten Fleck.",
      "Über 1300 Planeten mit Erdgröße würden in diesen Planeten passen."
    ]
  },
  {
    id: "saturn",
    name: "Saturn",
    image: "bilder/saturn.png",
    order: 6,
    sizeRank: 7,
    moons: 274,
    facts: [
      "Saturn ist für seine schönen Ringe bekannt.",
      "Saturn ist ein großer Gasplanet.",
      "Die Ringe des Saturn bestehen aus Eis und Gestein.",
      "Saturn hat ungefähr 280 Monde.",
      "Saturn ist der zweitgrößte Planet im Sonnensystem."
    ],
quizfacts: [
      "Ich bin für meine schönen Ringe bekannt.",
      "Ich benötige über 29 Erdenjahre für einen Sonnenumlauf",
      "Meine Ringe bestehen aus Eis und Gestein.",
      "Einer meiner Monde besitzt eine dichte Atmosphäre",
      "Dieser Planet ist der zweitgrößte Planet im Sonnensystem."
    ],
    quizClues: [
      "Ich bin für meine großen Ringe bekannt.",
      "Ich bin der zweitgrößte Planet.",
      "Meine Ringe bestehen aus Eis und Gestein."
    ]
  },
  {
    id: "uranus",
    name: "Uranus",
    image: "bilder/uranus.png",
    order: 7,
    sizeRank: 6,
    moons: 27,
    facts: [
      "Uranus ist ein Eisriese.",
      "Uranus hat eine bläulich-grünliche Farbe.",
      "Die Drehachse des Uranus ist so stark gekippt, dass sich der Planet auf der Seite rollend um die Sonne bewegt.",
      "Auf Uranus vergeht ein Tag in nur 17 Stunden.",
      "Auch Uranus besitzt Ringe."
    ],
quizfacts: [
      "Ich bin ein Eisriese.",
      "Dieser Planet hat eine bläulich-grünliche Farbe.",
      "Dieser Planet bewegt sich auf der Seite rollend um die Sonne.",
      "Auf mir herrschen Temperaturen von rund -224°C.",
      "Mein Durchmesser ist viermal so groß wie der Durchmesser der Erde."
    ],
    quizClues: [
      "Ich drehe mich fast auf der Seite.",
      "Ich bin ein bläulich-grünlicher Eisriese, mit dünnen Ringen.",
      "Ich habe über 20 Monde und besitze dünne Ringe"
    ]
  },
  {
    id: "neptun",
    name: "Neptun",
    image: "bilder/neptun.png",
    order: 8,
    sizeRank: 5,
    moons: 14,
    facts: [
      "Neptun ist der äußerste Planet unseres Sonnensystems.",
      "Einer meiner Monde umkreist mich entgegengesetzt der Bewegungsrichtung der anderen Monde.",
      "Ich brauche 165 Erdenjahre für einen Umlauf der Sonne.",
      "Dieser Planet ist am weitesten von der Sonne entfernt.",
      "Mein größter Mond hat den Namen Triton."
    ],
quizfacts: [
      "Dieser Planet ist der äußerste Planet unseres Sonnensystems.",
      "Einer meiner Monde umkreist mich entgegengesetzt der Bewegungsrichtung der anderen Monde.",
      "Ich brauche 165 Erdenjahre für einen Umlauf der Sonne.",
      "Dieser Planet ist am weitesten von der Sonne entfernt.",
      "Mein größter Mond hat den Namen Triton."
    ],
    quizClues: [
      "Ich bin der äußerste Planet unseres Sonnensystems.",
      "Einer meiner Monde umkreist mich entgegengesetzt der Bewegungsrichtung der anderen Monde.",
      "In meiner Atmosphäre herrschen die schnellsten Winde des gesamten Sonnensystems."
    ]
  }
];

const slotPositionsOrder = [
  { left: "13%", top: "90px" },
  { left: "23%", top: "230px" },
  { left: "33%", top: "90px" },
  { left: "43%", top: "230px" },
  { left: "53%", top: "90px" },
  { left: "63%", top: "230px" },
  { left: "73%", top: "90px" },
  { left: "83%", top: "230px" }
];

const slotPositionsSize = [
  { left: "-9.5%", top: "-190px" },
  { left: "-6%", top: "-120px" },
  { left: "-1%", top: "-20px" },
  { left: "6.5%", top: "90px" },
  { left: "17%", top: "200px" },
  { left: "31%", top: "300px" },
  { left: "52.5%", top: "340px" },
  { left: "81%", top: "365px" }
];

const memoryPhrases = [
  "Mein Vater Erklärt Mir Jeden Sonntag Unseren Nachthimmel."   
  
];

const positiveMessages = [
  "Super!",
  "Klasse!",
  "Richtig!",
  "Sehr gut!",
  "Toll gemacht!"
];

const wrongMessages = [
  "Dieser Planet kommt erst später.",
  "Noch nicht ganz. Versuch es nochmal.",
  "Dieser Planet ist noch nicht an der Reihe.",
  "Guter Versuch! Schau nochmal genau hin."
];

const modeConfig = {
  order: {
    title: "Planeten-Reihenfolge",
    introTitle: "Los geht's!",
    introText: "Bringe die Planeten in die richtige Reihenfolge. Beginne mit dem sonnennächsten Planeten.",
    selectionTitle: "Wähle den richtigen Planeten",
    endText: "Du hast alle Planeten richtig in die Reihenfolge des Sonnensystems gebracht.",
    showMemory: true,
    showOrbits: true,
    showSun: true
  },
  size: {
    title: "Größen-Reihenfolge",
    introTitle: "Wer ist der Kleinste?",
    introText: "Sortiere die Planeten nach ihrer Größe – vom kleinsten bis zum größten Planeten.",
    selectionTitle: "Wähle den nächsten Planeten",
    endText: "Du hast alle Planeten richtig nach ihrer Größe sortiert.",
    showMemory: false,
    showOrbits: false,
    showSun: false
  },
  quiz: {
    title: "Planeten-Quiz",
    introTitle: "Bereit fürs Quiz?",
    introText: "Lies den Hinweis und wähle den passenden Planeten aus.",
    selectionTitle: "Wähle den passenden Planeten",
    endText: "Du hast alle Quizfragen richtig gelöst.",
    showMemory: false,
    showOrbits: false,
    showSun: false
  }
};