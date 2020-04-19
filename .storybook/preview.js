import React from 'react';

import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@storybook/theming/create';
import { addons } from '@storybook/addons';
import { theme } from '../src/theme';

addons.setConfig({
	theme: themes.dark
});

require('typeface-nunito-sans');

addDecorator((storyFn) => <ThemeProvider theme={theme.light}>{storyFn()}</ThemeProvider>);
