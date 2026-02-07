import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index";
import Projects from "./pages/Projects/Index";
import MainLayout from "./layouts/MainLayout";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
