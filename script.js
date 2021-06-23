const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("result-heading"),
  single_mealEl = document.getElementById("single-meal");

//function serach meal and fetch api

function searchMeal(e) {  
  e.preventDefault();

  // Clear single meal
  single_mealEl.innerHTML = "";

  //get the seach term
  const term = search.value;

  //cheack for empty
  if (term.trim()) {
  } else {
    alert("please enter a search term");
  }
}
//Event Listiner

submit.addEventListener("submit", searchMeal);
