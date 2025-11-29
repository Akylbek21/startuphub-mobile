import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsListScreen from '../screens/events/EventsListScreen';
import EventsMapScreen from '../screens/events/EventsMapScreen';
import EventFiltersScreen from '../screens/events/EventFiltersScreen';
import EventDetailScreen from '../screens/events/EventDetailScreen';
import EventsAIRecommendScreen from '../screens/events/EventsAIRecommendScreen';
import UserProfileScreen from '../screens/profile/UserProfileScreen';

const Stack = createNativeStackNavigator();

export default function EventsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EventsList"
        component={EventsListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EventsMap" component={EventsMapScreen} options={{ title: 'Карта' }} />
      <Stack.Screen name="EventFilters" component={EventFiltersScreen} options={{ title: 'Фильтры' }} />
      <Stack.Screen name="EventDetail" component={EventDetailScreen} options={{ title: 'Событие' }} />
      <Stack.Screen name="EventsAIRecommend" component={EventsAIRecommendScreen} options={{ title: 'AI подбор' }} />
      <Stack.Screen name="UserProfile" component={UserProfileScreen} options={{ title: 'Профиль' }} />
    </Stack.Navigator>
  );
}


