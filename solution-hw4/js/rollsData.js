// BunBun Bake Shop Javascript
//rollsData JS

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

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
  
// Add to Cart
function onClickAddToCart() {

    // Get current glaze + pack size selection
    let packSelect = document.querySelector("#packOptions");
    const packSize = packSelect.options[packSelect.selectedIndex].text;
    let glazeSelect = document.querySelector("#glazingOptions");
    const glazing = glazeSelect.options[glazeSelect.selectedIndex].text;

    class Roll {
        constructor(rollType, rollGlazing, packSize, basePrice) {
            this.type = rollType;
            this.glazing =  rollGlazing;
            this.size = packSize;
            this.basePrice = basePrice;
        }
    }

    // Save current product info into an instance of Roll 
    let roll = new Roll(rollType, glazing, packSize, basePrice);
    cart.push(roll);
    console.log(cart);
}
