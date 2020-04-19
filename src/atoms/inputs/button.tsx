import styled, { css } from 'styled-components';
import { blue } from '../../tokens/color';
import { Theme } from '../../theme';

export interface ButtonStyledProps {
	disabled?: boolean;
	variant?: 'primary' | 'secondary';
	children: React.ReactNode;
}

const disabledCss = css`
	cursor: not-allowed;
	opacity: 0.4;
`;

export const ButtonLabel = styled.span`
	display: flex;
	align-items: center;
	text-align: center;
	color: #ffffff;
`;

const variantCss = css`
	background-color: transparent;
	border-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.primary};
	${ButtonLabel} {
		color: ${({ theme }) => theme.primary};
	}
`;

type ThemedButtonStyledProps = ButtonStyledProps & { theme: Theme };

export const ButtonStyled =
	styled.button <
	ThemedButtonStyledProps >
	`
	background: ${blue[800]};
	border-radius: 0.25rem;
	padding: 6px 16px;
	font-size: 0.875rem; 
	min-width: 4rem;
	box-sizing: border-box;
	cursor: pointer;

	${({ variant }) => variant === 'secondary' && variantCss};
	${({ disabled }) => disabled && disabledCss};
`;
