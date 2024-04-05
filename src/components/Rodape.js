import RodapeStyles from "../modules/Rodape.module.css";

function Rodape() {
  return (
    <div className={RodapeStyles.rodape_container}>
      <div>
        <img src="logo_ufv.png" className={RodapeStyles.logo_ufv} />
      </div>

      <div className={RodapeStyles.localizacao_ufv}>
        <p>Universidade Federal de Viçosa – Campus Rio Paranaíba</p>
        <p>Rodovia MG-230 - Km 7 - Rio Paranaíba – MG</p>
        <p>CEP: 38810-000 - Caixa Postal 2</p>
      </div>
    </div>
  );
}

export { Rodape };
