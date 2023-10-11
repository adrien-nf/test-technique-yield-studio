import { Image, Text, View } from "react-native";
import tw from "../../components/tailwind";
import { Stack, useLocalSearchParams } from "expo-router";
import { useImageStore } from "../../stores/useImageStore";

export default function Page() {
	const { id } = useLocalSearchParams();

	const image = useImageStore((state) => state.images).find(image => image.id === id);

	if (!image) return;

	return (
		<>
			<Stack.Screen
				options={{
					headerTitle: image.title,
				}}
			/>
			<Image resizeMode={'cover'} style={{ alignSelf: "center", width: '100%', aspectRatio: image.file.width / image.file.height }} source={{ uri: image.file.uri }} />
		</>
	)
}