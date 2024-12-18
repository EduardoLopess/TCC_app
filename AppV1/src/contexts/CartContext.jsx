import { createContext, useState } from "react";

const cartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [checkStatus, setCheckStatus] = useState(false)

    const addItem = (id) => {
        setCheckStatus(true)

    }

    const removeItem = (id) => {

    }

    return (
        <CartProvider.Provider value={{addItem, removeItem}}>
            {children}
        </CartProvider.Provider>
    )
}


export const useCart = () => useContext(cartContext)