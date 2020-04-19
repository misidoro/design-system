import React from 'react';
import { Card } from '../../components/data-display/card';

export default {
	title: 'Components/card',
	parameters: {
		component: Card,
		componentSubtitle: 'Contain content and actions about a single subject.'
	}
};

export const card = () => <Card title="Component A" category="components" createdBy="Admin" />;

export const cardColor = () => <Card title="Component B" category="components" createdBy="Admin" categoryColor="red" />;
