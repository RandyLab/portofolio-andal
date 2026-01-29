import { Link } from "react-router-dom";
import IconUtama from "../assets/icons/icon.svg";
import IconClose from "../assets/icons/close.svg";
import IconMenu from "../assets/icons/menu.svg";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex justify-center w-screen">
      <div className="w-full max-w-4xl flex justify-between items-center">
        <Link to="/">
          {/* <img src="../src/assets/icon.png" className="h-8 w-auto" /> */}
          <img src={IconUtama} className="w-8 h-8" />
        </Link>

        <div className="space-x-4 hidden md:block">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
        </div>

        <img
          src={IconMenu}
          alt="menu"
          className="md:hidden w-8 h-8 cursor-pointer"
        />

        <div className="flex absolute bg-gray-800/50 top-0 left-0 w-screen h-screen justify-end">
          <img
            src={IconClose}
            alt="close"
            className="w-8 h-8 mt-4 p-2 bg-gray-900 cursor-pointer"
          />
          <ul className="px-8 py-16 bg-gray-900 space-y-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
