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
  
  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       console.log("promiser countdown");
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //       console.log(appIsReady, "<--appisReady state");
  //       console.log(setAppIsReady, "<--setAppIsReady state");
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, [appIsReady]);

  const onLayoutRootView = useCallback(async () => {
    console.log(appIsReady,'app is ready value in app')
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
