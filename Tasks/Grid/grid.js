const container = document.getElementById("grid-container");

for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = `${row + 1},${col + 1}`;
        container.appendChild(cell);
    }
}