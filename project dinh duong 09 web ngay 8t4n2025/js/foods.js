let storedFoods = JSON.parse(localStorage.getItem("foods"));

const foods = [
    {
        id: 1,
        name: "Ackee, canned, drained",
        source: "Minh Cuong Tran",
        category: "Vegetables and Vegetable Products",
        quantity: "100g",
        macronutrients: {
            energy: 151,
            carbohydrate: 0.8,
            fat: 15.2,
            protein: 2.9
        },
        micronutrients: {
            cholesterol: 0.0,
            fiber: null,
            sodium: 240.0,
            water: 76.7,
            vitaminA: null,
            vitaminB6: 0.06,
            vitaminB12: 0.0,
            vitaminC: 30.0,
            vitaminD: 0.0,
            vitaminE: null,
            vitaminK: null,
            starch: 0.0,
            lactose: 0.0,
            alcohol: null,
            caffeine: null,
            sugars: 0.8,
            calcium: 35.0,
            iron: 0.7,
            magnesium: 40.0,
            phosphorus: 47.0,
            potassium: 270.0,
            zinc: 0.6,
            copper: 0.27,
            fluoride: null,
            manganese: null,
            selenium: null,
            thiamin: 0.03,
            riboflavin: 0.07,
            niacin: 0.6,
            pantothenicAcid: null,
            folateTotal: 41.0,
            folicAcid: null,
            fattyAcidsTrans: 0.0,
            fattyAcidsSaturated: null,
            fattyAcidsMonounsaturated: null,
            fattyAcidsPolyunsaturated: null,
            chloride: 340.0
        }
    },
    {
        id: 2,
        name: "Agar, dried, soaked and drained",
        source: "Auto Generated",
        category: "Seaweed",
        quantity: "100g",
        macronutrients: {
            energy: 2,
            carbohydrate: 0,
            fat: 0,
            protein: 0
        },
        micronutrients: {
            cholesterol: 0.0,
            fiber: 0.5,
            sodium: 10.0,
            water: 99.0,
            vitaminA: null,
            vitaminB6: 0.01,
            vitaminB12: 0.0,
            vitaminC: 1.0,
            vitaminD: 0.0,
            vitaminE: null,
            vitaminK: null,
            starch: 0.0,
            lactose: 0.0,
            alcohol: null,
            caffeine: null,
            sugars: 0.0,
            calcium: 10.0,
            iron: 0.2,
            magnesium: 5.0,
            phosphorus: 3.0,
            potassium: 15.0,
            zinc: 0.1,
            copper: 0.01,
            fluoride: null,
            manganese: null,
            selenium: null,
            thiamin: 0.01,
            riboflavin: 0.01,
            niacin: 0.1,
            pantothenicAcid: null,
            folateTotal: 2.0,
            folicAcid: null,
            fattyAcidsTrans: 0.0,
            fattyAcidsSaturated: null,
            fattyAcidsMonounsaturated: null,
            fattyAcidsPolyunsaturated: null,
            chloride: 5.0
        }
    },
    {
        id: 3,
        name: "Allspice, ground",
        source: "Auto Generated",
        category: "Spice",
        quantity: "100g",
        macronutrients: {
            energy: null,
            carbohydrate: null,
            fat: 9,
            protein: 6
        },
        micronutrients: {}
    },
    {
        id: 4,
        name: "Amaranth leaves, boiled in unsalted water",
        source: "Auto Generated",
        category: "Vegetable",
        quantity: "100g",
        macronutrients: {
            energy: 16,
            carbohydrate: 3,
            fat: 0,
            protein: 4
        },
        micronutrients: {}
    },
    {
        id: 5,
        name: "Amaranth leaves, raw",
        source: "Auto Generated",
        category: "Vegetable",
        quantity: "100g",
        macronutrients: {
            energy: 18,
            carbohydrate: 4,
            fat: 0,
            protein: 4
        },
        micronutrients: {}
    },
    {
        id: 6,
        name: "Amla",
        source: "Auto Generated",
        category: "Fruit",
        quantity: "100g",
        macronutrients: {
            energy: 58,
            carbohydrate: 14,
            fat: 0,
            protein: 1
        },
        micronutrients: {}
    },
    {
        id: 7,
        name: "Apples, cooking, baked with sugar, flesh only, weighed with skin",
        source: "Auto Generated",
        category: "Fruit",
        quantity: "100g",
        macronutrients: {
            energy: 57,
            carbohydrate: 14,
            fat: 0,
            protein: 0
        },
        micronutrients: {}
    },
    {
        id: 8,
        name: "Apples, cooking, baked without sugar, flesh only, weighed with skin",
        source: "Auto Generated",
        category: "Fruit",
        quantity: "100g",
        macronutrients: {
            energy: 40,
            carbohydrate: 10,
            fat: 0,
            protein: 0
        },
        micronutrients: {}
    },
    {
        id: 9,
        name: "Apples, cooking, stewed with sugar, flesh only",
        source: "Auto Generated",
        category: "Fruit",
        quantity: "100g",
        macronutrients: {
            energy: 81,
            carbohydrate: 21,
            fat: 0,
            protein: 0
        },
        micronutrients: {}
    }
];
if (!storedFoods || storedFoods.length === 0) {
    localStorage.setItem("foods", JSON.stringify(foods));
    storedFoods = foods;
}
const allFoods = storedFoods;
localStorage.setItem("foods", JSON.stringify(allFoods));

const itemsPerPage = 10;
let currentPage = 1;

function displayFoods(foodList) {
    const tableBody = document.querySelector(".food-table tbody");
    tableBody.innerHTML = "";

    foodList.forEach(food => {
        const row = document.createElement("tr");
        row.dataset.id = food.id;

        row.innerHTML = `
            <td>${food.name}</td>
            <td>${food.macronutrients?.energy ?? "-"}</td>
            <td>${food.macronutrients?.fat ?? "-"}</td>
            <td>${food.macronutrients?.carbohydrate ?? "-"}</td>
            <td>${food.macronutrients?.protein ?? "-"}</td>
            <td>${food.category}</td>
        `;

        row.addEventListener("click", () => {
            window.location.href = `/html/product/editfood.html?id=${food.id}`;
        });

        tableBody.appendChild(row);
    });
}

function displayPagination(totalPages) {
    const paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.toggle("active", i === currentPage);
        button.addEventListener("click", () => {
            currentPage = i;
            showCurrentPage();
        });
        paginationDiv.appendChild(button);
    }
}

function showCurrentPage() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const categoryValue = document.getElementById("categoryInput").value.toLowerCase();
    const sortValue = document.getElementById("sortNutrient").value;

    const allFoods = storedFoods;
    let filteredFoods = allFoods.filter(item =>

        item.name.toLowerCase().includes(searchValue) &&
        item.category.toLowerCase().includes(categoryValue)
    );

    if (sortValue) {
        filteredFoods.sort((a, b) => {
            let valA, valB;

            if (sortValue === "category") {
                valA = a.category?.toLowerCase() ?? "";
                valB = b.category?.toLowerCase() ?? "";
            } else {
                valA = a.macronutrients?.[sortValue] ?? -Infinity;
                valB = b.macronutrients?.[sortValue] ?? -Infinity;
            }

            if (valA < valB) return 1;
            if (valA > valB) return -1;
            return 0;
        });
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageFoods = filteredFoods.slice(startIndex, endIndex);

    displayFoods(currentPageFoods);
    const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
    displayPagination(totalPages);
}

document.getElementById("searchInput").addEventListener("input", () => {
    currentPage = 1;
    showCurrentPage();
});

document.getElementById("categoryInput").addEventListener("input", () => {
    currentPage = 1;
    showCurrentPage();
});

document.getElementById("sortNutrient").addEventListener("change", () => {
    currentPage = 1;
    showCurrentPage();
});

showCurrentPage();