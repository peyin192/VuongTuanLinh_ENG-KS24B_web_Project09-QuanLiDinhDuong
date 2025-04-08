const saveButton = document.querySelector(".save-button");

saveButton.addEventListener("click", (e) => {
    const inputs = document.querySelectorAll("input[type='text'], input[type='number'], select");
    let isValid = true;

    inputs.forEach((input) => {
        if (input.tagName === "SELECT" && input.selectedIndex === 0) {
            input.classList.add("is-invalid");
            isValid = false;
        } else if (input.value.trim() === "") {
            input.classList.add("is-invalid");
            isValid = false;
        } else {
            input.classList.remove("is-invalid");
        }
    });

    if (!isValid) {
        alert("Vui lòng điền đầy đủ thông tin trước khi lưu!");
        return;
    }

    // Lấy thông tin cơ bản
    const name = document.querySelector("input[placeholder='Name']").value.trim();
    const source = document.querySelector("input[placeholder='Source']").value.trim();
    const category = document.querySelector("select").value;
    const quantity = parseFloat(document.querySelector("input[placeholder='Quantity']").value.trim());

    // Lấy chỉ số dinh dưỡng
    const macroKeys = ["Energy", "Fat", "Carbohydrate", "Protein"];
    const macronutrients = {};
    const micronutrients = {};

    document.querySelectorAll(".input-container").forEach(container => {
        const label = container.querySelector("span").textContent.trim();
        const value = parseFloat(container.querySelector("input").value.trim()) || 0;

        if (macroKeys.includes(label)) {
            macronutrients[label.toLowerCase()] = value;
        } else {
            micronutrients[label] = value;
        }
    });

    const newFood = {
        id: Date.now(),
        name,
        source,
        category,
        quantity,
        macronutrients,
        micronutrients
    };

    const foods = JSON.parse(localStorage.getItem("foods")) || [];
    foods.push(newFood);
    localStorage.setItem("foods", JSON.stringify(foods));



    alert("Lưu thành công!");
    window.location.href = "/html/product/foods.html";
});
