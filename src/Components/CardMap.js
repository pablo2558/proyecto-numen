import React from 'react'
import Card from './Card';
import ModeloTarjeta from './Productos/ModeloTarjeta';

const cards = [
  {
    id: 1,
    producto: "disco WD blue 1TB 7200 RPM",
    stock: 5,
    caracteristicas:
      "coneccion Sata, disco mecanico, capacidad 1TB, tasa de transferenca 60 gb/s, velocidad 7200 rpm, memoria cache 64 mb, factor 35",
    precioLista: 6700,
    efectivo: 5600,
    foto: "",
  },

  {
    id: 2,
    producto: "ssd Gigabite 240 gb",
    stock: 10,
    caracteristicas:
      "Tipo de coneccion SATA, 240 GB , tasa de transferencia 6 GB/s, velocicad de lectura secuencial 500 MB/s",
    precioLista: 6100,
    efectivo: 4800,
    foto: "https://www.aletecno.com.ar/wp-content/uploads/2018/06/disco-rigido-1tb-wd.jpg",
  },

  {
    id: 3,
    producto: "Motherboard ASUS Prime A320M-K",
    stock: 6,
    caracteristicas:
      "Tarjeta madre AMD AM4 uATX con iluminación LED, DDR4 3200MHz, 32Gb/s M.2, HDMI, SATA 6Gb/s, USB 3.0",
    precioLista: 8900,
    efectivo: 7000,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=529&useDensity=true&width=1366&height=625&tipoEscala=contain",
  },

  {
    id: 4,
    producto: "Fuente Deepcool DE600",
    stock: 4,
    caracteristicas:
      "Cumple con Intel ATX 12V V2.4.  Ventilador silencioso de 120 mm con capacidad PWM.  Salida de +12V de un solo canal.",
    precioLista: 6400,
    efectivo: 5000,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=683&useDensity=true&width=1366&height=625&tipoEscala=contain",
  },

  {
    id: 5,
    producto: "Teclado Mecanico Redragon KUMARA White K552RGB Switch Blue",
    stock: 5,
    caracteristicas:
      "El Kumara es un teclado mecánico TKL súper aclamado, compacto y ampliamente funcional. Es virtualmente irrompible y tiene una durabilidad extraordinaria gracias a que su structura esá reforzada con acero.",
    precioLista: 10240,
    efecivo: 8000,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=1765&useDensity=true&width=1366&height=625&tipoEscala=contain",
  },

  {
    id: 6,
    producto: "SSD CRUCIAL 240 GB BX500",
    stock: 10,
    caracteristicas:
      "tipo de conexion SATA, tipo de disco solido, capacidad 240 gb, tasa de transferencia 6 GB",
    precioLista: 6000,
    efectivo: 4700,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=71&useDensity=true&width=1366&height=625&tipoEscala=contain",
  },

  {
    id: 7,
    producto: "Memoria HyperX Fury RGB Black DDR4 16GB 3200Mhz",
    stock: 10,
    caracteristicas:
      "capacidad 16 gb, velocidad 3600 Mhz,tipo ddr 4, cantidad de memorias 1 ",
    precioLista: 17900,
    efectivo: 14000,
    foto: "http://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=1727&useDensity=true&idth136&height=625&tipoEscala=contain",
  },

  {
    id: 8,
    producto: "Combo Logitech MK220",
    stock: 5,
    caracteristicas:
      "teclado compacto e inalambrico. Mouse ambidiestro inalambrico",
    precioLista: 3473,
    efectivo: 2417,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=733&useDensity=true&idth1366&heght=625&tipoEscala=contain",
  },

  {
    id: 9,
    producto: "Joystick Redragon Harrow G808",
    stock: 8,
    caracteristicas:
      "Preparado para el gaming mas exigente, alta durabilidad y performance",
    precioLista: 4864,
    efectivo: 3800,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=251&useDensity=true&idth1366&heght=625&tipoEscala=contain",
  },

  {
    id: 10,
    producto: "Gabinete Phanteks Enthoo Evolv X",
    stock: 6,
    caracteristicas:
      "Dimensiónes 240 mm x 520 mm x 510 mm , 9,45 pulg. x 20,5 pulg. x 20,1 pulg. Chasis semitorre. materiales:Paneles de aluminio anodizado,Chasis de acero con recubrimiento en polvo. aneles laterles de vidrio templado",
    precioLista: 44800,
    efecivo: 5000,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=769&useDensity=true&width=1366&height=625&tipoEscala=contain",
  },

  {
    id: 11,
    producto: "Auriculares Redragon H510 Zeus X RGB",
    stock: 8,
    caracteristicas: "auriculares Gamers de alta fidelidad de sonido ",
    precioLista: 5000,
    efectivo: 4500,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=2003&useDensity=true&idth1366&height=625&tipoEscala=contain",
  },

  {
    id: 12,
    producto: "Webcam HD Redragon GW600 Fobos 720P",
    stock: 6,
    caracteristicas:
      " webcam diseñada para crear y transmitir contenido de alta calidad desde casa",
    precioLista: 12000,
    efectivo: 11000,
    foto: "http://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=1017&useDensity=true&idth136&height=625&tipoEscala=contain",
  },

  {
    id: 13,
    producto: "Teclado Redragon Harpe PRO K503A-RGB",
    stock: 5,
    caracteristicas:
      "lo tiene todo: teclas macro dedicadas, memoria interna,  switches ópticos, iluminación lateral",
    precioLista: 3800,
    efectivo: 3000,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=1045&useDensity=true&width=1366&height=625&tipoEscala=contain",
  },

  {
    id: 14,
    producto: "Mouse Redragon M908 Impact",
    stock: 5,
    caracteristicas:
      "El Impact es un ratón gamer que rinde perfectamente bien en cualquier tipo de juegos",
    precioLista: 9600,
    efectivo: 5600,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=1269&useDensity=true&width=1366&height=625&tipoEscala=contain",
  },

  {
    id: 15,
    producto: "Mouse Redragon Storm Elite White M988-RGB",
    stock: 5,
    caracteristicas:
      "Más ágil, más rápido y más preciso que los demás, el elite está concebido para ser el mejor",
    preioLista: 4500,
    efecivo: 3800,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=1755&useDensity=true&width=1366&height=625&tipoEscala=contain",
  },

  {
    id: 16,
    producto: "TP-Link Archer T9UH",
    stock: 5,
    caracteristicas: "Adaptador USB de Alta Ganancia y Doble Banda AC1900",
    precioLista: 6400,
    efectivo: 5000,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=631&useDensity=true&idth1366&height=625&tipoEscala=contain",
  },

  {
    id: 17,
    producto: "Nexxt Nyx 1200-AC",
    stock: 5,
    caracteristicas:
      "El Nyx1200-AC es la nueva generación de Routers inalámbricos AC de doble banda ",
    precioLista: 3726,
    efectivo: 3000,
    foto: "http://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=1359&useDensity=true&idth136&height=625&tipoEscala=contain",
  },

  {
    id: 18,
    producto: "Memoria HP V6 DDR4 8GB 2666Mhz",
    stock: 5,
    caracteristicas: "8GB , 2666 Mgz, DDR4",
    precioLista: 8700,
    efectivo: 7200,
    foto: "http://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=661&useDensity=true&idth136&height=625&tipoEscala=contain",
  },

  {
    id: 19,
    producto: "Memoria HP V6 DDR4 8GB 3000Mhz Blue",
    stock: 5,
    caracteristicas: "8 GB, 3000 Mgz, DDR4",
    precioLista: 8832,
    efectivo: 6900,
    foto: "http://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=1869&useDensity=true&idth136&height=625&tipoEscala=contain",
  },

  {
    id: 20,
    producto: "Fuente Deepcool DA500 500W 80+ Bronze",
    stock: 5,
    caracteristicas:
      "está certificadacon 80 plus bronce coneficiencia eléctrica de hasta 85% que permiteuna menor generación de calorymenor costo operativo",
    precioLista: 8300,
    efectivo: 6500,
    foto: "https://ss-static-01.esmsv.com/id/115190/productos/obtenerimagen/?id=669&useDensity=true&width=1366&height=625&tipoEscala=contain",
  },
];

const CardMap = () => {
  return (
    <div className="flex">
      <div className="flex space-x-6 flex-wrap ml-4 ">
        {cards.map(({id, producto, precioLista, efectivo, foto}) => (
          <div className="" key={id}>
            <ModeloTarjeta producto={producto} precioLista={precioLista} image={foto} efectivo={efectivo} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardMap