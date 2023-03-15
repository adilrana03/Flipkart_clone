import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';

function App() {
	return (
		<div>
			<h1>Hello</h1>
			<Header />
			<Box style={{ marginTop: 54 }}>
				<Home />
			</Box>
		</div>
	);
}

export default App;
