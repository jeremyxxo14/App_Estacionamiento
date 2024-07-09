import React from "react";
import CardEstadis from "../components/CardEstadis";
import { useNavigate } from "react-router-dom";
import CardEfectivo from "../components/CardEfectivo";

const Estadisticas = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Home/CrearRegistroVeh");
  }
  return (
    <div>
      <div className="col-span-6 bg-[#BFE6FF] grid h-full row-span-1">
        <div className="flex justify-center place-items-center">
          <div className="text-6xl my-5 ">ESTADISTICAS</div>
        </div>

        <div className="flex place-items-start justify-self-center ">
          <CardEfectivo />
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;
