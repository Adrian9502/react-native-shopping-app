import { Text, View, StatusBar, Platform, Image, FlatList } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import generateRandomJoinedNumber from "@/utils/getRandomNumber";
import { products } from "@/utils/products";
import { getRandomUserImages } from "@/utils/getRandomUserImage";
import { getRandomComment } from "@/utils/getRandomComments";
const Like = () => {
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight : 0;

  interface ReviewProps {
    comment: string;
    productImage: string | [];
    productTitle: string;
    productRating: string;
    productReviews: string;
    userImage: string[] | number[];
    likesCount: number;
  }

  const Review: React.FC<ReviewProps> = ({
    comment,
    productImage,
    productTitle,
    productRating,
    productReviews,
    userImage,
    likesCount,
  }) => {
    const randomNum = generateRandomJoinedNumber();
    return (
      <View className="p-3 bg-black mb-5">
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center gap-2">
            <View className="relative w-12 h-12">
              {/* Render 4 user images */}
              {userImage.map((userImages, index) => (
                <Image
                  key={index}
                  source={
                    typeof userImages === "string"
                      ? { uri: userImages }
                      : userImages
                  }
                  className={`absolute rounded-full border-slate-950 border ${
                    index === 0
                      ? "top-0 left-[25%]"
                      : index === 1
                      ? "bottom-0 left-[50%] transform -translate-x-1/2"
                      : index === 2
                      ? "left-0 top-[50%] transform -translate-y-1/2"
                      : "right-0 bottom-[25%]"
                  }`}
                  style={{ width: 21, height: 21 }}
                />
              ))}
            </View>

            <Text className="text-gray-500 font-semibold">
              {randomNum} users with the same interest as you like...
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Entypo name="hand" size={20} color="white" />
            <Text className="text-gray-500 font-semibold">{likesCount}</Text>
          </View>
        </View>

        <View>
          <Text className="text-gray-400 font-semibold">{comment}</Text>

          <View className="p-3 flex-row gap-5">
            <Image
              source={
                typeof productImage === "string"
                  ? { uri: productImage }
                  : productImage
              }
              className="rounded-md"
              style={{ width: 115, height: 115 }}
            />
            <View className="justify-between">
              <View className="w-[80%]">
                <Text className="text-slate-300 truncate text-lg font-bold">
                  {productTitle}
                </Text>
                <View className="flex-row items-center gap-1">
                  <AntDesign name="star" size={16} color="yellow" />
                  <Text className="text-slate-500 font-bold">
                    {productRating} | {productReviews} reviews
                  </Text>
                </View>
              </View>
              <Text
                className="text-rose-700/80 bg-red-900/20 p-1 font-semibold rounded-md"
                style={{ alignSelf: "flex-start" }}
              >
                {randomNum}k+ Add to Wishlist
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#18181B80" barStyle="light-content" />
      <View
        style={{ paddingTop: statusBarHeight }}
        className="bg-stone-950 h-full"
      >
        {/* header */}
        <View className="bg-[#18181B80] p-3 flex flex-row items-center">
          <View className="flex justify-around flex-row flex-1">
            <Text className="text-gray-500 text-2xl font-bold">Me </Text>
            <Text className="text-gray-400 text-2xl font-bold">Explore </Text>
            <Text className="text-gray-500 text-2xl font-bold">Video </Text>
          </View>
          <View className="p-1 rounded-lg bg-rose-600">
            <MaterialCommunityIcons
              name="camera-outline"
              size={19}
              color="white"
            />
          </View>
        </View>
        {/* Comments */}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const randomComment = getRandomComment();
            const randomUserImages = getRandomUserImages();
            const randomNum = generateRandomJoinedNumber();
            return (
              <Review
                comment={randomComment}
                productImage={item.thumbnail}
                productTitle={item.title}
                productRating={item.rating.toString()}
                productReviews={item.sold.toString()}
                userImage={randomUserImages}
                likesCount={randomNum}
              />
            );
          }}
        />
      </View>
    </>
  );
};

export default Like;
