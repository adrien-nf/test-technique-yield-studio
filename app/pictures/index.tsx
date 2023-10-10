import { Stack, Link } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Home() {
	return (
		<View>
			<Stack.Screen
				options={{
					headerTitle: () => <Image
						style={{ width: 193, height: 29 }}
						source={require('../../assets/Logo.png')}
						alt="Logo YieldStagram"
					/>,
					headerTitleAlign: "center",
					headerRight: () => <Link href="/pictures/create"><FontAwesome5 name="camera" size={24} /></Link>,
				}}
			/>
			<Text>Home Screen</Text>
			<Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link>
		</View>
	);
}
