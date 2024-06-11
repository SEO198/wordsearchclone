document.addEventListener("DOMContentLoaded", () => {
  const wordSearchContainer = document.getElementById("word-search-container");
  const wordListContainer = document.getElementById("word-list");
  const statusBoard = document.getElementById("status-board");
  const timer = document.getElementById("timer");
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  // Placeholder data
  const gameData = {
    title: "The Simpsons Characters",
    description:
      "Find all the names of the Simpsons characters hidden in the grid.",
    words: [
      "ELONMUSK",
      "STAR",
      "NASA",
      "SPACEX",
      "FALCON",
      "METEOR",
      "PLANET",
      "MOON",
      "SOLAR",
      "MARS",
    ],
    grid: [
      ["H", "O", "M", "E", "R", "A", "S", "D", "F", "G"],
      ["A", "B", "C", "D", "E", "F", "L", "I", "S", "A"],
      ["G", "H", "I", "J", "K", "L", "M", "N", "O", "P"],
      // Add more rows to complete the grid
    ],
  };

  // Initialize game
  title.textContent = gameData.title;
  description.textContent = gameData.description;
  gameData.words.forEach((word) => {
    const listItem = document.createElement("li");
    listItem.textContent = word;
    wordListContainer.appendChild(listItem);
  });

  gameData.grid.forEach((row) => {
    row.forEach((letter) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.textContent = letter;
      wordSearchContainer.appendChild(gridItem);
    });
  });

  // Add event listeners for game logic here

  // Placeholder timer
  let seconds = 0;
  setInterval(() => {
    seconds++;
    timer.textContent = `Time: ${seconds}s`;
  }, 1000);
});
