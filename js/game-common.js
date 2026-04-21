function initGame(mode) {
  const slotsContainer = document.getElementById("slots");
  const planetList = document.getElementById("planetList");
  const selectionTitle = document.getElementById("selectionTitle");
  const infoTitle = document.getElementById("infoTitle");
  const infoText = document.getElementById("infoText");
  const endOverlay = document.getElementById("endOverlay");
  const endText = document.getElementById("endText");
  const memoryBox = document.getElementById("memoryBox");
  const memoryPhrase = document.getElementById("memoryPhrase");
  const orbitRings = document.getElementById("orbitRings");
  const sunWrap = document.getElementById("sunWrap");
  const quizQuestionWrap = document.getElementById("quizQuestionWrap");
  const quizQuestionText = document.getElementById("quizQuestionText");
  const resetBtn = document.getElementById("resetBtn");
  const restartBtn = document.getElementById("restartBtn");

  let currentIndex = 0;
  let shuffledPlanets = [];
  let activeSequence = [];
  let currentQuizQuestions = [];

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
    if (mode === "order") return [...planetData].sort((a, b) => a.order - b.order);
    if (mode === "size") return [...planetData].sort((a, b) => a.sizeRank - b.sizeRank);
    return [...planetData];
  }

  function buildQuizQuestions() {
    return shuffleArray(
      planetData.map(planet => ({
        planetId: planet.id,
        question: getRandomItem(planet.quizClues)
      }))
    );
  }

  function getSlotPositionsForMode() {
    return mode === "size" ? slotPositionsSize : slotPositionsOrder;
  }

  function getPlanetScaleForMode(planet) {
    if (mode !== "size") return 1;

    const scaleMap = {
      merkur: 0.52,
      mars: 0.62,
      neptun: 0.8,
      uranus: 0.9,
      erde: 0.98,
      venus: 1.02,
      saturn: 1.22,
      jupiter: 1.36
    };

    return scaleMap[planet.id] || 1;
  }

  function updateModeUI() {
    const config = modeConfig[mode];
    selectionTitle.textContent = config.selectionTitle;
    infoTitle.textContent = config.introTitle;
    infoText.textContent = config.introText;
    endText.textContent = config.endText;

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

    if (mode === "quiz" && quizQuestionText && currentQuizQuestions[currentIndex]) {
      quizQuestionText.textContent = currentQuizQuestions[currentIndex].question;
    }
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

      if (index === currentIndex) slot.classList.add("active-slot");
      if (index < currentIndex) slot.classList.add("correct-slot");

      if (index < currentIndex) {
        const img = document.createElement("img");
        img.className = "slot-planet-image";
        if (index === currentIndex - 1) img.classList.add("pop-in");

        const scale = getPlanetScaleForMode(planet);
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
        placeholder.style.transform = `scale(${getPlanetScaleForMode(planet)})`;
        slot.appendChild(placeholder);
      }

      slotsContainer.appendChild(slot);
    });
  }

  function createPlanetCards() {
    planetList.innerHTML = "";

    shuffledPlanets.forEach((planet) => {
      const card = document.createElement("div");
      card.className = "planet-card";
      card.dataset.id = planet.id;

      if (planet.used) card.classList.add("disabled");

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
        img.style.transform = `scale(${getPlanetScaleForMode(planet)})`;
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
    infoTitle.textContent = title;
    infoText.textContent = text;
  }

  function updateActiveOrbit() {
    if (!orbitRings) return;
    const rings = document.querySelectorAll(".orbit-ring");
    rings.forEach((ring, index) => {
      ring.classList.toggle("active-ring", mode === "order" && index === currentIndex);
    });
  }

  function completeMode() {
    if (modeConfig[mode].showMemory && memoryPhrase) {
      memoryPhrase.innerHTML = formatMemoryPhrase(getRandomItem(memoryPhrases));
    }
    setTimeout(() => {
      endOverlay.classList.add("active");
    }, 500);
  }

  function handlePlanetClick(clickedPlanet, cardElement) {
    if (mode === "quiz") {
      const expectedQuestion = currentQuizQuestions[currentIndex];
      if (!expectedQuestion) return;

      if (clickedPlanet.id === expectedQuestion.planetId) {
        clickedPlanet.used = true;
        const praise = getRandomItem(positiveMessages);
        const fact = getRandomItem(planetData.find(p => p.id === clickedPlanet.id).facts);
        currentIndex++;

        updateInfo(praise, fact);
        createPlanetCards();

        if (currentIndex < currentQuizQuestions.length) {
          quizQuestionText.textContent = currentQuizQuestions[currentIndex].question;
        } else {
          completeMode();
        }
      } else {
        cardElement.classList.add("wrong");
        setTimeout(() => cardElement.classList.remove("wrong"), 400);
        updateInfo("Fast!", getRandomItem(wrongMessages));
      }
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
    activeSequence = getSequenceForMode();
    currentQuizQuestions = mode === "quiz" ? buildQuizQuestions() : [];
    shuffledPlanets = shuffleArray(planetData.map(planet => ({ ...planet, used: false })));

    endOverlay.classList.remove("active");
    updateModeUI();
    createSlots();
    createPlanetCards();
    updateActiveOrbit();
  }

  resetBtn?.addEventListener("click", start);
  restartBtn?.addEventListener("click", start);

  document.addEventListener("gesturestart", e => e.preventDefault());
  document.addEventListener("dblclick", e => e.preventDefault(), { passive: false });

  start();
}