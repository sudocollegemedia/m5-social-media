const days = document.querySelector("#days");
const title = document.querySelector("#date");
let currentDate = new Date();

document.querySelector("#prev").addEventListener("click", () => changeMonth(-1));
document.querySelector("#next").addEventListener("click", () => changeMonth(1));
renderMonth();

function changeMonth(offset) {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    renderMonth();
}

function renderMonth() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const offset = (new Date(year, month, 1).getDay() + 6) % 7;
    const numberOfDays = new Date(year, month + 1, 0).getDate();

    title.textContent = currentDate.toLocaleDateString("nl-NL", {
        month: "long",
        year: "numeric"
    });
    days.replaceChildren();

    for (let i = 0; i < offset + numberOfDays; i++) {
        const cell = document.createElement("li");
        if (i < offset) {
            cell.className = "empty";
            cell.setAttribute("aria-hidden", "true");
        } else {
            cell.className = "day";
            cell.textContent = i - offset + 1;
        }
        days.appendChild(cell);
    }
}