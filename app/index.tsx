import { Text, View } from "react-native";
import tw from "../components/tailwind";

export default function App() {
  return (
    <View style={tw`flex-1 bg-base-white items-center justify-center`}>
      <Text>Bienvenue sur notre test !</Text>
    </View>
  );
}
