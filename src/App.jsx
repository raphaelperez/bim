import { useState, useEffect, Suspense } from "react";

import Menu from "./componentes/menu/Menu.jsx";
import Contexto from "./componentes/contexto/Contexto.jsx";
import Controle from "./componentes/controle/Controle.jsx";
import Painel from "./componentes/painel/Painel.jsx";
import Vista3D from "./componentes/vista3D/Vista3D.jsx";
import Vista2D from "./componentes/vista2D/Vista2D.jsx";
import Carregando from "./componentes/carregando/Carregando.jsx";
// import Gantt from "./componentes/gantt/Gantt.jsx";

export default function App() {
  const [ambiente, setAmbiente] = useState("AMB-00");
  const [etapa, setEtapa] = useState("ETP-03");
  const [disciplina, setDisciplina] = useState("DCP-34");
  const [vista, setVista] = useState("3D");
  const [mostrarTags, setMostrarTags] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty("--altura-da-janela", `${window.innerHeight}px`);
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      document.documentElement.style.setProperty("--altura-da-janela", `${window.innerHeight}px`);
    });
  });

  return (
    <>
      <Contexto ambiente={ambiente} etapa={etapa} disciplina={disciplina} />
      <Menu
        ambiente={ambiente}
        setAmbiente={setAmbiente}
        etapa={etapa}
        setEtapa={setEtapa}
        disciplina={disciplina}
        setDisciplina={setDisciplina}
        vista={vista}
        setVista={setVista}
      />
      {(vista == "2D" || vista == "3D") && <Painel ambiente={ambiente} etapa={etapa} disciplina={disciplina} />}
      {(vista == "2D" || vista == "3D") && (
        <Controle
          ambiente={ambiente}
          etapa={etapa}
          setEtapa={setEtapa}
          disciplina={disciplina}
          setDisciplina={setDisciplina}
          vista={vista}
          setVista={setVista}
          mostrarTags={mostrarTags}
          setMostrarTags={setMostrarTags}
        />
      )}
      <Suspense fallback={<Carregando />}>
        {vista == "3D" && (
          <Vista3D ambiente={ambiente} etapa={etapa} disciplina={disciplina} mostrarTags={mostrarTags} />
        )}
        {vista == "2D" && <Vista2D ambiente={ambiente} etapa={etapa} />}
      </Suspense>
      {/* {exibir == "gantt" && <Gantt />} */}
    </>
  );
}
