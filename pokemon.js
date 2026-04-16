const container = document.getElementById("pokemon-container");
const buttonAdd = document.getElementById("add-pokemon");
const buttonRemove = document.getElementById("remove-pokemon");

function setRandomPastelBackground() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 70;
  const lightness = Math.floor(Math.random() * 15) + 75;
  const randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  return randomColor;
}

buttonAdd.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * 1025) + 1;
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((pokemon) => {
      const card = document.createElement("div");
      const cardName = document.createElement("h2");
      cardName.innerText = pokemon.name;
      const cardImage = document.createElement("img");
      cardImage.src = pokemon.sprites.front_default;
      card.style.display = "flex";
      card.style.backgroundColor = setRandomPastelBackground();
      container.appendChild(card);
      card.appendChild(cardImage);
      card.appendChild(cardName);
    })
    .catch((error) => {
      console.error("Failed to fetch Pokémon:", error);
    });
});

buttonRemove.addEventListener("click", () => {
  card = container.lastElementChild;
  card.remove();
});
