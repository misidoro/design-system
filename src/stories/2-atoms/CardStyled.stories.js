import React from 'react';
import { CardStyled, CardTitle, CardCategory, CardRow, CardCreatedBy } from '../../atoms/data-display';

export default {
	title: 'Atoms/card'
};

export const card = () => (
	<CardStyled>
		<CardTitle>Hyper flow</CardTitle>
		<CardRow>
			<CardCategory>Personal</CardCategory>
			<CardCreatedBy>Created by Miguel Isidoro</CardCreatedBy>
		</CardRow>
	</CardStyled>
);

export const cardColor = () => (
	<CardStyled>
		<CardTitle>Hyper flow</CardTitle>
		<CardRow>
			<CardCategory color="#ed2553">Personal</CardCategory>
			<CardCreatedBy>Created by Miguel Isidoro</CardCreatedBy>
		</CardRow>
	</CardStyled>
);
