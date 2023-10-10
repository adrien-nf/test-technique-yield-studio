import { Button, ScrollView, TextInput } from "react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import tw from "../../components/tailwind";
import { ImagePickerAsset } from "expo-image-picker";

type Inputs = {
	title: string,
	picture: ImagePickerAsset
}

export default function Page() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	return (
		<ScrollView contentContainerStyle={tw`grow`}>
			<Controller
				control={control}
				name="title"
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						placeholder="Titre"
						value={value}
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
					/>
				)}
			/>
			<Controller
				control={control}
				name="title"
				render={({ field: { onChange, value, onBlur } }) => (
					<ImagePicker onChangeImage={value => onChange(value)} />
				)}
			/>
			<Button title='Submit' onPress={handleSubmit(onSubmit)} />
		</ScrollView>
	)
}