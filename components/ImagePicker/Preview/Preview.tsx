import React from 'react';
import { Image } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';

interface PreviewProps {
	image: ExpoImagePicker.ImagePickerAsset | undefined;
}

export default function Preview({ image }: PreviewProps) {
	return image && (
		<Image resizeMode={'cover'} style={[{ alignSelf: "center", width: 0, maxWidth: "100%", height: 0, flex: 1, resizeMode: "contain", aspectRatio: image.width / image.height }]} source={{ uri: image.uri }} />
	);
}