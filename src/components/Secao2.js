import Secao2Styles from "../modules/Secao2.module.css";
import { capas } from "../classes/Capa";
import { useEffect, useState } from "react";

function Secao2() {
  const [setaClicada, setClicada] = useState(false);
  const [tresCapasGeradas, setTresCapasGeradas] = useState([]);
  const [todasCapasGeradas, setTodasCapasGeradas] = useState([]);

  function handleClick() {
    setClicada(!setaClicada);
  }

  useEffect(() => {
    geraCapas();
  }, []);

  function geraCapas() {
    var min = Math.ceil(0);
    var max = Math.floor(13);

    var capasAuxList = [];
    var indicesGeradosList = [];

    while (capasAuxList.length < 14) {
      var indiceGerado = Math.floor(Math.random() * (max - min + 1) + min);

      if (!indicesGeradosList.includes(indiceGerado)) {
        indicesGeradosList.push(indiceGerado);
        capasAuxList.push(capas[indiceGerado]);
      }
    }

    var tresCapasAux = [];
    for (let i = 0; i < 3; i++) {
      tresCapasAux.push(capasAuxList[i]);
    }
    setTresCapasGeradas(tresCapasAux);

    setTodasCapasGeradas(capasAuxList);
  }

  function Lista3CapasComponentes() {
    return tresCapasGeradas.map((v, indice) => (
      <img style={{ height: 200, width: 300 }} src={v.path} />
    ));
  }
  function ListaTodasCapasComponentes() {
    return todasCapasGeradas.map((v, indice) => (
      <img style={{ height: 200, width: 300 }} src={v.path} />
    ));
  }

  return (
    <div className={Secao2Styles.sobre_jogos_img}>
      <div className={Secao2Styles.textos_container}>
        <h1> Jogos em Exposição</h1>
        <p className={Secao2Styles.paragrafo}>
          A mostra de jogos digitais é aberta ao público e busca desenvolver
          jogos educacionais, oferecendo uma nova ferramenta de apoio à
          educação. Alunos da APAE e das escolas da região do Alto Paranaíba
          foram convidados para participar e enriquecer a exposição com trocas
          de conhecimentos e experiências.
        </p>
      </div>
      <div className={Secao2Styles.img_jogos_container}>
        {setaClicada ? (
          <ListaTodasCapasComponentes />
        ) : (
          <Lista3CapasComponentes />
        )}
        {/* ifrifrifrfrihr */}
      </div>
      <div onClick={handleClick} className={Secao2Styles.posicao_seta}>
        <img src="seta_baixo.png" className={Secao2Styles.img_seta} />
      </div>
    </div>
  );
}

export { Secao2 };
