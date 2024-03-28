import { Link, NavLink } from "react-router-dom";
import CabecalhoStyles from "../modules/Cabecalho.module.css";
import { useCabecalhoContext } from "../contexts/CabecalhoContext";

function Cabecalho() {
  const { isVisible } = useCabecalhoContext();

  if (isVisible)
    return (
      <div className={CabecalhoStyles.cabecalho}>
        <img
          src={"logo_mostra.png"}
          className={CabecalhoStyles.logo}
          alt="logo"
        />
        <div className={CabecalhoStyles.cabecalho_direita}>
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? "#ff0080" : "white",
              textDecoration: "underline",
              fontWeight: "bold",
            })}
          >
            Inicio
          </NavLink>

          <NavLink
            to={"/Info"}
            style={({ isActive }) => ({
              color: isActive ? "#ff0080" : "white",
              textDecoration: "underline",
              fontWeight: "bold",
            })}
          >
            Informacoes do Evento
          </NavLink>

          <NavLink
            to={"/downloadJogos"}
            style={({ isActive }) => ({
              color: isActive ? "#ff0080" : "white",
              textDecoration: "underline",
              fontWeight: "bold",
            })}
          >
            Dowload de Jogos
          </NavLink>

          <NavLink
            to={"/galeria"}
            style={({ isActive }) => ({
              color: isActive ? "#ff0080" : "white",
              textDecoration: "underline",
              fontWeight: "bold",
            })}
          >
            Galeria Gamer
          </NavLink>
        </div>
      </div>
    );
  else return <div></div>;
}

export { Cabecalho };
