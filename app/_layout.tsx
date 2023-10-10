import { Link, Slot } from "expo-router";
import { useDeviceContext } from "twrnc";
import tw from "../components/tailwind";
import { View } from "react-native";

export default function RootLayout() {
	useDeviceContext(tw);

	return <>
		<View>
			<Link href="/pictures">Index</Link>
			<Link href="/pictures/1">Show</Link>
			<Link href="/pictures/create">Create</Link>
		</View>
		<Slot />
	</>;
}
