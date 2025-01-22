import { ImageSourcePropType } from "react-native";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  sold: number;
  thumbnail: string | ImageSourcePropType;
}
export const getRandomProducts = (
  products: Product[],
  count: number
): Product[] => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
