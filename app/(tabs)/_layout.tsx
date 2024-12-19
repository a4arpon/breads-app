import { useClientOnlyValue } from "@/components/useClientOnlyValue"
import { useColorScheme } from "@/components/useColorScheme"
import Colors from "@/constants/Colors"
import { Tabs } from "expo-router"
import React from "react"

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
        }}
      />
    </Tabs>
  )
}
