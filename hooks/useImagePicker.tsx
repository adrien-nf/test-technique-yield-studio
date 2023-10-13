import { useState } from "react";
import * as ExpoImagePicker from 'expo-image-picker';
import { Linking } from "react-native";
import { Alert } from "react-native";

interface ReturnType {
	image: ExpoImagePicker.ImagePickerAsset | undefined,
	pickFromCamera: () => void,
	pickFromGallery: () => void,
}

const pickerOptions = {
	quality: 1,
	allowsEditing: true,
}

type CheckPermissionFunction = (writeOnly?: boolean | undefined) => Promise<ExpoImagePicker.PermissionResponse>;
type AskPermissionFunction = (writeOnly?: boolean | undefined) => Promise<ExpoImagePicker.PermissionResponse>;

interface Source {
	checkPermissions: CheckPermissionFunction[],
	launch: () => Promise<ExpoImagePicker.ImagePickerResult>;
	askPermissions: AskPermissionFunction[];
}

export function useImagePicker(): ReturnType {
	const [image, setImage] = useState<ExpoImagePicker.ImagePickerAsset>();

	const handleResult = (result: ExpoImagePicker.ImagePickerResult) => {
		if (!result.canceled) {
			setImage(result.assets[0]);
		}
	}

	const pickFromSource = async (source: Source) => {
		const permissionResponses = await Promise.all(source.checkPermissions.map(checkFunc => checkFunc()));

		const isGranted = permissionResponses.every(permission => permission.granted);

		if (isGranted) {
			return source.launch().then(result => handleResult(result))
		}

		source.askPermissions.forEach((askPermission, index) => {
			const isGranted = permissionResponses[index].granted;

			if (!isGranted) {
				const canAskAgain = permissionResponses[index].canAskAgain;

				if (canAskAgain) {
					return askPermission();
				}

				return promptForSettings();
			}
		})
	}

	const promptForSettings = () => {
		Alert.alert("Paramètres", `Désirez-vous ouvrir les paramètres pour gérer les permissions ?`, [
			{
				text: 'Annuler',
				style: 'cancel',
			},
			{
				text: 'Confirmer', onPress: Linking.openSettings
			},
		]);
	}

	const pickFromCamera = async () => {
		pickFromSource({
			checkPermissions: [ExpoImagePicker.getCameraPermissionsAsync, ExpoImagePicker.getMediaLibraryPermissionsAsync],
			launch: () => {
				return ExpoImagePicker.launchCameraAsync({
					mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
					...pickerOptions
				})
			},
			askPermissions: [ExpoImagePicker.requestCameraPermissionsAsync, ExpoImagePicker.requestMediaLibraryPermissionsAsync]
		})
	};

	const pickFromGallery = async () => {
		pickFromSource({
			checkPermissions: [ExpoImagePicker.getMediaLibraryPermissionsAsync],
			launch: () => {
				return ExpoImagePicker.launchImageLibraryAsync({
					mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
					...pickerOptions
				})
			},
			askPermissions: [ExpoImagePicker.requestMediaLibraryPermissionsAsync]
		})
	};

	return {
		image,
		pickFromCamera,
		pickFromGallery
	}
}