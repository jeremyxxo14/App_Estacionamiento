import React from "react";

const RegistroEstudiantil = () => {
  return (
    <div>
      <div className="col-span-6 bg-[#BFE6FF] grid h-full row-span-1">
        <div className="flex justify-center place-items-center">
          <div className="text-6xl my-5 ">CREAR REGISTRO DE ESTUDIANTE</div>
        </div>

        <div className="flex place-items-center justify-self-center m-10 ">
          <div className="flex flex-col flex-wrap">
            <div className="flex flex-row justify-around">
              <div>
                <div className="text-2xl text-center  ">PATENTE</div>
                <input
                  type="text"
                  placeholder="PATENTE"
                  className="inputHome placeholder:text-center"
                ></input>
              </div>
              <div>
                <div className="text-2xl  text-center">TIPO DE AUTOMÓVIL </div>
                <select className="inputHome text-2xl outline-none placeholder:text-1xl  rounded-lg bg-gray-400 h-full p-2 ">
                  <option className="bg-slate-600 flex items-start justify-start">
                    Tipo Automovil
                  </option>
                  <option>AUTO</option>
                  <option>MOTO</option>
                  <option>CAMIONETA</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row mt-10">
              <div>
                <div className="text-2xl  text-center">MARCA/MODELO</div>
                <input
                  type="text"
                  placeholder="Marca/Modelo"
                  className="inputHome text-2xl placeholder:text-center"
                ></input>
              </div>
              <div>
                <div className="text-2xl  text-center">COLOR</div>
                <input
                  type="color"
                  placeholder="Patente"
                  className="inputHome text-2xl"
                ></input>
              </div>

              <div>
                <div className="text-2xl  text-center">NOMBRE APELLIDO</div>
                <input
                  type="text"
                  placeholder="Patente"
                  className="inputHome  placeholder:text-center"
                ></input>
              </div>
              <div className="">
                <div className="text-2xl  text-center">N°CONTACTO</div>
                <div>
                  <label
                    htmlFor="phone"
                    className=" text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="tel"
                    id="phone"
                    className="inputHome text-2xl placeholder:text-center"
                    placeholder="+569-54689125"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center row-span-1">
          <div className="flex flex-row justify-around items-center">
            <div>
              <div className="text-2xl  text-center">Estudiante</div>
              <select className="inputHome" id="">
                <option value="">si</option>
                <option value="">no</option>
              </select>
            </div>
            <div>
              <div className="text-2xl  text-center">DIA/HORA</div>
              <input
                type="date"
                placeholder="Fecha"
                className="inputHome "
              ></input>
            </div>
            <div className="flex justify-end items-end">
              <button className="bg-[#E5CF00] px-3 py-2 rounded-md">
                Editar
              </button>
            </div>
            <div>
              <div className="text-2xl text-center">PAGO</div>
              <input
                type="price"
                placeholder="$"
                className="inputHome placeholder:text-2xl placeholder:text-center"
              ></input>
            </div>
          </div>
        </div>
        <div className="row-span-2 flex justify-around items-center">
          <div
            className="bg-[#09BF1B] cursor-pointer hover:bg-[#04e71a] rounded-xl text-1xl text-white px-10 py-5 w-60 "
            type="button"
          >
            AGREGAR REGISTRO
          </div>
          <div
            className="bg-[#e5ce00d2] cursor-pointer hover:bg-[#ffe600] text-center rounded-xl text-1xl text-white px-10 py-5 w-60 "
            type="button"
          >
            LIMPIAR
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroEstudiantil;
