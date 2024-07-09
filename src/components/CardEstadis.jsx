import { useState } from "react";

const CardEstadis = () => {
  const [card, setCard] = useState([
    {
      id: "1",
      contador: "003",
      titCard: "VEHICULOS ESTACIONADOS",
      url: "estacionamiento-de-autos.png",
    },
    {
      id: "2",
      contador: "023",
      titCard: "SALIDA VEHICULO",
      url: "carreras.png",
    },
    {
      id: "3",
      contador: "054",
      titCard: "ESPACIOS DISPONIBLES",
      url: "estacionamientos.png",
    },
  ]);

  // Colores disponibles
  const colors = [
    "bg-gradient-to-b from-[#1712F5] to-[#1612f587]",
    "bg-gradient-to-b from-[#FE9800] to-[#fe980085]",
    "bg-gradient-to-b from-[#12BFF5] to-[#0A6481]",
  ];

  return (
    <div className="flex flex-row">
      {card.map((card, index) => (
        <div
          key={card.id}
          className={`flex flex-row w-[360px] h-52 gap-2 ${colors[index]} m-5 dark:text-white max-w-md w-full p-5 rounded-md mt-5 shadow-md hover:scale-105 hover:duration-150 duration-150 border-b-2 border-white`}
        >
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between w-full">
              <p className="text-3xl py-5">{card.contador}</p>
              <div className="w-16">
                <img src={card.url} alt="" />
              </div>
            </div>
            <p className="text-xl ">{card.titCard}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardEstadis;
