import {createContext, useState} from "react"

export const OriginLocationContext = createContext()

export const OriginLocationProvider = ({children}) => {
    const [originLocation, setOriginLocation] = useState({})

    return (
        <OriginLocationContext.Provider value={{ originLocation, setOriginLocation}}>
          {children}
        </OriginLocationContext.Provider>
      );
}