import React from 'react';
import { CardStyled, CardTitle, CardCategory, CardRow, CardCreatedBy } from '../../atoms/data-display/card';

export interface CardProps {
	title: string;
	category: string;
	createdBy: string;
	categoryColor?: string;
}

export const Card = ({ title, category, createdBy, categoryColor }: CardProps) => (
	<CardStyled>
		<CardTitle>{title}</CardTitle>
		<CardRow>
			<CardCategory color={categoryColor}>{category}</CardCategory>
			<CardCreatedBy>{createdBy}</CardCreatedBy>
		</CardRow>
	</CardStyled>
);
