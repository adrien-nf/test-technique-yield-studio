import { MMKV } from 'react-native-mmkv'
import { Image } from '../types/Image';

export default class StorageFacade {
	protected static instance = new MMKV();

	protected static key = "images";

	public static load(): Image[] {
		const images = this.instance.getString(this.key);

		return images ? JSON.parse(images) : [];
	}

	public static save(images: Image[]): void {
		this.instance.set(this.key, JSON.stringify(images));
	}
}