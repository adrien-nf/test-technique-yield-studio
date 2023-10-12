import { Image, Pressable } from "react-native";
import { Image as ImageType } from "../../../types/Image";
import { Link } from "expo-router";
import { useImageStore } from "../../../stores/useImageStore";

export default function PostedImage({ image }: {
	image: ImageType;
}) {
	const deletionList = useImageStore((state) => state.deletionList);
	const toggleInDeletionList = useImageStore((state) => state.toggleInDeletionList);

	const isInDeletionMode = deletionList.length > 0;

	return (
		<Link asChild href={isInDeletionMode ? "" : `/images/${image.id}`}>
			<Pressable onPress={isInDeletionMode ? () => toggleInDeletionList(image) : () => { }} onLongPress={() => toggleInDeletionList(image)}>
				<Image resizeMode={'cover'} style={{ width: 100, height: 100, opacity: deletionList.includes(image) ? 0.5 : 1 }} source={{ uri: image.file.uri }} />
			</Pressable>
		</Link>
	)
}