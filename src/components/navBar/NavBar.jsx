import React from "react";
import { useState, useEffect } from "react";
/*useState is used for managing state, and useEffect is used for side effects like event listeners.*/
import { BrowserRouter } from "react-router-dom";
/*BrowserRouter is used to wrap the entire application in order to enable routing.*/
import { HashLink } from "react-router-hash-link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";

import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import Sidebar from "../sidebar/Sidebar";
import "./NavBar.scss";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  /*  activeLink keeps track of the currently active link in the navbar.
        scrolled keeps track of whether the page has been scrolled down more than 50 pixels.
    */

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const variants = {
    hidden: { opacity: 0.3, scale: 0.5, x: "-50%" },
    visible: { opacity: 1, scale: 1, x: 0, transition: { delay: 0.5 } },
  };

  return (
    <BrowserRouter>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Sidebar />
        <Container className="wrapper">
          <Navbar.Brand href="/">
            <motion.h1
              className="title"
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              S<span>pt</span>
            </motion.h1>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>{" "}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav> */}
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            {/* <HashLink to="#contact">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink> */}
          </span>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </BrowserRouter>
  );
}
