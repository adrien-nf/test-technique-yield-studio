import { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form";

export interface InputProps<T extends FieldValues> {
	name: Path<T>;
	form: UseFormReturn<T, any, undefined>;
	label?: string;
}