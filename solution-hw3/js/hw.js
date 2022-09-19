// BunBun Bake Shop Javascript

function glazingChange(element) {
    // Get value of selected glazing and pack option
    let glazeSelect = document.querySelector('#glazingOptions');
    const glazingPrice = glazeSelect.value;
    // console.log(glazingPrice);
    
    let packSelect = document.querySelector('#packOptions');
    const packPrice = packSelect.value;
    // console.log(packPrice);

    //Update price
    basePrice = 2.49
    pricing = (basePrice + Number(glazingPrice))*(packPrice); 
    document.querySelector("#totalPrice").innerText = '$' + pricing.toFixed(2);
}

glazingChange();