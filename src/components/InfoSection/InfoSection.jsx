import React from 'react';
import { Btn } from '../../globalStyles.js';
import Hero from '../../assets/illustration-working.svg';
import { Container } from '../../globalStyles';

import {
	InfoSec,
	InfoRow,
	TextWrapper,
	Heading,
	Desc,
	ImageWrapper,
	Img,
	InfoCol,
} from './InfoSection.styles';

const InfoSection = () => {
	return (
		<>
			<InfoSec>
				<Container>
					<InfoRow>
						<InfoCol>
							<TextWrapper>
								<Heading>More than just shorter links</Heading>
								<Desc>
									Build your brand's recognition and get detailed insights on
									how your links are performing.
								</Desc>
								<Btn active={true}>Get Started</Btn>
							</TextWrapper>
						</InfoCol>
						<InfoCol>
							<ImageWrapper>
								<Img src={Hero} alt='image'></Img>
							</ImageWrapper>
						</InfoCol>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
};

export default InfoSection;
