import styled from 'styled-components';

export const FooterContainer = styled.div`
	display: flex;
	background-color: #232127;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		margin-left: -4em;
	}
`;

export const FooterContainerDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;
export const ShortlyLogo = styled.img`
	background-color: #fff;
	margin: 3.7em 0;
`;
export const FooterInnerDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: center;
	}
`;
export const FooterFeaturesDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2.3em 1em;

	@media screen and (max-width: 800px) {
		margin: 1em 0;
	}
`;
export const FeatureHeading = styled.h4`
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	color: #fff;

	@media screen and (max-width: 800px) {
		text-align: center;
	}
`;
export const FeaturesLink = styled.a`
	font-family: 'Poppins', sans-serif;
	color: #fff;
	padding-bottom: 0.5rem;
	cursor: pointer;
	&:hover {
		color: #2acfcf;
	}

	@media screen and (max-width: 800px) {
		text-align: center;
	}
`;
export const FooterSocialLinks = styled.div`
	display: flex;
	margin: 3em 1em;

	@media screen and (max-width: 800px) {
		margin: 1em 0;
	}
`;
export const SocialImg = styled.img`
	margin: 5px;
	padding: 0.5em;
	cursor: pointer;

	&:hover {
		background-color: #2acfcf;
	}
`;
