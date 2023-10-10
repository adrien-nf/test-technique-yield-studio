import { View } from 'react-native';
import { Image } from '../../types/Image';
import PostedImage from './PostedImage/PostedImage';
import tw from '../tailwind';

export default function ImageDeck({ images }: {
	images: Image[],
}) {
	return (
		<View style={tw`flex flex-row justify-between flex-wrap bg-red-500`}>
			{images.map(image => <PostedImage key={image.id} image={image} />)}
		</View>
	)
}
