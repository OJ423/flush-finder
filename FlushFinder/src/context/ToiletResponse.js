import {createContext, useState} from "react"

const ToiletResponseContext = createContext()

export const ToiletResponseProvider = ({children}) => {
    const [toiletResponse, setToiletResponse] = useState({})

    return (
        <ToiletResponseContext.Provider value={{ toiletResponse, setToiletResponse}}>
          {children}
        </ToiletResponseContext.Provider>
      );
}

export default ToiletResponse