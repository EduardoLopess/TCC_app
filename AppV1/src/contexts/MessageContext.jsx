import { createContext, useState } from "react";

const messageContext = createContext()

export const MessageProvider = ({children}) => {
    const [message, setMessage] = useState({
        text:'Teste',
        type: 'info'
        
    })

    const chargeMessage = (newMessage, type) => {
        setMessage({text: newMessage, type})
    }


    return (
        <messageContext.Provider value={{message, chargeMessage}}>
            {children}
        </messageContext.Provider>
    )
}



export const useMessage = () => useContext(messageContext)