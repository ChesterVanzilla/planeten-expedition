function initGame(mode) {
  const slotsContainer = document.getElementById("slots");
  const planetList = document.getElementById("planetList");
  const selectionTitle = document.getElementById("selectionTitle");
  const infoTitle = document.getElementById("infoTitle");
  const infoText = document.getElementById("infoText");
  const infoPanelWrap = document.querySelector(".info-panel-wrap");
  const quizLevelSelect = document.getElementById("quizLevelSelect");
  const quizGameArea = document.getElementById("quizGameArea");
  const quizFeedback = document.getElementById("quizFeedback");
const quizMissionTitle = document.getElementById("quizMissionTitle");
const quizProgressText = document.getElementById("quizProgressText");
const quizProgressFill = document.getElementById("quizProgressFill");
const quizStarsText = document.getElementById("quizStarsText");
  const endOverlay = document.getElementById("endOverlay");
  const endText = document.getElementById("endText");
  const memoryBox = document.getElementById("memoryBox");
  const memoryPhrase = document.getElementById("memoryPhrase");
  const orbitRings = document.getElementById("orbitRings");
  const sunWrap = document.getElementById("sunWrap");
  const quizQuestionWrap = document.getElementById("quizQuestionWrap");
  const quizQuestionText = document.getElementById("quizQuestionText");
  const quizQuestionLabel = document.getElementById("quizQuestionLabel");
  const quizPlanetPrompt = document.getElementById("quizPlanetPrompt");
  const quizPlanetPromptImage = document.getElementById("quizPlanetPromptImage");
  const quizPlanetPromptName = document.getElementById("quizPlanetPromptName");
  const quizAnswerGrid = document.getElementById("quizAnswerGrid");
  const quizLevel1Btn = document.getElementById("quizLevel1Btn");
  const quizLevel2Btn = document.getElementById("quizLevel2Btn");
  const resetBtn = document.getElementById("resetBtn");
  const restartBtn = document.getElementById("restartBtn");

    let currentIndex = 0;
let shuffledPlanets = [];
let activeSequence = [];
let currentQuizQuestions = [];
let currentQuizLevel = null;
let quizStars = 0;
let questionHadWrongAttempt = false;

  function shuffleArray(array) {
    const cloned = [...array];
    for (let i = cloned.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
    }
    return cloned;
  }

  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function formatMemoryPhrase(phrase) {
    return phrase
      .split(" ")
      .map(word => {
        if (!word) return "";
        const firstChar = word.charAt(0);
        const rest = word.slice(1);
        return `<span class="memory-word"><span class="memory-initial">${firstChar}</span>${rest}</span>`;
      })
      .join(" ");
  }

  function getSequenceForMode() {
    if (mode === "order") {
      return [...planetData].sort((a, b) => a.order - b.order);
    }

    if (mode === "size") {
      return [...planetData].sort((a, b) => a.sizeRank - b.sizeRank);
    }

    return [...planetData];
  }

  function getRandomWrongPlanets(correctId, count = 3) {
    return shuffleArray(
      planetData.filter(planet => planet.id !== correctId)
    ).slice(0, count);
  }

  function getRandomWrongFacts(correctPlanetId, correctFact, count = 3) {
    const allFacts = planetData
      .filter(planet => planet.id !== correctPlanetId)
      .flatMap(planet =>
        planet.quizfacts.map(fact => ({
          planetId: planet.id,
          text: fact
        }))
      );

    return shuffleArray(
      allFacts.filter(fact => fact.text !== correctFact)
    ).slice(0, count);
  }

  function buildQuizQuestions() {
    if (currentQuizLevel === 1) {
      return shuffleArray(
        planetData.map(planet => {
          const correctQuestion = getRandomItem(planet.quizClues);
          const wrongPlanets = getRandomWrongPlanets(planet.id, 3);

          const answers = shuffleArray([
            {
              type: "planet",
              planetId: planet.id,
              name: planet.name,
              image: planet.image,
              correct: true
            },
            ...wrongPlanets.map(wrongPlanet => ({
              type: "planet",
              planetId: wrongPlanet.id,
              name: wrongPlanet.name,
              image: wrongPlanet.image,
              correct: false
            }))
          ]);

          return {
            level: 1,
            planetId: planet.id,
            question: correctQuestion,
            answers
          };
        })
      );
    }

    return shuffleArray(
      planetData.map(planet => {
        const correctFact = getRandomItem(planet.quizfacts);
        const wrongFacts = getRandomWrongFacts(planet.id, correctFact, 3);

        const answers = shuffleArray([
          {
            type: "quizfact",
            text: correctFact,
            correct: true
          },
          ...wrongFacts.map(fact => ({
            type: "quizfact",
            text: fact.text,
            correct: false
          }))
        ]);

        return {
          level: 2,
          planetId: planet.id,
          planetName: planet.name,
          planetImage: planet.image,
          answers
        };
      })
    );
  }

  function getSlotPositionsForMode() {
    return mode === "size" ? slotPositionsSize : slotPositionsOrder;
  }

  function getPlanetScaleForSlot(planet) {
    if (mode !== "size") return 1;

    const scaleMap = {
      merkur: 1,
      mars: 1,
      venus: 1,
      erde: 1,
      neptun: 1,
      uranus: 1,
      saturn: 1,
      jupiter: 1
    };

    return scaleMap[planet.id] || 1;
  }

  function getPlanetScaleForSelection(planet) {
    if (mode !== "size") return 1;

    const scaleMap = {
      merkur: 0.4,
      mars: 0.5,
      venus: 0.6,
      erde: 0.7,
      neptun: 0.8,
      uranus: 1.1,
      saturn: 1.2,
      jupiter: 1.3
    };

    return scaleMap[planet.id] || 1;
  }

  function updateModeUI() {
    const config = modeConfig[mode];

    if (selectionTitle) {
      selectionTitle.textContent = config.selectionTitle;
    }

    if (infoTitle) {
      infoTitle.textContent = config.introTitle;
    }

    if (infoText) {
      infoText.textContent = config.introText;
    }

    if (endText) {
      endText.textContent = config.endText;
    }

    if (memoryBox) {
      memoryBox.style.display = config.showMemory ? "block" : "none";
    }

    if (orbitRings) {
      orbitRings.style.display = config.showOrbits ? "block" : "none";
    }

    if (sunWrap) {
      sunWrap.style.display = config.showSun ? "block" : "none";
    }

    if (quizQuestionWrap) {
      quizQuestionWrap.style.display = mode === "quiz" ? "block" : "none";
    }

    if (quizPlanetPrompt) {
      quizPlanetPrompt.style.display = "none";
    }
  }

function updateQuizLayout() {
  if (mode !== "quiz") {
    if (infoPanelWrap) {
      infoPanelWrap.style.display = "";
    }
    return;
  }

  if (infoPanelWrap) {
    infoPanelWrap.style.display = "none";
  }

  if (quizLevelSelect) {
    quizLevelSelect.style.display = currentQuizLevel ? "block" : "block";
  }

  if (quizGameArea) {
    quizGameArea.style.display = currentQuizLevel ? "block" : "none";
  }

  if (quizLevelSelect && currentQuizLevel) {
    quizLevelSelect.style.display = "none";
  }
}

function getQuizMissionTitle() {
  if (currentQuizLevel === 1) {
    return "Mission 1: Finde den Planeten";
  }

  if (currentQuizLevel === 2) {
    return "Mission 2: Finde den passenden Fakt";
  }

  return "Quiz-Mission";
}

function updateQuizStatus() {
  if (mode !== "quiz") return;

  const totalQuestions = currentQuizQuestions.length || planetData.length;
  const currentQuestionNumber = Math.min(currentIndex + 1, totalQuestions);

  if (quizMissionTitle) {
    quizMissionTitle.textContent = getQuizMissionTitle();
  }

  if (quizProgressText) {
    quizProgressText.textContent = `Frage ${currentQuestionNumber} von ${totalQuestions}`;
  }

  if (quizProgressFill) {
    const progressPercent = totalQuestions > 0 ? (currentIndex / totalQuestions) * 100 : 0;
    quizProgressFill.style.width = `${progressPercent}%`;
  }

  if (quizStarsText) {
    quizStarsText.textContent = `⭐ ${quizStars} / ${totalQuestions}`;
  }
}

function getQuizRank() {
  const totalQuestions = currentQuizQuestions.length || planetData.length;
  const ratio = totalQuestions > 0 ? quizStars / totalQuestions : 0;

  if (ratio === 1) {
    return "Astro-Meister";
  }

  if (ratio >= 0.75) {
    return "Planetendetektiv";
  }

  if (ratio >= 0.5) {
    return "Weltraumforscher";
  }

  return "Sternenstarter";
}

  function renderQuizQuestion() {
    if (mode !== "quiz" || !quizAnswerGrid) return;

    const currentQuestion = currentQuizQuestions[currentIndex];
    if (!currentQuestion) return;

    quizAnswerGrid.innerHTML = "";

updateQuizStatus();
questionHadWrongAttempt = false;

    quizLevel1Btn?.classList.toggle("active-level-btn", currentQuizLevel === 1);
    quizLevel2Btn?.classList.toggle("active-level-btn", currentQuizLevel === 2);

    if (currentQuizLevel === 1) {
      if (quizQuestionLabel) {
        quizQuestionLabel.textContent = "Welcher Planet ist gemeint?";
      }

      if (quizQuestionText) {
        quizQuestionText.textContent = currentQuestion.question;
      }

      if (quizQuestionWrap) {
        quizQuestionWrap.style.display = "block";
      }

      if (quizPlanetPrompt) {
        quizPlanetPrompt.style.display = "none";
      }

      currentQuestion.answers.forEach(answer => {
        const card = document.createElement("button");
        card.className = "quiz-answer-card";
        card.type = "button";

        card.innerHTML = `
          <div class="quiz-planet-answer">
            <img class="quiz-planet-answer-image" src="${answer.image}" alt="${answer.name}">
            <div class="quiz-planet-answer-name">${answer.name}</div>
          </div>
        `;

        card.addEventListener("click", () => handleQuizAnswer(answer, card));
        quizAnswerGrid.appendChild(card);
      });

      return;
    }

    if (quizQuestionWrap) {
      quizQuestionWrap.style.display = "none";
    }

    if (quizPlanetPrompt) {
      quizPlanetPrompt.style.display = "flex";
    }

    if (quizPlanetPromptImage) {
      quizPlanetPromptImage.src = currentQuestion.planetImage;
      quizPlanetPromptImage.alt = currentQuestion.planetName;
    }

    if (quizPlanetPromptName) {
      quizPlanetPromptName.textContent = currentQuestion.planetName;
    }

    currentQuestion.answers.forEach(answer => {
      const card = document.createElement("button");
      card.className = "quiz-answer-card";
      card.type = "button";

      card.innerHTML = `
        <div class="quiz-fact-answer-text">${answer.text}</div>
      `;

      card.addEventListener("click", () => handleQuizAnswer(answer, card));
      quizAnswerGrid.appendChild(card);
    });
  }

  function createSlots() {
    if (!slotsContainer) return;

    slotsContainer.innerHTML = "";

    if (mode === "quiz") return;

    const slotPositions = getSlotPositionsForMode();

    activeSequence.forEach((planet, index) => {
      const slot = document.createElement("div");
      slot.className = "planet-slot";
      slot.dataset.index = index;
      slot.style.left = slotPositions[index].left;
      slot.style.top = slotPositions[index].top;
      slot.style.transform = "translate(-50%, -50%)";

      if (mode === "size") {
        const slotSizeMap = {
          merkur: 70,
          mars: 85,
          venus: 140,
          erde: 150,
          neptun: 200,
          uranus: 210,
          saturn: 370,
          jupiter: 400
        };

        const slotSize = slotSizeMap[planet.id] || 150;
        slot.style.width = `${slotSize}px`;
        slot.style.height = `${slotSize}px`;
      }

      if (index === currentIndex) {
        slot.classList.add("active-slot");
      }

      if (index < currentIndex) {
        slot.classList.add("correct-slot");
      }

      if (index < currentIndex) {
        const img = document.createElement("img");
        img.className = "slot-planet-image";

        if (index === currentIndex - 1) {
          img.classList.add(mode === "size" ? "pop-in-size" : "pop-in");
        }

        const scale = getPlanetScaleForSlot(planet);
        img.style.transform = `scale(${scale})`;
        img.src = planet.image;
        img.alt = planet.name;
        img.onerror = function () {
          this.style.display = "none";
          const fallback = document.createElement("div");
          fallback.className = "slot-placeholder";
          fallback.style.opacity = "0.9";
          fallback.style.filter = "none";
          slot.appendChild(fallback);
        };

        slot.appendChild(img);
      } else {
        const placeholder = document.createElement("div");
        placeholder.className = "slot-placeholder";
        placeholder.style.transform = `scale(${getPlanetScaleForSlot(planet)})`;
        slot.appendChild(placeholder);
      }

      slotsContainer.appendChild(slot);
    });
  }

  function createPlanetCards() {
    if (!planetList) return;

    planetList.innerHTML = "";

    shuffledPlanets.forEach((planet) => {
      const card = document.createElement("div");
      card.className = "planet-card";
      card.dataset.id = planet.id;

      if (planet.used) {
        card.classList.add("disabled");
      }

      const button = document.createElement("div");
      button.className = "planet-button";

      const img = document.createElement("img");
      img.className = "planet-thumb";
      img.src = planet.image;
      img.alt = planet.name;
      img.onerror = function () {
        this.style.display = "none";
      };

      if (mode === "size") {
        img.style.transform = `scale(${getPlanetScaleForSelection(planet)})`;
      }

      const name = document.createElement("div");
      name.className = "planet-name";
      name.textContent = planet.name;

      button.appendChild(img);
      card.appendChild(button);
      card.appendChild(name);

      if (!planet.used) {
        card.addEventListener("click", () => handlePlanetClick(planet, card));
      }

      planetList.appendChild(card);
    });
  }

  function updateInfo(title, text) {
    if (infoTitle) {
      infoTitle.textContent = title;
    }

    if (infoText) {
      infoText.textContent = text;
    }
  }

  function updateActiveOrbit() {
    if (!orbitRings) return;

    const rings = document.querySelectorAll(".orbit-ring");
    rings.forEach((ring, index) => {
      ring.classList.toggle("active-ring", mode === "order" && index === currentIndex);
    });
  }

  function completeMode() {
  if (mode === "quiz") {
    const totalQuestions = currentQuizQuestions.length || planetData.length;
    const rank = getQuizRank();

    if (endText) {
      endText.textContent = `Du hast ${quizStars} von ${totalQuestions} Sternen gesammelt. Rang: ${rank}`;
    }
  } else {
    if (modeConfig[mode].showMemory && memoryPhrase) {
      memoryPhrase.innerHTML = formatMemoryPhrase(getRandomItem(memoryPhrases));
    }

    if (endText) {
      endText.textContent = modeConfig[mode].endText;
    }
  }

  setTimeout(() => {
    if (endOverlay) {
      endOverlay.classList.add("active");
    }
  }, 500);
}

  function handleQuizAnswer(answer, cardElement) {
  if (!answer) return;

  if (answer.correct) {
    if (!questionHadWrongAttempt) {
      quizStars++;
    }

    updateQuizStatus();

    if (quizFeedback) {
      quizFeedback.textContent = !questionHadWrongAttempt
        ? "Stark! Stern gesammelt!"
        : "Richtig!";
    }

    currentIndex++;

    if (currentIndex < currentQuizQuestions.length) {
      setTimeout(() => {
        if (quizFeedback) {
          quizFeedback.textContent = "";
        }
        renderQuizQuestion();
      }, 450);
    } else {
      setTimeout(() => {
        if (quizFeedback) {
          quizFeedback.textContent = "";
        }
        completeMode();
      }, 450);
    }
  } else {
    questionHadWrongAttempt = true;
    cardElement.classList.add("wrong");
    setTimeout(() => cardElement.classList.remove("wrong"), 400);

    if (quizFeedback) {
      quizFeedback.textContent = "Fast! Für diese Frage gibt es jetzt keinen Stern mehr.";
    }
  }
}

    

  function handlePlanetClick(clickedPlanet, cardElement) {
    if (mode === "quiz") {
      return;
    }

    const expectedPlanet = activeSequence[currentIndex];
    if (!expectedPlanet) return;

    if (clickedPlanet.id === expectedPlanet.id) {
      clickedPlanet.used = true;
      currentIndex++;

      const praise = getRandomItem(positiveMessages);
      const fact = getRandomItem(expectedPlanet.facts);

      updateInfo(praise, fact);
      createSlots();
      createPlanetCards();
      updateActiveOrbit();

      if (currentIndex >= activeSequence.length) {
        completeMode();
      }
    } else {
      cardElement.classList.add("wrong");
      setTimeout(() => cardElement.classList.remove("wrong"), 400);
      updateInfo("Fast!", getRandomItem(wrongMessages));
    }
  }

  function start() {
  currentIndex = 0;
quizStars = 0;
questionHadWrongAttempt = false;
activeSequence = getSequenceForMode();
shuffledPlanets = shuffleArray(
  planetData.map(planet => ({ ...planet, used: false }))
);

  if (endOverlay) {
    endOverlay.classList.remove("active");
  }

  if (quizFeedback) {
    quizFeedback.textContent = "";
  }

  updateModeUI();
  createSlots();

  if (mode === "quiz") {
    if (planetList) {
      planetList.innerHTML = "";
    }

    if (!currentQuizLevel) {
      currentQuizQuestions = [];
      updateQuizLayout();
      return;
    }

    currentQuizQuestions = buildQuizQuestions();
updateQuizLayout();
updateQuizStatus();
renderQuizQuestion();
  } else {
    createPlanetCards();
  }

  updateActiveOrbit();
}

  resetBtn?.addEventListener("click", start);
  restartBtn?.addEventListener("click", start);

  quizLevel1Btn?.addEventListener("click", () => {
  currentQuizLevel = 1;
  start();
});

quizLevel2Btn?.addEventListener("click", () => {
  currentQuizLevel = 2;
  start();
});

  document.addEventListener("gesturestart", e => e.preventDefault());
  document.addEventListener("dblclick", e => e.preventDefault(), { passive: false });

  start();
}