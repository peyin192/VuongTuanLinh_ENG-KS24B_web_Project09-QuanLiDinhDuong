const foods = [
    {
        name: "Ackee, canned, drained",
        energy: "151 kcal",
        fat: "15 g",
        carbohydrates: "1 g",
        protein: "3 g",
    },
    {
        name: "Agar, dried, soaked and drained",
        energy: "2 kcal",
        fat: "0 g",
        carbohydrates: "0 g",
        protein: "0 g",
    },
    {
        name: "Allspice, ground",
        energy: "-",
        fat: "9 g",
        carbohydrates: "-",
        protein: "6 g",
    },
    {
        name: "Amaranth leaves, boiled in unsalted water",
        energy: "16 kcal",
        fat: "0 g",
        carbohydrates: "3 g",
        protein: "4 g",
    },
    {
        name: "Amaranth leaves, raw",
        energy: "18 kcal",
        fat: "0 g",
        carbohydrates: "4 g",
        protein: "4 g",
    },
    {
        name: "Amla",
        energy: "58 kcal",
        fat: "0 g",
        carbohydrates: "14 g",
        protein: "1 g",
    },
    {
        name: "Apples, cooking, baked with sugar, flesh only, weighed with skin",
        energy: "57 kcal",
        fat: "0 g",
        carbohydrates: "14 g",
        protein: "0 g",
    },
    {
        name: "Apples, cooking, baked without sugar, flesh only, weighed with skin",
        energy: "40 kcal",
        fat: "0 g",
        carbohydrates: "10 g",
        protein: "0 g",
    },
    {
        name: "Apples, cooking, stewed with sugar, flesh only",
        energy: "81 kcal",
        fat: "0 g",
        carbohydrates: "21 g",
        protein: "0 g",
    },
];

const itemsPerPage = 10;
let currentPage = 1;

function displayFoods(foods) {
    const tableBody = document.querySelector(".food-table tbody");
    tableBody.innerHTML = "";

    foods.forEach(food => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${food.name}</td>
            <td>${food.energy}</td>
            <td>${food.fat}</td>
            <td>${food.carbohydrates}</td>
            <td>${food.protein}</td>
        `;
        tableBody.appendChild(row);
    });
}

function displayPagination(totalPages) {
    const paginationDiv = document.querySelector(".food-footer .pagination");
    paginationDiv.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.textContent = i;
        pageLink.href = "#";
        pageLink.addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = i;
            showCurrentPage();
        });
        paginationDiv.appendChild(pageLink);
    }
}

function showCurrentPage() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageFoods = foods.slice(startIndex, endIndex);
    displayFoods(currentPageFoods);
}

const totalPages = Math.ceil(foods.length / itemsPerPage);

showCurrentPage();
displayPagination(totalPages);