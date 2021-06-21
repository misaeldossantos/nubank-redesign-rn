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
import {NavigationContainer} from "@react-navigation/native";
import {createSharedElementStackNavigator} from "react-navigation-shared-element";
import CreditCardDetailsPage from "./src/pages/CreditCardDetailsPage";

configure({
  enforceActions: "never"
})

const Stack = createSharedElementStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator
          mode={"modal"}
          screenOptions={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        >
          <Stack.Screen
            name="Main"
            component={Main}
            // sharedElementsConfig={(route, otherRoute, showing) => {
            //   if(otherRoute.name === "CreditCardDetails") {
            //     return [{id: "creditCard"}];
            //   }
            //   return []
            // }}
          />
          <Stack.Screen
            name="CreditCardDetails"
            component={CreditCardDetailsPage}
            sharedElementsConfig={(route, otherRoute, showing) => {
              // if(otherRoute.name === "Main") {
              //   return [{id: "creditCard"}];
              // }
              return ["creditCard"]
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}


