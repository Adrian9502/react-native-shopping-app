import {
  View,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  Pressable,
  ScrollView,
  Text,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import { ReactNode } from "react";
import Carousel from "react-native-reanimated-carousel";
import coin from "../assets/images/coin.png";
import ad1 from "../assets/images/ad1.jpg";
import ad2 from "../assets/images/ad2.jpg";
import ad3 from "../assets/images/ad3.jpg";
import ad4 from "../assets/images/ad4.jpg";
import ad5 from "../assets/images/ad5.jpg";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";
// icons
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { products } from "../utils/products";
import { getRandomProducts } from "../utils/getRandomProducts";
import generateRandomJoinedNumber from "@/utils/getRandomNumber";
// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

interface FreeShippingProps {
  icon: ReactNode;
  text: string;
}
interface VoucherProps {
  voucherText: string;
  amount: string;
  color: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  sold: number;
  thumbnail: string | ImageSourcePropType;
}

interface ProductProps {
  item: Product[];
  color: string;
  amount: string;
}

// reuseable component
const FreeShipping: React.FC<FreeShippingProps> = ({ icon, text }) => (
  <View className="flex-row justify-center items-center gap-2">
    {icon}
    <Text className="text-white text-sm font-semibold">{text}</Text>
  </View>
);

const EarnCoins: React.FC<FreeShippingProps> = ({ icon, text }) => (
  <View>
    <View className="border bg-slate-100 p-2 flex items-center justify-center rounded-2xl">
      {icon}
    </View>
    <Text className="text-slate-300 text-sm text-center font-semibold mt-1">
      {text}
    </Text>
  </View>
);

const Voucher: React.FC<VoucherProps> = ({ voucherText, amount, color }) => {
  const backgroundClass =
    color === "red"
      ? "bg-red-500/10"
      : color === "green"
      ? "bg-emerald-500/10"
      : "";
  const textClass =
    color === "red"
      ? "text-red-600"
      : color === "green"
      ? "text-emerald-600"
      : "";

  return (
    <View
      className={`${backgroundClass} w-[35%] flex-col justify-start px-2 py-3 rounded-xl`}
    >
      <Text className={`font-extrabold text-xl ${textClass} text-base`}>
        &#8369;{amount}.00
      </Text>
      <Text className={`text-sm font-bold ${textClass}`}>{voucherText}</Text>
    </View>
  );
};

export default function Home() {
  const headerAds: number[] = [ad1, ad2, ad3, ad4, ad5];
  const width: number = Dimensions.get("window").width;
  const randomProducts = getRandomProducts(products, 3);
  const randomProducts1 = getRandomProducts(products, 3);
  const randomProducts2 = getRandomProducts(products, 10);

  const renderHeader = () => (
    <>
      {/* Carousel section */}
      <View className="relative h-[230px] bg-yellow-500">
        <Carousel
          loop
          width={width}
          height={230}
          autoPlay={true}
          data={headerAds}
          scrollAnimationDuration={3000}
          renderItem={({ item }) => (
            <View className="flex-1 justify-center items-center">
              <Image source={item} className="w-full h-full object-cover" />
            </View>
          )}
        />

        {/* Search and wallet section */}
        <View className="flex-1 absolute top-5  items-center flex-row">
          <View className="relative w-[92%] px-4">
            {/* Text input and pressable container */}
            <TextInput
              placeholder="raspberry pi"
              placeholderTextColor="#888"
              className="bg-black text-white text-lg border-2 border-rose-500 rounded-lg px-4 shadow-lg"
            />
            <SimpleLineIcons
              className="z-20 absolute right-28 top-3"
              name="camera"
              size={24}
              color="gray"
            />
            <Pressable
              onPress={() => console.log("Button Pressed")}
              className="absolute right-6 top-1.5 px-3 h-10 bg-rose-500 flex justify-center items-center rounded-lg shadow-lg"
            >
              <Text className="text-white font-semibold">Search</Text>
            </Pressable>
          </View>
          {/* wallet icon */}
          <Ionicons name="wallet-outline" size={30} color="white" />
        </View>
      </View>
      {/* Free shipping section */}
      <View className="h-9 rounded-tr-2xl -mt-8 rounded-tl-2xl flex flex-row px-2 items-center justify-around bg-gray-600">
        {/* Free Shipping */}
        <FreeShipping
          icon={<FontAwesome5 name="shipping-fast" size={14} color="white" />}
          text="Free Shipping"
        />
        <View className="border-l h-[50%] border-gray-400"></View>
        {/* Fast Delivery */}
        <FreeShipping
          icon={<Ionicons name="shield-checkmark" size={14} color="white" />}
          text="Fast Delivery"
        />
        <View className="border-l h-[50%] border-gray-400"></View>
        {/* Free Returns */}
        <FreeShipping
          icon={
            <MaterialIcons name="assignment-return" size={16} color="white" />
          }
          text="Free Returns"
        />
      </View>
      {/* Earn coins section */}
      <View className="flex-row items-center justify-center p-3 rounded-tr-2xl rounded-tl-2xl -mt-4 gap-3">
        {/* earn coins */}
        <View className="mt-4">
          <View className="flex py-2 pl-2 pr-6 items-center rounded-xl bg-slate-500/20 flex-row justify-center gap-3">
            <Image source={coin} className="w-10 h-10" />
            <View className="flex flex-col">
              <Text className="text-slate-200 font-semibold">Earn </Text>
              <Text className="text-slate-200 font-semibold">Coins </Text>
            </View>
          </View>
          <View className="flex px-2 items-center rounded-lg mt-1 justify-center flex-row bg-slate-500/20">
            <Text className="text-slate-200 text-sm">Collect Now!</Text>
            <Entypo name="chevron-right" size={24} color="gray" />
          </View>
        </View>
        {/* ---- */}
        <View className="flex flex-row gap-2">
          {/* lazlive */}
          <EarnCoins
            icon={<Entypo name="video-camera" size={30} color="#9D00FF" />}
            text="LazLive"
          />
          {/* lazmart */}
          <EarnCoins
            icon={
              <FontAwesome5 name="shopping-cart" size={30} color="#008000" />
            }
            text="LazMart"
          />
          {/* Free Prize */}
          <EarnCoins
            icon={<FontAwesome name="tree" size={30} color="#008000" />}
            text="Free Prize"
          />
          <EarnCoins
            icon={<FontAwesome5 name="money-bill" size={30} color="#9D00FF" />}
            text="BigWinPlus"
          />
          <EarnCoins
            icon={<FontAwesome5 name="egg" size={24} color="orange" />}
            text="LuckyEgg"
          />
        </View>
      </View>
      {/* Biggest Savings section */}
      <View className="border-b border-gray-600 flex-col ">
        {/* biggest savings text */}
        <View className="p-3 flex-row justify-between items-center">
          <Text className="text-white text-2xl font-bold">Biggest Savings</Text>
          <View className="flex flex-row items-center">
            <Text className="text-sm text-gray-400">More Vouchers</Text>
            <Entypo name="chevron-right" size={24} color="gray" />
          </View>
        </View>
        {/* Vouchers */}
        <View className="bg-black px-2 py-3 flex flex-row items-center justify-around">
          <Voucher color="red" amount="280" voucherText="Lazada voucher" />
          <Voucher color="green" amount="76" voucherText="Free Shipping" />
          <Pressable className="bg-pink-600 rounded-lg">
            <Text className="text-white font-extrabold text-lg px-2 py-1 ">
              Collect All
            </Text>
          </Pressable>
        </View>
      </View>
      {/* Lazflash */}
      <View>
        {/* Lazflash text and countdown */}
        <View className="p-2 flex-row justify-between items-center">
          <View className="flex flex-row gap-3 items-center">
            <Text className="text-white text-2xl font-bold">LazFlash</Text>
            <View className="flex gap-2 flex-row items-center justify-center">
              <Text className="px-1 text-lg rounded-lg font-bold text-white bg-pink-600">
                01
              </Text>
              <Text className="font-bold text-2xl text-white">:</Text>
              <Text className="px-1 text-lg rounded-lg font-bold text-white bg-pink-600">
                24
              </Text>
              <Text className="font-bold text-2xl text-white">:</Text>
              <Text className="px-1 text-lg rounded-lg font-bold text-white bg-pink-600">
                57
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center">
            <Text className="text-sm text-gray-400">Up to 90% off</Text>
            <Entypo name="chevron-right" size={24} color="gray" />
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 12,
            flexDirection: "row",
            width: "100%", // This ensures 3 items per view
          }}
        >
          {randomProducts.map((product) => (
            <View key={product.id}>
              <Image
                className="rounded-xl"
                source={
                  typeof product.thumbnail === "string"
                    ? { uri: product.thumbnail }
                    : product.thumbnail
                }
                style={{ width: 125, height: 130 }}
              />
              <View className="bg-red-600/30 gap-2 mt-2 px-2 py-1 flex flex-row justify-center items-center rounded-lg">
                <Text className="text-red-600 flex-1 text-lg font-extrabold">
                  &#8369;{product.price}
                </Text>
                <Text className="text-white px-2 py-1 rounded-xl bg-pink-600/90 font-extrabold">
                  -{generateRandomJoinedNumber()}%
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* As low as section */}
      <View>
        {/* As low as header */}
        <View className="p-2 flex-row justify-between items-center">
          <View className="flex flex-row gap-3 items-center">
            <Text className="text-white text-2xl font-bold">As low as</Text>
            <View className="flex gap-2 flex-row items-center justify-center">
              <Text className="text-pink-600 text-2xl rounded-lg font-extrabold">
                &#8369;9
              </Text>
              <Text className="px-1 font-bold rounded-md bg-yellow-500">
                CHOICE
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center">
            <Text className="text-sm text-gray-400">
              Add-on Deals | FreeGift
            </Text>
            <Entypo name="chevron-right" size={24} color="gray" />
          </View>
        </View>
        <View className="pb-1">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 10,
              paddingHorizontal: 12,
              flexDirection: "row",
              width: "300%",
            }}
          >
            {randomProducts1.map((product) => (
              <View key={product.id}>
                <Image
                  className="rounded-xl"
                  source={
                    typeof product.thumbnail === "string"
                      ? { uri: product.thumbnail }
                      : product.thumbnail
                  }
                  style={{ width: 125, height: 130 }}
                />
                <View className="bg-red-600/30 mt-2 gap-2 px-2 py-1 flex flex-row justify-center items-center rounded-lg">
                  <Text className="text-red-600 flex-1 text-lg font-extrabold">
                    &#8369;{product.price}
                  </Text>
                  <Text className="text-white px-2 py-1 rounded-xl bg-yellow-500/90 font-extrabold">
                    -{generateRandomJoinedNumber()}%
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
  return (
    <>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />

      <FlatList
        data={randomProducts2}
        keyExtractor={(product) => product.id.toString()}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 10,
        }}
        className="flex-1 mt-12 bg-black"
        renderItem={({ item: product }) => {
          return (
            <View className="bg-neutral-900/50 rounded-lg mt-2 flex-1 mx-2">
              <View className="relative">
                <Image
                  className="rounded-xl"
                  source={
                    typeof product.thumbnail === "string"
                      ? { uri: product.thumbnail }
                      : product.thumbnail
                  }
                  style={{ width: "100%", height: 200 }}
                />
                <View className="absolute rounded-bl-lg bottom-0 gap-2 bg-emerald-500 flex flex-row">
                  <FreeShipping
                    icon={
                      <FontAwesome5
                        name="shipping-fast"
                        size={14}
                        color="white"
                      />
                    }
                    text="Free Shipping"
                  />
                  <Text className="text-white p-1 bg-yellow-500 rounded-tr-lg">
                    COINS
                  </Text>
                </View>
              </View>
              <View className="mt-2 gap-2 px-2 py-1 flex flex-col justify-start rounded-lg">
                <Text className="text-white flex-1 text-lg font-bold">
                  {product.title}
                </Text>
                <Text className="text-pink-600 flex-1 text-xl font-extrabold">
                  &#8369;{product.price}
                </Text>
                <Text className="text-yellow-600 flex-1 text-sm">
                  1.6k+ Good Ratings online
                </Text>
                <View className="flex flex-row gap-1 items-center">
                  <AntDesign name="star" size={17} color="yellow" />
                  <Text className="text-gray-500">{product.rating}(1678)</Text>
                  <Text className="text-gray-500">{product.sold}.5k sold</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </>
  );
}
