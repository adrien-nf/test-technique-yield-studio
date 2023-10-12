import { Controller, FieldValues, Path, PathValue } from "react-hook-form";
import { TextInput as RnTextInput, View } from "react-native";
import { InputProps } from "./Input";
import Error from "./Error";

export default function TextInput<FormData extends FieldValues>({ name, form, label }: InputProps<FormData>) {
	return (
		<Controller
			control={form.control}
			rules={{
				required: true,
			}}
			name={name}
			render={({ field: { onChange, value, onBlur } }) => (
				<View>
					<RnTextInput
						placeholder={label}
						value={value}
						onBlur={onBlur}
						onChangeText={value => onChange(value as PathValue<FormData, Path<FormData>>)}
					/>
					<Error error={form.formState.errors[name]} label={label} />
				</View>
			)}
		/>
	)
}