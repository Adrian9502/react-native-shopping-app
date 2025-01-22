export default function generateRandomJoinedNumber(): number {
  const num1 = Math.floor(Math.random() * 8) + 1;
  const num2 = Math.floor(Math.random() * 8) + 1;
  return parseInt(`${num1}${num2}`, 10);
}
