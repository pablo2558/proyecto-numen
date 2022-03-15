import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as style from "./style";

const NavBar = () => {
    const [Open, setOpen] = useState(false);
    return (
        <div className="flex items-center justify-between border-b border-gray-400 py-2 bg-black fixed w-screen">
          <a href="https://cvws.icloud-content.com/B/AddnqMrGpC1TT9g_qfmiWlCIILCtAbTIQK73xKZJzMaDxkK4E4WnDLKP/logo4.jpg?o=AvHUUqd0TOKqoXa7KhVEzwYDPanBJLOD-kNnFu8r_axS&v=1&x=3&a=CAogubjzMwU-EJodUpvbzHAgU42oh3UKGFhtgY29sj8BATMSbxCzjPn_9i8Y04OwgPcvIgEAUgSIILCtWgSnDLKPaie0N5ObWYz-qxH0gTIkcsdHg9C0M_8kZ1Caoh_ffuFZ5f4ffoVtbg9yJ__-SdLB_rE_r_zd708aQcdbxilZMT5AKjerYS4XboV4GXtbB98Ewg&e=1646852309&fl=&r=dcd00976-74e7-47eb-a2eb-280030e23a8e-1&k=tV0Dwus1CH7O2K8_-w1Myw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=46&s=Cfzzip6a8667Hp5WA6aXaPsM73Q&cd=i">
            <img src="https://cvws.icloud-content.com/B/AddnqMrGpC1TT9g_qfmiWlCIILCtAbTIQK73xKZJzMaDxkK4E4WnDLKP/logo4.jpg?o=AvHUUqd0TOKqoXa7KhVEzwYDPanBJLOD-kNnFu8r_axS&v=1&x=3&a=CAogubjzMwU-EJodUpvbzHAgU42oh3UKGFhtgY29sj8BATMSbxCzjPn_9i8Y04OwgPcvIgEAUgSIILCtWgSnDLKPaie0N5ObWYz-qxH0gTIkcsdHg9C0M_8kZ1Caoh_ffuFZ5f4ffoVtbg9yJ__-SdLB_rE_r_zd708aQcdbxilZMT5AKjerYS4XboV4GXtbB98Ewg&e=1646852309&fl=&r=dcd00976-74e7-47eb-a2eb-280030e23a8e-1&k=tV0Dwus1CH7O2K8_-w1Myw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=46&s=Cfzzip6a8667Hp5WA6aXaPsM73Q&cd=i" alt="logo" />
          </a>
          <nav className=''>
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
    
            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
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