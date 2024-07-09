import { Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "./routes/Home";
import Login from "./routes/Login";
import CrearRegistroVeh from "./routes/CrearRegistroVeh";
import Inicio from "./routes/Inicio";
import Marcarsalida from "./routes/Marcarsalida";
import RegistroEstudiantil from "./routes/RegistroEstudiantil";
import RegistrosTotales from "./routes/RegistrosTotales";
import RegistrosActuales from "./routes/RegistrosActuales";

import Estadisticas from "./routes/Estadisticas";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home/*" element={<Home />}>
          <Route index element={<Inicio />} />
          <Route path="CrearRegistroVeh" element={<CrearRegistroVeh />} />
          <Route path="Marcarsalida" element={<Marcarsalida />} />
          <Route path="RegistrosActuales" element={<RegistrosActuales />} />
          <Route path="RegistrosTotales" element={<RegistrosTotales />} />
          <Route path="RegistroEstudiantil" element={<RegistroEstudiantil />} />
          <Route path="Estadisticas" element={<Estadisticas />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
