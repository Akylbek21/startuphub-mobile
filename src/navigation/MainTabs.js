import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

import StartupsScreen from "../screens/StartupsScreen";
import EventsScreen from "../screens/EventsScreen";
import ExpertsScreen from "../screens/ExpertsScreen";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerTitle: () => (
          <View style={{ flex: 1, paddingHorizontal: 8 }}>
            <TextInput
              placeholder="Поиск"
              placeholderTextColor="#94A3B8"
              style={{
                backgroundColor: "#F1F5F9",
                borderRadius: 12,
                paddingVertical: 8,
                paddingHorizontal: 12,
                fontSize: 14,
                color: "#0F172A",
                minWidth: 180,
              }}
              returnKeyType="search"
              onSubmitEditing={(e) => {
                // TODO: wire search to current tab list
              }}
            />
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Профиль")}
            style={{ marginRight: 12, paddingHorizontal: 10, paddingVertical: 6 }}
          >
            <Text style={{ fontSize: 16 }}>👤</Text>
          </TouchableOpacity>
        ),
        tabBarStyle: { backgroundColor: "#ffffff" },
        tabBarActiveTintColor: "#1D4ED8",
        tabBarInactiveTintColor: "#6B7280",
      })}
    >
      <Tab.Screen name="Стартапы" component={StartupsScreen} />
      <Tab.Screen name="События" component={EventsScreen} />
      <Tab.Screen name="Люди" component={ExpertsScreen} />
      {/** Hidden profile route for header button */}
      <Tab.Screen
        name="Профиль"
        component={LoginScreen}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
