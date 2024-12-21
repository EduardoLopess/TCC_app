import { createContext, useState, useContext, useEffect } from "react";
import { BeerData } from "../../data/BeerData";

const cartContext = createContext()

export const CartProvider = ({children}) => {
    const [itemCart, setItemCart] = useState([])
    const [cartIsVisibility, setCartIsVisibility] = useState(false)
    const [checkStatus, setCheckStatus] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)


    useEffect(() => {
        if(itemCart.length === 0) {
            setCartIsVisibility(false)
        }
    }), [itemCart]



    const openModal = () => setModalVisible(true)
    const closeModal = () => setModalVisible(false)

    const addItem = (id) => {
        setItemCart((prevCart) => {
            const item = BeerData.find((item) => item.id === id);
    
            if (item) {
                const existingItem = prevCart.find((cartItem) => cartItem.id === id);
    
                if (existingItem) {
                    // Incrementa a quantidade, garantindo que seja um número
                    return prevCart.map((cartItem) =>
                        cartItem.id === id ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 } : cartItem
                    );
                } else {
                    // Adiciona o item com quantidade inicial de 1
                    return [...prevCart, { ...item, quantity: 1 }];
                }
            }
            setCheckStatus(true)
          setCartIsVisibility(true)
            
            return prevCart;
        });
       
    };

    // const addItem = (id) => {
    //     setItemCart((prevCart) => {
    //         console.log(prevCart)
    //         const item = BeerData.find((item) => item.id === id)
    //         if(item){
    //             console.log(prevCart)
    //             return [...prevCart, item]
    //         }else{
    //             console.log("nao encontrad")
    //             return prevCart
    //         }
    //     })
        
    //     setCheckStatus(true)
    //     setCartIsVisibility(true) 
    // }

    const removeItem = (id) => {
        
        setItemCart((prevCart) => prevCart.filter((item) => item.id !== id))
      
        console.log('item id', id,' removido' )


    }

    return (
        <cartContext.Provider value={{
            openModal, 
            closeModal, 
            modalVisible, 
            addItem, 
            removeItem,
            cartIsVisibility,
            itemCart,
            checkStatus

        }}>
            {children}
        </cartContext.Provider>
    )
}


export const useCart = () => useContext(cartContext)