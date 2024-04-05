import { Link, NavLink } from "react-router-dom";
import CabecalhoStyles from "../modules/Cabecalho.module.css";
import { useCabecalhoContext } from "../contexts/CabecalhoContext";
import { useState } from "react";
import { CustomNav } from "./CustomNavs";

function Cabecalho() {
  const { isVisible, opacidade } = useCabecalhoContext();
  const [navHomeIsActive, setNavHomeIsActive] = useState(true);
  const [navInformacoesDoEventoIsActive, setNavInformacoesDoEventoIsActive] =
    useState(false);
  const [navDownloadDeJogosIsActive, setNavDownloadDeJogosIsActive] =
    useState(false);
  const [navGaleriaGamerIsActive, setNavGaleriaGamerIsActive] = useState(false);

  function clickouEmHome() {
    setNavHomeIsActive(true);
    setNavInformacoesDoEventoIsActive(false);
    setNavGaleriaGamerIsActive(false);
    setNavDownloadDeJogosIsActive(false);
  }
  function clickouEmInformacoesDoEvento() {
    setNavHomeIsActive(false);
    setNavInformacoesDoEventoIsActive(true);
    setNavGaleriaGamerIsActive(false);
    setNavDownloadDeJogosIsActive(false);
  }
  function clickouEmDownloadDeJogos() {
    setNavHomeIsActive(false);
    setNavInformacoesDoEventoIsActive(false);
    setNavGaleriaGamerIsActive(false);
    setNavDownloadDeJogosIsActive(true);
  }
  function clickouEmGaleriaGamer() {
    setNavHomeIsActive(false);
    setNavInformacoesDoEventoIsActive(false);
    setNavGaleriaGamerIsActive(true);
    setNavDownloadDeJogosIsActive(false);
  }

  if (isVisible)
    return (
      <div
        style={{ backgroundColor: opacidade }}
        className={CabecalhoStyles.cabecalho}
      >
        <img
          src={"logo_mostra.png"}
          className={CabecalhoStyles.logo}
          alt="logo"
        />
        <div className={CabecalhoStyles.cabecalho_direita}>
          <NavLink to={"/"}>
            {
              <CustomNav
                titulo={"Inicio"}
                onClick={clickouEmHome}
                isActive={navHomeIsActive}
              />
            }
          </NavLink>

          <NavLink to={"/Info"}>
            {
              <CustomNav
                titulo={"Informacoes do Evento"}
                onClick={clickouEmInformacoesDoEvento}
                isActive={navInformacoesDoEventoIsActive}
              />
            }
          </NavLink>

          <NavLink to={"/downloadJogos"}>
            {
              <CustomNav
                titulo={"Dowload de Jogos"}
                onClick={clickouEmDownloadDeJogos}
                isActive={navDownloadDeJogosIsActive}
              />
            }
          </NavLink>

          <NavLink to={"/galeria"}>
            {
              <CustomNav
                titulo={"Galeria Gamer"}
                onClick={clickouEmGaleriaGamer}
                isActive={navGaleriaGamerIsActive}
              />
            }
          </NavLink>
        </div>
      </div>
    );
  else return <div></div>;
}

export { Cabecalho };
