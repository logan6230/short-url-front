import React from "react";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="h-[10vh] border-t border-secondary-100  p-8 flex items-center justify-between">
        <div>
          <p>
            Segundo Pantoja &copy; {currentYear} Todos los derechos reservados
          </p>
        </div>
        <div className="flex space-x-6">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/logan6230" className="text-white hover:text-gray-400">
            <RiGithubFill size={30} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/segundo-pantoja" className="text-white hover:text-gray-400">
            <RiLinkedinBoxFill size={30} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/logan6230" className="text-white hover:text-gray-400">
            <RiTwitterXFill size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
