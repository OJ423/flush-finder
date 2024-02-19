import {createContext, useState} from "react"

export const ToiletResponseContext = createContext()

export const ToiletResponseProvider = ({children}) => {
    const [toiletResponse, setToiletResponse] = useState({})

    return (
        <ToiletResponseContext.Provider value={{ toiletResponse, setToiletResponse}}>
          {children}
        </ToiletResponseContext.Provider>
      );
}
