import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					<Route path="/" element={<Hero/>} />
					<Route path="/about" element={<About />} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
