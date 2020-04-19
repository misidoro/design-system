import React from 'react';
import { H1, H2 } from '../../tokens/typography';

const content = 'The quick brown fox jumps over the lazy dog';

const Typography = () => {
	return (
	<>
		<H1>{content}</H1>
		<H2>{content}</H2>
	</>
	)
};

export default {
	title: 'Tokens/typography'
};

export const typography = () => <Typography />;
