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

<<<<<<< HEAD
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
=======
//-----------------MADLIB  TWO-------------------------------------//
>>>>>>> c827fa99cbbb8bb66a62015a585aea3e70f85a5e
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

<<<<<<< HEAD
=======
//-----------------MADLIB  THREE-------------------------------------//
const submit3Button = document.getElementById('submit3');
const story3P = document.getElementById('story3');

const ingredientOneInput = document.getElementById('ingredientOne');
const ingredientOneError = document.getElementById('ingredientOne-error');

const ingredientTwoInput = document.getElementById('ingredientTwo');
const ingredientTwoError = document.getElementById('ingredientTwo-error');

const ingredientThreeInput = document.getElementById('ingredientThree');
const ingredientThreeError = document.getElementById('ingredientThree-error');

const ingredientFourInput = document.getElementById('ingredientFour');
const ingredientFourError = document.getElementById('ingredientFour-error');

submitButton.onclick = function () {

    // check to make sure user input a noun

    if (!nounInput.value) {
        nounError.textContent = "Please enter a NOUN";
    } else if (!verbInput.value) {
        verbError.textContent = "Please enter a VERB";
    } else if (!adjectiveInput.value) {
        adjectiveError.textContent = "Please enter a ADJECTIVE";
    } else if (!placeInput.value) {
        placeError.textContent = "Please enter a PLACE";
    } else {


        const story = "One day I went skydiving with my " +
            nounInput.value +
            " parachute. All my friends said I was crazy because they were using a " +
            verbInput.value +
            " parachute. We all " +
            placeInput.value + " out the plane……now I need new friends & a suit to wear to their funerals. So, who wants to go skydiving with me this weekend? Bring your " +
            adjectiveInput.value +
            " parachute!";
        storyP.textContent = story;



    }

    document.getElementById('container').style.display = 'none';
    document.getElementById('container2').style.display = 'block';
    document.getElementById('container3').style.display = 'block';

};


>>>>>>> c827fa99cbbb8bb66a62015a585aea3e70f85a5e
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


<<<<<<< HEAD
        const story = "The keyboard has" + oddNumberInput.value + " odd numbers." + shoeSizeInput.value + "has no value to your life" + favouriteSportInput.value + " your NOT good at it so STOP!!!" + iceCreamInput;
=======
        const story = "One fly fue mdnsadlas danss " +
            nounInput.value +
            " parachute. asdkajsdsadj kjas dsing a " +
            verbInput.value +
            " parachute. We all " +
            placeInput.value + " out the plane……now I need new friends & a suit to wear to their funerals. So, who wants to go skydiving with me this weekend? Bring your " +
            adjectiveInput.value +
            " parachute!";
        storyP.textContent = story



    }
};


submit3Button.onclick = function () {

    if (!ingredientOneInput.value) {
        ingredientOneError.textContent = "Please enter Ingredient One";
    } else if (!ingredientTwo.value) {
        IngredientTwoError.textContent = "Please enter Ingredient Two";
    } else if (!ingredientThreeInput.value) {
        ingredientThreeError.textContent = "Please enter Ingredient Three";
    } else if (!ingredientFourInput.value) {
        ingredientFourError.textContent = "Please enter Ingredient Four";
    } else {


        const story = "One fly fue mdnsadlas danss " +
            ingredientOneInput.value +
            " paraZmxzmls;cs ckasjcs " +
            ingredientTwoInput.value +
            " parachute. We all " +
            ingredientThreeInput.value + "  hxjashc acascj ascha hasx satheir funerals. So, who wants to go skydiving with me this weekend? Bring your " +
            ingredientFourInput.value +
            " parachute!";
        storyP.textContent = story


>>>>>>> c827fa99cbbb8bb66a62015a585aea3e70f85a5e

    }
    

};

    
    
