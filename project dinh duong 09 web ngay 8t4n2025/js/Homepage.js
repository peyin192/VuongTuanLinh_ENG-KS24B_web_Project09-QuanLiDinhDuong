const recipes = [
    {
        title: "Turmeric Roasted Cauliflower <br> Salad (lowfodmap)",
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

// Function to display recipes
function displayRecipes(recipesToDisplay) {
    const recipeGrid = document.getElementById('recipe-grid');
    recipeGrid.innerHTML = '';  // Clear current content of recipe grid

    recipesToDisplay.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');

        // Create the recipe card HTML
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

        // Append the card to the grid
        recipeGrid.appendChild(card);

        // Add event listener for the like button (checkbox)
        const likeCheckbox = document.getElementById(`heart-${recipe.title.replace(/\s+/g, '-').toLowerCase()}`);
        likeCheckbox.addEventListener('change', () => {
            if (likeCheckbox.checked) {
                recipe.likes++; // Increase like count when checked
            } else {
                recipe.likes--; // Decrease like count when unchecked
            }

            // Update the displayed like count
            card.querySelector('.like-count.one').textContent = recipe.likes;
            card.querySelector('.like-count.two').textContent = recipe.likes;
        });
    });
}



// Search function to filter recipes by title
function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchInput));

    // Display the filtered recipes
    displayRecipes(filteredRecipes);
}

// Call the function when the page loads to display all recipes initially
window.onload = () => {
    displayRecipes(recipes);
};


function displayPagination(currentPage, totalPages) {
    paginationDiv.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add('active');
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
    const recipesPerPage = 8;
    const startIndex = (page - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    return recipes.slice(startIndex, endIndex);
}

let currentPage = 1;
const totalPages = Math.ceil(recipes.length / 8);

displayRecipes(getRecipesForPage(currentPage));
displayPagination(currentPage, totalPages);

// Thêm ô tìm kiếm, sắp xếp và lọc category
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const categoryFilter = document.getElementById('categoryFilter');

function filterRecipes() {
    let filteredRecipes = [...recipes];

    // Tìm kiếm theo tiêu đề
    const searchText = searchInput.value.toLowerCase();
    if (searchText) {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchText)
        );
    }

    // Lọc theo category
    const selectedCategory = categoryFilter.value;
    if (selectedCategory) {
        filteredRecipes = filteredRecipes.filter(recipe =>
            recipe.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );
    }

    // Sắp xếp theo nutrient
    const selectedSort = sortSelect.value;
    if (selectedSort) {
        filteredRecipes.sort((a, b) => a[selectedSort] - b[selectedSort]);
    }

    displayRecipes(filteredRecipes);
}

// Event listeners
searchInput.addEventListener('input', filterRecipes);
sortSelect.addEventListener('change', filterRecipes);
categoryFilter.addEventListener('change', filterRecipes);




// search by category

  function displayRecipes(filteredRecipes) {
      const recipeGrid = document.getElementById("recipe-grid");
      recipeGrid.innerHTML = "";

      filteredRecipes.forEach(recipe => {
          const recipeCard = document.createElement("div");
          recipeCard.classList.add("recipe-card");
          recipeCard.innerHTML = `
              <h3>${recipe.title}</h3>
              <p><strong>Author:</strong> ${recipe.author}</p>
              <p><strong>Category:</strong> ${recipe.category}</p>
              <p><strong>Energy:</strong> ${recipe.energy} kcal</p>
              <p><strong>Fat:</strong> ${recipe.fat}g</p>
              <p><strong>Carbs:</strong> ${recipe.carb}g</p>
              <p><strong>Protein:</strong> ${recipe.protein}g</p>
              <p><strong>Likes:</strong> ${recipe.likes}</p>
          `;
          recipeGrid.appendChild(recipeCard);
      });
  }

  function searchByCategory() {
      const input = document.getElementById("categoryInput").value.toLowerCase();
      const filtered = recipes.filter(recipe => recipe.category.toLowerCase().includes(input));
      displayRecipes(filtered);
  }

  // Hiển thị mặc định toàn bộ recipes
  document.addEventListener("DOMContentLoaded", () => {
      displayRecipes(recipes);
  });





  function sortByNutrient() {
    const select = document.getElementById("sortByNutrients");
    const nutrient = select.value;

    const nutrientMap = {
        "Energy": "energy",
        "kcal": "energy",
        "fat": "fat",
        "Carbs": "carb",
        "Protein": "protein"
    };

    const key = nutrientMap[nutrient];
    if (!key) return;

    const sorted = [...recipes].sort((a, b) => b[key] - a[key]); // 🔁 Sắp giảm dần
    displayRecipes(sorted);
}