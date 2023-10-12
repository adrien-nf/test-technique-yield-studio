import { Alert, Image, Pressable, View } from "react-native";
import { Redirect, Stack, useLocalSearchParams } from "expo-router";
import { useImageStore } from "../../stores/useImageStore";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import tw from "../../components/tailwind";

export default function Page() {
	const { id } = useLocalSearchParams();

	const image = useImageStore((state) => state.images).find(image => image.id === id);

	const remove = useImageStore((state) => state.remove);

	if (!image) return <Redirect href="/images" />;

	const promptForDelete = () => {
		Alert.alert("Supprimer l'image", `Désirez-vous réellement supprimer ${image.title} ?`, [
			{
				text: 'Annuler',
				style: 'cancel',
			},
			{
				text: 'Confirmer', onPress: () => remove(image)
			},
		]);
	}

	return (
		<View style={tw`flex grow justify-center`}>
			<Stack.Screen
				options={{
					headerTitle: image.title,
					headerRight: () => <Pressable onPress={promptForDelete}><FontAwesome5 name="trash" style={tw`text-red-500`} size={24} /></Pressable>,
				}}
			/>
			<Image resizeMode={'cover'} style={{ alignSelf: "center", width: '100%', maxHeight: '100%', aspectRatio: image.file.width / image.file.height }} source={{ uri: image.file.uri }} />
		</View>
	)
}