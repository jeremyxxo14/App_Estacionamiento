import CardEstadis from "../components/CardEstadis";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Home");
  }

  return (
    <>
      <div className="container_Login bg-[#0086DB] w-screen h-full   ">
        <div className=" h-screen w-screen justify-items-center place-items-center  grid grid-cols-2 gap-2 ">
          <div className=" col-span-1 ">
            <div className="w-[700px] h-[700px] ">
              <img className="rounded-3xl" src="logoauto.jpg" alt="Logo" />
            </div>
          </div>
          <div className="col-span-1 justify-items-center place-items-center">
            <div className="form   ">
              <div className="flex justify-around flex-col p-12 border-solid border-[12px] border-[#013358] rounded-2xl m-2 h-full ">
                <div className="flex items-center justify-center">
                  <div className="text-4xl  text-slate-50 bg-[#0086DB] rounded-md p-2 my-2">
                    Inicio de Sesion
                  </div>
                </div>
                <div className="flex flex-col justify-center  min-w-full px-16 py-10">
                  <div className="flex-column">
                    <label>Email </label>
                  </div>
                  <div className="inputForm bg-[#0086DB] ">
                    <div className="bg-[#0086DB]   w-12 flex justify-center items-center rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        viewBox="0 0 32 32"
                        height="20"
                      >
                        <g data-name="Layer 3" id="Layer_3">
                          <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                        </g>
                      </svg>
                    </div>
                    <input
                      placeholder="Ingresa tu Email"
                      className="input pl-2 relative"
                      type="text"
                    ></input>
                  </div>

                  <div className="flex-column mt-10 ">
                    <label>Contraseña </label>
                  </div>
                  <div className="inputForm bg-[#0086DB]">
                    <div className="bg-[#0086DB] w-12 flex justify-center items-center rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        viewBox="-64 0 512 512"
                        height="20"
                        className="m-2"
                      >
                        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                      </svg>
                    </div>
                    <input
                      placeholder="ingresa tu Contraseña"
                      className="input pl-2"
                      type="password "
                    ></input>
                  </div>

                  <div className="flex-row justify-between my-2">
                    <div>
                      <input type="radio"></input>
                      <label>Recuerdame </label>
                    </div>
                    <span className="span">Olvidaste la Contraseña?</span>
                  </div>
                  <div className="flex justify-center items-center my-2 p-5">
                    <button
                      className="button-submit px-16 py-2"
                      type="button"
                      onClick={handleClick}
                    >
                      Entrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 w-screen h-full row-auto place-items-end ">
            <div className="text-center text-4xl p-5  text-white ">
              ESTACIONAMIENTO
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
