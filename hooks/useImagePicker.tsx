import { useState } from "react";
import * as ExpoImagePicker from 'expo-image-picker';
import { Linking } from "react-native";

interface ReturnType {
	image: ExpoImagePicker.ImagePickerAsset | undefined,
	pickFromCamera: () => void,
	pickFromGallery: () => void,
}

const pickerOptions = {
	quality: 1,
	allowsEditing: true,
}

interface Source {
	checkPermission: (writeOnly?: boolean | undefined) => Promise<ExpoImagePicker.PermissionResponse>,
	launch: () => Promise<ExpoImagePicker.ImagePickerResult>;
	askPermission: (writeOnly?: boolean | undefined) => Promise<ExpoImagePicker.PermissionResponse>
}

export function useImagePicker(): ReturnType {
	const [image, setImage] = useState<ExpoImagePicker.ImagePickerAsset>();

	const handleResult = (result: ExpoImagePicker.ImagePickerResult) => {
		if (!result.canceled) {
			setImage(result.assets[0]);
		}
	}

	const pickFromSource = async (source: Source) => {
		const permissionResponse = (await source.checkPermission());

		if (permissionResponse.granted) {
			return source.launch().then(result => handleResult(result))
		}

		if (permissionResponse.canAskAgain) {
			return source.askPermission();
		}

		return Linking.openSettings();
	}

	const pickFromCamera = async () => {
		pickFromSource({
			checkPermission: ExpoImagePicker.getCameraPermissionsAsync,
			launch: () => {
				return ExpoImagePicker.launchCameraAsync({
					mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
					...pickerOptions
				})
			},
			askPermission: ExpoImagePicker.requestCameraPermissionsAsync
		})
	};

	const pickFromGallery = async () => {
		pickFromSource({
			checkPermission: ExpoImagePicker.getMediaLibraryPermissionsAsync,
			launch: () => {
				return ExpoImagePicker.launchImageLibraryAsync({
					mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
					...pickerOptions
				})
			},
			askPermission: ExpoImagePicker.requestMediaLibraryPermissionsAsync
		})
	};

	return {
		image,
		pickFromCamera,
		pickFromGallery
	}
}