import { useEffect } from "react";
import { educacionais, apae } from "../../classes/Capa";
import DownloadJogosStyles from "../../modules/DownloadJogosStyles.module.css";
import { useCabecalhoContext } from "../../contexts/CabecalhoContext";

function DownloadDeJogos() {
  const { setOpacidade } = useCabecalhoContext();

  useEffect(() => {
    console.log(educacionais);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosition > 50) {
        console.log("rolou");
        setOpacidade("rgb(14, 19, 23)");
      } else {
        setOpacidade("rgb(14, 19, 23, 0)");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={DownloadJogosStyles.downloadjogos_container}>
      <div className={DownloadJogosStyles.mario_texto_container}>
        <img src={"mario.png"} className={DownloadJogosStyles.img_mario}></img>
        <div className={DownloadJogosStyles.texto_container}>
          <h3 className={DownloadJogosStyles.titulo}>
            São + 14 jogos desenvolvidos pelos alunos da UFV{" "}
          </h3>
          <p>
            Desde Jogos Educacionais a Séries Apae, com intuito de promover as
            habilidades e ensinar de forma divertida! Aprender se tornou mais
            divertido.
          </p>
        </div>
      </div>
      <h2>Jogos educacionais</h2>
      <div className={DownloadJogosStyles.capas_container}>
        {educacionais.map((capa, i) => (
          <img key={capa.id} src={capa.path} alt="img" />
        ))}
      </div>
      <h2>Jogos sérios apae</h2>
      <div className={DownloadJogosStyles.capas_container}>
        {apae.map((capa, i) => (
          <img key={capa.id} src={capa.path} alt="img" />
        ))}
      </div>
    </div>
  );
}

export { DownloadDeJogos };
