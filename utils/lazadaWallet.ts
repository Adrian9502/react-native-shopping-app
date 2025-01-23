interface LazadaWalletItem {
  id: string;
  title1: string;
  title2: string;
  priceLaz: string;
  buttonText: string;
}

export const lazadaWallet: readonly LazadaWalletItem[] = [
  {
    id: "1",
    title1: "Lazada",
    title2: "PayLater",
    priceLaz: "₱1572.24",
    buttonText: "View",
  },
  {
    id: "2",
    title1: "FastCash",
    title2: "Credit",
    priceLaz: "Up to ₱80K",
    buttonText: "Activate",
  },
  {
    id: "3",
    title1: "PHP",
    title2: " ",
    priceLaz: "28.74",
    buttonText: "Cash In",
  },
  {
    id: "4",
    title1: "Payment",
    title2: "Options",
    priceLaz: "1",
    buttonText: "View",
  },
];
