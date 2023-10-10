import React, { useEffect } from 'react';
import { View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import tw from '../tailwind';
import { useImagePicker } from "../../hooks/useImagePicker";
import Preview from './Preview/Preview';
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
		<View style={tw`grow gap-4`}>
			<PressableIcon
				text="Appareil photo"
				onPress={pickFromCamera}
				icon={<FontAwesome5.Button name="camera" />}
			/>
			<PressableIcon
				text="Galerie"
				onPress={pickFromGallery}
				icon={<FontAwesome5.Button name="images" />}
			/>
			<Preview image={image} />
		</View >
	);
}