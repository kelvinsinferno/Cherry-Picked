var mealText = document.getElementById("mealText");
var mealBtn = document.getElementById("mealBtn");
var drinkText = document.getElementById("drinkText");
var drinkBtn = document.getElementById("drinkBtn");
var mealUnfold = document.getElementById("mealUnfold");
var drinkUnfold = document.getElementById("drinkUnfold");


//meal 
mealBtn.addEventListener('click', (event) => {
    event.preventDefault();
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
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
});

mealUnfold.addEventListener('click', (event) => {
    function mealFold() {
        // Element.appendChild
    }
    
    //collapsable goes here?
})

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
          var name = document.createElement("p");
          name.textContent = data[i].name;
  
          drinkData.appendChild(name);
          createDrinkRow.appendChild(drinkData);
          drinkBody.appendChild(createDrinkRow);
        }
      })
  
      .catch((err) => console.error(err));
  
    console.log("drink");
  }
  
  drinkBtn.addEventListener("click", getCocktail);
