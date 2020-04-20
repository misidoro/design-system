import React from 'react';
import { H1, H2, H3, H4, Body1 } from '../../tokens/typography';

const content = 'The quick brown fox jumps over the lazy dog';

const Typography = () => {
	return (
	<>
		<H1>H1: {content}</H1>
		<H2>H2: {content}</H2>
		<H3>H3: {content}</H3>
		<H4>H4: {content}</H4>
		<Body1>Body1: {content}</Body1>
	</>
	)
};

export default {
	title: 'Tokens/typography'
};

export const typography = () => <Typography />;
