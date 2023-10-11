import { Stack, Link } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useImageStore } from '../../stores/useImageStore';
import ImageDeck from '../../components/ImageDeck/ImageDeck';
import tw from '../../components/tailwind';

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
					<View style={tw`flex grow justify-center items-center`}>
						<View style={tw`flex items-center gap-4`}>
							<FontAwesome5 name="sad-tear" size={64} style={tw`text-gray-200`} />
							<Text style={tw`text-gray-200`}>C'est vide par ici!</Text>
						</View>
					</View>
				) : (
					<View>
						<ImageDeck images={images}></ImageDeck>
					</View>
				)
			}
		</>
	);
}
