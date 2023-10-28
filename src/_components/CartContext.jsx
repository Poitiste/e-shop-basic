//sources : https://github.com/coopercodes/ReactEcommerceStoreWithStripeAPI/blob/main/store/src/CartContext.js
// https://www.youtube.com/watch?v=_8M-YVY76O8

import { createContext, useState, useEffect } from 'react'
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext({
  items: [],
  getProductQuantity: (id) => { },
  addToCart: (product, productInDB) => { },
  addOneToCart: (product) => { },
  removeOneFromCart: (id) => { },
  deleteFromCart: (id) => { },
  getTotalCost: () => { }
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useLocalStorage('cart', []);
  const [cartQuantity, setCartQuantity] = useLocalStorage('quantity', []);

  function getProductQuantity(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity;
    return quantity === undefined ? 0 : quantity;
  }

  function addToCart(product, productInDB) {
    const quantity = getProductQuantity(product.id);

    if (quantity === 0) { // product is not in cart
      setCartProducts([...cartProducts, product]);
      setCartQuantity([...cartQuantity, productInDB])
    }
    else { // product is in cart
      setCartProducts(
        cartProducts.map(item =>
          item.id === product.id ?
            { ...item, quantity: product.quantity }
            : item
        )
      )
    }
  }

  function addOneToCart(product) {
    const quantity = getProductQuantity(product.id);
    const MAXquantity = cartQuantity.find(item => item.id === product.id)?.quantity;

    console.log("MAXquantity", MAXquantity);
    if (quantity !== 0) {// product is in cart

      setCartProducts(
        cartProducts.map(item =>
          (item.id === product.id) && (item.quantity + 1 <= MAXquantity) ?
            { ...item, quantity: product.quantity + 1 }
            : item
        )
      )
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          item =>
            item.id === id ?
              { ...item, quantity: item.quantity - 1 }
              : item
        )
      )
    }
  }

  function deleteFromCart(id) {
    setCartProducts(cartProducts.filter(currentProduct => {
      return currentProduct.id !== id;
    }))
    setCartQuantity(cartQuantity.filter(currentProduct => {
      return currentProduct.id !== id;
    }))
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      return totalCost += (cartItem.price * cartItem.quantity);
    });
    return Math.round(totalCost * 100) / 100;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addToCart,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;


// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context