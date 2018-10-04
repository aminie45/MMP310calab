const submitButton = document.getElementById('submit');
const storyP = document.getElementById('story');

const nounInput = document.getElementById('noun');
const nounError = document.getElementById('noun-error');

const verbInput = document.getElementById('verb');
const verbError = document.getElementById('verb-error');

const adjectiveInput = document.getElementById('adjective');
const adjectiveError = document.getElementById('adjective-error');

const placeInput = document.getElementById('place');
const placeError = document.getElementById('place-error');

//-----------------MADLIB 2-------------------------------------//
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

};


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



        const story = "The keyboard has" + oddNumberInput.value + " odd numbers." + shoeSizeInput.value + "has no value to your life" + favouriteSportInput.value + " " + iceCreamInput;



    }
};
