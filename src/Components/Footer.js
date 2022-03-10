import React from 'react';
import { listFooter } from './styleComponents';
import (listFooter)

function Footer() {
    return (
        <>
            <div className='flex items-start justify-around border-b border-gray-400 py-2 bg-black'>
                <img src="#" alt="logo" className='basis-1/4'/>
                <div className='basis-1/2 items-center'>
                    <ul className='flex flex-col items-start justify-around min-h-[150px]'>
                        <li className={listFooter}>Inicio</li>
                        <li className={listFooter}>Productos</li>
                        <li className={listFooter}>REDRAGON</li>
                        <li className={listFooter}>OFERTA DEL DIA</li>
                        <li className={listFooter}>Como comprar</li>
                        <li className={listFooter}>Contacto</li>
                    </ul>
                </div>
                <div className='basis-1/2 items-center'>
                    <ul className='flex flex-col items-start justify-around min-h-[150px]'>                        
                        <li className={listFooter}>Telefono</li>
                        <li className={listFooter}>Direccion</li>
                        <li className={listFooter}>Mail</li>
                        <li className={listFooter}>Facebook</li>
                        <li className={listFooter}>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50 }}>
                Copyright © 2022
            </div>
        </>
    );
}
 
export default Footer;