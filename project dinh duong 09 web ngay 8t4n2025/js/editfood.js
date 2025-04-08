const allFoods = JSON.parse(localStorage.getItem("foods")) || [];

const saveButton = document.querySelector(".save-button");
const saveCloseButton = document.querySelector(".save-close-button");

const urlParams = new URLSearchParams(window.location.search);
const foodId = parseInt(urlParams.get("id"));

let food = null;

if (!isNaN(foodId)) {
    food = allFoods.find(item => item.id === foodId);
    if (food) {
        const fieldMap = getFieldMap();
        Object.keys(fieldMap).forEach(key => {
            const el = document.getElementById(key);
            if (el) {
                const fieldName = fieldMap[key];

// Normalize keys: chuyển về lowercase để tìm dễ hơn
                const lowerField = fieldName.toLowerCase();

                const macro = food.macronutrients && getCaseInsensitiveValue(food.macronutrients, lowerField);
                const micro = food.micronutrients && getCaseInsensitiveValue(food.micronutrients, lowerField);
                const general = getCaseInsensitiveValue(food, lowerField);

                el.value = macro ?? micro ?? general ?? "";

            }
        });
    } else {
        alert("Không tìm thấy món ăn.");
    }
} else {
    alert("Thiếu hoặc sai ID trong URL.");
}
function getCaseInsensitiveValue(obj, targetKey) {
    if (!obj) return undefined;
    const foundKey = Object.keys(obj).find(key => key.toLowerCase() === targetKey);
    return foundKey ? obj[foundKey] : undefined;
}

function getFieldMap() {
    return {
        name: "name",
        source: "source",
        group: "category",
        quantity: "quantity",
        energy: "energy",
        fat: "fat",
        carbohydrate: "carbohydrate",
        protein: "protein",
        cholesterol: "Cholesterol",
        fiber: "Fiber",
        sodium: "Sodium",
        water: "Water",
        vitaminA: "Vitamin A",
        vitaminB6: "Vitamin B-6",
        vitaminB12: "Vitamin B-12",
        vitaminC: "Vitamin C",
        vitaminD: "Vitamin D (D2 + D3)",
        vitaminE: "Vitamin E",
        vitaminK: "Vitamin K",
        starch: "Starch",
        alcohol: "Alcohol",
        caffeine: "Caffeine",
        sugars: "Sugars",
        calcium: "Calcium",
        iron: "Iron",
        magnesium: "Magnesium",
        phosphorus: "Phosphorus",
        potassium: "Potassium",
        zinc: "Zinc",
        copper: "Copper",
        fluoride: "Fluoride",
        manganese: "Manganese",
        selenium: "Selenium",
        thiamin: "Thiamin",
        riboflavin: "Riboflavin",
        niacin: "Niacin",
        pantothenicAcid: "Pantothenic acid",
        folate: "Folate, total",
        folicAcid: "Folic acid",
        saturatedFat: "Fatty acids, total saturated",
        transFat: "Fatty acids, total trans",
        monoFat: "Fatty acids, total monounsaturated",
        polyFat: "Fatty acids, total polyunsaturated",
        chloride: "Chloride"
    };
}

saveButton.addEventListener("click", () => {
    if (isNaN(foodId)) {
        alert("ID không hợp lệ!");
        return;
    }

    const fieldMap = getFieldMap();

    const updatedFood = {
        id: foodId,
        name: document.getElementById("name").value,
        source: document.getElementById("source").value,
        category: document.querySelector("select").value,
        quantity: parseFloat(document.getElementById("quantity").value),
        macronutrients: {},
        micronutrients: {}
    };

    // Điền dữ liệu các chỉ số
    Object.keys(fieldMap).forEach(key => {
        const el = document.getElementById(key);
        if (el) {
            const value = parseFloat(el.value);
            const fieldName = fieldMap[key];
            const lowerField = fieldName.toLowerCase();

            if (["energy", "fat", "carbohydrate", "protein"].includes(key)) {
                updatedFood.macronutrients[fieldName] = isNaN(value) ? 0 : value;
            }
            else if (
                [
                    "Cholesterol", "Fiber", "Sodium", "Water",
                    "Vitamin A", "Vitamin B-6", "Vitamin B-12", "Vitamin C", "Vitamin D (D2 + D3)",
                    "Vitamin E", "Vitamin K", "Starch", "Alcohol", "Caffeine", "Sugars",
                    "Calcium", "Iron", "Magnesium", "Phosphorus", "Potassium", "Zinc", "Copper",
                    "Fluoride", "Manganese", "Selenium", "Thiamin", "Riboflavin", "Niacin",
                    "Pantothenic acid", "Folate, total", "Folic acid", "Fatty acids, total saturated"
                ].includes(fieldName)
            ) {
                updatedFood.micronutrients[fieldName] = isNaN(value) ? 0 : value;
            }
        }
    });

    // Cập nhật trong danh sách
    const index = allFoods.findIndex(item => item.id === foodId);
    if (index !== -1) {
        allFoods[index] = updatedFood;
        localStorage.setItem("foods", JSON.stringify(allFoods));
        alert("Cập nhật món ăn thành công!");
        window.location.href = "/html/product/foods.html";
    } else {
        alert("Không tìm thấy món ăn để cập nhật!");
    }
});
