import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inscrever } from "../Pages/Inscrever/Inscrever";
import { Home } from "../Pages/Home/Home";
import { Informacoes } from "../Pages/Informacoes/Informacoes";
import { Cabecalho } from "../components/Cabecalho";
import { DownloadDeJogos } from "../Pages/DownloadDeJogos/DownloadDeJogos";
import { GaleriaGamer } from "../Pages/GaleriaGamer/GaleriaGamer";
function Routs() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Inscrever" element={<Inscrever />} />
        <Route path="/Info" element={<Informacoes />} />
        <Route path="/downloadJogos" element={<DownloadDeJogos />} />
        <Route path="/galeria" element={<GaleriaGamer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routs;
