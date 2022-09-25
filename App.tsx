import React, { useEffect, useState } from "react";
import { SplashScreen } from "./src/components";
import { Bookings } from "./src/containers";
import { Provider } from "react-native-paper";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const subs = setTimeout(() => {
      setIsReady(true);
    }, 3000);

    return () => {
      clearTimeout(subs);
    };
  }, []);

  return <Provider>{isReady ? <Bookings /> : <SplashScreen />}</Provider>;
}
