import { FlatList, View } from 'react-native';
import { Image } from '../../types/Image';
import PostedImage from './PostedImage/PostedImage';
import tw from '../tailwind';

export default function ImageDeck({ images }: {
	images: Image[],
}) {
	return (
		<View style={tw`flex flex-wrap justify-around gap-4 flex-row`}>
			{images.map(image => <PostedImage key={image.id} image={image} />)}
		</View>
	)
}  
