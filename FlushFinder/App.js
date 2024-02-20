import { StatusBar } from 'expo-status-bar';
import NavTabs from './src/components/NavTabs';
import {OriginLocationProvider} from './src/context/OriginLocation'
import { ToiletResponseProvider } from "./src/context/ToiletResponse";

export default function App() {
  return (
    <ToiletResponseProvider>
      <OriginLocationProvider>
        <NavTabs />
      </OriginLocationProvider>
    </ToiletResponseProvider>
  );
}
