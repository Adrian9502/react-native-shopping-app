import { Text, View, Platform, Image, TextInput } from "react-native";
import React from "react";
import { ReactNode } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import aiImage from "../../assets/images/ai.png";
import productImage from "../../assets/images/products/bavin-charger-187.jpg";
import coinImage from "../../assets/images/coin.png";
interface HeaderSectionProps {
  icon: ReactNode;
  text: string;
}
interface GiftSectionProps {
  title: string;
  subtitle: string;
}
const HeaderSection: React.FC<HeaderSectionProps> = ({ icon, text }) => {
  return (
    <View className="py-2 px-4 flex-row items-center gap-1 bg-neutral-900/70 rounded-lg">
      {icon}
      <Text className="text-slate-500/90 font-semibold">{text}</Text>
    </View>
  );
};

const GiftSection: React.FC<GiftSectionProps> = ({ title, subtitle }) => (
  <View className="bg-black rounded-lg gap-1 px-1 py-2">
    <Text className="text-slate-200 font-bold">{title}</Text>
    <Text className="text-slate-200 font-bold text-sm">{subtitle}</Text>
  </View>
);
const Message = () => {
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight : 0;
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <View
        style={{ paddingTop: statusBarHeight }}
        className="bg-neutral-950 h-full"
      >
        {/* header */}
        <View className="bg-black p-3 flex">
          {/* Message text */}
          <View className="flex-row justify-between">
            <Text className="text-white text-[1.55rem] mb-4">Message+</Text>
            <View className="flex-row gap-5">
              <MaterialCommunityIcons
                name="brush-variant"
                size={24}
                color="white"
              />
              <Entypo name="dots-three-horizontal" size={24} color="white" />
            </View>
          </View>
          <View className="flex justify-around flex-row">
            <HeaderSection
              icon={
                <Ionicons
                  name="chatbubble-ellipses-sharp"
                  size={18}
                  color="green"
                />
              }
              text="Chats"
            />
            <HeaderSection
              icon={
                <MaterialCommunityIcons
                  name="equal-box"
                  size={18}
                  color="blue"
                />
              }
              text="Orders"
            />
            <HeaderSection
              icon={<Octicons name="bell-fill" size={18} color="orange" />}
              text="Activities"
            />
            <HeaderSection
              icon={
                <MaterialCommunityIcons name="bullhorn" size={20} color="red" />
              }
              text="Promos"
            />
          </View>
        </View>
        {/* chat section */}
        <View className="p-1 mb-[220px]">
          <View className="flex-row justify-center items-center">
            <MaterialIcons
              name="keyboard-double-arrow-down"
              size={18}
              color="gray"
            />
            <Text className="text-gray-300 text-sm text-center">
              Scroll down to load history
            </Text>
          </View>
          <Text className="mt-4 text-center text-gray-600">21:08</Text>
          <View className="px-4 py-3">
            <View className="flex-col gap-3 w-[300px]">
              <View className="flex-row gap-3">
                <Image
                  source={aiImage}
                  style={{ width: 35, height: 35 }}
                  className="p-2 bg-white rounded-full"
                />
                <View className="gap-2">
                  <View className="bg-black p-3 rounded-xl">
                    <Text className="text-slate-200 truncate ">
                      🎉 j***e is asking you...👀
                    </Text>
                  </View>
                  <View className="bg-black p-3 rounded-xl">
                    <View className="flex-row bg-neutral-900/90 max-w-full rounded-lg">
                      <Image
                        source={productImage}
                        style={{ width: 80, height: 80 }}
                        className="rounded-tl-lg rounded-bl-lg"
                      />
                      <View className="p-3 gap-4">
                        <Text className="text-slate-300 font-semibold truncate w-[300px]">
                          🔔 "magkano po pag 6yards"
                        </Text>
                        <Text className="text-slate-300 font-semibold">
                          🗒️ Share your answer here ➡️
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* -------------- */}
              <View className="flex-row gap-3">
                <Image
                  source={aiImage}
                  style={{ width: 35, height: 35 }}
                  className="p-2 bg-white rounded-full"
                />
                <View className="gap-2">
                  <View className="bg-black p-3 rounded-xl">
                    <Text className="text-slate-200 truncate ">
                      🌟 Hey! Hello Lazadian, 40 coins are waiting!
                    </Text>
                  </View>
                  <View className="bg-black p-3 rounded-xl">
                    <View className="flex-row bg-neutral-900/90 max-w-full rounded-lg">
                      <Image
                        source={coinImage}
                        style={{ width: 50, height: 50 }}
                        className="rounded-tl-lg rounded-bl-lg bg-yellow-600 p-3"
                      />
                      <View className="p-3">
                        <Text className="text-slate-300 font-semibold">
                          🔔 Check in daily for coins and shop
                        </Text>
                        <Text className="text-slate-300 font-semibold">
                          more for less. Go na!
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row justify-around items-center p-1">
          <GiftSection
            title="🎁Festive Gift"
            subtitle="Trending Festival Finds"
          />
          <GiftSection
            title="💰Collect Free Coins"
            subtitle="With Coins, Lowest Prices"
          />
          <GiftSection
            title="🔥Top Picks"
            subtitle="Best other big discounts"
          />
        </View>
        <View className="px-3">
          <TextInput
            className="bg-black text-white px-3 py-4 mt-3 border border-pink-700 rounded-lg"
            placeholderTextColor="gray"
            placeholder="Ask Lazzie anything you want to know✨"
          />
        </View>
      </View>
    </>
  );
};

export default Message;
