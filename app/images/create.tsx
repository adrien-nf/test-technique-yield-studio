import { Button, ScrollView, TextInput, View } from "react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import tw from "../../components/tailwind";
import { ImagePickerAsset } from "expo-image-picker";
import { useImageStore } from "../../stores/useImageStore";
import Preview from "../../components/ImagePicker/Preview/Preview";

type Inputs = {
	title: string,
	file: ImagePickerAsset
}

export default function Page() {
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<Inputs>()

	const addImage = useImageStore((state) => state.addImage);

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		addImage(data);
		reset();
	}

	return (
		<ScrollView contentContainerStyle={tw`grow gap-4`}>
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
				name="file"
				render={({ field: { onChange, value, onBlur } }) => (
					<>
						<ImagePicker onChangeImage={value => onChange(value)} />
						<View style={tw`grow`}>
							<Preview image={value} />
						</View>
					</>
				)}
			/>
			<Button title='Submit' onPress={handleSubmit(onSubmit)} />
		</ScrollView>
	)
}