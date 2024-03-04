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

// 1)Esecuzione della funzione
cart = addToCart(cart, {
      name: 'iPhone',
      price: 1500,
      qty: 1
})

/* 2) Aggiungiamo 3 prodotti differenti nel carrello
* Input: Il carrello
* Output: carrello 
*/
export const add3Product = (aCart) => {
     let newCart = addToCart(aCart, { name: 'iPhone', price: 1500, qty: 2 });
     newCart = addToCart(aCart, { name: 'Galaxy S24', price: 1000, qty: 1 });
     newCart = addToCart(aCart, { name: 'Pixel 8', price: 700, qty: 3 });
     return newCart;
};



cart = add3Product(cart);
console.log(cart);

// 3) Calcolo del totale da pagare "Get amount"
export const getAmount = (cart) => {
      let amount = cart.reduce((accumulatore, numero)=>{
            return accumulatore + numero.price * numero.qty;
      }, 0);
      return amount;
};
console.log(getAmount(cart));

// 4) Calcolo totale delle qt.à
export const getQuantity = (cart) => {
      let quantity = cart.reduce((accumulatore, numero)=>{
            return accumulatore + numero.qty;
      }, 0);
      return quantity;
};
console.log(getQuantity(cart));

// 5) Opzione 1: svuota il carrello
export const deleteCart1 = (cart) => {
      cart.length = 0;
      return cart;
};