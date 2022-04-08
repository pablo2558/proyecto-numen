import React from 'react';
import {FaFacebookSquare, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin, FaMailBulk,
        FaMapMarkerAlt, FaPhoneSquareAlt} from "react-icons/fa";
import Logo from "../asset/Imagenes/logoTecno.jpg";

const Footer = () => {
  return (
    <div className='bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='text-white flex justify-center items-center'>
            <img  className="w-36 h-36" src={Logo} alt="logo" />
        </div>
        <div className='text-gray-200 text-lg flex justify-center items-center'>
            <ul>
                <li className='text-amber-500 text-xl text-center'>TecnoShop</li>
                <li><a href="/" className='hover:text-sky-600 transition duration-300 delay-150'>Inicio</a></li>
                <li><a href="Productos" className='hover:text-sky-600 transition duration-300 delay-150'>Productos</a></li>
                <li><a href="Redragon" className='hover:text-sky-600 transition duration-300 delay-150'>REDRAGON</a></li>
                <li><a href="#" className='hover:text-sky-600 transition duration-300 delay-150'>Ofertas del Dia</a></li>
            </ul>
        </div>
        <div className='text-gray-200 text-lg flex justify-center items-center p-4'>
            <ul>
                <li className='text-amber-500 text-xl mb-2 text-center'>Contacto</li>
                <li className='flex hover:text-sky-600 transition duration-300 delay-150'><FaMailBulk className="mx-2 my-2"/><a href="https://outlook.live.com/owa/">ventas@tecno-shop.com</a></li>
                <li className='flex hover:text-sky-600 transition duration-300 delay-150'><FaMapMarkerAlt className="mx-2 my-2"/><a href="https://www.google.com/maps/place/Riobamba+1890,+S2000EML+Rosario,+Santa+Fe/@-32.9609964,-60.6553692,17z/data=!3m1!4b1!4m5!3m4!1s0x95b7ab73471f1f47:0x279c3642f90a39ae!8m2!3d-32.9610009!4d-60.6531805">Riobamba 1890, Rosario</a></li>
                <li className='flex hover:text-sky-600 transition duration-300 delay-150'><FaPhoneSquareAlt className="mx-2 my-2"/><a href="https://api.whatsapp.com/send?phone=+3516195259&text=Necesito%20Realizar%20una%20Consulta%20de:">3516195259</a></li>
                <li className='flex hover:text-sky-600 transition duration-300 delay-150'><FaWhatsapp className="mx-2 my-2"/><a href="https://api.whatsapp.com/send?phone=+3516195259&text=Necesito%20Realizar%20una%20Consulta%20de:">+5493516195259</a></li>
            </ul>
        </div>
        <div className='text-gray-200 text-lg p-4'>
            <h3 className='text-amber-500 text-xl flex justify-center items-center'>Compartir en</h3>
            <ul className='flex justify-center m-2 '>
                <li><a href="https://www.facebook.com/" className='flex p-2 hover:text-sky-600 transition duration-300 delay-150'><FaFacebookSquare className="h-6 w-6"/></a></li>
                <li><a href="https://www.instagram.com/" className='flex p-2 hover:text-sky-600 transition duration-300 delay-150'><FaInstagram className="h-6 w-6"/></a></li>
                <li><a href="https://www.twitter.com/" className='flex p-2 hover:text-sky-600 transition duration-300 delay-150'><FaTwitter className="h-6 w-6"/></a></li>
                <li><a href="https://www.whatsapp.com/" className='flex p-2 hover:text-sky-600 transition duration-300 delay-150'><FaWhatsapp className="h-6 w-6"/></a></li>
                <li><a href="https://www.linkedin.com/" className='flex p-2 hover:text-sky-600 transition duration-300 delay-150'><FaLinkedin className="h-6 w-6"/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer