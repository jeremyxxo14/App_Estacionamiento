import React from "react";
import CardEstadis from "../components/CardEstadis";
import { useNavigate } from "react-router-dom";
import CardEfectivo from "../components/CardEfectivo";

const Inicio = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Home/CrearRegistroVeh");
  }
  return (
    <div className="w-full h-full">
      <div className="col-span-6 bg-[#BFE6FF] grid h-full row-span-1">
        <div className="flex justify-center place-items-center">
          <div className="text-6xl my-5 ">HOME</div>
        </div>
        <div className="flex place-items-start justify-self-center ">
          <CardEstadis />
        </div>
        <CardEfectivo />
        <div className="row-span-4 flex justify-center items-center max-h-full">
          <div
            className="bg-[#09BF1B] cursor-pointer hover:bg-[#04e71a] rounded-xl text-5xl text-white px-28 py-24"
            type="button"
            onClick={handleClick}
          >
            CREAR REGISTRO VEHICULAR
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
