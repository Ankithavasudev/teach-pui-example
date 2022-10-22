// BunBun Bake Shop Javascript

let cart = [];

const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

//Update header text (Roll type)
const headerElement = document.querySelector('#cinnamon-roll-header');
headerElement.innerText = rollType + " Cinnamon Roll"

// Update the image
const rollImage = document.querySelector(".product-pic");
let rollObj = rolls[rollType];
let imageLink = rollObj.imageFile;
rollImage.src = "./assets/" + imageLink;

// Update base price based on roll
let basePrice = rollObj.basePrice;
let totalPriceField = document.querySelector('#totalPrice');
totalPriceField.innerText = "$" + basePrice;
  
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// Add to Cart
function onClickAddToCart() {

    // Get current glaze + pack size selection
    let packSelect = document.querySelector("#packOptions");
    const packSize = packSelect.options[packSelect.selectedIndex].text;
    let glazeSelect = document.querySelector("#glazingOptions");
    const glazing = glazeSelect.options[glazeSelect.selectedIndex].text;

    // Save current product info into an instance of Roll 
    let roll = new Roll(rollType, glazing, packSize, basePrice);
    cart.push(roll);
    // from Local Storage.js
    saveToLocalStorage();
}
    
    //Populating Glazing Dropdowns
    let dropdownGlazing = document.querySelector("#glazingOptions");
    for (let i=0; i<allGlazing.length; i++) {
        let glaze = allGlazing[i];
        let option = document.createElement("option");
        option.text = glaze.flavor;
        option.value = glaze.priceAdd;
        dropdownGlazing.add(option);
    }
    
    //Populating Pack Dropdowns
    let dropdownPack = document.querySelector("#packOptions");
    for (let i=0; i<allPack.length; i++) {
        let pack = allPack[i];
        let option = document.createElement("option");
        option.text = pack.size;
        option.value = pack.priceAdd;
        dropdownPack.add(option);
    }
    
    //Price Updates based on dropdown selection change
    function glazingChange(element) {
        // get value of selected glazing option
        let glazeSelect = document.querySelector("#glazingOptions");
        const glazingPrice = glazeSelect.value;
        // console.log(glazingPrice);
    
        // get value of selected pack option
        let packSelect = document.querySelector("#packOptions");
        const packPrice = packSelect.value;
        // console.log(packPrice);
    
        // Price formula
        let pricing = (basePrice + Number(glazingPrice))*(packPrice); 
        document.querySelector("#totalPrice").innerText = '$' + pricing.toFixed(2);
    }
    
    glazingChange();
    retrieveFromLocalStorage();

