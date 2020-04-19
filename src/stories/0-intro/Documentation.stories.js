import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { H1, H2, Body1 } from '../../tokens/typography';

const content = {
	title: 'Concept',
	tokens: [
		{name : 'color', location: 'Tokens/color'},
		{name : 'typography', location: 'Tokens/typography'},
	],
	atoms: [
		{name : 'button', location: 'Atoms/button'},
		{name : 'card', location: 'Atoms/card'},
	],
	components: [
		{name : 'button', location: 'Atoms/button'},
		{name : 'card', location: 'Atoms/card'},
	]
};

export default {
	title: content.title
};

export const Welcome = () => {
	return (
		<>
			<H1>{content.title}</H1>
			
			<Body1>
				The system is organised in tokens, atoms and components. 
				A design system needs to be highly reusable as well as enforce company's best practices for UX and accessibility.
			</Body1>
			<Body1>
				This is just the initial approach. A system is expected to change and adapt over time.
			</Body1>

			<H2>Tokens</H2>
			<Body1>Tokens are the base all our visual design(color, spacing, typography)</Body1>
			<ul>
				{content.tokens.map((componentDef, i) => (
					<li key={i}><Body1 onClick={linkTo(componentDef.location)}>{componentDef.name}</Body1></li>
				))}
			</ul>

			<H2>Atoms</H2>
			<Body1>Atoms are styled elements that are highly reusable.</Body1>
			<ul>
				{content.atoms.map((componentDef, i) => (
					<li key={i}><Body1 onClick={linkTo(componentDef.location)}>{componentDef.name}</Body1></li>
				))}
			</ul>

			<H2>Components</H2> 
			<Body1>Components provide functionality and enforce best practices for UX and accessibility.</Body1>

			<ul>
				{content.components.map((componentDef, i) => (
					<li key={i}><Body1 onClick={linkTo(componentDef.location)}>{componentDef.name}</Body1></li>
				))}
			</ul>
		</>
	);
	
};
