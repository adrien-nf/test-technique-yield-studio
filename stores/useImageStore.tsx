import { create } from 'zustand';
import { Image } from '../types/Image';
import StorageFacade from '../facades/StorageFacade';

interface ImageState {
	images: Image[],
	add: (image: Omit<Image, "id">) => void,
	remove: (image: Image) => void,
	deletionList: Image[],
	toggleInDeletionList: (image: Image) => void,
	removeFromDeletionList: () => void,
}

export const useImageStore = create<ImageState>((set) => ({
	images: StorageFacade.load(),
	add: (image: Omit<Image, "id">) => set((state) => {
		const id = Math.random().toString(36).substring(2, 10);
		const imageWithId: Image = { ...image, id };

		const newState = { images: [imageWithId, ...state.images] }

		StorageFacade.save(newState.images);

		return newState;
	}),
	remove: (image: Image) => set((state) => {
		const imageIndex = state.images.findIndex(e => e.id === image.id);

		const splicedImages = [...state.images];
		splicedImages.splice(imageIndex, 1);

		const newState = { images: splicedImages }

		StorageFacade.save(newState.images);

		return newState;
	}),
	deletionList: [],
	toggleInDeletionList: (image: Image) => set((state) => {
		if (!state.deletionList.includes(image)) return ({ deletionList: [...state.deletionList, image] });

		const imageIndex = state.deletionList.findIndex(e => e.id === image.id);

		const splicedImages = [...state.deletionList];
		splicedImages.splice(imageIndex, 1);

		return ({ deletionList: splicedImages })
	}),
	removeFromDeletionList: () => set((state) => {
		const newState = {
			images: state.images.filter(image => !state.deletionList.includes(image)),
			deletionList: [],
		}

		StorageFacade.save(newState.images);

		return newState;
	})
}))