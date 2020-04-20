import React from 'react';
import { H4 } from '../../tokens/typography';
import { CardStyled, CardCategory, CardRow, CardCreatedBy } from '../../atoms/data-display/card';

export default {
	title: 'Atoms/CardStyled'
};

export const card = () => (
	<CardStyled>
		<H4>Hyper flow</H4>
		<CardRow>
			<CardCategory>Personal</CardCategory>
			<CardCreatedBy>Created by Admin</CardCreatedBy>
		</CardRow>
	</CardStyled>
);

export const cardColor = () => (
	<CardStyled>
		<H4>Hyper flow</H4>
		<CardRow>
			<CardCategory color="#ed2553">Organization</CardCategory>
			<CardCreatedBy>Created by User A</CardCreatedBy>
		</CardRow>
	</CardStyled>
);
