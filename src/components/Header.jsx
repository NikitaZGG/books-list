import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const linkClass =
    "text-[#161616] text-base transition-all duration-200 hover:text-[#244d4d]";
  const activeLinkClass = "text-[#244d4d] font-semibold";

  return (
    <header className="fixed top-0 left-0 w-full bg-[#d6d6d6] flex flex-col p-5 px-4 md:px-0">
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-[#244d4d] text-2xl">
            <Link to="/" className="hover:opacity-80 transition">
              DudeShape
            </Link>
          </h1>
        </div>

        {/* ПК навигация*/}
        <nav className="hidden md:flex gap-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
          >
            Catalog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
          >
            About
          </NavLink>
        </nav>

        <div className="flex gap-7 items-center">
          <button className="text-[#161616] hover:text-[#244d4d] transition-colors">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6" />
            </svg>
          </button>

          {/* Меню-бургер на мобилке */}
          <button
            className="block md:hidden text-[#161616] hover:text-[#244d4d] transition-colors"
            onClick={toggleMenu}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <nav className="md:hidden mt-5 flex flex-col gap-3 border-t border-gray-400 py-4 px-4">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
          >
            Catalog
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? activeLinkClass : linkClass
            }
          >
            About
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
