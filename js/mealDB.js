//the data will be an object and in the object meals property has an array which has the information. the array elements are objects.

const loadFoods = () => {
    //taking the search text
    const searchTextField = document.getElementById('search-field');
    const searchText = searchTextField.value;
    searchTextField.value = '';



    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    //we only need the meals. So, passing only the meals property. it is an array
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))

}

const displayFood = meals => {
    const searchResult = document.getElementById('search-result');

    meals.forEach(meal => {
        //each meal is an object
        const div = document.createElement('div');

        div.classList.add('col');
        div.innerHTML = ` 
        <div class="card">
           <img height="250" width
           "250" src="${meal.strMealThumb}" class="card-img-top p-3" alt="...">
           <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
           </div>
    </div>
        
        `
        searchResult.appendChild(div);
    })

}
