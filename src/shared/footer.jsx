import React from "react";
import logo from "../assets/Logo.png";
import { FaGithub,FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-3 px-10 sm:px-4 md:px-6 lg:px-6 bg-cyan-300 bg-opacity-20">
      <div className="container mx-auto py-[2vh] flex flex-col md:flex-row md:items-center justify-around">
        <aside>
          <img src={logo} alt="" className="h-14 cursor-pointer" />{" "}
          <p className="text-xl">
            <span className="text-3xl font-semibold">Food Hut</span>
            <br />
            Providing Delicious Food since 2023
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-2xl font-bold">Social</h6>
          <div className="grid grid-flow-col gap-4 text-xl font-bold">
            <a href="https://github.com/Ritik-1118">
              <FaGithub />
            </a>
            <a href="https://twitter.com/RitikKu56343248">
              <FaXTwitter />
            </a>
            <a  href="https://api.whatsapp.com/send?phone=919310429524">
             <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/ritik-kumar-9999b6245">
              <FaLinkedin />
            </a>
           
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
