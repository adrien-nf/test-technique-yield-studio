import { Controller, FieldValues, Path, PathValue } from "react-hook-form";
import ImagePicker from "../ImagePicker/ImagePicker";
import Preview from "../ImagePicker/Preview/Preview";
import { InputProps } from "./Input";
import Error from "./Error";
import { View } from "react-native";

export default function ImageInput<FormData extends FieldValues>({ name, label, form }: InputProps<FormData>) {
	return (
		<Controller
			control={form.control}
			rules={{
				required: true,
			}}
			name={name}
			render={({ field: { onChange, value, onBlur } }) => (
				<>
					<ImagePicker onChangeImage={value => onChange(value as PathValue<FormData, Path<FormData>>)} />
					<Preview image={value} />
					<Error error={form.formState.errors[name]} label={label} />
				</>
			)}
		/>
	)
}