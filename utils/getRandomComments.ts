import { comments } from "./comments";
export function getRandomComment() {
  const randomIndex = Math.floor(Math.random() * comments.length);
  return comments[randomIndex].comment;
}
