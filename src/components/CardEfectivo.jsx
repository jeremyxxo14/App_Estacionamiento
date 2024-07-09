import { useState } from "react";

const CardEfectivo = () => {
  const [card, setCard] = useState([
    {
      id: "1",
      contador: "$7.234",
      titCard: "GANANCIAS TOTALES",
      url: "dinero.png",
    },
    {
      id: "2",
      contador: "$7.234",
      titCard: "GANANCIAS TOTALES",
      url: "vehiculos.png",
    },
  ]);

  // Colores disponibles
  const colors = [
    "bg-gradient-to-b from-[#1712F5] to-[#1612f587]",
    "bg-gradient-to-b from-[#03d318] to-[#067511]",
  ];

  return (
    <div className="flex flex-row-reverse">
      {card.map((card, index) => (
        <div
          key={card.id}
          className={`flex flex-row w-[360px] h-52 gap-2 ${colors[index]} m-5 dark:text-white max-w-md w-full p-5 rounded-md mt-5 shadow-md hover:scale-105 hover:duration-150 duration-150 border-b-2 border-white`}
        >
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between w-full">
              <p className="text-3xl py-5">{card.contador}</p>
              <div className="w-12">
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

export default CardEfectivo;
