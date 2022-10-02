var mealText = document.getElementById("mealText");
var mealBtn = document.getElementById("mealBtn");
var mealUnfold = document.getElementById("mealUnfold");
var mealBody = document.getElementById("mealSection");
var mealAddBtn = document.getElementById("mealAdd");
var mealListLi = document.querySelector("#mealList");
var mealList = [];

var urlResponse = [];

var drinkText = document.getElementById("drinkText");
var drinkBtn = document.getElementById("drinkBtn");
var drinkUnfold = document.getElementById("drinkUnfold");
var drinkBody = document.getElementById("drinkSection");
var drinkAddBtn = document.getElementById("drinkAdd");
var drinklistLi = document.querySelector("#drinkList");
var drinkList = [];

//meal
function getMeal() {
  var mealString = mealText.value;
  console.log(mealString);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5b8d54141cmsh405f541d3bf16e0p10cdeajsn2acda58ff1e5",
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    },
  };
  fetch(
    `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${mealString}`,
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var createRecipeRow = document.createElement("li");
        var recipeData = document.createElement("td");
        var title = document.createElement("button");
        element.setAttribute("data-title", "title");

        title.textContent = data[i].title;

        recipeData.appendChild(title);
        createRecipeRow.appendChild(recipeData);
        mealBody.appendChild(createRecipeRow);
      }
    })

    .catch((err) => console.error(err));

  console.log("hello");
}

mealBtn.addEventListener("click", getMeal);

//mealBody eventListener
mealBody.addEventListener("click", (event) => {
  const mealChoice = event.target.nodeName === "BUTTON";
  if (!mealChoice) {
    return;
  }
  console.dir(event.target.id);
});

//Render Meal
function renderMeal(mealAdd) {
//   console.log(mealAdd);
  if (!mealAdd) return;

  mealListLi.innerHTML = "";
  console.log(mealAdd);
  mealList.push(mealAdd);

  for (let i = 0; i < mealList.length; i++) {
    var mList = mealList[i];

    var li = document.createElement("li");
    li.textContent = mList;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "X";

    li.appendChild(button);
    mealListLi.appendChild(li);
  }
}

// Add meal to local storage
function storeMeals() {
  localStorage.setItem("meals", JSON.stringify(mealList));
}

//meal Add Button
mealAddBtn.addEventListener("click", (event) => {
  console.log("dicks");
  var mealAdd = document.getElementById("mealText").value;

  renderMeal(mealAdd);
  storeMeals();
});

//Delete list item
mealListLi.addEventListener("click", function(event) {
    var melement = event.target;
  
    // Checks if element is a button
    if (melement.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = melement.parentElement.getAttribute("data-index");
        mealList.splice(index, 1);
        mealListLi.removeChild(mealListLi.childNodes[index]);

      // Store updated todos in localStorage, re-render the list
        storeMeals();
        renderMeal();
        
    }
  });

//collapsble
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible.expandable');
  var instances = M.Collapsible.init(elems, { accordion: false });
});


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
drinkBody.addEventListener("click", (event) => {
  const drinkChoice = event.target.nodeName === "BUTTON";
  if (!drinkChoice) {
    return;
  }
  console.dir(event.target.id);
});

//Render Drinks
function renderDrinks(drinkAdd) {
  console.log(drinkAdd);
  if (!drinkAdd) return;

  drinklistLi.innerHTML = "";
  console.log(drinkAdd);
  drinkList.push(drinkAdd);

  for (let i = 0; i < drinkList.length; i++) {
    var dList = drinkList[i];

    var li = document.createElement("li");
    li.textContent = dList;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "X";

    li.appendChild(button);
    drinklistLi.appendChild(li);
  }
}

// Add drinks to local storage
function storeDrinks(drinkAdd) {
  localStorage.setItem("drinks", JSON.stringify(drinkList));
}

//Drink Add Button
drinkAddBtn.addEventListener("click", (event) => {
  console.log("dicks2");
  var drinkAdd = document.getElementById("drinkText").value;

  renderDrinks(drinkAdd);
  storeDrinks();
});

//Delete item
drinklistLi.addEventListener("click", function(event) {
    var delement = event.target;
  
    // Checks if element is a button
    if (delement.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = delement.parentElement.getAttribute("data-index");
        drinkList.splice(index, 1);
        drinklistLi.removeChild(drinklistLi.childNodes[index]);

      // Store updated todos in localStorage, re-render the list
        storeDrinks();
        renderMeal();
        
    }
  });


//get items from local storage on page load
function init() {
  var storedMeals = JSON.parse(localStorage.getItem("mealList"));
  var storedDrinks = JSON.parse(localStorage.getItem("drinkList"));

  if (storedMeals !== null) {
    mealList = storedMeals;
  }
  if (storedDrinks !== null) {
    drinkList = storedDrinks;
  }
  renderMeal();
  renderDrinks();
}

init();
