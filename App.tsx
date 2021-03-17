import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  HomeScreen,
  PlannerScreen,
  SettingsScreen,
  RecipesScreen,
  TrackerScreen,
} from "./screens";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ focused, color }) => (
                <MaterialCommunityIcons
                  name={focused ? "home" : "home-outline"}
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Tracker"
            component={TrackerScreen}
            options={{
              tabBarLabel: "Tracker",
              tabBarIcon: ({ focused, color }) => (
                <MaterialCommunityIcons
                  name={focused ? "file-chart" : "file-chart-outline"}
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Planner"
            component={PlannerScreen}
            options={{
              tabBarLabel: "Planner",
              tabBarIcon: ({ focused, color }) => (
                <MaterialCommunityIcons
                  name={
                    focused ? "calendar-refresh" : "calendar-refresh-outline"
                  }
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Recipes"
            component={RecipesScreen}
            options={{
              tabBarLabel: "Recipes",
              tabBarIcon: ({ focused, color }) => (
                <MaterialCommunityIcons
                  name={focused ? "food-apple" : "food-apple-outline"}
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ focused, color }) => (
                <MaterialCommunityIcons
                  name={focused ? "cog" : "cog-outline"}
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
