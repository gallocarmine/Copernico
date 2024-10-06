import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import imgSrc from "@/assets/images/onboarding.png";
import { icons, images } from "@/constants";

const home = () => {
  const categories = ["week", "month", "quarts"];
  const [category, setCategory] = useState(0);

  const days = [
    {
      day: "M",
      letter: "G",
      color: "#36D080",
      number: 42,
    },
    {
      day: "T",
      letter: "G",
      color: "#36D080",
      number: 42,
    },
    {
      day: "W",
      letter: "M",
      color: "#FFDF38",
      number: 39,
    },
    {
      day: "T",
      letter: "G",
      color: "#36D080",
      number: 45,
    },
    {
      day: null,
      letter: "W",
      color: "#FDA655",
      number: 25,
    },
    {
      day: "S",
      letter: null,
      color: null,
      number: null,
    },
    {
      day: "S",
      letter: null,
      color: null,
      number: null,
    },
  ];

  const resports = [
    {
      text: "Good",
      icon: icons.good,
    },
    {
      text: "Not good",
      icon: icons.discharge,
    },
    {
      text: "Rain",
      icon: icons.backPain,
    },
  ];

  const actions = [
    {
      text: "Check the intergrity of the grain during the morning",
      icon: icons.action1,
      number: "21°",
      subtest: "Feels like 26",
      img: images.action1img,
    },
    {
      text: "Check the intergrity of the grain during the morning",
      icon: icons.action2,
      number: "12",
      subtest: "Air Quality",
      img: images.action2img,
    },
  ];

  return (
    <SafeAreaView className="bg-[#F9F9F9] px-10 pb-[150px]">
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <Text className="mx-auto text-center font-medium text-2xl mt-10 mb-5">
          Our advanced Daily {"\n"}
          Report System
        </Text>

        <View className="mt-5 mb-8 flex-row gap-4 justify-center">
          {categories.map((cat, i) => (
            <TouchableOpacity
              onPress={() => setCategory(i)}
              key={i}
              className={`${
                category === i ? "bg-secondary" : "bg-[#DBDBDB]"
              } px-4 py-1 rounded-xl`}
            >
              <Text className={`text-white`}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="mb-8 flex-row gap-1">
          {days.map((day, i) => (
            <View key={i} className="flex-1 items-center">
              {day.day ? (
                <Text className="text-medium font-medium">{day.day}</Text>
              ) : (
                <Image
                  source={icons.arrowDown}
                  tintColor={day.color}
                  resizeMode="cover"
                  className="w-[22px] h-[22px]"
                />
              )}
              <View className="mt-5 flex-1 p-1 items-center w-full bg-[#E5E2DB] rounded-2xl justify-between min-h-[61px]">
                {day?.letter && (
                  <>
                    <View
                      style={{ backgroundColor: day.color }}
                      className={` w-full rounded-full text-center p-1 items-center justify-center`}
                    >
                      <Text className="text-white">{day.letter}</Text>
                    </View>
                    <Text className="text-black/40">{day.number}</Text>
                  </>
                )}
              </View>
            </View>
          ))}
        </View>

        <View className="flex-row justify-center mt-8 flex-wrap gap-3">
          {resports.map((report, i) => (
            <View
              key={i}
              className="border border-gray-600 h-fit py-2 px-2 rounded-3xl flex-row items-center justify-center"
            >
              <Image
                source={report.icon}
                resizeMode="cover"
                className="w-[22px] h-[22px]"
              />
              <Text className="text-md text-black/70 ml-2">{report.text}</Text>
            </View>
          ))}
        </View>

        <Text className="mt-6 font-semibold mb-5">Tack an Action</Text>
        <View className="w-full flex-row gap-2">
          {actions.map((item, i) => (
            <View className="flex-1 w-full p-3 border border-gray-400 rounded-2xl">
              <View className="flex-row gap-3">
                <Text className="text-[12px] max-w-[70%] font-semibold">
                  {item.text}
                </Text>
                <Image source={item.icon} className="" resizeMode="cover" />
              </View>
              <View className="flex-row gap-4 justify-between mt-1">
                <View>
                  <Text className="text-4xl font-semibold">{item.number}</Text>
                  <Text className="text-[10px] text-gray-400">
                    {item.subtest}
                  </Text>
                </View>
                <Image source={item.img} resizeMode="cover" className="" />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
