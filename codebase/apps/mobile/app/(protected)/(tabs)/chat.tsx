import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import imgSrc from "@/assets/images/onboarding.png";
import { icons, images } from "@/constants";

const chat = () => {
  return (
    <SafeAreaView className="">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="mt-10 text-xl text-center mb-4 font-semibold">
          100 km In the Range
        </Text>
        <View className="border-t border-b border-gray-700 w-full py-3 px-10">
          <View className="flex-row justify-between items-center w-full">
            <View className="flex-row gap-1">
              <Image
                source={imgSrc}
                resizeMode="cover"
                className="w-[40px] h-[40px]"
              />
              <View>
                <Text className="font-bold text-md">Jacob Washington</Text>
                <Text className="font-medium text-gray-400 text-[10px]">
                  20 min ago
                </Text>
              </View>
            </View>
            <Image source={icons.actions} className="" resizeMode="cover" />
          </View>
          <Text className="my-4 text-xl font-semibold">
            Today i found a <Text className="font-bold">FOX</Text> in my Area...
            stay focus!!
          </Text>
          <View className="flex-row justify-between items-center w-full">
            <View className="flex-row gap-x-3 items-center">
              <View className="flex-row gap-x-1 items-center">
                <Image source={icons.thumb} resizeMode="cover" className="" />
                <Text>2,2245</Text>
              </View>
              <View className="flex-row gap-x-1 items-center">
                <Image
                  source={icons.comments}
                  resizeMode="cover"
                  className=""
                />
                <Text>45</Text>
              </View>
              <View className="flex-row gap-x-1 items-center">
                <Image
                  source={icons.download}
                  resizeMode="cover"
                  className=""
                />
                <Text>124</Text>
              </View>
            </View>
            <Image source={icons.save} resizeMode="cover" className="" />
          </View>
        </View>

        {/* second  */}
        <View className="border-b border-gray-700 w-full py-3 px-10">
          <View className="flex-row justify-between items-center w-full">
            <View className="flex-row gap-1">
              <Image
                source={imgSrc}
                resizeMode="cover"
                className="w-[40px] h-[40px]"
              />
              <View>
                <Text className="font-bold text-md">Kat williams</Text>
                <Text className="font-medium text-gray-400 text-[10px]">
                  1 h ago
                </Text>
              </View>
            </View>
            <Image source={icons.actions} className="" resizeMode="cover" />
          </View>
          <Image
            source={images.chatImg}
            className="w-full h-[200px] my-5 rounded-xl"
            resizeMode="cover"
          />
          <View className="flex-row justify-between items-center w-full">
            <View className="flex-row gap-x-3 items-center">
              <View className="flex-row gap-x-1 items-center">
                <Image source={icons.thumb} resizeMode="cover" className="" />
                <Text>8,890</Text>
              </View>
              <View className="flex-row gap-x-1 items-center">
                <Image
                  source={icons.comments}
                  resizeMode="cover"
                  className=""
                />
                <Text>145</Text>
              </View>
              <View className="flex-row gap-x-1 items-center">
                <Image
                  source={icons.download}
                  resizeMode="cover"
                  className=""
                />
                <Text>12</Text>
              </View>
            </View>
            <Image source={icons.save} resizeMode="cover" className="" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default chat;
