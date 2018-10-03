const submitButton = document.getElementById('submit');
const storyP = document.getElementById('story');

const favShoeBrandInput = document.getElementById ('favShoeBrand');
const favShoeBrandError = document.getElementById ('favShoeBrand-error');

const favFoodInput = document.getElementById ('favFood');
const favFoodError = document.getElementById ('favFood-error');

const favMovieTitleInput = document.getElementById ('favMovieTitle');
const favMovieTitleError = document.getElementById ('favMovieTitle-error');

const verbInput = document.getElementById ('verb');
const verbError = document.getElementById ('verb-error');

submitButton.onclick = function () {

            // If an error if no is made
    
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
    + favMovieTitleInput.value + " parachute!";
    
        storyP.textContent = story;
        
    
    document.getElementById('container2').style.display = 'block';
    //document.getElementById('container').style.display = 'none';
    }
};

//-----------------MADLIB 2---------------------------//
const submit2Button = document.getElementById('submit2');
const story2P = document.getElementById('story2');

const oddNumberInput = document.getElementById('oddNumber');
const oddNumberError = document.getElementById('oddNumber-error');

const shoeSizeInput = document.getElementById('shoeSize');
const shoeSizeError = document.getElementById('shoeSize-error');

const favouriteSportInput = document.getElementById('favouriteSport');
const favouriteSportError = document.getElementById('favouriteSport-error');

const iceCreamInput = document.getElementById('iceCream');
const iceCreamError = document.getElementById('iceCream-error');

submit2Button.onclick = function () {

     if (!oddNumberInput.value) {
        oddNumberError.textContent = "Please enter a Odd Number";
    } else if (!shoeSizeInput.value) {
        shoeSizeError.textContent = "Please enter a Shoe Size";
    } else if (!favouriteSportInput.value) {
        favouriteSportError.textContent = "Please enter a Sport";
    } else if (!iceCreamInput.value) {
        iceCreamError.textContent = "Please enter an Ice Cream Flavour";
    } else {


        const story = "The keyboard has" + oddNumberInput.value + " odd numbers." + shoeSizeInput.value + "has no value to your life" + favouriteSportInput.value + " your NOT good at it so STOP!!!" + iceCreamInput;

    }
    

};

    
    
