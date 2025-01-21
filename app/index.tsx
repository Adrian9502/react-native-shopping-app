import {
  View,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Carousel from "react-native-reanimated-carousel";
import ad1 from "../assets/images/ad1.jpg";
import ad2 from "../assets/images/ad2.jpg";
import ad3 from "../assets/images/ad3.jpg";
import ad4 from "../assets/images/ad4.jpg";
import ad5 from "../assets/images/ad5.jpg";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});
export default function Index() {
  const headerAds: number[] = [ad1, ad2, ad3, ad4, ad5];
  const width: number = Dimensions.get("window").width;

  return (
    <>
      <StatusBar translucent backgroundColor="blue" barStyle="light-content" />
      <View className="flex-1 mt-12 bg-green-600">
        {/* image carousel, text input and button */}
        <View className="relative h-[200px] bg-yellow-500">
          <Carousel
            loop
            width={width}
            height={200}
            autoPlay={true}
            data={headerAds}
            scrollAnimationDuration={3000}
            renderItem={({ item }) => (
              <View className="flex-1 justify-center items-center">
                <Image source={item} className="w-full h-full object-cover" />
              </View>
            )}
          />

          {/* Wrap the Carousel and TextInput in a relative container */}
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
      </View>
    </>
  );
}
