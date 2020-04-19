import React from 'react';
import { CardStyled, CardTitle, CardCategory, CardRow, CardCreatedBy } from '../../atoms/data-display/card';

export default {
	title: 'Atoms/card'
};

export const card = () => (
	<CardStyled>
		<CardTitle>Hyper flow</CardTitle>
		<CardRow>
			<CardCategory>Personal</CardCategory>
			<CardCreatedBy>Created by Admin</CardCreatedBy>
		</CardRow>
	</CardStyled>
);

export const cardColor = () => (
	<CardStyled>
		<CardTitle>Hyper flow</CardTitle>
		<CardRow>
			<CardCategory color="#ed2553">Organization</CardCategory>
			<CardCreatedBy>Created by User A</CardCreatedBy>
		</CardRow>
	</CardStyled>
);
