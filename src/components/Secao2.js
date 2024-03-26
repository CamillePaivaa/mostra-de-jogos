import Secao2Styles from '../modules/Secao2.module.css'

function Secao2(){
    return(
        <div className={Secao2Styles.sobre_jogos_img}>
            <div className={Secao2Styles.textos_container}>
                <h1> Jogos em Exposição</h1>
                <p className={Secao2Styles.paragrafo}>
                A mostra de jogos digitais é aberta ao público e busca desenvolver jogos educacionais, oferecendo uma nova ferramenta de apoio à 
                educação. Alunos da APAE e das escolas da região do Alto Paranaíba foram convidados para participar e enriquecer a exposição com 
                trocas de conhecimentos e experiências. 
                </p>
            </div>
            <div className={Secao2Styles.img_jogos_container} >
            <img src='jogo1.png'/>
            <img src='jogo1.png'/>
            <img src='jogo1.png'/>
            </div>
            <div className={Secao2Styles.posicao_seta}> 
            <img src='seta_baixo.png' className={Secao2Styles.img_seta} />
            </div>
        </div>
    )

}

export {Secao2};
