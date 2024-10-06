import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSupabase } from "@/context/supabase-provider";
import { api } from "@/lib/api";
import { toast } from "@backpackapp-io/react-native-toast";

const formSchema = z
  .object({
    email: z.string().email("Inserisci un indirizzo email valido."),
    password: z
      .string()
      .min(8, "La password deve contenere almeno 8 caratteri.")
      .max(64, "La password deve contenere al massimo 64 caratteri")
      .regex(
        /^(?=.*[a-z])/,
        "La tua password deve contenere almeno una lettera minuscola."
      )
      .regex(
        /^(?=.*[A-Z])/,
        "La tua password deve contenere almeno una lettera maiuscola."
      )
      .regex(/^(?=.*[0-9])/, "La tua password deve contenere almeno un numero.")
      .regex(
        /^(?=.*[!@#$%^&*])/,
        "La tua password deve contenere almeno un carattere speciale."
      ),
    confirmPassword: z
      .string()
      .min(8, "La password deve contenere almeno 8 caratteri."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Le password non corrispondono.",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const { signUp } = useSupabase();
  const addUser = api.user.addUser.useMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await signUp(data.email, data.password);
      await addUser.mutateAsync({ email: data.email });
      router.replace("/sign-in");
      toast.success(
        "Account creato con successo! Controlla la tua email per confermare l'account.",
        {
          styles: {
            view: { backgroundColor: "#00930F", borderRadius: 8 },
            indicator: { backgroundColor: "white" },
          },
        }
      );
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          styles: {
            view: { backgroundColor: "#FFCCCC", borderRadius: 8 },
            indicator: { backgroundColor: "black" },
            text: { color: "black" },
          },
        });
      }
    }
  };

  return (
    <SafeAreaView>
      <View className="pt-10 px-8 flex-row items-center justify-between">
        <View />
        <Image source={images.logoSmall} resizeMode="cover" />
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={icons.close}
            resizeMode="contain"
            tintColor="#DBDBDB"
            className="w-[25px] h-[25px]"
          />
        </TouchableOpacity>
      </View>

      <View className="mx-10 mt-12">
        <Text className="text-5xl text-secondary font-bold">
          Hey, {"\n"}
          <Text className="!text-primary">Registrati</Text> Ora!
        </Text>

        <View className="mt-10">
          <Text className="text-secondary text-md font-medium mb-2">Email</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder="Inserisci l'indirizzo email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                className="border border-[#DBDBDB] w-full py-2 pl-4 rounded-md placeholder:text-gray-500"
              />
            )}
          />
          {errors.email && (
            <Text className="text-red-500">{errors.email.message}</Text>
          )}
        </View>

        <View className="mt-7">
          <Text className="text-secondary text-md font-medium mb-2">
            Password
          </Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder="Inserisci la password"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                className="border border-[#DBDBDB] w-full py-2 pl-4 rounded-md placeholder:text-gray-500"
              />
            )}
          />
          {errors.password && (
            <Text className="text-red-500">{errors.password.message}</Text>
          )}
        </View>

        <View className="mt-7">
          <Text className="text-secondary text-md font-medium mb-2">
            Conferma Password
          </Text>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                placeholder="Conferma la password"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                className="border border-[#DBDBDB] w-full py-2 pl-4 rounded-md placeholder:text-gray-500"
              />
            )}
          />
          {errors.confirmPassword && (
            <Text className="text-red-500">
              {errors.confirmPassword.message}
            </Text>
          )}
        </View>

        <TouchableOpacity
          className="mt-[20%] bg-primary w-[50%] flex-row items-center justify-center py-3 rounded-md mx-auto"
          onPress={handleSubmit(onSubmit)}
        >
          <View className="flex flex-row items-center gap-x-3 ">
            <Text className="text-white text-lg">Registrati</Text>
            <Image
              source={icons.arrowRight}
              resizeMode="cover"
              tintColor="white"
              className="w-[26px] h-[26px]"
            />
          </View>
        </TouchableOpacity>

        <View className="mt-5">
          <Text className="text-center text-gray-500">
            Hai già un account?{" "}
            <Text
              className="text-primary"
              onPress={() => router.replace("/sign-in")}
            >
              Accedi
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
