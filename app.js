function searchRecipe() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const recipes = document.querySelectorAll(".recipe");

    recipes.forEach((recipe) => {
        const recipeName = recipe.getAttribute("data-name").toLowerCase();
        if (recipeName.includes(searchInput)) {
            recipe.style.display = "block"; // Tampilkan jika cocok
        } else {
            recipe.style.display = "none"; // Sembunyikan jika tidak cocok
        }
    });
}