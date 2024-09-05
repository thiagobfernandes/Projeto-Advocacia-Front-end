import styles from './style.module.css';
import { EquipCard } from '../equipCard';
import Souza from '../../assets/images/mulher.avif';
import { Button } from '../button';




    

interface Iprops {
    nome:string
    oab:string
    img:string
}
const valores:Iprops[] = [ {img:Souza, nome:"Renata Soares", oab:"789012/RJ"},
    {img:Souza, nome:"Carolina Albuquerque", oab:"123456/SP"},
    {img:Souza, nome:"Fernanda Lima", oab:"345678/MG"},
];

interface SectionProps {
    titulo:string
    paragrafo:string
}

export const EquipSection = ({paragrafo,titulo}:SectionProps) => {
    return (
        <>
        <section className={styles.sectionEquip} id='Equipe'>
            <div className={styles.EquipContainer}>
                <div className={styles.introducaoEquip}> 

                    <h2>{titulo}</h2>
                    <p>{paragrafo}</p>
                </div>
                <div className={styles.cards}>
                    
                {valores.map((valor) =>
               <EquipCard img={valor.img} nome={valor.nome} oab={valor.oab}/> 

            )}

                
                </div>
                <div className={styles.btncentralizar}>
                <Button text='Fale Conosco'></Button>   
                </div> 




           





            </div>





        </section>
        
        </>


    )

}
