import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';

export default function ImagePicker() {
	const [image, setImage] = useState(null);

	const pickImage = async () => {
		let result = await ExpoImagePicker.launchImageLibraryAsync({
			mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View>
			<Button title="Pick an image from camera roll" onPress={pickImage} />
			{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
		</View>
	);
}
