import { blue, blueGray } from './tokens/color';

export const light = {
	brand: '#0B0E35',
	primary: blue[800],
	secondary: blueGray[100],
	fontFamily: 'Nunito Sans, sans-serif',
	fontColor: '#222',
	background: '#fff'
};

export const dark = {
	brand: '#0B0E35',
	primary: blue[100],
	secondary: blueGray[400],
	fontFamily: 'Nunito Sans, sans-serif',
	fontColor: '#fff',
	background: '#222'
};

export const theme = {
	light,
	dark
};

export type Theme = typeof theme;
