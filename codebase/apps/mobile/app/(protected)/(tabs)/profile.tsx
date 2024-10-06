import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import imgSrc from "@/assets/images/onboarding.png";
import img1Src from "@/assets/images/task-progress.png";
import { icons, images } from "@/constants";

const profile = () => {
  const rewards = [
    {
      text: "Welcome meadal",
      img: images.reward1,
    },
    {
      text: "Helping",
      img: images.reward2,
    },
    {
      text: "Gold Medal",
      img: images.reward3,
    },
    {
      text: "Crop Trophy",
      img: images.reward4,
    },
    {
      text: "Medal",
      img: images.reward5,
    },
  ];

  return (
    <SafeAreaView className="px-10">
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-3 mt-6">
          <Image
            source={imgSrc}
            resizeMode="cover"
            className="w-[60px] h-[60px]"
          />
          <View className="justify-between">
            <Text className="text-[#828282] text-lg">Welcome,</Text>
            <Text className="text-secondary font-bold text-lg">
              Jessica miller
            </Text>
          </View>
        </View>

        <Text className="mt-12 mb-3 text-2xl font-semibold">Reward Erned</Text>
        <View className="flex-row gap-2 w-full justify-center">
          {rewards.map((item, i) => (
            <View key={i} className="flex-1">
              <Image source={item.img} resizeMode="cover" className="" />
              <Text className="text-[10px]">{item.text}</Text>
            </View>
          ))}
        </View>

        {/* tasks progress  */}
        <Image
          source={img1Src}
          resizeMode="contain"
          className="w-full h-[200px] object-contain mt-10"
        />
        {/* task summary  */}
        <View className="flex-row items-center justify-between mt-12 mb-3 ">
          <Text className="text-2xl font-semibold">Task Summary</Text>
          <Text className="text-[10px] text-gray-400">See More</Text>
        </View>
        <View className="flex-row flex-wrap gap-x-4 w-full">
          <View className="flex-1 w-full rounded-2xl p-3 bg-[#f6753d26]">
            <View className="bg-[#F6753D] w-[27px] h-[27px] p-1 rounded-2xl items-center justify-center">
              <Image
                source={icons.taskIcon}
                resizeMode="contain"
                className="w-[17px] h-[17px]"
              />
            </View>
            <Text className="text-xl font-semibold mt-2 mb-1">10</Text>
            <Text className="text-gray-500 text-sm">Total task</Text>
          </View>
          <View className="flex-1 w-full rounded-2xl p-3 bg-[#97d4e54d]">
            <View className="bg-[#97D4E5] w-[27px] h-[27px] p-1 rounded-2xl items-center justify-center">
              <Image
                source={icons.taskIcon}
                resizeMode="contain"
                className="w-[17px] h-[17px]"
              />
            </View>
            <Text className="text-xl font-semibold mt-2 mb-1">25</Text>
            <Text className="text-gray-500 text-sm">Upcoming tasks</Text>
          </View>
          <View className="flex-1 w-full rounded-2xl p-3 bg-[#ffd4693d]">
            <View className="bg-[#FFD469] w-[27px] h-[27px] p-1 rounded-2xl items-center justify-center">
              <Image
                source={icons.taskIcon}
                resizeMode="contain"
                className="w-[17px] h-[17px]"
              />
            </View>
            <Text className="text-xl font-semibold mt-2 mb-1">8</Text>
            <Text className="text-gray-500 text-sm">Completed tasks</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;
