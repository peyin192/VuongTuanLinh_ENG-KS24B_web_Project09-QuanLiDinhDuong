const recipes = [
    {
        title: "Turmeric Roasted Cauliflower Salad (lowfodmap)",
        author: "Joana Jardim",
        category: "Vegetarian dishes",
        energy: 143,
        fat: 6,
        carb: 18,
        protein: 5,
        likes: 37
    },
    {
        title: "Vegetable & Egg Scramble* (lowfodmap)",
        author: "Joana Jardim",
        category: "Lean & Green, Low Added Sugar, Diabetic Friendly, HRP Friendly, Vegetarian dishes",
        energy: 87,
        fat: 4,
        carb: 8,
        protein: 5,
        likes: 33
    },
    {
        title: "Green Beans With Tofu and Roasted Peanuts (lowfodmap)",
        author: "Joana Jardim",
        category: "Vegetarian dishes",
        energy: 90,
        fat: 6,
        carb: 5,
        protein: 6,
        likes: 22
    },
    {
        title: "Berry Almond Smoothie (full fat milk)",
        author: "Joana Jardim",
        category: "Breakfast and snacks, Vegetarian dishes, Desserts",
        energy: 196,
        fat: 5,
        carb: 5,
        protein: 9,
        likes: 13
    },
    {
        title: "High Protein Blueberry Cheesecake",
        author: "Vasiliki Stavrou",
        category: "Desserts",
        energy: 260,
        fat: 17,
        carb: 23,
        protein: 4,
        likes: 11
    },
    {
        title: "Asian Chicken Almond Salad",
        author: "Vasiliki Stavrou",
        category: "Chicken Dishes, Salads, Lean & Green",
        energy: 72,
        fat: 3,
        carb: 6,
        protein: 7,
        likes: 11
    },
    {
        title: "Spicy Sausage and Veggie Stir Fry",
        author: "Vasiliki Stavrou",
        category: "Meat dishes, Lean & Green",
        energy: 73,
        fat: 3,
        carb: 3,
        protein: 5,
        likes: 11
    },
    {
        title: "Berry Almond Smoothie",
        author: "Vasiliki Stavrou",
        category: "Breakfast and snacks, Vegetarian dishes, Desserts",
        energy: 84,
        fat: 4,
        carb: 4,
        protein: 7,
        likes: 10
    }
];

const recipeGrid = document.getElementById('recipe-grid');
const paginationDiv = document.getElementById('pagination');

function displayRecipes(recipesToDisplay) {
    recipeGrid.innerHTML = ''; // Xóa nội dung cũ

    recipesToDisplay.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>By ${recipe.author}</p>
            <p>${recipe.category}</p>
            <p class="nutrients">
                Energy: ${recipe.energy} kcal,
                Fat: ${recipe.fat}g,
                Carbs: ${recipe.carb}g,
                Protein: ${recipe.protein}g
            </p>
            <div class="like-button">
                <input class="on" id="heart-${recipe.title.replace(/\s+/g, '-').toLowerCase()}" type="checkbox" />
                <label class="like" for="heart-${recipe.title.replace(/\s+/g, '-').toLowerCase()}">
                    <svg class="like-icon" fill-rule="nonzero" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                    </svg>
                    <span class="like-text">Likes</span>
                </label>
                <span class="like-count one">${recipe.likes}</span>
                <span class="like-count two">${recipe.likes + 1}</span>
            </div>
        `;

        recipeGrid.appendChild(card);
    });
}

function displayPagination(currentPage, totalPages) {
    paginationDiv.innerHTML = ''; // Xóa nội dung cũ

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add('active'); // Đánh dấu trang hiện tại
        }
        button.addEventListener('click', () => {
            currentPage = i;
            displayRecipes(getRecipesForPage(currentPage));
            displayPagination(currentPage, totalPages);
        });
        paginationDiv.appendChild(button);
    }
}

function getRecipesForPage(page) {
    const recipesPerPage = 8; // Hiển thị 8 công thức mỗi trang
    const startIndex = (page - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    return recipes.slice(startIndex, endIndex);
}

// Khởi tạo trang web
let currentPage = 1;
const totalPages = Math.ceil(recipes.length / 8);

displayRecipes(getRecipesForPage(currentPage));
displayPagination(currentPage, totalPages);