var mealText = document.getElementById("mealText");
var mealBtn = document.getElementById("mealBtn");
var drinkText = document.getElementById("drinkText");
var drinkBtn = document.getElementById("drinkBtn");
var mealUnfold = document.getElementById("mealUnfold");
var drinkUnfold = document.getElementById("drinkUnfold");
var mealBody = document.getElementById("mealSection")
var drinkBody = document.getElementById("drinkSection")
// var savedbtn

//meal 
function getMeal() {
    
    var mealString = mealText.value
    console.log(mealString)
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5b8d54141cmsh405f541d3bf16e0p10cdeajsn2acda58ff1e5',
            'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(`https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${mealString}`, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            var createRecipeRow = document.createElement('tr');
            var recipeData = document.createElement('td')
            var title = document.createElement('button');

            title.textContent = data[i].title;
            
            recipeData.appendChild(title);
            createRecipeRow.appendChild(recipeData);
            mealBody.appendChild(createRecipeRow);
        }
        
    })
        
        .catch(err => console.error(err));
        
        console.log("hello")
    }    

mealBtn.addEventListener('click', getMeal)

//mealBody eventListener
mealBody.addEventListener('click', (event) => {
    const mealChoice = event.target.nodeName === 'BUTTON';
    if (!mealChoice) {
        return;
    }
    console.dir(event.target.id);
})

// mealUnfold.addEventListener('click', (event) => {
//     function mealFold() {
//         // Element.appendChild
//     }
    
//     //collapsable goes here?
// })

//Cocktail
function getCocktail() {
    var drinkString = drinkText.value;
    console.log(drinkString);
  
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5b8d54141cmsh405f541d3bf16e0p10cdeajsn2acda58ff1e5",
        "X-RapidAPI-Host": "cocktail-by-api-ninjas.p.rapidapi.com",
      },
    };
    fetch(
      `https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=${drinkString}`,
      options
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          var createDrinkRow = document.createElement("tr");
          var drinkData = document.createElement("td");
          var name = document.createElement("button");

          name.textContent = data[i].name;
          name.btn = data[i].name;
  
          drinkData.appendChild(name);
          createDrinkRow.appendChild(drinkData);
          drinkBody.appendChild(createDrinkRow);
        }
      })
  
      .catch((err) => console.error(err));
  
    console.log("drink");
  }
  
  drinkBtn.addEventListener("click", getCocktail);

//drinkBody eventListener
drinkBody.addEventListener('click', (event) => {
    const drinkChoice = event.target.nodeName === 'BUTTON';
    if (!drinkChoice) {
        return;
    }
    console.dir(event.target.id);
})