import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import imgSrc from "@/assets/images/C-logo.png";
import logo from "@/assets/images/logo-2.png";
import { router } from "expo-router";
import { icons } from "@/constants";

const Welcome = () => {
  return (
    <SafeAreaView>
      <View className="bg-primary w-full h-[336px] rounded-b-[150px]"></View>
      <View className="flex flex-row justify-center">
        <View className="w-[150px] h-[150px] -my-20 rounded-full bg-gray-100 flex items-center justify-center">
          <Image source={imgSrc} resizeMode="cover" className="" />
        </View>
      </View>
      <View className="flex-row justify-center mt-[120px]">
        <Image source={logo} resizeMode="cover" className="" />
      </View>
      <Text className="mx-auto w-[80%] text-center text-lg mt-4">
        A platform built for a new way of Monitoring your field
      </Text>
      <TouchableOpacity
        className="bg-primary w-[50%] flex-row items-center justify-center py-3 rounded-md mx-auto mt-8"
        onPress={() => router.push("/(auth)/sign-up")}
      >
        <View className="flex flex-row items-center gap-x-3 ">
          <Text className="text-white  text-lg">Next</Text>
          <Image
            source={icons.arrowRight}
            resizeMode="cover"
            tintColor="white"
            className="w-[26px] h-[26px]"
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
