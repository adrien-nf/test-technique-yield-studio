import React, { useEffect } from 'react';
import { View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import tw from '../tailwind';
import { useImagePicker } from "../../hooks/useImagePicker";
import PressableIcon from '../PressableIcon/PressableIcon';
import { ImagePickerAsset } from 'expo-image-picker';

interface ImagePickerProps {
	onChangeImage: (image: ImagePickerAsset) => void
}

export default function ImagePicker({ onChangeImage }: ImagePickerProps) {
	const { image, pickFromCamera, pickFromGallery } = useImagePicker();

	useEffect(() => {
		if (image) onChangeImage(image);
	}, [image])

	return (
		<View style={tw`gap-3 flex-row grow`}>
			<PressableIcon
				text="Appareil photo"
				onPress={pickFromCamera}
				icon={<FontAwesome5 name="camera" />}
			/>
			<PressableIcon
				text="Galerie"
				onPress={pickFromGallery}
				icon={<FontAwesome5 name="images" />}
			/>
		</View >
	);
}