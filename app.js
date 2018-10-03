const submitButton = document.getElementById ('submit');
const storyP = document.getElementById ('story');

const favShoeBrandInput = document.getElementById ('favShoeBrand');
const favShoeBrandError = document.getElementById ('favShoeBrand-error');

const favFoodInput = document.getElementById ('favFood');
const favFoodError = document.getElementById ('favFood-error');

const favMovieTitleInput = document.getElementById ('favMovieTitle');
const favMovieTitleError = document.getElementById ('favMovieTitle-error');

const verbInput = document.getElementById ('verb');
const verbError = document.getElementById ('verb-error');

submitButton.onclick = function() {
    
    // check to make sure user input a noun
    
    if (!favShoeBrandInput.value) {
        favShoeBrandError.textContent = "Please enter your Fav Shoe Brand";
    } else if (!favFoodInput.value) {
        favFoodError.textContent = "Please enter your Fav Food";
    } else if (!favMovieTitleInput.value) {
        favMovieTitleError.textContent = "Please enter your Fav Movie Title";
    } else if (!verbInput.value) {
        verbError.textContent = "Please enter a VERB";
    } else {
        
        const story = "One day I went skydiving with my " 
    + favShoeBrandInput.value + 
          " parachute." + " All my friends said I was crazy because they were using a " 
    + favFoodInput.value + 
          " parachute. We all " 
    + verbInput.value + " out the plane……now I need new friends & a suit to wear to their funerals. So, who wants to go skydiving with me this weekend? Bring your " 
    + favMovieTitleInput.value + 
          " parachute!";
    
    storyP.textContent = story;
        }
};
