import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.jpg";
import user4 from "../assets/images/users/user4.jpg";

export const getRandomUserImages = () => {
  const images = [user1, user2, user3, user4];
  // Return an array of random images
  const randomImages = [];
  while (randomImages.length < 4) {
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImages.push(images[randomIndex]);
  }
  return randomImages;
};
