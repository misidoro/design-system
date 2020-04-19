import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../components/inputs/button';

export default {
	title: 'Components/button',
	parameters: {
		component: Button,
		componentSubtitle: 'Allow users to take actions, and make choices, with a single tap.'
	}
};

export const button = () => (
	<Button variant="primary" onClick={action('clicked')}>
		Click
	</Button>
);
export const buttonSecondary = () => (
	<Button variant="secondary" onClick={action('clicked')}>
		Click
	</Button>
);
export const buttonDisabled = () => (
	<Button disabled={true} variant="secondary" onClick={action('clicked')}>
		Click
	</Button>
);
