import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	return (
		<main>
			<Router>
				<Routes>
					<Route path="/" element={<PublicLayout />}>
						<Route path="" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
