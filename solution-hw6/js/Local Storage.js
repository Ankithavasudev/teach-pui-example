function saveToLocalStorage() {
    console.log(cart);
    const cartString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartString);
    console.log(cartString);
}

function retrieveFromLocalStorage() {
    let cartString = localStorage.getItem('storedCart');
    cart = JSON.parse(cartString);
    if (cart == null) {
        cart = [];
    }
    for (item of cart) {
        const roll = new Roll(item.type, item.glazing, item.size, item.basePrice);
        let index = cart.indexOf(item);
        cart[index] = roll;
    }
    // console.log(cart);
    return cart;
}