import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="flex flex-col justify-center items-center text-white bg-slate-400 w-screen h-screen">
        <h1 className="text-5xl my-5 ">Oops!</h1>
        <p className="text-2xl my-5">
          Lo siento, Un Error Inesperado a ocurrido.
        </p>
        <p>
          <i className="text-4xl text-red-400">
            {error.statusText || error.message}
          </i>
        </p>
      </div>
    </div>
  );
}
