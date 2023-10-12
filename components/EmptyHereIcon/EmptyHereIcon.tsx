import tw from '../../components/tailwind';
import { Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function EmptyHereIcon() {
	return (
		<View style={tw`flex grow justify-center items-center gap-3`}>
			<FontAwesome5 name="sad-tear" size={64} style={tw`text-gray-200`} />
			<Text style={tw`text-gray-200`}>C'est vide par ici!</Text>
		</View>
	)
}