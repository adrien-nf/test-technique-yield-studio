import { create } from 'zustand';
import { Image } from '../types/Image';
import StorageFacade from '../facades/StorageFacade';

interface ImageState {
	images: Image[],
	add: (image: Omit<Image, "id">) => void,
	remove: (image: Image) => void,
}

export const useImageStore = create<ImageState>((set) => ({
	images: StorageFacade.load(),
	add: (image: Omit<Image, "id">) => set((state) => {
		const id = Math.random().toString(36).substring(2, 10);
		const imageWithId: Image = { ...image, id };

		return ({ images: [imageWithId, ...state.images] })
	}),
	remove: (image: Image) => set((state) => {
		const imageIndex = state.images.findIndex(e => e.id === image.id);

		const splicedImages = [...state.images];
		splicedImages.splice(imageIndex);

		return ({ images: splicedImages })
	}),
}))