import { Text, View } from "@/components/Themed"
import { Link } from "expo-router"
import React from "react"

export default function TabOneScreen() {
  return (
    <View className="container">
      <Text className="text-6xl font-bold text-center p-4">Wayne4u</Text>
      <View className="flex-row justify-center items-center w-full h-full flex gap-3">
        <Text className="text-2xl">Tab 1</Text>
        <Link href="/(tabs)/two">
          <Text className="text-2xl ">Tab 2</Text>
        </Link>
      </View>
    </View>
  )
}
