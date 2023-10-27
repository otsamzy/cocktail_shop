import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import { FaAlignJustify } from "react-icons/fa6";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Nav = () => {
  const [moadalOpen, setModalOpen] = useState(false);

  const navMainContainer = useRef(null);
  const navSubContainer = useRef(null);

  useEffect(() => {
    const navSubHeight = navSubContainer.current.getBoundingClientRect().height;
    console.log(navSubHeight);
    if (moadalOpen) {
      navMainContainer.current.style.height = `${navSubHeight}px`;
    } else {
      navMainContainer.current.style.height = 0;
    }
  }, [moadalOpen]);

  const remove = () => {
    setModalOpen(false);
  };
  return (
    <div className="nav_header">
      <section className="section nav_container">
        <div className="nav_center">
          <img src={logo} alt="logo" />
          <span
            className="logo_container"
            onClick={() => setModalOpen(!moadalOpen)}
          >
            <FaAlignJustify />
          </span>
        </div>
        <nav className="nav_links_container" ref={navMainContainer}>
          <ul className="nav_list_con" ref={navSubContainer}>
            <li>
              <NavLink
                onClick={remove}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to={"/"}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={remove}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to={"/about"}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={remove}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
                to={"/newsletter"}
              >
                newsletter
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Nav;
