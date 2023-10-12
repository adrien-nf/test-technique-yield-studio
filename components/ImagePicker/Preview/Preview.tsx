import React from 'react';
import { Image } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';

export default function Preview({ image }: {
	image: ExpoImagePicker.ImagePickerAsset | undefined
}) {
	return image && <Image resizeMode={'cover'} style={{ alignSelf: "center", width: '50%', maxHeight: 300, aspectRatio: image.width / image.height }} source={{ uri: image.uri }} />;
}