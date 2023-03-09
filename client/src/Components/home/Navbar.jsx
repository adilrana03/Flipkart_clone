import React from 'react';
import { Box } from '@mui/material';
import { navData } from '../../constants/data';

const Navbar = () => {
  return (
    <div>
        <Box>
                {
                        navData.map(data =>(
                                        <Box>
                                                <img src ={data.url} alt="nav" />
                                                <p>{data.text}</p>
                                        </Box>
                        ))
                }
        </Box>
    </div>
  )
}

export default Navbar