import React from "react";


const Contacto = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-600">
      <div className="w-2/3 p-20 mt-12 mb-10 bg-gray-800 rounded shadow-2xl">
        <h2 className="mt-10 mb-5 text-3xl font-bold text-gray-200">
        Formulario de Contacto
        </h2>

        <form className="space-y-3">
          <div>
            <label className="block mb-1 font-bold text-gray-500">Nombre: </label>
            <input
              type="nombre"
              className="p-1 border-2 border-gray-200 rounded outline-none focus:border-orange-500"
            ></input>
            <label className="block mb-1 font-bold text-gray-500"> Apellido: </label>
            <input
              type="apellido"
              className="p-1 border-2 border-gray-200 rounded outline-none focus:border-orange-500"
            ></input>
          </div>
          <div>
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500 ">Email</label>
            <input
              type="email"
              class="w-full border-2 border-gray-200 p-1 rounded outline-none focus:border-orange-500"
            ></input>
          </div>

          <div>
            <label className="block w-full mb-1 font-bold text-gray-500">Mensaje</label>
            <input
              type="Mensaje"
              className="w-full p-4 border-2 border-gray-200 rounded outline-none focus:border-orange-500"
            ></input>
          </div>
          <div>
            <label className="block mb-1 font-bold text-gray-500">Telefono: </label>
            <input
              type="Telefono"
              className="p-1 border-2 border-gray-200 rounded outline-none focus:border-orange-500"
            ></input>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="agree"></input>
            <label for="agree" className="ml-2 text-sm text-gray-200">
              Quiero que se comuniquen por Llamada Telefonica.
            </label>
          </div>

          <button className="block w-full p-4 text-black transition duration-300 bg-orange-400 rounded hover:bg-orange-300 hover:text-yellow-800">
            Enviar
          </button>
          <br></br>
          <button className="block w-full p-4 text-black transition duration-300 bg-orange-400 rounded hover:bg-orange-300 hover:text-yellow-800">
          <a href="PreguntasF">¿Preguntas Frecuentes? | ¿Como Comprar?</a>
          </button>
          
        </form>
      </div>
    </div>
  );
};



export default Contacto;
