import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";

import imgSrc from "@/assets/images/onboarding.png";
import { router } from "expo-router";

const onboarding = () => {
  const [activeSection, setActiveSection] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [area, setArea] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");

  return (
    <SafeAreaView className="px-10">
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-6 border w-[50px] h-[50px] flex items-center justify-center rounded-full border-[#C9C9C9] p-4"
        >
          <Image
            source={icons.arrowLeft}
            resizeMode="cover"
            className="w-[32px] h-[32px]"
          />
        </TouchableOpacity>

        <Text className="mt-12 mb-6 font-bold mx-auto text-center text-2xl text-secondary">
          Onboarding
        </Text>
        {/* CATEGORY  */}
        <View className="flex-row gap-4">
          <TouchableOpacity
            className={`${
              activeSection === 0 ? "bg-primary " : "bg-[#DBDBDB]"
            } px-8 py-3 rounded-lg`}
            onPress={() => setActiveSection(0)}
          >
            <Text
              className={activeSection === 0 ? "text-white" : "text-[#828282]"}
            >
              Farmer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`${
              activeSection === 1 ? "bg-primary " : "bg-[#DBDBDB] "
            } px-8 py-3 rounded-lg`}
            onPress={() => setActiveSection(1)}
          >
            <Text
              className={activeSection === 1 ? "text-white" : "text-[#828282]"}
            >
              Ranher
            </Text>
          </TouchableOpacity>
        </View>

        {/* IMAGE  */}
        <View className="mx-auto my-8">
          <Image source={imgSrc} resizeMode="cover" />
        </View>

        {/* FORM  */}
        <View>
          <View className="">
            <Text className="text-secondary text-md font-medium mb-2">
              First Name *
            </Text>
            <TextInput
              value={firstName}
              onChangeText={(firstName) => setFirstName(firstName)}
              placeholder="Enter First Name"
              autoCapitalize="none"
              autoCorrect={false}
              className="border border-[#DBDBDB] w-full py-2 pl-4 rounded-md placeholder:text-gray-500"
            />
          </View>
          <View className="mt-4">
            <Text className="text-secondary text-md font-medium mb-2">
              Last Name *
            </Text>
            <TextInput
              value={lastName}
              onChangeText={(lastName) => setLastName(lastName)}
              placeholder="Enter Last Name"
              autoCapitalize="none"
              autoCorrect={false}
              className="border border-[#DBDBDB] w-full py-2 pl-4 rounded-md placeholder:text-gray-500"
            />
          </View>
          <View className="mt-4">
            <Text className="text-secondary text-md font-medium mb-2">
              Contact Number *
            </Text>
            <TextInput
              value={number}
              onChangeText={(number) => setNumber(number)}
              placeholder="Enter Contact Number"
              autoCapitalize="none"
              keyboardType="numeric"
              autoCorrect={false}
              className="border border-[#DBDBDB] w-full py-2 pl-4 rounded-md placeholder:text-gray-500"
            />
          </View>
          <View className="mt-4">
            <Text className="text-secondary text-md font-medium mb-2">
              Area *
            </Text>
            <TextInput
              value={area}
              onChangeText={(area) => setArea(area)}
              placeholder="Select Village"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              className="border border-[#DBDBDB] w-full py-2 pl-4 rounded-md placeholder:text-gray-500"
            />
          </View>
          <View className="mt-4">
            <Text className="text-secondary text-md font-medium mb-2">
              Company Name
            </Text>
            <TextInput
              value={company}
              onChangeText={(company) => setCompany(company)}
              placeholder="Enter Company Name"
              autoCapitalize="none"
              autoCorrect={false}
              className="border border-[#DBDBDB] w-full py-2 pl-4 rounded-md placeholder:text-gray-500"
            />
          </View>
        </View>

        <TouchableOpacity
          className="mt-10 bg-primary w-fit px-6 flex-row items-center justify-center py-3 rounded-md mx-auto"
          onPress={() => router.push("/(protected)/(home)/home")}
        >
          <View className="flex flex-row items-center gap-x-3 ">
            <Text className="text-white  text-lg">Save & Continue</Text>
            <Image
              source={icons.arrowRight}
              resizeMode="cover"
              tintColor="white"
              className="w-[26px] h-[26px]"
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default onboarding;
