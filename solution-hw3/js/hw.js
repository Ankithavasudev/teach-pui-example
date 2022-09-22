// BunBun Bake Shop Javascript


// Glazing Options Array
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

// Pack Options Array
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
    console.log(glazingPrice);

    // get value of selected pack option
    let packSelect = document.querySelector("#packOptions");
    const packPrice = packSelect.value;
    console.log(packPrice);

    //Update price
    let basePrice = 2.49;
    // Price formula
    let pricing = (basePrice + Number(glazingPrice))*(packPrice); 
    document.querySelector("#totalPrice").innerText = '$' + pricing.toFixed(2);
}

glazingChange();