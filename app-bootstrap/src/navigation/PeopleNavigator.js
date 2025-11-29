import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PeopleListScreen from '../screens/people/PeopleListScreen';
import PersonProfileScreen from '../screens/people/PersonProfileScreen';
import PeopleAIMatchScreen from '../screens/people/PeopleAIMatchScreen';
import UserProfileScreen from '../screens/profile/UserProfileScreen';

const Stack = createNativeStackNavigator();

export default function PeopleNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PeopleList"
        component={PeopleListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="PersonProfile" component={PersonProfileScreen} options={{ title: 'Профиль' }} />
      <Stack.Screen name="PeopleAIMatch" component={PeopleAIMatchScreen} options={{ title: 'AI-match' }} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Профиль (мой)' }} />
    </Stack.Navigator>
  );
}


