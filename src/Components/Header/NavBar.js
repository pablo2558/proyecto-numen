import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as style from "./style";
import Logo from "../asset/Imagenes/logoTecno.jpg";
import { CartContainer } from '../Carrito/ShoppingCart';
import { BsFillCartCheckFill } from "react-icons/bs";

const NavBar = () => {
    const [Open, setOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);
    const {cart} = useContext(CartContainer)
    useEffect(() => {
      setProductsLength(
        cart?.reduce((previous, current) => previous + current.quantity, 0)
      );
    }, [cart]);

    return (
      <div className="flex items-center justify-between border-b border-gray-400 py-2 bg-black fixed w-screen z-10 left-0 top-0">
        <a className="flex items-center h-36 w-36 ml-2" href="/">
          <img src={Logo} alt="logo" className="" />
          <h3 className="text-orange-700 text-2xl font-bold">TecnoShop</h3>
        </a>
        <nav className="">
          <section className="MOBILE-MENU flex mr-8 lg:hidden">
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
              <ul className="flex flex-col items-center justify-between min-h-[250px] ">
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
                 <Link to="ComoComprar">COMO COMPRAR</Link>
                </li>
                <li className={style.NAVBAR_INTEMS}>
                  <Link to="Contacto">CONTACTO</Link>
                </li>
                <li className={style.NAVBAR_INTEMS}>
                  <Link to="Carrito">
                   <div>
                     <BsFillCartCheckFill/>
                  </div>
                  <div>{productsLength}</div>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex pr-16">
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
              <Link to="ComoComprar">COMO COMPRAR</Link>
            </li>
            <li className={style.NAVBAR_MOBILE}>
              <a href="Contacto">CONTACTO</a>
            </li>
            <li className={style.NAVBAR_MOBILE}>
              <Link to="Carrito">
                <div>
                  <BsFillCartCheckFill/>
                </div>
                <div>{productsLength}</div>
              </Link>
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