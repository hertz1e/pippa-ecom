import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)


    const addItem = (item, cantidad) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, cantidad}])
        } else {
            console.error('El producto ya está en el carrito')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = cart.reduce(
        (prev, current) => prev + current.cantidad * current.precio,
        0
      );

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total}}>
            { children }
        </CartContext.Provider>
    )
}