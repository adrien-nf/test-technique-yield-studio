import { Stack, Link } from 'expo-router';
import React from 'react';
import { Image } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useImageStore } from '../../stores/useImageStore';
import ImageDeck from '../../components/ImageDeck/ImageDeck';
import EmptyHereIcon from '../../components/EmptyHereIcon/EmptyHereIcon';

export default function Home() {
	const images = useImageStore((state) => state.images);

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
		</>
	);
}
