import { Stack } from "expo-router";
import { useDeviceContext } from "twrnc";
import tw from "../components/tailwind";
import { View } from "react-native";

export default function RootLayout() {
	useDeviceContext(tw);

	return <Stack
		screenOptions={{
			title: "",
			headerStyle: {
				backgroundColor: '#f9f9f9',
			},
			headerTintColor: '#000',
			contentStyle: {
				padding: 16,
				flex: 1,
				display: "flex",
			}
		}}
	/>;
}
