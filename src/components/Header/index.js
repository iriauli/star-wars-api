import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { VscClose } from "react-icons/vsc";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 992 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <NavLink
          to="/"
          className={styles.header_content_logo}
          style={({ isActive }) => {
            return {
              color: isActive ? "rgb(97, 218, 251)" : "",
            };
          }}
        >
          Star Wars
        </NavLink>
        <nav
          className={`${styles.header_content_nav} ${
            menuOpen && size.width < 992 ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <NavLink
                to="/people"
                onClick={menuToggleHandler}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgb(97, 218, 251)" : "",
                  };
                }}
              >
                People
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/films"
                onClick={menuToggleHandler}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgb(97, 218, 251)" : "",
                  };
                }}
              >
                Films
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/starships"
                onClick={menuToggleHandler}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgb(97, 218, 251)" : "",
                  };
                }}
              >
                Starships
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vechiles"
                onClick={menuToggleHandler}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgb(97, 218, 251)" : "",
                  };
                }}
              >
                Vechiles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/species"
                onClick={menuToggleHandler}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgb(97, 218, 251)" : "",
                  };
                }}
              >
                Species
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/planets"
                onClick={menuToggleHandler}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgb(97, 218, 251)" : "",
                  };
                }}
              >
                Planets
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.header_content_toggle}>
          {!menuOpen ? (
            <IoIosMenu onClick={menuToggleHandler} />
          ) : (
            <VscClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
