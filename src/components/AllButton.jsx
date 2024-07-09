import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AllButton = () => {
  const navigate = useNavigate();
  const [buttons, setButtons] = useState([
    {
      id: "1",
      titCard: "Inicio",
      route: "/Home",
    },
    {
      id: "2",
      titCard: "Registro Vehicular",
      route: "/Home/CrearRegistroVeh",
    },
    {
      id: "3",
      titCard: "Marcar Salida",
      route: "/Home/Marcarsalida",
    },
    {
      id: "4",
      titCard: "Registros Actuales",
      route: "/Home/RegistrosActuales",
    },
    {
      id: "5",
      titCard: "Registros Totales",
      route: "/Home/RegistrosTotales",
    },
    {
      id: "6",
      titCard: "Registro Estudiantil",
      route: "/Home/RegistroEstudiantil",
    },
    {
      id: "7",
      titCard: "Estadisticas",
      route: "/Home/Estadisticas",
    },
  ]);

  return (
    <div className="flex flex-col justify-center items-center">
      {buttons.map((buttons, index) => (
        <div
          key={buttons.id}
          onClick={() => navigate(buttons.route)}
          className={` cursor-pointer flex flex-col gap-2 w-[300px] my-5  bg-[#0087db3a] hover:bg-[#0087db] dark:text-white max-w-md  p-5 rounded-md mt-5 shadow-md hover:scale-105 hover:duration-150 duration-150 `}
        >
          <div className="flex flex-col justify-between w-full">
            <p className="text-xm text-center">{buttons.titCard}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllButton;
