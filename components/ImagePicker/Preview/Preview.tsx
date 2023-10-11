import React from 'react';
import { Image } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';

export default function Preview({ image }: {
	image: ExpoImagePicker.ImagePickerAsset | undefined
}) {
	return image && <Image resizeMode={'cover'} style={{ alignSelf: "center", width: '100%', aspectRatio: 1 }} source={{ uri: image.uri }} />;
}