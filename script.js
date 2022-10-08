import fetch from 'node-fetch';
getRandomMeal()

function getRandomMeal(){
    const resp= fetch("www.themealdb.com/api/json/v1/1/random.php")
    .then(function (response) {
        return response.json();
    })
    console.log(resp);
}


async function getMealbyId(id){
    const meal= await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=52772"+id)
}

async function getMealBySearch(term){
   const meals=await fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"+term)
}