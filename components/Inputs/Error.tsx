import { FieldError } from "react-hook-form";
import { Text } from "react-native";
import tw from "../tailwind";

interface ErrorProps {
	error?: FieldError;
	label?: string;
}

export default function Error({ error, label }: ErrorProps) {
	if (error && error.type === "required") return <Text style={tw`text-red-500`}>{label} est requis.</Text>

	return null;
}