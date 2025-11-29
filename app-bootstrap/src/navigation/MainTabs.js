import React from "react";
import { Text, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import StartupsNavigator from "./StartupsNavigator";
import EventsNavigator from "./EventsNavigator";
import PeopleNavigator from "./PeopleNavigator";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: "#ffffff",
          paddingTop: 12,
          paddingBottom: Platform.OS === 'ios' ? 28 : 36,
          height: Platform.OS === 'ios' ? 92 : 96,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
        tabBarActiveTintColor: "#6366F1",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen 
        name="Главная" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 26, color }}>⚡</Text>,
        }}
      />
      <Tab.Screen 
        name="Стартапы" 
        component={StartupsNavigator}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 26, color }}>💎</Text>,
        }}
      />
      <Tab.Screen 
        name="События" 
        component={EventsNavigator}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 26, color }}>🎯</Text>,
        }}
      />
      <Tab.Screen 
        name="Люди" 
        component={PeopleNavigator}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ fontSize: 26, color }}>✨</Text>,
        }}
      />
    </Tab.Navigator>
  );
}
