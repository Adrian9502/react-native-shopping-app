import {
  Platform,
  Text,
  View,
  Image,
  ImageSourcePropType,
  FlatList,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { products } from "@/utils/products";
interface CartSectionProps {
  title: string;
  image: ImageSourcePropType | string;
  price: number;
}
const CartSection: React.FC<CartSectionProps> = ({ title, image, price }) => {
  return (
    <View className="px-4 py-2 bg-black mt-4">
      <View className="flex-row gap-2 items-center">
        <MaterialIcons name="check-box-outline-blank" size={30} color="gray" />

        <MaterialCommunityIcons
          name="shopping-outline"
          size={18}
          color="gray"
        />
        <Text className="text-xl text-slate-200 font-bold">Lorem</Text>
        <Ionicons name="chevron-forward" size={18} color="gray" />
      </View>
      <View className="flex-row justify-between gap-2 my-3">
        <View className="flex-row gap-2">
          <Text className="text-xs bg-emerald-800/60 rounded-md text-emerald-600">
            Shipping
          </Text>
          <Text className="text-slate-300 font-semibold">
            Buy &#8369;149.00 to enjoy &#8369; 75.00
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color="gray" />
      </View>
      <View className="flex-row p-2">
        <View className="items-center px-2 justify-center">
          <MaterialIcons
            name="check-box-outline-blank"
            size={30}
            color="gray"
          />
        </View>
        <View className="p-1 flex-row gap-3">
          <Image
            source={typeof image === "string" ? { uri: image } : image}
            style={{ width: 90, height: 90 }}
            className="rounded-md"
          />

          <View className="bg-black w-[230px]">
            {/* title */}
            <Text className="text-slate-200 text-lg font-semibold">
              {title}
            </Text>
            {/* selected item */}
            <View className="text-slate-200 flex-row p-2 text-sm gap-3">
              <Text className="text-slate-400">Lorem Ipsum</Text>
              <Ionicons name="chevron-down" size={17} color="gray" />
            </View>
            <View className="p-2 flex-row gap-2">
              <Text className="bg-blue-900/50 rounded-sm text-blue-500 text-xs">
                Pre-Order
              </Text>
              <View className=" rounded-br-md rounded-bl-md flex-row gap-1 bg-emerald-600">
                <FontAwesome5 name="shipping-fast" size={12} color="white" />
                <Text className="text-slate-200 text-xs">FREE SHIPPING</Text>
              </View>
            </View>
            {/* price */}
            <View className="flex-row mt-3 justify-between">
              <Text className="text-pink-600 font-bold text-xl">
                &#8369; {price}
              </Text>

              <View className="flex-row items-center">
                <View className="p-2 rounded-md bg-neutral-950">
                  <AntDesign name="minus" size={10} color="gray" />
                </View>
                <Text className="text-lg p-2 text-slate-200 font-bold">1</Text>
                <View className="p-2 rounded-md bg-neutral-950">
                  <AntDesign name="plus" size={10} color="gray" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const Cart = () => {
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
        <View className="bg-black flex-row p-4 justify-between">
          <Text className="text-slate-300 text-2xl font-bold">My Cart</Text>
          <View className="flex-row items-center justify-center gap-2">
            <View className="bg-blue-600 rounded-md">
              <AntDesign name="back" size={17} color="white" />
            </View>
            <Text className="text-slate-300">Free Returns(up to 30 Days)</Text>
          </View>
          <FontAwesome6 name="trash-can" size={24} color="white" />
        </View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CartSection
              title={item.title}
              image={item.thumbnail}
              price={item.price}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

export default Cart;

//   <Ionicons name="checkbox" size={24} color="blue" />
