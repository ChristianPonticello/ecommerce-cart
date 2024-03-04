/**
 * 1) Permettere di inserire nel carrello dei prodotti. "Add to cart"
 * 2) Aggiungiamo 3 prodotti nel carrello 
 * 3) Calcolo del totale da pagare "Get amount"
 * 4) Calcolo del totale quantità prodotti "Get total qty"
 * 5) Funzionanilità che svuota il carrello "Reset cart"
 */

let cart = [];

/**
 * Input: prodotti
 * Output: 
 */
function addToCart (aCart, prod) {
      aCart.push(prod);
      return aCart;
}

// Esecuzione della funzione
cart = addToCart(cart, {
      name: 'iPhone',
      price: 1500,
      qty: 1
})

console.log(cart);