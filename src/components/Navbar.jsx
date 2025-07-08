import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-[#0d1117]">
      <Logo />
      <ul className="flex gap-6 text-white">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`hover:text-green-400 transition ${
                location.pathname === item.path ? "text-green-400" : ""
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;