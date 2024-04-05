import { Cabecalho } from "../../components/Cabecalho";
import { Secao1 } from "../../components/Secao1";
import { Secao2 } from "../../components/Secao2";
import { Secao3 } from "../../components/Secao3";
import { Secao4 } from "../../components/Secao4";
import { Secao5 } from "../../components/Secao5";
import { Rodape } from "../../components/Rodape";
import { useEffect } from "react";
import { useCabecalhoContext } from "../../contexts/CabecalhoContext";

function Home() {
  const { removeVisibility, activateVisibility, setOpacidade } =
    useCabecalhoContext();

  useEffect(() => {
    activateVisibility();
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
    <div>
      <Secao1 />
      <Secao2 />
      <Secao3 />
      <Secao4 />
      <Secao5 />
      <Rodape />
    </div>
  );
}

export { Home };
