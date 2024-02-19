import { StatusBar } from 'expo-status-bar';
import NavTabs from './src/components/NavTabs';
import {OriginLocationProvider} from './src/context/OriginLocation'

export default function App() {
  return (
    <OriginLocationProvider>
      <NavTabs />
    </OriginLocationProvider>
  );
}
