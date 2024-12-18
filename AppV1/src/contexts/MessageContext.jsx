import { createContext } from "react";

const MessageContext = createContext()

export const MessageProvider = ({children}) => {
    return (
        <MessageProvider.Provider value={{}}>
            {children}
        </MessageProvider.Provider>
    )
}



export const useMessage = () => useContext(MessageContext)