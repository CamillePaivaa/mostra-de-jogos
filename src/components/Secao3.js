import Secao3Styles from "../modules/Secao3.module.css";
import { MeuCarrousel } from "./MeuCarrosel";

function Secao3() {
  return (
    <div className={Secao3Styles.secao3_container}>
      <div className={Secao3Styles.textos_container}>
        <h1 className={Secao3Styles.titulo}>Conheça Nossos Cursos</h1>
        <p>
          A UFV- CRP oferece graduação e pós-graduação nas áreas de conhecimento
          das Ciências Agrárias, Ciências Biológicas e da Saúde, Ciências Exatas
          e Tecnológicas e Ciências Humanas, Letras e Artes.
        </p>
      </div>
      <div>
        <MeuCarrousel />
      </div>
    </div>
  );
}

export { Secao3 };
