import { Stack, Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useImageStore } from '../../stores/useImageStore';
import Preview from '../../components/ImagePicker/Preview/Preview';
import ImageDeck from '../../components/ImageDeck/ImageDeck';

export default function Home() {
	const images = useImageStore((state) => state.images);

	return (
		<View>
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
			<ImageDeck images={images}></ImageDeck>
		</View>
	);
}
