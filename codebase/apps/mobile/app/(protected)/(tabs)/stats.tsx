import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

const stats = () => {
  const stats = [
    {
      title: "Temperature",
      info: "21°",
      color: "#36D080",
      img: images.stat1,
      text: "Control irrigation to avoid heat stress.",
    },
    {
      title: "Humidity ",
      info: "80 %",
      color: "#EF790C",
      img: images.stat2,
      text: "Prevent fungus, use fungicide treatments.",
    },
    {
      title: "Precipitation",
      info: "150 mm",
      color: "#EE1010",
      img: images.stat3,
      text: "Make sure you have good drainage.",
    },
    {
      title: "Wind",
      info: "20 km/h",
      color: "#FFC700",
      img: images.stat4,
      text: "Protect crops with barriers or windbreaks.",
    },
    {
      title: "Soil Moisture",
      info: "0,25 m/m",
      color: "#36D080",
      img: images.stat5,
      text: "Use shade nets and water early or late.",
    },
    {
      title: "UV Index",
      info: "6",
      color: "#EE1010",
      img: images.stat6,
      text: "Protect plants with shade nets and reduce exposure in the middle of the day.",
    },
  ];

  return (
    <SafeAreaView className="px-10">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-xl text-secondary my-8">Statistics</Text>

        {/* first  */}
        <View className="flex-row gap-3 w-full">
          <View className="flex-1 w-full p-3 border border-gray-400 rounded-2xl">
            <Text className="font-semibold">{stats[0].title}</Text>
            <View className="flex-row gap-x-1 my-1">
              <Text className="text-xl" style={{ color: stats[0].color }}>
                {stats[0].info}
              </Text>
              <Image source={stats[0].img} resizeMode="cover" className="" />
            </View>
            <Text className="font-medium text-sm">{stats[0].text}</Text>
          </View>
          <View className="flex-1 w-full p-3 border border-gray-400 rounded-2xl">
            <Text className="font-semibold mb-2">{stats[1].title}</Text>
            <View className="flex-row gap-x-1 my-1 justify-between">
              <Text className="text-xl" style={{ color: stats[1].color }}>
                {stats[1].info}
              </Text>
              <Image source={stats[1].img} resizeMode="cover" className="" />
            </View>
            <Text className="font-medium text-sm ">{stats[1].text}</Text>
          </View>
        </View>
        {/* second  */}
        <View className="flex-row gap-3 w-full mt-6">
          <View className="flex-1 w-full p-3 border border-gray-400 rounded-2xl">
            <Text className="font-semibold">{stats[2].title}</Text>
            <View className="flex-row gap-x-1 my-1">
              <Text className="text-xl" style={{ color: stats[2].color }}>
                {stats[2].info}
              </Text>
              <Image source={stats[2].img} resizeMode="cover" className="" />
            </View>
            <Text className="font-medium text-sm">{stats[2].text}</Text>
          </View>
          <View className="flex-1 w-full p-3 border border-gray-400 rounded-2xl">
            <Text className="font-semibold mb-2">{stats[3].title}</Text>
            <View className="flex-row gap-x-1 my-1 justify-between">
              <Text className="text-xl" style={{ color: stats[3].color }}>
                {stats[3].info}
              </Text>
              <Image source={stats[3].img} resizeMode="cover" className="" />
            </View>
            <Text className="font-medium text-sm ">{stats[3].text}</Text>
          </View>
        </View>
        {/* third  */}
        <View className="flex-row gap-3 w-full mt-6">
          <View className="flex-1 w-full p-3 border border-gray-400 rounded-2xl">
            <Text className="font-semibold">{stats[4].title}</Text>
            <View className="flex-row gap-x-1 my-1">
              <Text className="text-xl" style={{ color: stats[4].color }}>
                {stats[4].info}
              </Text>
              <Image source={stats[4].img} resizeMode="cover" className="" />
            </View>
            <Text className="font-medium text-sm">{stats[4].text}</Text>
          </View>
          <View className="flex-1 w-full p-3 border border-gray-400 rounded-2xl">
            <Text className="font-semibold mb-2">{stats[5].title}</Text>
            <View className="flex-row gap-x-1 my-1 justify-between">
              <Text className="text-xl" style={{ color: stats[5].color }}>
                {stats[5].info}
              </Text>
              <Image source={stats[5].img} resizeMode="cover" className="" />
            </View>
            <Text className="font-medium text-sm ">{stats[5].text}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default stats;
