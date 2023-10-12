import { Button, ScrollView } from "react-native";
import { useForm, SubmitHandler } from "react-hook-form"
import tw from "../../components/tailwind";
import { ImagePickerAsset } from "expo-image-picker";
import { useImageStore } from "../../stores/useImageStore";
import TextInput from "../../components/Inputs/TextInput";
import ImageInput from "../../components/Inputs/ImageInput";
import { useRouter } from "expo-router";
import SnackBar from 'react-native-snackbar-component'

type FormData = {
	title: string,
	file: ImagePickerAsset
}

export default function Page() {
	const form = useForm<FormData>();

	const router = useRouter();

	const add = useImageStore((state) => state.add);

	const onSubmit: SubmitHandler<FormData> = (data) => {
		add(data);
		form.reset();
		router.back();
	}

	return (
		<ScrollView contentContainerStyle={tw`grow gap-4`}>
			<TextInput<FormData> label="Titre" name="title" form={form} />
			<ImageInput<FormData> label="Image" name="file" form={form} />
			<Button title="Valider" disabled={!form.formState.isDirty || !form.formState.isValid} onPress={form.handleSubmit(onSubmit)} />
		</ScrollView>
	)
}