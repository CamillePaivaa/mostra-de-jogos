import { Link } from "react-router-dom";
import CabecalhoStyles from "../modules/Cabecalho.module.css";
import { useCabecalhoContext } from "../contexts/CabecalhoContext";

function Cabecalho() {
  const { isVisible } = useCabecalhoContext();

  if (isVisible)
    return (
      <div className={CabecalhoStyles.cabecalho}>
        <img src={"logo_ufv.png"} className={CabecalhoStyles.logo} alt="logo" />
        <div className={CabecalhoStyles.cabecalho_direita}>
          <Link to={"/"}>
            <p>Inicio</p>
          </Link>

          <Link to={"/Info"}>
            <p>Informacoes do evento</p>
          </Link>

          <Link to="downloadJogos">
            <p>Dowload de Jogos</p>
          </Link>

          <Link to="galeria">
            <p>Galeria Gamer</p>
          </Link>
        </div>
      </div>
    );
  else return <div></div>;
}

export { Cabecalho };
