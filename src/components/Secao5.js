import Secao5Styles from '../modules/Secao5.module.css'

function Secao5(){
    return(
        <div className={Secao5Styles.secao5_container}>
            <div>
            <img src='notebook.png' className={Secao5Styles.img_notebook} />
            </div>
                <div className={Secao5Styles.textos_container}>
                <h1>Agradecimentos</h1>
                <p>Agradecemos sinceramente a todos os envolvidos pela contribuição para o sucesso da 5ª Mostra de Jogos da UFV-CRP.
                    Expressamos nossa gratidão à universidade, patrocinadores, alunos desenvolvedores, 
                    escolas do Alto Paranaíba e visitantes. Seu apoio e dedicação foram fundamentais para
                    tornar este evento memorável e inspirador. À UFV-CRP, por fornecer o espaço e suporte necessário, 
                    em particular ao Curso de Sistemas de Informação. Aos patrocinadores, cujo apoio financeiro foi essencial. 
                    Aos alunos desenvolvedores, pelo talento e criatividade compartilhados. Às escolas do Alto Paranaíba, 
                    por sua participação ativa e entusiasmo. Aos visitantes, por tornarem a Mostra de Jogos um verdadeiro sucesso. 
                    Agradecemos a todos por seu envolvimento, dedicação e contribuição. Seu apoio é inestimável e esperamos continuar 
                    promovendo eventos emocionantes no futuro. Muito obrigado!</p>
                </div>
                <div>
            </div>
       </div>
    )
}

export {Secao5}