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
      "Merkur ist einer der kleinsten Planeten im Sonnensystem.",
      "Merkur gehört zu den Gesteinsplaneten.",
      "Auf Merkur gibt es kaum eine richtige Atmosphäre."
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
    sizeRank: 6,
    moons: 0,
    facts: [
      "Die Venus ist der heißeste Planet im Sonnensystem.",
      "Die Venus ist fast so groß wie die Erde.",
      "Dichte Wolken hüllen die Venus ein.",
      "Ein Tag auf der Venus dauert sehr lange.",
      "Die Venus wird oft Morgenstern oder Abendstern genannt."
    ],
    quizClues: [
      "Ich bin der heißeste Planet.",
      "Ich werde oft Morgenstern oder Abendstern genannt.",
      "Ich bin fast so groß wie die Erde."
    ]
  },
  {
    id: "erde",
    name: "Erde",
    image: "bilder/erde.png",
    order: 3,
    sizeRank: 5,
    moons: 1,
    facts: [
      "Die Erde ist unser Heimatplanet.",
      "Die Erde ist der einzige bekannte Planet mit Leben.",
      "Etwa 70 Prozent der Erdoberfläche sind mit Wasser bedeckt.",
      "Die Erde hat einen Mond.",
      "Die Erde gehört zu den inneren Gesteinsplaneten."
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
      "Der Mars wird auch der rote Planet genannt.",
      "Auf dem Mars gibt es riesige Vulkane.",
      "Der Mars hat zwei kleine Monde.",
      "Der Mars ist kälter als die Erde.",
      "Viele Raumsonden haben den Mars bereits untersucht."
    ],
    quizClues: [
      "Man nennt mich den roten Planeten.",
      "Ich habe zwei kleine Monde.",
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
    quizClues: [
      "Ich bin der größte Planet.",
      "Auf mir gibt es den Großen Roten Fleck.",
      "Ich bin ein großer Gasriese."
    ]
  },
  {
    id: "saturn",
    name: "Saturn",
    image: "bilder/saturn.png",
    order: 6,
    sizeRank: 7,
    moons: 146,
    facts: [
      "Saturn ist für seine schönen Ringe bekannt.",
      "Saturn ist ein großer Gasplanet.",
      "Die Ringe des Saturn bestehen aus Eis und Gestein.",
      "Saturn hat viele Monde.",
      "Saturn ist der zweitgrößte Planet im Sonnensystem."
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
    sizeRank: 4,
    moons: 28,
    facts: [
      "Uranus ist ein Eisriese.",
      "Uranus hat eine bläuliche Farbe.",
      "Uranus dreht sich fast auf der Seite.",
      "Uranus ist sehr weit von der Sonne entfernt.",
      "Auch Uranus besitzt Ringe."
    ],
    quizClues: [
      "Ich drehe mich fast auf der Seite.",
      "Ich bin ein bläulicher Eisriese.",
      "Ich bin weit von der Sonne entfernt."
    ]
  },
  {
    id: "neptun",
    name: "Neptun",
    image: "bilder/neptun.png",
    order: 8,
    sizeRank: 3,
    moons: 16,
    facts: [
      "Neptun ist der äußerste Planet unseres Sonnensystems.",
      "Neptun ist ein tiefblauer Eisriese.",
      "Auf Neptun gibt es sehr starke Stürme.",
      "Neptun ist sehr weit von der Sonne entfernt.",
      "Ein Jahr auf Neptun dauert sehr, sehr lange."
    ],
    quizClues: [
      "Ich bin der äußerste Planet.",
      "Auf mir gibt es sehr starke Stürme.",
      "Ich bin ein tiefblauer Eisriese."
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
  { left: "12%", top: "160px" },
  { left: "22%", top: "160px" },
  { left: "32%", top: "160px" },
  { left: "44%", top: "160px" },
  { left: "56%", top: "160px" },
  { left: "68%", top: "160px" },
  { left: "80%", top: "160px" },
  { left: "92%", top: "160px" }
];

const memoryPhrases = [
  "Mein Vater erklärt mir jeden Sonntag unseren Nachthimmel.",
  "Meine Freunde entdecken morgens jeden Stern und Nebel.",
  "Mein kleiner Esel mag jeden Sommer unsere Nachbarn.",
  "Meine vier Enten mögen jeden Samstag unsere Nudeln."
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