const cartItems = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const roll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cartItems.add(roll);
    return roll;
}

// displaying items from cart to the DOM 
let savedCart = retrieveFromLocalStorage();
    for (const itemData of savedCart) {
        const cartItem = addNewRoll(itemData.type, itemData.glazing, itemData.size, itemData.basePrice);
        createRoll(cartItem);
    }

function createRoll(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.flex-cart-row');

    const removeBtn = roll.element.querySelector('#remove');
    removeBtn.addEventListener('click', () => {
        deleteRoll(roll);
    });

    const cartListElement = document.querySelector('#cartItems');
    cartListElement.append(roll.element);
    updateRoll(roll);  
}

function updateRoll(roll) {
    //Item image
    const rollImage = roll.element.querySelector('.rollpic-cart');
    let rollType = rolls[roll.type];
    let imageLink = rollType.imageFile;
    rollImage.src = "./assets/" + imageLink;

    //Item Title
    const rollTitle = roll.element.querySelector('#rollTitle');
    rollTitle.innerText = roll.type + " Cinnamon Roll";

    //Item Glazing Type
    const glazingType = roll.element.querySelector('#glazingType');
    glazingType.innerText = "Glazing: " + roll.glazing;

    //Item Pack Size
    const packSizeText = roll.element.querySelector('#packSize');
    packSizeText.innerText = "Pack Size: " + roll.size;

    //Item Price
    const itemPrice = roll.element.querySelector('.flex-cart-price');
    
    for (let i=0; i<allGlazing.length; i++) {
        let glaze = allGlazing[i];
        if (roll.glazing ==  glaze.flavor) {
            glazingPrice = glaze.priceAdd;
        }
    }

    for (let i=0; i<allPack.length; i++) {
        let pack = allPack[i];
        if (roll.size == pack.size) {
            packPrice = pack.priceAdd;
        }
    }
    
    // Using Formula from HW3/4
    let pricing = (Number(roll.basePrice) + Number(glazingPrice))*(packPrice);
    itemPrice.innerText = '$' + pricing.toFixed(2);
}

// fix cart array to identify identical items
function deleteRoll(roll) {

    // removing entry from DOM + updating price
    roll.element.remove();
    cartItems.delete(roll);
    updateTotalPrice(); 

    // removing item from cart array + saving to local storage
    delete roll.element;
    console.log(roll);
    console.log(cart);
    console.log(cart.indexOf(roll));
    let index = cart.indexOf(roll);
    cart.splice(index, 1);
    saveToLocalStorage();
}

// might delete this function
// function checkRoll(roll, cart) {
//     for (i=0; i<cart.length; i++) {
//         if (cart[i].type == roll.type && cart[i].basePrice == roll.basePrice 
//             && cart[i].glazing == roll.glazing && cart[i].size == roll.size) {
//             console.log(true);
//             cart.splice(i, 1);
//             console.log(cart);
//         }
//     }
// }

function updateTotalPrice() {
    let sum = 0;
    const price = document.querySelector('#cartTotalPrice');
    if (cartItems.size == 0) {
        price.innerText = '$' + 0;
    } else {
        for (const roll of cartItems) {
            const priceLine = roll.element.querySelector('.flex-cart-price'); 
            const singlePrice = priceLine.innerText;
            let onlyNumber = singlePrice.substring(1);
            sum += parseFloat(onlyNumber);
            price.innerText = '$' + sum.toFixed(2);
        }
    }
}

updateTotalPrice(); 
