import { useEffect } from "react";
import { educacionais, apae } from "../../classes/Capa";
import DownloadJogosStyles from "../../modules/DownloadJogosStyles.module.css";

function DownloadDeJogos() {
  useEffect(() => {
    console.log(educacionais);
  }, []);

  return (
    <div className={DownloadJogosStyles.downloadjogos_container}>
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
