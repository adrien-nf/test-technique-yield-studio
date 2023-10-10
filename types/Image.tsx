import { ImagePickerAsset } from "expo-image-picker";

export interface Image {
	id: string;
	title: string;
	file: ImagePickerAsset;
}