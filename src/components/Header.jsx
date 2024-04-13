import React from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Header = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-start">
      <nav className="flex items-center gap-2">
        <div>
          <img
            src="https://img.freepik.com/foto-gratis/feliz-optimista-guapo-gerente-ventas-latina-apuntando-lado-mirando-camara_1262-12679.jpg"
            className="w-8 h-8 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span>Segundo Pantoja</span>
          <span className="text-xs text-gray-100">pantoja@gmail.com</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
