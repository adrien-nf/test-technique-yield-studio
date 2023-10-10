import { Text, View } from "react-native";
import tw from "../../components/tailwind";
import { Link } from "expo-router";

export default function Page() {
	return (
		<View style={tw`flex-1 bg-base-white items-center justify-center`}>
			<Text>Index</Text>
		</View>
	)
}