let allGlazing = [
    { 
        flavor: 'Keep Original',
        priceAdd: 0.00,
    },
    {
        flavor: 'Sugar Milk',
        priceAdd: 0.00,
    },
    {
        flavor: 'Vanilla Milk',
        priceAdd: 0.50,
    },
    { 
        flavor: 'Double Chocolate',
        priceAdd: 1.50,
    }
    ];

let allPack = [
    { 
        size: 1,
        priceAdd: 1,
    },
    { 
        size: 3,
        priceAdd: 3,
    },
    { 
        size: 6,
        priceAdd: 5,
    },
    { 
        size: 12,
        priceAdd: 10,
    },
    ];

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

const RollOne = addNewRoll(
    "Original",
    'Sugar Milk',
    '1',
    '2.49',
)

const RollTwo = addNewRoll(
    "Walnut",
    'Vanilla Milk',
    '12',
    '3.49',
)

const RollThree = addNewRoll(
    "Raisin",
    'Sugar Milk',
    '3',
    '2.99',
)

const RollFour = addNewRoll(
    "Apple",
    'Keep Original',
    '3',
    '3.49',
)

for (const roll of cartItems) {
    createRoll(roll);
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

function deleteRoll(roll) {
    roll.element.remove();
    cartItems.delete(roll);
    updateTotalPrice(); 
}

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