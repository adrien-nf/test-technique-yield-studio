import { create } from 'zustand';
import { Image } from '../types/Image';

interface ImageState {
	images: Image[],
	addImage: (image: Omit<Image, "id">) => void,
	removeImage: (image: Image) => void,
}

export const useImageStore = create<ImageState>((set) => ({
	images: [],
	addImage: (image: Omit<Image, "id">) => set((state) => {
		const id = Math.random().toString(36).substring(2, 10);
		const imageWithId: Image = { ...image, id };

		return ({ images: [imageWithId, ...state.images] })
	}),
	removeImage: (image: Image) => set((state) => {
		const imageIndex = state.images.findIndex(e => e.id === image.id);

		return ({ images: state.images.toSpliced(imageIndex) })
	}),
}))