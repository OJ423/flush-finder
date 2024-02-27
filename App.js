import { StatusBar } from "expo-status-bar";
import NavTabs from "./src/components/NavTabs";
import { OriginLocationProvider } from "./src/context/OriginLocation";
import { ToiletResponseProvider } from "./src/context/ToiletResponse";

import * as SplashScreen from "expo-splash-screen";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AppReadyContext, AppReadyContextProvider } from "./src/context/AppReady";

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [appIsReady, setAppIsReady] = useState(true);
  

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AppReadyContext.Provider value={{ appIsReady, setAppIsReady}}>
      <ToiletResponseProvider>
        <OriginLocationProvider>
          <NavTabs />
        </OriginLocationProvider>
      </ToiletResponseProvider>
    </AppReadyContext.Provider>
  );
}
