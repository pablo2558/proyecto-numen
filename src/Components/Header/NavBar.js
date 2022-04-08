import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as style from "./style";
import Logo from "../asset/Imagenes/logoTecno.jpg";

const NavBar = () => {
    const [Open, setOpen] = useState(false);
    return (
      <div className="flex items-center justify-between border-b border-gray-400 py-2 bg-black fixed w-screen z-10 left-0 top-0">
        <a className="flex items-center h-36 w-36 ml-12" href="/">
          <img src={Logo} alt="logo" className="" />
          <h3 className="text-orange-700 text-2xl font-bold">TecnoShop</h3>
        </a>
        <nav className="">
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setOpen((el) => !el)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={Open ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" className="" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className={style.NAVBAR_INTEMS}>
                  <Link to="/">INICIO</Link>
                </li>
                <li className={style.NAVBAR_INTEMS}>
                  <Link to="Productos">PRODUCTOS</Link>
                </li>
                <li className={style.NAVBAR_INTEMS}>
                  <Link to="Redragon">REDRAGON</Link>
                </li>
                <li className={style.NAVBAR_INTEMS}>
                  <a href="#">OFERTA DEL DIA</a>
                </li>
                <li className={style.NAVBAR_INTEMS}>
                  <Link to="Contacto">CONTACTO</Link>
                </li>
                <li className={style.NAVBAR_INTEMS}>
                  <Link to="Carrito">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                  </Link>
                </li>
                <li className={style.BOTON_ACCESOCLIENTES}>
                  <a href="#">ACCESO CLIENTES</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li className={style.NAVBAR_MOBILE}>
              <Link to="/">INICIO</Link>
            </li>
            <li className={style.NAVBAR_MOBILE}>
              <Link to="Productos">PRODUCTOS</Link>
            </li>
            <li className={style.NAVBAR_MOBILE}>
              <Link to="Redragon">REDRAGON</Link>
            </li>
            <li className={style.NAVBAR_MOBILE}>
              <a href="#">OFERTA DEL DIA</a>
            </li>
            <li className={style.NAVBAR_MOBILE}>
              <a href="Contacto">CONTACTO</a>
            </li>
            <li className={style.NAVBAR_MOBILE}>
              <Link to="Carrito">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Link>
            </li>
            <li className={style.BOTON_ACCESOCLIENTES1}>
              <a href="#">ACCESO CLIENTES</a>
            </li>
          </ul>
        </nav>
        <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: black;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
      </div>
    );
    }
 
export default NavBar;