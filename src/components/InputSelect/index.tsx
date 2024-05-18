import React from "react";
import { StyledComponentPropsWithRef } from "styled-components";
import { Select, ContainerInput, Label, MessageError } from "./styles";

export interface OptionSelect {
	value: string | number;
	label: string;
}

type InputProps = {
	error?: string;
	options: Array<OptionSelect>;
	label?: string;
	placeholder?: string;
	onChange?: (item: any) => void;
};

const style = {
	control: (base: any) => ({
		...base,
		border: "2px solid #d1d4db",
		boxShadow: "0px 4px 18px rgba(158, 168, 189, 0.31)",
		borderRadius: "10px",
	}),
};

const InputSelect = ({
	error,
	label,
	placeholder,
	options = [],
	onChange,
}: InputProps) => (
	<ContainerInput>
		<Label>{label}</Label>
		<Select placeholder={placeholder} styles={style} options={options} onChange={onChange} />
		<MessageError>{error}</MessageError>
	</ContainerInput>
);

InputSelect.displayName = "InputSelect";

export default InputSelect;
