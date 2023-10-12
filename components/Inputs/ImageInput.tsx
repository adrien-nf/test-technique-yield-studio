import { Controller, FieldValues, Path, PathValue } from "react-hook-form";
import ImagePicker from "../ImagePicker/ImagePicker";
import Preview from "../ImagePicker/Preview/Preview";
import { InputProps } from "./Input";
import Error from "./Error";
import { Pressable, View } from "react-native";
import tw from "../tailwind";

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
					<View style={tw`flex grow gap-3 flex-col justify-center`}>
						{
							value ? (
								<View style={tw`flex grow justify-center`}>
									<Pressable style={tw`flex grow justify-center max-h-full`} onPress={() => form.resetField(name)}>
										<Preview image={value} />
									</Pressable>
								</View>
							) : (
								<View>
									<ImagePicker onChangeImage={value => onChange(value as PathValue<FormData, Path<FormData>>)} />
								</View>
							)
						}
					</View>
					<Error error={form.formState.errors[name]} label={label} />
				</>
			)}
		/>
	)
}