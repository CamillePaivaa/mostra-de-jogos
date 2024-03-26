import Secao1Styles from '../modules/Secao1.module.css'
import { Link } from 'react-router-dom';

function Secao1(){
    return(
    <div className={Secao1Styles.secao1_container}>
        <div className={Secao1Styles.sobre_evento_btn}>
            <h1> V Mostra de Jogos Digitais</h1>
            <p >
                Venha se divertir na V Mostra de Jogos Digitais! Organizada 
                pelos alunos da disciplina SIN 394 - Jogos Digitais, com o apoio 
                dos professores, essa exposição vai te surpreender! Venha conferir 
                os jogos criativos e emocionantes no hall do Pavilhão de Aulas da 
                UFV-Campus Rio Paranaíba – MG. Não fique de fora dessa 
                aventura digital!</p>
            <div className={Secao1Styles.btns}>
                    <Link to="/Inscrever" >
                        <button className={Secao1Styles.btn_inscrever}>Inscrever na Mostra</button>
                    </Link>
                    <button className={Secao1Styles.btn_compartilhar}>Compartilhar Convite</button>
            </div>
       </div>
       <div>
       <img src='mulher_gamer.png' className={Secao1Styles.img_mulherGamer} />
       </div>
    </div>
    )
}

export {Secao1};


