import React from 'react';
import {ThemeProvider} from "react-native-magnus";
import theme from "./src/core/styles/theme";
import {
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_900Black,
  useFonts
} from '@expo-google-fonts/montserrat';
import Main from "./src/pages/Main";
import {configure} from "mobx";

configure({
  enforceActions: "never"
})

export default function App() {
  let [fontsLoaded] = useFonts({
    black: Montserrat_900Black,
    light: Montserrat_300Light,
    thin: Montserrat_100Thin,
    medium: Montserrat_500Medium,
    bold: Montserrat_700Bold,
    regular: Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}


