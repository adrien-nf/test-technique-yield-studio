import { Image } from "react-native";
import { Image as ImageType } from "../../../types/Image";

export default function PostedImage({ image }: {
	image: ImageType;
}) {
	return (
		<Image resizeMode={'cover'} style={{ width: '30%', height: 1, aspectRatio: 1 }} source={{ uri: image.file.uri }} />
	)
}