function saveToLocalStorage(cart) {
    const cartArray = Array.from(cart);
    const cartString = JSON.stringify(cartArray);
    localStorage.setItem('storedItems', cartString);
    console.log(cart);
    console.log(cartString);
}

function retrieveFromLocalStorage() {
    let cartString = localStorage.getItem('storedItems');
    cart = JSON.parse(cartString);
    if (cart == null) {
        cart = [];
    }
    for (item of cart) {
        const roll = new Roll(item.type, item.glazing, item.size, item.basePrice);
        let index = cart.indexOf(item);
        cart[index] = roll;
    }
    console.log(cart);
    return cart;
}

function saveCartStorage() {
    const cartArray = Array.from(cartItems);
    const cartArrayString = JSON.stringify(cartArray);
    localStorage.setItem('storedCart', cartArrayString);
    saveToLocalStorage(cartArray);
}