const recipes = [
    {
        title: "Turmeric Roasted Cauliflower Salad <br> (lowfodmap)",
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
        title: "Green Beans With Tofu and <br> Roasted Peanuts (lowfodmap)",
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

// Hàm hiển thị công thức
function displayRecipes(recipesToDisplay) {
    const recipeGrid = document.getElementById('recipe-grid');
    recipeGrid.innerHTML = '';

    recipesToDisplay.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        card.innerHTML = `
            <h3>${recipe.title}</h3>
            <div class="like-button">
                <input class="on" id="heart-${recipe.title.replace(/\s+/g, '-').toLowerCase()}" type="checkbox" />
                <label class="like" for="heart-${recipe.title.replace(/\s+/g, '-').toLowerCase()}">
                    <svg class="like-icon" fill-rule="nonzero" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"></path>
                    </svg>
                </label>
                <span class="like-count one">${recipe.likes}</span>
                <span class="like-count two">${recipe.likes + 1}</span>
            </div>
            <p>By ${recipe.author}</p>
            <p><img src="/image/Vector.png"> ${recipe.category}</p>
            <hr><br>
            <p class="nutrients">
                Energy: ${recipe.energy} kcal,
                Fat: ${recipe.fat}g,
                Carbs: ${recipe.carb}g,
                Protein: ${recipe.protein}g
            </p>
        `;

        recipeGrid.appendChild(card);
    });
}

// Hàm lọc và sắp xếp công thức
function filterRecipes() {
    let filteredRecipes = [...recipes];

    // Tìm kiếm theo tên công thức
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    if (searchText) {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchText)
        );
    }

    // Lọc theo category
    const selectedCategory = document.getElementById('categoryFilter').value;
    if (selectedCategory) {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );
    }

    // Sắp xếp theo nutrient (energy, fat, carb, protein)
    const selectedSort = document.getElementById('sortSelect').value;
    if (selectedSort) {
        filteredRecipes.sort((a, b) => a[selectedSort] - b[selectedSort]);
    }

    displayRecipes(filteredRecipes);
}

// Gọi hàm để hiển thị công thức ban đầu
displayRecipes(recipes);

// Thêm sự kiện cho các ô tìm kiếm, lọc và sắp xếp
document.getElementById('searchInput').addEventListener('input', filterRecipes);
document.getElementById('sortSelect').addEventListener('change', filterRecipes);
document.getElementById('categoryFilter').addEventListener('change', filterRecipes);
