import React from 'react';
import { Btn } from '../../globalStyles';
import { ActionHeading, ActionContainer } from './CallToAction.styles';

const CallToAction = () => {
	return (
		<ActionContainer>
			<ActionHeading>Boost your links today</ActionHeading>
			<Btn active>Get Started</Btn>
		</ActionContainer>
	);
};

export default CallToAction;
