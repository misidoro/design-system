import React from 'react';
import styled, { css } from 'styled-components';

export interface TypographyProps {
	children: React.ReactNode;
	color?: string;
}

const headingCss =
	css <
	TypographyProps >
	`
	font-family: ${({ theme }) => theme.fontFamily};
	font-style: normal;
	font-weight: 600;
	color: ${({ color, theme }) => color || theme.fontColor};
`;

const H1Styled = styled.h1`
	${headingCss};
	font-size: 22px;
	line-height: 30px;
`;

const H2Styled = styled.h2`
	${headingCss};
	font-size: 20px;
	line-height: 28px;
`;

const H3Styled = styled.h3`
	${headingCss};
	font-size: 18px;
	line-height: 26px;
`;

const H4Styled = styled.h4`
	${headingCss};
	font-size: 16px;
	line-height: 24px;
`;

const bodyCss =
	css <
	TypographyProps >
	`
	font-family: ${({ theme }) => theme.fontFamily};
	font-style: normal;
	font-weight: 500;
	color: ${({ color, theme }) => color || theme.fontColor};
`;

const Body1Styled = styled.p`
	${bodyCss};
	font-size: 14px;
	line-height: 22px;
`;

export const H1 = (props: TypographyProps) => <H1Styled>{props.children}</H1Styled>;
export const H2 = (props: TypographyProps) => <H2Styled>{props.children}</H2Styled>;
export const H3 = (props: TypographyProps) => <H3Styled>{props.children}</H3Styled>;
export const H4 = (props: TypographyProps) => <H4Styled>{props.children}</H4Styled>;
export const Body1 = (props: TypographyProps) => <Body1Styled>{props.children}</Body1Styled>;
