import { useState } from "react";
import { NavLink } from "react-router-dom";
import IconUtama from "../assets/icons/icon.svg";
import IconMenu from "../assets/icons/menu.svg";
import IconClose from "../assets/icons/close.svg";

const menuItems = [
	{ path: "/", label: "Home" },
	{ path: "/about", label: "About" }
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-gray-900 text-white px-4 py-3 flex justify-center items-center w-screen">
			<div className="w-full max-w-4xl flex justify-between items-center">
				{/* Logo */}
				<NavLink to="/" aria-label="Go to home">
					<img src={IconUtama} className="w-8 h-8" alt="Logo" />
				</NavLink>

				{/* Menu desktop */}
				<div className="space-x-4 hidden md:flex">
					{menuItems.map(item => (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) =>
								isActive
									? "text-yellow-400 font-semibold"
									: "hover:text-gray-300"
							}
						>
							{item.label}
						</NavLink>
					))}
				</div>
				{/* Tombol hamburger */}
				<button
					className="md:hidden w-8 h-8"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? "Close menu" : "Open menu"}
				>
					<img
						src={isOpen ? IconClose : IconMenu}
						alt="menu toggle"
					/>
				</button>
			</div>

			<div
				className={`
    fixed inset-0 z-40 bg-black/50 transition-all duration-300
    ${
		isOpen
			? "opacity-100 pointer-events-auto"
			: "opacity-0 pointer-events-none"
	}
  `}
				onClick={() => setIsOpen(false)}
			>
				<div
					className={`
      absolute right-0 top-0 h-full w-2/3 bg-gray-900 p-6
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
					onClick={e => e.stopPropagation()}
				>
					<ul className="flex flex-col space-y-6 mt-10 text-lg items-center">
						{menuItems.map(item => (
							<li key={item.path}>
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										isActive
											? "text-yellow-400 font-semibold text-2xl"
											: "text-white hover:text-gray-300 text-xl"
									}
									onClick={() => setIsOpen(false)}
								>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
