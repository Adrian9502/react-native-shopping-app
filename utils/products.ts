import product1 from "../assets/images/products/50ml-oilbased-11815.jpg";
import product2 from "../assets/images/products/bathtowel-99.jpg";
import product3 from "../assets/images/products/bavin-charger-187.jpg";
import product4 from "../assets/images/products/fan-105.jpg";
import product5 from "../assets/images/products/gf&co-goldsilverplate-45.jpg";
import product6 from "../assets/images/products/karaoke-160.jpg";
import product7 from "../assets/images/products/menshirt-7571.jpg";
import product8 from "../assets/images/products/shoe-box-3737.jpg";
import product9 from "../assets/images/products/slippers-99.jpg";
import product10 from "../assets/images/products/ugreen-bt-269.jpg";
import product11 from "../assets/images/products/ugreen-hdmihub-849.jpg";
import product12 from "../assets/images/products/usb-juicer-143.82.jpg";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  sold: number;
  thumbnail: any;
}

export const products: Product[] = [
  {
    id: 1,
    title: "50ml Oil based Perfume Inspired Collections long lasting",
    description:
      "Description for 50ml Oil based Perfume Inspired Collections long lasting",
    price: 118.15,
    rating: 4.69,
    sold: 94,
    thumbnail: product1,
  },
  {
    id: 2,

    title: "Bathtowel",
    description: "Description for Bathtowel",
    price: 99.26,
    rating: 4.2,
    sold: 65,
    thumbnail: product2,
  },
  {
    id: 3,
    title: "Bavin Charger",
    description: "Description for Bavin Charger",
    price: 187.72,
    rating: 4.4,
    sold: 80,
    thumbnail: product3,
  },
  {
    id: 4,
    title: "Fan",
    description: "Description for Fan",
    price: 105.74,
    rating: 3.9,
    sold: 72,
    thumbnail: product4,
  },
  {
    id: 5,
    title: "GF&CO Gold Silver Plate",
    description: "Description for GF&CO Gold Silver Plate",
    price: 45.65,
    rating: 4.5,
    sold: 40,
    thumbnail: product5,
  },
  {
    id: 6,
    title: "Karaoke Machine",
    description: "Description for Karaoke Machine",
    price: 160.76,
    rating: 4.1,
    sold: 60,
    thumbnail: product6,
  },
  {
    id: 7,
    title: "Men's Shirt",
    description: "Description for Men's Shirt",
    price: 371.88,
    rating: 4.3,
    sold: 25,
    thumbnail: product7,
  },
  {
    id: 8,
    title: "Shoe Box",
    description: "Description for Shoe Box",
    price: 337.22,
    rating: 3.8,
    sold: 110,
    thumbnail: product8,
  },
  {
    id: 9,
    title: "Slippers",
    description: "Description for Slippers",
    price: 99.54,
    rating: 4.0,
    sold: 50,
    thumbnail: product9,
  },
  {
    id: 10,
    title: "Ugreen Bluetooth",
    description: "Description for Ugreen Bluetooth",
    price: 269.63,
    rating: 4.7,
    sold: 65,
    thumbnail: product10,
  },
  {
    id: 11,
    title: "Ugreen HDMI Hub",
    description: "Description for Ugreen HDMI Hub",
    price: 849.94,
    rating: 4.6,
    sold: 40,
    thumbnail: product11,
  },
  {
    id: 12,
    title: "USB Juicer",
    description: "Description for USB Juicer",
    price: 143.82,
    rating: 4.0,
    sold: 90,
    thumbnail: product12,
  },
];
