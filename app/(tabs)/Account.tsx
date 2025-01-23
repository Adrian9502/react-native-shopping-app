import {
  Image,
  Text,
  View,
  Platform,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { StatusBar } from "react-native";
import userImage from "../../assets/images/users/user1.jpg";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import checkInImage from "../../assets/images/checkin.png";
import freePrizeImage from "../../assets/images/freeprize.png";
import luckyEggImage from "../../assets/images/mygames/luckyegg.png";
import mergeBossImage from "../../assets/images/mygames/mergeboss.png";
import gogoMatchImage from "../../assets/images/mygames/gogomatch.png";
import bigWinImage from "../../assets/images/mygames/bigwin.png";
import lazStarImage from "../../assets/images/mygames/lazstar.png";

import toPayImage from "../../assets/images/order-status/topay.png";
import toShipImage from "../../assets/images/order-status/toship.png";
import toReceiveImage from "../../assets/images/order-status/toreceive.png";
import toReviewImage from "../../assets/images/order-status/toreview.png";
import returnCancelImage from "../../assets/images/order-status/returnandcancel.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import productImage from "../../assets/images/products/bathtowel-99.jpg";

import { products } from "@/utils/products";
import { lazadaWallet } from "@/utils/lazadaWallet";
interface MyGamesIconsProps {
  text: string;
  image: any;
}
interface OrderStatusProps {
  text: string;
  image: any;
}
interface MyChannelProps {
  image: any;
  price: number;
}
interface IconsProps {
  icon: React.ReactNode;
  text: string;
}
interface LazadaWalletProps {
  title1: string;
  title2: string;
  priceLaz: string;
  buttonText: string;
}
const OrderStatus: React.FC<OrderStatusProps> = ({ image, text }) => {
  return (
    <View className="flex-col gap-2 p-1 mt-3 items-center text-center">
      <Image source={image} className="w-9 h-9" />
      <Text className="text-white">{text}</Text>
    </View>
  );
};
const MyGamesIcons: React.FC<MyGamesIconsProps> = ({ text, image }) => {
  return (
    <View>
      <View className="rounded-lg mb-1 h-14 items-center justify-center">
        <Image source={image} style={{ width: 40, height: 40 }} />
      </View>
      <Text className="text-white font-bold text-sm text-center">{text}</Text>
    </View>
  );
};
const MyChannel: React.FC<MyChannelProps> = ({ image, price }) => {
  return (
    <View className="flex-col mr-1 p-2 bg-red-900/40 rounded-lg">
      <View className="items-center flex-row mb-2">
        <Text className="text-slate-100 text-xl font-bold">LazFlash </Text>
        <Entypo name="chevron-right" size={18} color="gray" />
      </View>

      <Image source={image} className="w-[110px] h-[110px] mb-2 rounded-xl" />
      <View className="flex-row gap-2 items-center">
        <Text className="text-slate-100 font-bold text-lg">&#8369;{price}</Text>
        <Text className="text-rose-600 bg-pink-900/40 font-bold rounded-sm">
          -50%
        </Text>
      </View>
    </View>
  );
};
const LazadaWallet: React.FC<LazadaWalletProps> = ({
  title1,
  title2 = " ",
  priceLaz,
  buttonText,
}) => {
  return (
    <View className="bg-zinc-700 rounded-lg flex-row justify-between p-3 mr-2 mb-2">
      <View>
        <Text className="text-slate-100 text-lg font-semibold">{title1}</Text>
        <Text className="text-slate-100 text-lg font-semibold">{title2}</Text>
      </View>
      <View>
        <Text className="text-slate-100 text-lg font-bold">{priceLaz}</Text>
        <Text className="text-blue-500 bg-blue-800/90 text-sm rounded-lg mt-1 text-center">
          {buttonText}
        </Text>
      </View>
    </View>
  );
};
const Icons: React.FC<IconsProps> = ({ icon, text }) => {
  return (
    <View className="items-center justify-center">
      {icon}
      <Text className="text-slate-100 text-center">{text}</Text>
    </View>
  );
};

const Account = () => {
  const [numColumns, setNumColumns] = useState(3);
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight : 0;
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="#9f1239"
        barStyle="light-content"
      />
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1, paddingTop: statusBarHeight }}
        showsVerticalScrollIndicator={false}
        className="bg-black"
      >
        <View className="bg-rose-800 p-4 flex-row gap-4 -mb-2">
          <Image
            source={userImage}
            className="w-[65px] h-[65px] mb-2 rounded-full border-2 border-pink-500 shadow-3xl"
          />
          <View>
            <Text className="text-3xl font-bold text-white">
              Jane Christine O`neil ...
            </Text>
            <View className="rounded-lg mt-1 bg-slate-950 p-1">
              <Text className="text-pink-600 font-bold text-sm">
                🧧 10 vouchers | claim &#8369;280 voucher 🧧
              </Text>
            </View>
          </View>

          <View className="items-center pt-2 justify-start">
            <Ionicons name="settings-outline" size={24} color="white" />
            <Text className="text-white text-sm font-bold">Setting</Text>
          </View>
        </View>
        {/* My games */}
        <View className="bg-zinc-800 p-2 mb-3 rounded-tr-2xl rounded-tl-2xl">
          <View className="flex-row justify-between p-3">
            <Text className="text-white text-xl font-bold">My Games</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-300">Mission Center</Text>
              <Entypo name="chevron-right" size={18} color="gray" />
            </View>
          </View>
          <View className="flex-row gap-2">
            <View className="flex-row p-2 w-[49%] bg-neutral-700 gap-2 rounded-lg">
              <Image source={checkInImage} className="rounded-lg w-20 h-20" />
              <View className="p-2 ">
                <View className="flex-row gap-1 items-center">
                  <Text className="text-xl font-semibold text-slate-200">
                    Coins
                  </Text>
                  <Entypo name="chevron-right" size={18} color="white" />
                </View>
                <View className="flex-row gap-2">
                  <Text className="font-extrabold text-rose-500">40</Text>
                  <Text className="text-slate-200">Free Coins</Text>
                </View>
                <Pressable className="p-1 mt-1 rounded-lg bg-pink-600">
                  <Text className="font-bold text-white text-center">
                    Collect
                  </Text>
                </Pressable>
              </View>
            </View>
            <View className="flex-row p-2 w-[49%] bg-neutral-700 gap-2 rounded-lg">
              <Image source={freePrizeImage} className="rounded-lg w-20 h-20" />
              <View className="p-2 ">
                <View className="flex-row gap-1 items-center">
                  <Text className="text-xl font-semibold text-slate-200">
                    Free Prize
                  </Text>
                  <Entypo name="chevron-right" size={18} color="white" />
                </View>
                <View className="flex-row gap-1 items-center">
                  <Text className="font-extrabold text-slate-200">Get</Text>
                  <Text className="text-rose-500 font-extrabold">
                    Free Prize
                  </Text>
                </View>
                <Pressable className="p-1 mt-1 rounded-lg bg-pink-600">
                  <Text className="font-bold text-white text-center">Go</Text>
                </Pressable>
              </View>
            </View>
          </View>
          {/* icons */}
          <View className="flex-row p-2 items-center justify-around">
            <MyGamesIcons text="LuckyEgg" image={luckyEggImage} />
            <MyGamesIcons text="MergeBoss" image={mergeBossImage} />
            <MyGamesIcons text="GoGoMatch" image={gogoMatchImage} />
            <MyGamesIcons text="BigWin" image={bigWinImage} />
            <MyGamesIcons text="Lazzie Star" image={lazStarImage} />
          </View>
        </View>
        {/* My orders */}
        <View className="bg-zinc-800 px-3 mb-3 pb-4 rounded-tr-2xl rounded-tl-2xl">
          {/* my orders text */}
          <View className="flex-row justify-between p-3">
            <Text className="text-white text-xl font-bold">My Orders</Text>
            <View className="flex-row items-center">
              <Text className="text-gray-300">View All Orders</Text>
              <Entypo name="chevron-right" size={18} color="gray" />
            </View>
          </View>

          <View className="flex-row gap-2 flex items-center justify-around">
            {/* to receive , to ship etc... */}
            <OrderStatus text="To Pay" image={toPayImage} />
            <OrderStatus text="To Ship" image={toShipImage} />
            <OrderStatus text="To Received" image={toReceiveImage} />
            <OrderStatus text="To Review" image={toReviewImage} />
            <OrderStatus text="Returns" image={returnCancelImage} />
          </View>

          {/* delivered item */}
          <View className="px-4">
            <View className="mt-5 rounded-lg flex-row bg-zinc-700">
              <Image
                source={productImage}
                className="w-20 h-20 rounded-tl-lg rounded-bl-lg"
              />
              <View className="p-2 justify-between">
                <View className="flex-row w-[90%] justify-between items-center">
                  <View className="flex-row items-center">
                    <Text className="font-bold text-lg text-slate-200">
                      Delivered!
                    </Text>
                    <Entypo name="chevron-right" size={16} color="white" />
                  </View>
                  <Text className="text-slate-200 font-bold text-sm">
                    13:25 Jan 22
                  </Text>
                </View>
                <Text className="text-slate-100">
                  Package has been delivered. ...
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* My channel  */}
        <View className="bg-zinc-800  mb-3 pb-4 rounded-tr-2xl rounded-tl-2xl">
          {/* my channel text */}
          <View className="flex-row justify-between p-3">
            <Text className="text-white text-xl font-bold ">
              My Channels <FontAwesome5 name="edit" size={15} color="white" />{" "}
              Edit
            </Text>
            <View className="flex-row items-center">
              <Text className="text-gray-300">All Channels</Text>
              <Entypo name="chevron-right" size={18} color="gray" />
            </View>
          </View>

          <View>
            <FlatList
              data={products.slice(0, 6)}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View className="p-1">
                  <MyChannel image={item.thumbnail} price={item.price} />
                </View>
              )}
              numColumns={numColumns}
              scrollEnabled={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                flexGrow: 1,
              }}
              key={`${numColumns}`}
            />
          </View>
        </View>
        {/* My lazada wallet  */}
        <View className="bg-zinc-800  mb-3 pb-4 rounded-tr-2xl rounded-tl-2xl">
          {/* my channel text */}
          <View className="flex-row justify-between p-3">
            <Text className="text-white text-xl font-bold ">
              My Lazada Wallet <AntDesign name="eyeo" size={24} color="white" />{" "}
            </Text>
            <View className="flex-row items-center">
              <Text className="text-gray-300">View</Text>
              <Entypo name="chevron-right" size={18} color="gray" />
            </View>
          </View>

          <View className="px-3 flex-row flex-wrap justify-between">
            {lazadaWallet.map((item) => (
              <View className="w-1/2" key={item.id}>
                <LazadaWallet
                  title1={item.title1}
                  title2={item.title2}
                  priceLaz={item.priceLaz}
                  buttonText={item.buttonText}
                />
              </View>
            ))}
          </View>
        </View>
        {/* Recently Viewed  */}
        <View className="bg-zinc-800  mb-3 pb-4 rounded-tr-2xl rounded-tl-2xl">
          {/* Recently Viewed text */}
          <View className="flex-row justify-between p-3">
            <Text className="text-white text-xl font-bold ">
              Recently Viewed
            </Text>
            <View className="flex-row items-center">
              <Text className="text-gray-300">View More</Text>
              <Entypo name="chevron-right" size={18} color="gray" />
            </View>
          </View>
          {/* recently viewed products */}
          <View className="flex-row justify-center items-center">
            {products.slice(0, 3).map((item) => (
              <View key={item.id} className="p-2">
                <Image
                  source={item.thumbnail}
                  className="w-32 h-32 rounded-lg"
                />
                <Text className="text-rose-600 font-bold text-lg">
                  &#8369;{item.price}
                </Text>
              </View>
            ))}
          </View>
        </View>
        {/* Other icons  */}
        <View className="bg-zinc-800 py-4 mb-3 rounded-tr-2xl rounded-tl-2xl">
          <View className="flex-col ">
            <View className="flex-row justify-around gap-2 p-2">
              <Icons
                icon={<AntDesign name="hearto" size={24} color="white" />}
                text="Wishlist"
              />
              <Icons
                icon={<AntDesign name="message1" size={24} color="white" />}
                text="My Reviews"
              />
              <Icons
                icon={<Entypo name="chat" size={24} color="white" />}
                text="Customer Care"
              />
              <Icons
                icon={<Feather name="dollar-sign" size={24} color="white" />}
                text="Sell on Lazada"
              />
            </View>
            {/* -- */}
            <View className="flex-row justify-around gap-2 p-2">
              <Icons
                icon={<Entypo name="shop" size={24} color="white" />}
                text="Stores"
              />
              <Icons
                icon={<AntDesign name="creditcard" size={24} color="white" />}
                text="Membership"
              />
              <Icons
                icon={
                  <FontAwesome6 name="truck-fast" size={24} color="white" />
                }
                text="Deliveries"
              />
              <Icons
                icon={<Feather name="help-circle" size={24} color="white" />}
                text="Help"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Account;
