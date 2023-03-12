import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { authenticatesSignup } from '../../service/api';

const Component = styled(Box)`
	height: 70vh;
	width: 90vh;
`;

const Image = styled(Box)`
	background: #2874f0
		url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
		center 85% no-repeat;
	height: 82%;
	width: 28%;
	padding: 45px 35px;
	& > p,
	& > h5 {
		color: #ffffff;
		font-weight: 600;
	}
`;

const Wrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	padding: 25px 35px;
	flex: 1;
	& > div,
	& > button,
	& > p {
		margin-top: 20px;
	}
`;

const LoginButton = styled(Button)`
	text-transform: none;
	background: #fb641b;
	color: #fff;
	height: 48px;
	border-radius: 2px;
`;
const OtpButton = styled(Button)`
	text-transform: none;
	background: #fff;
	color: #2874f0;
	height: 48px;
	border-radius: 2px;
	box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
font-size:12px
color:#878787;
`;
const CreateAccount = styled(Typography)`
	font-size: 14px;
	text-align: center;
	color: #2874f0;
	font-weight: 600;
	cursor: pointer;
`;

const initialValues = {
	login: {
		view: 'login',
		heading: 'Login',
		subHeading: 'Get Access to your Orders,Wishlist and Recommendations',
	},
	signup: {
		view: 'signup',
		heading: "Looks like you're new here!",
		subHeading: 'SignUp with your mobile to get started',
	},
};

const signupInitialvalues = {
	firstname: '',
	lastname: '',
	username: '',
	email: '',
	password: '',
	phone: '',
};

const LoginDialogue = ({ open, setOpen }) => {
	const [isLogin, setLogin] = useState(initialValues.login);
	const [Signup, setSignup] = useState(signupInitialvalues);

	const handleClose = () => {
		setOpen(false);
		setLogin(initialValues.login);
	};
	const toggleSignup = () => {
		setLogin(initialValues.signup);
	};

	const onInputChange = e => {
		console.log(e);
		setSignup({ ...Signup, [e.target.name]: e.target.value });
	};
	const signupUser = async() => {

        let response = await authenticatesSignup(Signup)
    };

	return (
		<Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
			<Component>
				<Box style={{ display: 'flex', height: '100%' }}>
					<Image>
						<Typography variant='h5'>{isLogin.heading}</Typography>
						<Typography style={{ marginTop: '20px' }}>{isLogin.subHeading}</Typography>
					</Image>
					{isLogin.view === 'login' ? (
						<Wrapper>
							<TextField variant='standard' label='Enter Email/Mobile Number' />
							<TextField variant='standard' label='Enter Password' />
							<Text>
								By continuing, you are agree to flipkart's Terms of Use and Privacy
								policy.
							</Text>
							<LoginButton>Login</LoginButton>
							<Typography style={{ textAlign: 'center' }}>OR</Typography>
							<OtpButton>Request OTP</OtpButton>
							<CreateAccount onClick={() => toggleSignup()}>
								New to Flipkart? create an account
							</CreateAccount>
						</Wrapper>
					) : (
						<Wrapper>
							<TextField
								variant='standard'
								label='Enter FirstName'
								name='firstname'
								onChange={e => {
									onInputChange(e);
								}}
							/>
							<TextField
								variant='standard'
								label='Enter LastName'
								name='lastname'
								onChange={e => {
									onInputChange(e);
								}}
							/>
							<TextField
								variant='standard'
								label='Enter Username'
								name='username'
								onChange={e => {
									onInputChange(e);
								}}
							/>
							<TextField
								variant='standard'
								label='Enter Email'
								name='email'
								onChange={e => {
									onInputChange(e);
								}}
							/>
							<TextField
								variant='standard'
								label='Enter Password'
								name='password'
								onChange={e => {
									onInputChange(e);
								}}
							/>
							<TextField
								variant='standard'
								label='Enter Phone'
								name='phone'
								onChange={e => {
									onInputChange(e);
								}}
							/>

							<LoginButton onClick={() => signupUser()}>Continue</LoginButton>
						</Wrapper>
					)}
				</Box>
			</Component>
		</Dialog>
	);
};

export default LoginDialogue;
