import IconFacebook from "../assets/icons/facebook_white.svg";
import IconInstagram from "../assets/icons/instagram_white.svg";
import IconLinkedin from "../assets/icons/linkedin_white.svg";
import IconTiktok from "../assets/icons/tiktok_white.svg";
import IconGithub from "../assets/icons/github_white.svg";

import { NavLink } from "react-router-dom";
import { getMenuItems } from "/src/utils/functions";

const menuItems = getMenuItems();

export default function Footer() {
	return (
		<footer
			className="place-items-center bg-gray-900 text-white pt-4 px-8
		shadow-[0_-8px_20px_rgba(0,0,0,0.45)]"
		>
			<div className="max-w-4xl">
				<h3 className="judul-footer">About Me</h3>
				<div className="ml-2">
					<p>
						I enjoy learning how systems work at different levels
						and continuously improving my engineering skills.
					</p>
					<div className="flex gap-2 mt-1">
						<a href="#">
							<button>
								<img src={IconFacebook} />
							</button>
						</a>
						<a href="#">
							<button>
								<img src={IconInstagram} />
							</button>
						</a>
						<a href="#">
							<button>
								<img src={IconTiktok} />
							</button>
						</a>
						<a href="#">
							<button>
								<img src={IconLinkedin} />
							</button>
						</a>
						<a href="#">
							<button>
								<img src={IconGithub} />
							</button>
						</a>
					</div>
				</div>
				<h3 className="judul-footer">Navigasi</h3>
				<ul className="ml-2">
					{menuItems.map(item => (
						<li>
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
						</li>
					))}
				</ul>
				<p className="text-center mt-4 pt-8 py-8 border-t-2 border-gray-400">
					Copyright © 2026 RandyBgn. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
