import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import MainTabs from './src/navigation/MainTabs';

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
