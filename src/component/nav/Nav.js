import React from "react";
import "./nav.scss";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";


function Nav() {
  const [toggle, setToggle] = useState("#");

 
  return (
    <nav>
      <a href="#" onClick={() => setToggle("#")} className={toggle === "#" ? "active" : "null"} title="HOME">
        {" "}
        <AiOutlineHome />{" "}
      </a>
      <a href="#about" onClick={() => setToggle("#about")} className={toggle === "#about" ? "active" : "null"} title="ABOUT"> 
        {" "}
        <AiOutlineUser />{" "}
      </a>
      <a
        href="#experience"
        onClick={() => setToggle("#experience")} className={toggle === "#experience" ? "active" : "null"}
        title="EXPERIENCE"
      >
        {" "}
        <BiBook />{" "}
      </a>
      <a
        href="#portfolio"
        onClick={() => setToggle("#portfolio")} className={toggle === "#portfolio" ? "active" : "null"}
        title="PORTFOLIO"
      >
        {" "}
        <RiServiceLine />{" "}
      </a>
      <a href="#contact" onClick={() => setToggle("#contact")} className={toggle === "#contact" ? "active" : "null"} title="CONTACT">
        {" "}
        <BiMessageSquareDetail />{" "}
      </a>
    </nav>
  );
}

export default Nav;
