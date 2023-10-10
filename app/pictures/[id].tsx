import { Text, View } from "react-native";
import tw from "../../components/tailwind";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
	const { id } = useLocalSearchParams();

	return (
		<View style={tw`flex-1 bg-base-white items-center justify-center`}>
			<Text>Show {id}</Text>
		</View>
	)
}