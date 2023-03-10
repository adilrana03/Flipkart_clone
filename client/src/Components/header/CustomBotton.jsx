import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/system';
import LoginDialogue from '../login/LoginDialogue';
import { useState } from 'react';

const Wrapper = styled(Box)`
display:flex;
margin: 0 3% 0 auto;
& > button, & > p, & > div {
        margin-right:40px;
        font-size:16px
        align-items:center;
}
`;

const Container = styled(Box)`
	display: flex;
`;
const LoginButton = styled(Button)`
	color: #2874f0;
	background: #fff;
	text-transform: none;
	padding: 5px 40px;
	border-radius: 2px;
	box-shadow: none;
	font-weight: 600;
	height: 32px;
`;

const CustomBotton = () => {

	const [open, setOpen]= useState(false);
	const openDialogue=()=>{
		setOpen(true);
	}


	return (
		<Wrapper>
			<LoginButton variant='contained' onClick={() => openDialogue() }>Login</LoginButton>
			<Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
			<Typography style={{ marginTop: 3 }}>More</Typography>
			<Container>
				<ShoppingCart />
				<Typography>Cart</Typography>
			</Container>
			<LoginDialogue open= {open} setOpen={setOpen}/>
		</Wrapper>
	);
};

export default CustomBotton;
