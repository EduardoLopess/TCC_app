import { createContext, useContext, useState } from "react"

const ordersContext = createContext()

export const OrdersProvider = ({children}) => {
    const [order, setOrder] = useState([])

    const createOrder = () => {
        setOrder
    }

    return (
        <ordersContext.Provider value={{createOrder}}>
            {children}
        </ordersContext.Provider>
    )
}

export const useOrder = () =>  useContext(ordersContext)