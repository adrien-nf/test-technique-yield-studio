import { Stack, Link } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Image, Pressable } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useImageStore } from '../../stores/useImageStore';
import ImageDeck from '../../components/ImageDeck/ImageDeck';
import EmptyHereIcon from '../../components/EmptyHereIcon/EmptyHereIcon';
import Snackbar from '../../components/Snackbar/Snackbar';
import tw from '../../components/tailwind';

export default function Home() {
	const deletionList = useImageStore((state) => state.deletionList);
	const removeFromDeletionList = useImageStore((state) => state.removeFromDeletionList);

	const images = useImageStore((state) => state.images);
	const previousImageCount = useRef(images.length);

	const [snackbarVisible, setSnackbarVisible] = useState(false);

	const isInDeletionMode = deletionList.length > 0;

	useEffect(() => {
		if (images.length > previousImageCount.current) {
			setSnackbarVisible(true);
		}
	}, [images])

	const promptForDelete = () => {
		Alert.alert("Supprimer la liste", `Désirez-vous réellement supprimer ${deletionList.length} image${deletionList.length > 1 ? "s" : ""} ?`, [
			{
				text: 'Annuler',
				style: 'cancel',
			},
			{
				text: 'Confirmer', onPress: removeFromDeletionList
			},
		]);
	}

	return (
		<>
			<Stack.Screen
				options={{
					headerTitle: () => <Image
						style={{ width: 193, height: 29 }}
						source={require('../../assets/logo-header.png')}
						alt="Logo YieldStagram"
					/>,
					headerTitleAlign: "center",
					headerRight: () => {
						if (isInDeletionMode) return <Pressable onPress={promptForDelete}><FontAwesome5 name="trash" style={tw`text-red-500`} size={24} /></Pressable>;

						return <Link href="/images/create"><FontAwesome5 name="camera" size={24} /></Link>;
					}
				}}
			/>
			{
				images.length === 0 ? (
					<EmptyHereIcon />
				) : (
					<ImageDeck images={images}></ImageDeck >
				)
			}
			<Snackbar
				visible={snackbarVisible}
				setVisible={setSnackbarVisible}
				textMessage="Photo ajoutée!"
			/>
		</>
	);
}
