
const searchButton = document.querySelector("#filter-button");
const userInput = document.querySelector("#user-input")
const table = document.querySelector("#items-table tbody");
let objects = ["Walmart", "StateGrid", "Sinopec Group", "China National Petroleum", "Royal Dutch Shell", "Toyota Motor", "Volkswagen", "BP", "Exxon Mobil", "Berkshire Hathaway"];

searchButton.addEventListener('click', () => findMatchingTableContent(userInput.value)); 

const findMatchingTableContent = (input) => {
    const filtered = filterTable(objects, input);
    addToTable(filtered);
}

const isEmptyOrSpaces = (str) => {
    return str == null || str.trim() === "";
}

const filterTable = (array, input) => {
    if (isEmptyOrSpaces(input)) {
        return array;
    }
    const regex = new RegExp(input, 'i');
    let correctAnswers = array.filter(
        element => element.match(regex)
    );
    return correctAnswers;
}

const addToTable = (array) => {
    table.innerHTML = "";
    array.forEach( element => {
        const tableRow = document.createElement("tr");
        tableRow.classList.add("items-table__row");
        const tableData = document.createElement("td");
        tableData.classList.add("items-table__item");
        tableData.innerHTML = element;
        tableRow.appendChild(tableData);
        table.appendChild(tableRow);
    });
}
