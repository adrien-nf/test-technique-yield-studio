import { Button, Text, TextInput, View } from "react-native";
import { useForm, SubmitHandler, Form, Controller } from "react-hook-form"
import { SafeAreaView } from "react-native-safe-area-context";
import ImagePicker from "../../components/ImagePicker/ImagePicker";

type Inputs = {
	title: string,
	picture: undefined
}

export default function Page() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	return (
		<SafeAreaView>
			<Controller
				control={control}
				name="title"
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						placeholder="Enter your name here"
						value={value}
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
					/>
				)}
			/>
			<ImagePicker />
			<Button title='Submit' onPress={handleSubmit(onSubmit)} />
		</SafeAreaView>
	)
}