import React, { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Container } from '../../globalStyles';
import {
	InputContainer,
	InputDiv,
	Form,
	FormInput,
	InputSubmit,
	Msg,
	ShortedUrlDiv,
	ShortUrl,
	LongUrl,
	CopyBtn,
	ShortUrlDiv,
} from './Input.styles';

const Input = () => {
	const [url, setUrl] = useState(null);
	const [shortUrl, setShortUrl] = useState([]);
	const [longUrl, setLongUrl] = useState([]);

	const [copiedItems, setCopiedItem] = useState([]);

	const [fetching, setFetching] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setFetching(true);

		if (url === '') {
			alert('Cannot find any url, Please try again!');
		} else {
			axios
				.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
				.then((response) => {
					setLongUrl([...longUrl, response.data.result.original_link]);
					setShortUrl([...shortUrl, response.data.result.short_link]);
					setFetching(false);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
	return (
		<>
			<InputContainer>
				<Container>
					<InputDiv>
						<Form onSubmit={handleSubmit} validate>
							<FormInput
								type='text'
								placeholder='Shorten a link here...'
								onChange={(e) => setUrl(e.target.value)}
							/>

							<InputSubmit type='submit' value='Shorten it!' />
						</Form>
					</InputDiv>

					{fetching ? (
						<Msg>Please wait, Fetching shorten url</Msg>
					) : (
						<Msg>Please add a link</Msg>
					)}

					{shortUrl.length
						? shortUrl.map((link, index) => (
								<ShortedUrlDiv key={link}>
									<LongUrl>{longUrl[index]}</LongUrl>

									<ShortUrlDiv>
										<ShortUrl>{link}</ShortUrl>
										<CopyToClipboard text={link}>
											<CopyBtn
												onClick={() => setCopiedItem([...copiedItems, index])}
												isCopied={copiedItems.includes(index)}
											>
												{copiedItems.includes(index) ? 'Copied' : 'Copy'}
											</CopyBtn>
										</CopyToClipboard>
									</ShortUrlDiv>
								</ShortedUrlDiv>
						  ))
						: null}
				</Container>
			</InputContainer>
		</>
	);
};

export default Input;
