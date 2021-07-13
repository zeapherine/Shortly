import React from 'react';
import { Container } from '../../globalStyles';
import iconBrandRecognition from '../../assets/icon-brand-recognition.svg';
import iconDetailRecords from '../../assets/icon-detailed-records.svg';
import iconFullRecognition from '../../assets/icon-fully-customizable.svg';
import {
	StatsContainer,
	StatsHeadingDiv,
	StatsHeading,
	StateParagraph,
	CardContainer,
	FeaturesCard,
	FeaturesImg,
	CardTitle,
	CardPara,
	CardArrow,
} from './Stats.styles';
const Stats = () => {
	return (
		<>
			<StatsContainer>
				<Container>
					<StatsHeadingDiv>
						<StatsHeading>Advanced Statistics</StatsHeading>
						<StateParagraph>
							Track how your links are performing accross he web with our
							advanced statistics dashboard.
						</StateParagraph>
					</StatsHeadingDiv>
					<CardArrow />

					<CardContainer>
						<FeaturesCard fromTop={'0'}>
							<FeaturesImg src={iconBrandRecognition} alt='brand-logo' />

							<CardTitle>Brand Recognition</CardTitle>
							<CardPara>
								Boost your brand recognition with each click. Generic links
								don't mean a thing. Branded links help instill confidence in
								your content
							</CardPara>
						</FeaturesCard>

						<FeaturesCard fromTop={'60px'}>
							<FeaturesImg src={iconDetailRecords} alt='brand-logo' />

							<CardTitle>Detailed Records</CardTitle>
							<CardPara>
								Gain insights into who is clicking your links. Knowing when and
								where people engage with your content helps inform better
								decisions.
							</CardPara>
						</FeaturesCard>

						<FeaturesCard fromTop={'120px'}>
							<FeaturesImg src={iconFullRecognition} alt='brand-logo' />

							<CardTitle>Customizable</CardTitle>
							<CardPara>
								Improve brand awareness and content discoverability through
								customizable links, supercharging audience engagement.
							</CardPara>
						</FeaturesCard>
					</CardContainer>
				</Container>
			</StatsContainer>
		</>
	);
};

export default Stats;
