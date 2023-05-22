import { Inter } from "next/font/google";
import LoginScreen from "./LoginScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <LoginScreen />;
}
