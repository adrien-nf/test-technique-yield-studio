import { Image } from "../types/Image";
import * as MediaLibrary from 'expo-media-library';

export class FileFacade {
	saveToLibrary(image: Image) {
		MediaLibrary.saveToLibraryAsync(image.file.uri);
	}
}