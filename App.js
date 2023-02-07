import 'react-native-gesture-handler';
import React, {useEffect, useState, safeAr} from 'react';
import {SafeAreaView} from "react-native";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import StackNavigator from "./src/StackNavigator";
import { NavigationContainer } from '@react-navigation/native';
// import AuthStack from './src/routes/authStack';
import { AuthProvider } from './src/useAuth';
import useAuth from "./src/useAuth";

const App = () => {


  return(
    //wrap-nahme StackNavigatora sus AuthProvider za da moje vseki komponent v nego da polza user promenlivata
    // <SafeAreaProvider>
      <NavigationContainer >
        <AuthProvider>
              <StackNavigator   />
        </AuthProvider>
      </NavigationContainer>
      // {/* </SafeAreaProvider> */}

  
  

  );
};

export default App;