import { Slot } from "expo-router";
import { useDeviceContext } from "twrnc";
import tw from "../components/tailwind";

export default function RootLayout() {
  useDeviceContext(tw);

  return <Slot />;
}
