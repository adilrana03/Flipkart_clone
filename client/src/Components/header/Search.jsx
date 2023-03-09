import { InputBase } from '@mui/material';
import { Box, styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchContainer = styled(Box)`
	background: #fff;
	width: 38%;
	border-radius: 2px;
	margin-left: 10px;
	display: flex;
`;
const InputSearchBase = styled(InputBase)`
	padding-left: 20px;
	width: 100%;
        font-size:unset;
`;
const SearchIconWrapper = styled(Box)`
color:blue;
padding: 5px;
displat:flex;
`

const Search = () => {
	return (
		<SearchContainer>
			<InputSearchBase placeholder='Search for products, brands and more' />
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
		</SearchContainer>
	);
};

export default Search;
