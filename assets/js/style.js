var mealText = document.getElementById("mealText");
var mealBtn = document.getElementById("mealBtn");
var drinkText = document.getElementById("drinkText");
var drinkBtn = document.getElementById("drinkBtn");

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


drinkBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var drinkString = drinkText.value
    console.log(drinkString)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5b8d54141cmsh405f541d3bf16e0p10cdeajsn2acda58ff1e5',
            'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(`https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=${drinkString}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
});
