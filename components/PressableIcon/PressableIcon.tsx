import { Pressable, Text } from "react-native";
import tw from "../tailwind";

interface PressableIconProps {
	onPress: () => void,
	icon: JSX.Element,
	text: string,
}

export default function PressableIcon({ onPress, icon, text }: PressableIconProps) {
	return (
		<Pressable onPress={onPress} style={tw`flex grow basis-0 items-center justify-center py-3 landscape:py-1 bg-gray-100 border-gray-200 border rounded-lg`}>
			{<icon.type {...icon.props} style={tw`text-gray-400 my-2`} size={32} backgroundColor="transparent" />}
			<Text style={tw`text-gray-400`}>{text}</Text>
		</Pressable>
	)
}