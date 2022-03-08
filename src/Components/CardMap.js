import React from 'react'
import Card from './Card';

const cards = [
    {
      id: 1,
      title: "Disco WD Blue 1TB 7200",
      image: "https://as01.epimg.net/showroom/imagenes/2018/08/30/portada/1535654183_505131_1535661107_sumario_normal.jpg",
      precio: 700,
      precioContado: 600,
    },
    {
      id: 2,
      title: "Disco WD Blue 2TB 7200RPM",
      image: "https://www.mistertennis.com/images/2018-media/Babolat-Boost-Aero-Racchetta-Tennis-121199_B.jpg",
      url: "https://blog.faztweb.com",
      precio: 800,
      precioContado: 700,
    },
    {
      id: 3,
      title: "SSD Gigabyte 240GB",
      image: "https://as01.epimg.net/showroom/imagenes/2018/08/30/portada/1535654183_505131_1535661107_sumario_normal.jpg",
      url: "https://youtube.com/fazttech",
      precio: 900,
      precioContado: 800,
    },
  ];

const CardMap = () => {
  return (
    <div className="flex">
      <div className="flex space-x-6 flex-wrap ">
        {cards.map(({ title, precio, precioContado, id, image}) => (
          <div className="" key={id}>
            <Card title={title} precio={precio} precioContado={precioContado} image={image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardMap