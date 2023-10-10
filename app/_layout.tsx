import { Stack } from "expo-router";
import { useDeviceContext } from "twrnc";
import tw from "../components/tailwind";
import { View } from "react-native";

export default function RootLayout() {
	useDeviceContext(tw);

	return <>
		<Stack
			screenOptions={{
				headerTitle: "",
				headerStyle: {
					backgroundColor: '#f9f9f9',
				},
				headerTintColor: '#000',
			}}
		/>
	</>;
}
