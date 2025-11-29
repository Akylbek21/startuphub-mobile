import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartupsListScreen from '../screens/startups/StartupsListScreen';
import CreateStartupScreen from '../screens/startups/CreateStartupScreen';
import StartupFiltersScreen from '../screens/startups/StartupFiltersScreen';
import StartupDetailScreen from '../screens/startups/StartupDetailScreen';
import StartupAIAnalysisScreen from '../screens/startups/StartupAIAnalysisScreen';
import UserProfileScreen from '../screens/profile/UserProfileScreen';

const Stack = createNativeStackNavigator();

export default function StartupsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartupsList"
        component={StartupsListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CreateStartup" component={CreateStartupScreen} options={{ title: 'Создать стартап' }} />
      <Stack.Screen name="StartupFilters" component={StartupFiltersScreen} options={{ title: 'Фильтры' }} />
      <Stack.Screen name="StartupDetail" component={StartupDetailScreen} options={{ title: 'Стартап' }} />
      <Stack.Screen name="StartupAIAnalysis" component={StartupAIAnalysisScreen} options={{ title: 'AI анализ' }} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Профиль' }} />
    </Stack.Navigator>
  );
}


