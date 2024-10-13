"use client";
import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_logo from "../Assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { getTotalCartItem } = useContext(ShopContext);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Set the menu item based on the current path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/Men") {
      setMenu("men");
    } else if (path === "/Women") {
      setMenu("women");
    } else if (path === "/kids") {
      setMenu("kids");
    } else {
      setMenu("shop");
    }
  }, [location]);

  return (
    <>
      <div className="Navbar">
        <div className="nav-logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <a href="/">
            <p className="shopper">Shopper</p>
          </a>
        </div>
        <ul className="nav-list">
          <li onClick={() => setMenu("shop")}>
            <a className="link" href="/">
              Shop
            </a>
            {menu === "shop" && <hr />}
          </li>
          <li onClick={() => setMenu("men")}>
            <a className="link" href="/Men">
              Men
            </a>
            {menu === "men" && <hr />}
          </li>
          <li onClick={() => setMenu("women")}>
            <a className="link" href="/Women">
              Women
            </a>
            {menu === "women" && <hr />}
          </li>
          <li onClick={() => setMenu("kids")}>
            <a className="link" href="/kids">
              Kids
            </a>
            {menu === "kids" && <hr />}
          </li>
        </ul>

        <div className="nav-login">
          {localStorage.getItem("auth-token") ? (
            <Link>
              <button
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace("/");
                }}
                className="nav-login-btn"
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/LoginSignup">
              <button className="nav-login-btn">Login</button>
            </Link>
          )}
          <Link to="/Cart">
            <img src={cart_logo} className="cart" alt="Cart" />
          </Link>
          <div className="counter">{getTotalCartItem()}</div>
          {/* Menu icon for mobile */}
          <div>
            <IoMenu className="menu-icon" size={24} onClick={toggleSidebar} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <IoClose size={24} onClick={closeSidebar} className="close-icon" />
        </div>
        <ul className="sidebar-list">
          <li
            onClick={() => {
              setMenu("shop");
              closeSidebar();
            }}
          >
            <Link className="link" to="/">
              Shop
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("men");
              closeSidebar();
            }}
          >
            <Link className="link" to="/Men">
              Men
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("women");
              closeSidebar();
            }}
          >
            <Link className="link" to="/Women">
              Women
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("kids");
              closeSidebar();
            }}
          >
            <Link className="link" to="/kids">
              Kids
            </Link>
          </li>
          <li
            onClick={() => {
              closeSidebar();
            }}
          >
            {localStorage.getItem("auth-token") ? (
              <Link
                className="link"
                onClick={() => {
                  localStorage.removeItem(
                    "auth-token",
                    window.location.replace("/")
                  );
                }}
              >
                Logout
              </Link>
            ) : (
              <Link className="link" to="/LoginSignup">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Navbar;
