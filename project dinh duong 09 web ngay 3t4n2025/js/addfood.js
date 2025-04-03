const modal = document.querySelector(".add-food-modal");
const cancelButton = document.querySelector(".cancel-button");
const saveButton = document.querySelector(".save-button");

cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
});

saveButton.addEventListener("click", () => {
    modal.style.display = "none";
});

function showModal() {
    modal.style.display = "flex";
}