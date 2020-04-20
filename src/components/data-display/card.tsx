import React from 'react';
import { CardStyled, CardCategory, CardRow, CardCreatedBy } from '../../atoms/data-display/card';
import { H4 } from '../../tokens/typography';

export interface CardProps {
	title: string;
	category: string;
	createdBy: string;
	categoryColor?: string;
}

export const Card = ({ title, category, createdBy, categoryColor }: CardProps) => (
	<CardStyled>
		<H4>{title}</H4>
		<CardRow>
			<CardCategory color={categoryColor}>{category}</CardCategory>
			<CardCreatedBy>{createdBy}</CardCreatedBy>
		</CardRow>
	</CardStyled>
);
