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
					dataIngredient.push(data["meals"][i]["strIngredient1"] + " " + data["meals"][i]["strMeasure1"])
					dataIngredient.push(data["meals"][i]["strIngredient2"] + " " + data["meals"][i]["strMeasure2"])
					dataIngredient.push(data["meals"][i]["strIngredient3"] + " " + data["meals"][i]["strMeasure3"])
					dataIngredient.push(data["meals"][i]["strIngredient4"] + " " + data["meals"][i]["strMeasure4"])
					dataIngredient.push(data["meals"][i]["strIngredient5"] + " " + data["meals"][i]["strMeasure5"])
					dataIngredient.push(data["meals"][i]["strIngredient6"] + " " + data["meals"][i]["strMeasure6"])
					dataIngredient.push(data["meals"][i]["strIngredient7"] + " " + data["meals"][i]["strMeasure7"])
					dataIngredient.push(data["meals"][i]["strIngredient8"] + " " + data["meals"][i]["strMeasure8"])
					dataIngredient.push(data["meals"][i]["strIngredient9"] + " " + data["meals"][i]["strMeasure9"])
					dataIngredient.push(data["meals"][i]["strIngredient10"] + " " + data["meals"][i]["strMeasure10"])
					dataIngredient.push(data["meals"][i]["strIngredient11"] + " " + data["meals"][i]["strMeasure11"])
					dataIngredient.push(data["meals"][i]["strIngredient12"] + " " + data["meals"][i]["strMeasure12"])
					dataIngredient.push(data["meals"][i]["strIngredient13"] + " " + data["meals"][i]["strMeasure13"])
					dataIngredient.push(data["meals"][i]["strIngredient14"] + " " + data["meals"][i]["strMeasure14"])
					dataIngredient.push(data["meals"][i]["strIngredient15"] + " " + data["meals"][i]["strMeasure15"])
					dataIngredient.push(data["meals"][i]["strIngredient16"] + " " + data["meals"][i]["strMeasure16"])
					dataIngredient.push(data["meals"][i]["strIngredient17"] + " " + data["meals"][i]["strMeasure17"])
					dataIngredient.push(data["meals"][i]["strIngredient18"] + " " + data["meals"][i]["strMeasure18"])
					dataIngredient.push(data["meals"][i]["strIngredient19"] + " " + data["meals"][i]["strMeasure19"])
					dataIngredient.push(data["meals"][i]["strIngredient20"] + " " + data["meals"][i]["strMeasure20"])
					video.push(data["meals"][i]["strYoutube"])
/*					console.log(data["meals"])
					console.log(data["meals"][i]["strMeal"])
					console.log(data["meals"][i]["strInstructions"])
					console.log(data["meals"][i]["strYoutube"])
					console.log(dataIngredient)*/
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
