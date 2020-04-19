import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonStyled, ButtonLabel } from '../../atoms/inputs/button';

export default {
	title: 'Atoms/ButtonStyled'
};

export const button = () => (
	<ButtonStyled variant="primary" onClick={action('clicked')}>
		<ButtonLabel>Click</ButtonLabel>
	</ButtonStyled>
);
export const buttonSecondary = () => (
	<ButtonStyled variant="secondary" onClick={action('clicked')}>
		<ButtonLabel>Click</ButtonLabel>
	</ButtonStyled>
);
export const buttonDisabled = () => (
	<ButtonStyled disabled={true} onClick={action('clicked')}>
		<ButtonLabel>Click</ButtonLabel>
	</ButtonStyled>
);
