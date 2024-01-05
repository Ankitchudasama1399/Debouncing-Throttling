let timeout = null;

document.getElementById("serach").addEventListener("input", function() {
        
    clearInterval(timeout);
    timeout = setTimeout(function() {
        searchRecipes(document.getElementById("serach").value)
    },2000)
});

async function searchRecipes(query) {
   try {
    
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    
    let data = await res.json();

    showRecipes(data.meals);

   } catch (error) {
    
    console.log(error);
   }
}

function showRecipes(recipes){
    
    let recipeList = document.getElementById("conteinar");
    console.log(recipes);
    recipeList.innerHTML = "";

    if(recipes){
        recipes.forEach(recipe  => {
           
            let recipeDiv = document.createElement("div");
            recipeDiv.setAttribute("class", "storeg");

            let heading = document.createElement("h3");
            heading.setAttribute("class", "new-r");

            let image = document.createElement("img");
            image.setAttribute("class", "image");

            heading.textContent = recipe.strMeal;
            image.src = recipe.strMealThumb;

            

            recipeDiv.append(heading, image);
            
            recipeList.appendChild(recipeDiv);
        });
    }
}