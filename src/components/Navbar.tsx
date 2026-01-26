import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
			<Link>
				<img src="../src/assets/icon.png" className="h-8 w-auto" />
			</Link>

			<div className="space-x-4">
				<Link to="/" className="hover:text-gray-300">
					Home
				</Link>
				<Link to="/about" className="hover:text-gray-300">
					About
				</Link>
			</div>
		</nav>
	);
}
