var container = document.querySelector(".container");
var searchRecipe = document.querySelector(".search-recipe")
var boxRecipe = document.querySelector(".box-recipe")

var dataIngredient = []
var video = []

searchRecipe.addEventListener("click", function(){
	searchRecipe.innerHTML = "Следующий рецепт"
	boxRecipe.style.border = 2 + "px solid black"
	boxRecipe.innerHTML = ""
	dataIngredient = []
	ingredients = []
/*	video = []*/

	var link = "https://www.themealdb.com/api/json/v1/1/random.php"

	$.getJSON(link, function (data){
		for(var i = 0; i < data["meals"].length; i++){
			for(var j = 0; j < 20; j++){
				dataIngredient.push(data["meals"][i]["strIngredient" + j] + " " + data["meals"][i]["strMeasure" + j])
			}
					video.push(data["meals"][i]["strYoutube"])
					console.log(video[i])

					var nameRecipe = document.createElement("div");
					nameRecipe.classList.add("name-recipe")
					boxRecipe.appendChild(nameRecipe)
					nameRecipe.innerHTML = data["meals"][i]["strMeal"]

					var imageRecipe = document.createElement("img")
					imageRecipe.classList.add("image")
					imageRecipe.setAttribute("src", data["meals"][i]["strMealThumb"])
					boxRecipe.appendChild(imageRecipe)

					var boxIngredients = document.createElement("div");
					boxIngredients.classList.add("box-ingredients")
					boxRecipe.appendChild(boxIngredients)

					var methodOfPreparation = document.createElement("div")
					methodOfPreparation.classList.add("method-of-preparation")
					boxRecipe.appendChild(methodOfPreparation)
					methodOfPreparation.innerHTML = data["meals"][i]["strInstructions"]

					var boxVideo = document.createElement("div")
					boxVideo.classList.add("box-video")
					boxRecipe.appendChild(boxVideo)

					var linkVideo = document.createElement("a")
					boxVideo.appendChild(linkVideo)
					linkVideo.innerHTML = "Видео приготовления блюда"
					linkVideo.setAttribute("href", data["meals"][i]["strYoutube"])

		}
		for(var i = 0; i < dataIngredient.length; i++){
			var ingredients = document.createElement("div")
			ingredients.classList.add("ingredients")
			boxIngredients.appendChild(ingredients)
			ingredients.innerHTML = dataIngredient[i]
		}
		
	})
})
