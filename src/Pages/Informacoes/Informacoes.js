import InformacoesStyles from './modules/Informacoes.module.css'

function Informacoes(){
    return(
    
    <div className={InformacoesStyles.Informacoes_container}>
      <div  className={InformacoesStyles.paragrafo_container}>
        <h2>Sobre o evento</h2>
        <p>A Mostra de Jogos digitais é um evento gratuito e 
        aberto para todos o públicos. Não fique fora dessa, 
        venha se divertir e aprender conosco!</p> 

        <p>Data: 30 de julho de 2024</p>

        <p>Local do Evento:   Hall do Pavilhão de Aulas da 
        UFV-Campus Rio Paranaíba – MG.</p> 

        <p>Horário: Será definido pela coordenação do evento e 
        enviado para as respectivas escolas.</p>
      </div>

      <div  className={InformacoesStyles.img_supermario_container}>
      <img src='supermario.png' className={InformacoesStyles.img_supermario} />
      </div>
     
    </div>

    )
}

export {Informacoes};