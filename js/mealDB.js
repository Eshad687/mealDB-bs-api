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
    searchResult.textContent = '';
    const details = document.getElementById('meal-detail');
    details.textContent = '';

    meals.forEach(meal => {
        //each meal is an object
        const div = document.createElement('div');
        // console.log(meal)
        div.classList.add('col');
        div.innerHTML = ` 
        <div onclick="mealDetails(${meal.idMeal})" class="card shadow">
           <img height="250" width
           "250" src="${meal.strMealThumb}" class="card-img-top p-3" alt="...">
           <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
           </div>
    </div>
        
        `
        searchResult.appendChild(div);
    });

}

const mealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals))

    //the data gives us an object.and the meals oproperty of the object has an array. the array has only one element . which is an object and the meal information
}

const displayMealDetails = meal => {
    //since the meal array has only one item, we can save the info in variable
    const mealDetail = meal[0];
    const details = document.getElementById('meal-detail');
    details.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('mb-3');


    div.innerHTML = `
                <img width="500" height="500" src="${mealDetail.strMealThumb}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mealDetail.strMeal}</h5>
                    <p class="card-text">${mealDetail.strInstructions.slice(0, 500)}</p>
                    <a class="text-decoration-none" href="${mealDetail.strYoutube}">See on Youtube</a>
                    <a class=" text-decoration-none"> </a>
                </div>
    `

    details.appendChild(div);
}
