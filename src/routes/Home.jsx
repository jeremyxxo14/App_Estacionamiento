import AllButton from "../components/AllButton";

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <div className="">
        <div className="bg-[#013358] grid  grid-cols-8  h-screen m-50 ">
          <div className="grid col-span-2 ">
            <div className="flex justify-center place-items-center ">
              <AllButton />
            </div>
            <div className="flex justify-center  place-items-end mb-12 ">
              <button
                className="bg-[#ad1a1a9e]  hover:bg-[#AD1A1A] text-white px-10 py-4 rounded-md"
                type="button"
                onClick={handleClick}
              >
                Cerrar Sesion
              </button>
            </div>
          </div>
          <div className="col-span-6 bg-[#BFE6FF] h-full grid">
            <Outlet /> {}
          </div>
        </div>
      </div>
    </>
  );
}
