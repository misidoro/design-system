import React, { MouseEvent } from 'react';
import { ButtonStyledProps, ButtonStyled, ButtonLabel } from '../../atoms/inputs/button';

export interface ButtonProps extends ButtonStyledProps {
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
	return (
		<ButtonStyled disabled={props.disabled} onClick={props.onClick}>
			<ButtonLabel>{props.children}</ButtonLabel>
		</ButtonStyled>
	);
};
