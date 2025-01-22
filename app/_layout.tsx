import { Tabs } from "expo-router";
import "../global.css";
import { FontAwesome5 } from "@expo/vector-icons"; // Replace with any other icons if needed
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          height: 50,
          borderTopWidth: 1,
          borderTopColor: "#4b5563",
        },
        tabBarActiveTintColor: "rgb(190 24 93)", // Correct active label color
        tabBarInactiveTintColor: "rgb(148 163 184)", // Inactive label color
        tabBarLabelStyle: { fontSize: 14 }, // Label font size
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
          tabBarLabel: "For You",
        }}
      />
      <Tabs.Screen
        name="(tabs)/Like"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="heart" size={24} color={color} />
          ),
          tabBarLabel: "Like",
        }}
      />
      <Tabs.Screen
        name="(tabs)/Message"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
          tabBarLabel: "Message",
        }}
      />
      <Tabs.Screen
        name="(tabs)/Cart"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-cart" size={24} color={color} />
          ),
          tabBarLabel: "Cart",
        }}
      />
      <Tabs.Screen
        name="(tabs)/Account"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          tabBarLabel: "Account",
        }}
      />
    </Tabs>
  );
}
