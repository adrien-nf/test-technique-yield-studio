import { useState } from "react";
import * as ExpoImagePicker from 'expo-image-picker';

interface ReturnType {
	image: ExpoImagePicker.ImagePickerAsset | undefined,
	pickFromCamera: () => void,
	pickFromGallery: () => void,
}

export function useImagePicker(): ReturnType {
	const [image, setImage] = useState<ExpoImagePicker.ImagePickerAsset>();

	const handleResult = (result: ExpoImagePicker.ImagePickerResult) => {
		if (!result.canceled) {
			setImage(result.assets[0]);
		}
	}

	const pickFromCamera = async () => {
		ExpoImagePicker.launchCameraAsync({
			mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
			quality: 1,
			allowsEditing: true,
		}).then(result => {
			handleResult(result)
		});
	};

	const pickFromGallery = async () => {
		ExpoImagePicker.launchImageLibraryAsync({
			mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
			quality: 1,
			allowsEditing: true,
		}).then(result => {
			handleResult(result)
		});
	};

	return {
		image,
		pickFromCamera,
		pickFromGallery
	}
}