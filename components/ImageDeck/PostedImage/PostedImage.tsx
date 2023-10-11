import { Image, Pressable } from "react-native";
import { Image as ImageType } from "../../../types/Image";
import { Link } from "expo-router";

export default function PostedImage({ image }: {
	image: ImageType;
}) {
	return (
		<Link asChild href={`/images/${image.id}`}>
			<Pressable>
				<Image resizeMode={'cover'} style={{ width: 100, height: 100 }} source={{ uri: image.file.uri }} />
			</Pressable>
		</Link>
	)
}