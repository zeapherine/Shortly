import React from 'react';
import { Container } from '../../globalStyles';
import facebook from '../../assets/icon-facebook.svg';
import twitter from '../../assets/icon-twitter.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import instagram from '../../assets/icon-instagram.svg';
import ShortlyImg from '../../assets/logo.svg';

import {
	FooterContainer,
	ShortlyLogo,
	FooterInnerDiv,
	FooterFeaturesDiv,
	FeatureHeading,
	FeaturesLink,
	FooterSocialLinks,
	SocialImg,
	FooterContainerDiv,
} from './Footer.styles';

const Fotter = () => {
	return (
		<>
			<FooterContainer>
				<Container>
					<FooterContainerDiv>
						<ShortlyLogo src={ShortlyImg} alt='logo' />
						<FooterInnerDiv>
							<FooterFeaturesDiv>
								<FeatureHeading>Features</FeatureHeading>
								<FeaturesLink>Link Shorting</FeaturesLink>
								<FeaturesLink>Brand Links</FeaturesLink>
								<FeaturesLink>Analytics</FeaturesLink>
							</FooterFeaturesDiv>
							<FooterFeaturesDiv>
								<FeatureHeading>Resources</FeatureHeading>
								<FeaturesLink>Blog</FeaturesLink>
								<FeaturesLink>Developers</FeaturesLink>
								<FeaturesLink>Support</FeaturesLink>
							</FooterFeaturesDiv>
							<FooterFeaturesDiv>
								<FeatureHeading>Company</FeatureHeading>
								<FeaturesLink>About</FeaturesLink>
								<FeaturesLink>Our Team</FeaturesLink>
								<FeaturesLink>Careers</FeaturesLink>
								<FeaturesLink>Contact</FeaturesLink>
							</FooterFeaturesDiv>

							<FooterSocialLinks>
								<SocialImg src={facebook} alt='facebook logo' />
								<SocialImg src={twitter} alt='twitter' />
								<SocialImg src={pinterest} alt='pinterest' />
								<SocialImg src={instagram} alt='instagram' />
							</FooterSocialLinks>
						</FooterInnerDiv>
					</FooterContainerDiv>
				</Container>
			</FooterContainer>
		</>
	);
};

export default Fotter;
