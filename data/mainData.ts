// src/data/cardData.ts

export type CardItem = {
  title: string;
  image: string;
  description: string;
  tags: string[];
};

export const cardData: CardItem[] = [
  // {
  //   title: "Elegant Sneakers",
  //   image: "https://i.pinimg.com/736x/62/ac/66/62ac66ce9cb7b92f852094dca4a39789.jpg",
  //   description: "Step into comfort with these elegant sneakers perfect for everyday use.",
  //   tags: ["Fashion", "Shoes"]
  // },
  // {
  //   title: "Vintage Backpack",
  //   image: "https://i.pinimg.com/736x/bb/78/5d/bb785d02c5eea50af03b9a9aef35f9df.jpg",
  //   description: "Stylish and spacious, this backpack is ideal for both work and travel.",
  //   tags: ["Accessories", "Travel"]
  // },
  {
    title: "Smart Watch",
    image: "https://i.pinimg.com/736x/a2/28/c9/a228c98bc2b37e4fa33f92662583e366.jpg",
    description: "Track your health and stay connected on the go.",
    tags: ["Tech", "Gadgets"]
  },
  {
    title: "Minimalist Chair",
    image: "https://i.pinimg.com/736x/29/f3/aa/29f3aaa5e6f664a420064af2108ecbc5.jpg",
    description: "Modern design meets comfort in this minimalist chair.",
    tags: ["Furniture", "Home"]
  },
  {
    title: "Noise-Cancelling Headphones",
    image: "https://i.pinimg.com/736x/7c/7e/fd/7c7efd3abede7c9ea6feeafd5114e22b.jpg",
    description: "Experience music like never before with premium noise cancellation.",
    tags: ["Audio", "Electronics"]
  },
  {
    title: "Fitness Tracker",
    image: "https://i.pinimg.com/736x/5f/bd/35/5fbd350a06a314c64eec3d8a6fc2f2f9.jpg",
    description: "Stay on top of your fitness goals with real-time tracking and insights.",
    tags: ["Health", "Wearable"]
  },
  {
    title: "Compact Drone",
    image: "https://i.pinimg.com/736x/7e/1b/98/7e1b98a6f9888bc5f14a6c40a672c134.jpg",
    description: "Capture stunning aerial footage with this lightweight drone.",
    tags: ["Drone", "Photography"]
  },
  {
    title: "Leather Wallet",
    image: "https://i.pinimg.com/736x/fd/63/63/fd63639491ece97992422c0aba7f861b.jpg",
    description: "Crafted from premium leather, this wallet is sleek and durable.",
    tags: ["Fashion", "Accessories"]
  },
  // {
  //   title: "Leather Wallet",
  //   image: "https://i.pinimg.com/736x/7a/ce/fb/7acefb382973d1a3a8aec373d5091c1a.jpg",
  //   description: "Crafted from premium leather, this wallet is sleek and durable.",
  //   tags: ["Fashion", "Accessories"]
  // }
];
