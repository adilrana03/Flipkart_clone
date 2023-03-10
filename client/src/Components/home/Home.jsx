import Navbar from './Navbar';
import Banner from './Banner';
import React from 'react';
import { Box, styled } from '@mui/material';

const Component = styled(Box)`
	padding: 10px 10px;
        background:#f2f2f2;
`;

const Home = () => {
	return (
		<>
			<Navbar />
			<Component>
				<Banner />
			</Component>
		</>
	);
};

export default Home;
