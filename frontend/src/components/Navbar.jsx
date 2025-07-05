import React, { useContext, useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef();

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-200">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setShowDropdown((prev) => !prev)}
              className="cursor-pointer flex items-center gap-2"
            >
              <img
                className="w-11 h-11 rounded-full object-cover"
                src={userData?.image || assets.default_avatar}
                alt="User"
              />
              <img
                className="w-2.5"
                src={assets.dropdown_icon}
                alt="Dropdown"
              />
            </div>

            {showDropdown && (
              <div className="absolute top-full right-0 mt-2 min-w-48 bg-stone-100 rounded shadow-lg p-4 flex flex-col gap-4 text-base font-medium text-gray-600 z-20">
                <p
                  onClick={() => {
                    navigate("/my-profile");
                    setShowDropdown(false);
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => {
                    navigate("/my-appointments");
                    setShowDropdown(false);
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => {
                    logout();
                    setShowDropdown(false);
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        <img
          onClick={() => setShowMobileMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="Menu"
        />

        {showMobileMenu && (
          <div className="fixed inset-0 bg-white z-20 transition-all">
            <div className="flex items-center justify-between px-5 py-6">
              <img className="w-36" src={assets.logo} alt="Logo" />
              <img
                className="w-7 cursor-pointer"
                onClick={() => setShowMobileMenu(false)}
                src={assets.cross_icon}
                alt="Close"
              />
            </div>
            <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
              <NavLink onClick={() => setShowMobileMenu(false)} to="/">
                <p className="px-4 py-2 rounded">HOME</p>
              </NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/doctors">
                <p className="px-4 py-2 rounded">ALL DOCTORS</p>
              </NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/about">
                <p className="px-4 py-2 rounded">ABOUT</p>
              </NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/contact">
                <p className="px-4 py-2 rounded">CONTACT</p>
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
