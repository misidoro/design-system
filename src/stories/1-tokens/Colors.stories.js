import React from 'react';
import * as ColorPalette from '../../tokens/color';
import { H3 } from '../../tokens/typography';
import Color from 'color';

const wrapperStyle = {
	display: 'flex'
};

const colorStyle = (color) => ({
	background: color,
	width: '100%',
	color: '#eee',
	lineHeight: '50px',
	textAlign: 'center'
});

const getTextColor = (color) => {
	return Color(color).luminosity() > 0.4 ? ColorPalette.gray[900] : ColorPalette.gray[50];
};

const textStyle = (palette, colorKey) => ({
	color: getTextColor(palette, colorKey)
});

const ColorPaletteViz = () => {
	const palettes = [ 'blue', 'blueGray', 'gray' ];

	return (
		<div>
			{palettes.map((paletteName) => (
				<div key={paletteName}>
					<H3>{paletteName}</H3>
					<div style={wrapperStyle}>
						{Object.keys(ColorPalette[paletteName]).map((colorKey) => (
							<div key={colorKey} style={colorStyle(ColorPalette[paletteName][colorKey])}>
								<span style={textStyle(ColorPalette[paletteName][colorKey])}>
									{colorKey}: {ColorPalette[paletteName][colorKey]}
								</span>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default {
	title: 'Tokens/color'
};

export const Palette = () => <ColorPaletteViz />;
