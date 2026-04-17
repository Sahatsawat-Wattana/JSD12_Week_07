document.addEventListener("DOMContentLoaded", () => {
  let score = 0;
  let clickPower = 1;
  let cps = 0;

  let stormtrooper = { cost: 15, owned: 0, powerIncrease: 1 };
  let tieFighter = { cost: 100, owned: 0, cpsIncrease: 1 };
  let atatWalker = { cost: 400, owned: 0, cpsIncrease: 5 };

  const scoreDisplay = document.getElementById("score-display");
  const cpsDisplay = document.getElementById("cps-display");
  const powerDisplay = document.getElementById("power-display");

  const planetBtn = document.getElementById("planet-btn");

  const buyStormtrooperBtn = document.getElementById("buy-stormtrooper-btn");
  const stormtrooperCostEl = document.getElementById("stormtrooper-cost");
  const stormtrooperOwnedEl = document.getElementById("stormtrooper-owned");

  const buyTieBtn = document.getElementById("buy-tie-btn");
  const tieCostEl = document.getElementById("tie-cost");
  const tieOwnedEl = document.getElementById("tie-owned");

  const buyAtatBtn = document.getElementById("buy-atat-btn");
  const atatCostEl = document.getElementById("atat-cost");
  const atatOwnedEl = document.getElementById("atat-owned");

  const updateUI = () => {
    scoreDisplay.innerText = Math.floor(score);
    cpsDisplay.innerText = cps;
    powerDisplay.innerText = clickPower;

    stormtrooperCostEl.innerText = stormtrooper.cost;
    stormtrooperOwnedEl.innerText = stormtrooper.owned;

    tieCostEl.innerText = tieFighter.cost;
    tieOwnedEl.innerText = tieFighter.owned;

    atatCostEl.innerText = atatWalker.cost;
    atatOwnedEl.innerText = atatWalker.owned;

    buyStormtrooperBtn.style.opacity = score >= stormtrooper.cost ? "1" : "0.5";
    buyTieBtn.style.opacity = score >= tieFighter.cost ? "1" : "0.5";
    buyAtatBtn.style.opacity = score >= atatWalker.cost ? "1" : "0.5";

    buyStormtrooperBtn.disabled = score < stormtrooper.cost;
    buyTieBtn.disabled = score < tieFighter.cost;
    buyAtatBtn.disabled = score < atatWalker.cost;
  };

  planetBtn.addEventListener("click", () => {
    score += clickPower;
    updateUI();
  });

  buyStormtrooperBtn.addEventListener("click", () => {
    if (score >= stormtrooper.cost) {
      score -= stormtrooper.cost;
      stormtrooper.owned++;
      clickPower += stormtrooper.powerIncrease;
      stormtrooper.cost = Math.ceil(stormtrooper.cost * 1.15);
      updateUI();
    }
  });

  buyTieBtn.addEventListener("click", () => {
    if (score >= tieFighter.cost) {
      score -= tieFighter.cost;
      tieFighter.owned++;
      cps += tieFighter.cpsIncrease;
      tieFighter.cost = Math.ceil(tieFighter.cost * 1.15);
      updateUI();
    }
  });

  buyAtatBtn.addEventListener("click", () => {
    if (score >= atatWalker.cost) {
      score -= atatWalker.cost;
      atatWalker.owned++;
      cps += atatWalker.cpsIncrease;
      atatWalker.cost = Math.ceil(atatWalker.cost * 1.05);
      updateUI();
    }
  });

  setInterval(() => {
    if (cps > 0) {
      score += cps / 10;
      updateUI();
    }
  }, 100);

  updateUI();
});
