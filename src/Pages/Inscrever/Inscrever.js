import { useEffect } from "react";
import { useCabecalhoContext } from "../../contexts/CabecalhoContext";
import InscreverStyles from "./modules/Inscrever.module.css";
import Select from "react-select";

function Inscrever() {
  const { removeVisibility } = useCabecalhoContext();

  const series = [
    { value: "educacao infantil", label: "1° ano do fundamental" },
    { value: "educacao infantil", label: "2° ano do fundamental" },
    { value: "educacao infantil", label: "3° ano do fundamental" },
    { value: "educacao infantil", label: "4° ano do fundamental" },
    { value: "educacao infantil", label: "5° ano do fundamental" },
    { value: "educacao infantil", label: "6° ano do fundamental" },
    { value: "educacao infantil", label: "7° ano do fundamental" },
    { value: "educacao infantil", label: "8° ano do fundamental" },
    { value: "educacao infantil", label: "9° ano do fundamental" },
    { value: "ensino medio", label: "1° ano do ensino médio" },
    { value: "ensino medio", label: "2° ano do ensino médio" },
    { value: "ensino medio", label: "3° ano do ensino médio" },
  ];

  useEffect(() => {
    removeVisibility();
  }, []);

  return (
    <div className={InscreverStyles.Inscrever_container}>
      <div className={InscreverStyles.img_container}>
        <img
          src={"homem_gamer.png"}
          className={InscreverStyles.img_homem_gamer}
        ></img>
      </div>
      <div className={InscreverStyles.formulario_container}>
        <div className={InscreverStyles.formulario_elementos}>
          <h3 className={InscreverStyles.titulo}>ÁREA DE INSCRIÇÃO</h3>
          <p>Olá Player, se prepare para a diversão!</p>
          <input type="text" placeholder="Nome Completo" />
          <input type="text" placeholder="Cidade" />
          <Select
            options={series}
            className={InscreverStyles.custom_select}
            placeholder="Série Cursada"
          />

          <input type="text" placeholder="Escola" />
          <input type="text" placeholder="Série Cursada" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Idade" />
          <button className={InscreverStyles.btn_confirmarinscricao}>
            Confirmar Inscrição
          </button>
        </div>
      </div>
    </div>
  );
}

export { Inscrever };
