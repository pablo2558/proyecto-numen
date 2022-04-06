import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as style from "./style";

const NavBar = () => {
    const [Open, setOpen] = useState(false);
    return (
        <div className="fixed flex items-center justify-between w-screen py-2 bg-black border-b border-gray-400">
          <a href="">
            <img src="https://cvws.icloud-content.com/B/AddnqMrGpC1TT9g_qfmiWlCIILCtAbTIQK73xKZJzMaDxkK4E4WnDLKP/logo4.jpg?o=AqxKVsNgkLSyJcytRrSw144pi6205Od20Ys6qgB5p3CG&v=1&x=3&a=CAogU3Q6F2WlqpPW5TD8LN92lTThFK1mOgFrd4ygRVGzs2ISbxCYkLTW_i8YuIfr1v4vIgEAUgSIILCtWgSnDLKPaidJbeXvsfbPmGkXTcFNSa8tSFU3l4gFLtMqBIeojlwUuVhhBb4OzZRyJ6KQ222jBkIT1hJUWFs6XQ3BgaURIxQAwA5wWKy9vDWHP8oNVCDQ5A&e=1648912679&fl=&r=4db5bdaf-3bc0-4ef2-b4bf-e7f1d209fef0-1&k=tV0Dwus1CH7O2K8_-w1Myw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=46&s=54-skNqa3VMkomfi03asbZi4Jf8&cd=i" alt="logo" />
          </a>
          <nav className=''>
            <section className="flex MOBILE-MENU lg:hidden">
              <div
                className="space-y-2 HAMBURGER-ICON"
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
                    className="w-8 h-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" className='' />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li className={style.NAVBAR_INTEMS}>
                    <a href="#">INICIO</a>
                  </li>
                  <li className={style.NAVBAR_INTEMS} >
                    <a href="#">PRUDUCTOS</a>
                  </li>
                  <li className={style.NAVBAR_INTEMS} >
                    <a href="#">REFRAGON</a>
                  </li>
                  <li className={style.NAVBAR_INTEMS} >
                    <a href="#">OFERTA DEL DIA</a>
                  </li>
                  <li className={style.NAVBAR_INTEMS}>
                    <a href="#">CONTACTO</a>
                  </li>
                  <li className={style.BOTON_ACCESOCLIENTES}>
                    <a href="#">ACCESO CLIENTES</a>
                  </li>
                </ul>
              </div>
            </section>
    
            <ul className="hidden space-x-8 DESKTOP-MENU lg:flex">
              <li className={style.NAVBAR_MOBILE}>
                <Link to="/">INICIO</Link>
              </li>
              <li className={style.NAVBAR_MOBILE} >
                <Link to="Productos">PORDUCTOS</Link>
              </li>
              <li className={style.NAVBAR_MOBILE} >
                <a href="#">REDRAGON</a>
              </li>
              <li className={style.NAVBAR_MOBILE} >
                <a href="#">OFERTA DEL DIA</a>
              </li>
              <li className={style.NAVBAR_MOBILE} >
                <Link to="Contacto">CONTACTO</Link>
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