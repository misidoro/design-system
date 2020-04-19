import styled from 'styled-components';

export const CardStyled = styled.div`
	* {
		box-sizing: border-box;
	}
	background: ${({ theme }) => theme.background};
	border-radius: 0.25rem;
	border: 2px solid #e7e7e7;
	box-sizing: border-box;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	> * {
		margin: 0.5rem 0;
		&:first-child {
			margin-top: 0;
		}
		&:last-child {
			margin-bottom: 0;
		}
	}
`;

export const CardRow = styled.div`
	> * {
		margin: 0 0.5rem;
		&:first-child {
			margin-left: 0;
		}
		&:last-child {
			margin-right: 0;
		}
	}
`;

export const CardTitle = styled.h4`
	font-family: ${({ theme }) => theme.fontFamily};
	font-style: normal;
	font-weight: 600;
	font-size: 1rem;
	line-height: 1rem;
`;

export interface CardCategoryStyledProps {
	color?: string;
}

export const CardCategory =
	styled.span <
	CardCategoryStyledProps >
	`
	font-family: ${({ theme }) => theme.fontFamily};
	font-style: normal;
	font-weight: 600;
	font-size: 0.75rem;
	line-height: 1rem;
	color: #fff;
	padding: 0.25rem;
	border-radius: 0.25rem;
	text-transform: capitalize;
	background: ${({ color, theme }) => (color ? color : theme.secondary)};
`;

export const CardCreatedBy = styled.span`
	font-family: ${({ theme }) => theme.fontFamily};
	font-style: normal;
	font-weight: 300;
	font-size: 0.875rem;
	line-height: 0.875rem;
	color: #878796;
`;
