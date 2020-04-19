import React from 'react';
import * as ColorPalette from '../../tokens/color';

const wrapperStyle = {
	display: 'flex',
	background: '#ddd'
};

const colorStyle = (color) => ({
	background: color,
	width: '50px',
	height: '50px',
	color: '#eee',
	lineHeight: '50px',
	textAlign: 'center'
});

const ColorPaletteViz = () => {
	const palettes = [ 'blue', 'blueGray' ];

	return (
		<div>
			{palettes.map((paletteName) => (
				<div key={paletteName}>
					<h4>{paletteName}</h4>
					<div style={wrapperStyle}>
						{Object.keys(ColorPalette[paletteName]).map((colorKey) => (
							<span key={colorKey} style={colorStyle(ColorPalette[paletteName][colorKey])}>
								{colorKey}
							</span>
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
