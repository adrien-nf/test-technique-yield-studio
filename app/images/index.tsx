import { Stack, Link } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useImageStore } from '../../stores/useImageStore';
import ImageDeck from '../../components/ImageDeck/ImageDeck';
import EmptyHereIcon from '../../components/EmptyHereIcon/EmptyHereIcon';
import Snackbar from '../../components/Snackbar/Snackbar';

export default function Home() {
	const images = useImageStore((state) => state.images);
	const previousImageCount = useRef(images.length);

	const [snackbarVisible, setSnackbarVisible] = useState(false);

	useEffect(() => {
		if (images.length > previousImageCount.current) {
			setSnackbarVisible(true);
		}
	}, [images])

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
					headerRight: () => <Link href="/images/create"><FontAwesome5 name="camera" size={24} /></Link>,
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
