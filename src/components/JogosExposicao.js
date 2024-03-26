import JogosStyles from '../modules/Jogos.module.css'

function Cabecalho(){
    return(
        <header className={JogosStyles.cabecalho}>
        <img src={'logo192.png'} className={CabecalhoStyles.logo} />
        <div className={CabecalhoStyles.cabecalho_direita}>
          <p>Inicio</p>
          <p>Informacoes do evento</p>
          <p>Dowload de Jogos</p>
          <p>Edições Anteriores</p>
          <p>Galeria Gamer</p>
        </div>
      </header>
    )
}

export {Cabecalho};