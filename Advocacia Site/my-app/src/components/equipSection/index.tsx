import styles from './style.module.css';
import { EquipCard } from '../equipCard';
import Thays from '../../assets/images/mulher.jpeg';
import Marcos from '../../assets/images/homem.jpeg';
import { Button } from '../button';
import { link } from 'fs';
import { Iprops } from '../equipCard';




    


const valores:Iprops[] = [ {img:Thays, nome:"Thayssa Serra",textoButton:"Fale com Thayssa",link:"https://api.whatsapp.com/send/?phone=5543999791183&text=Ol%C3%A1%21+Vim+pelo+site+e+preciso+de+uma+advogada+criminalista%21&type=phone_number&app_absent=0"},
    {img:Marcos, nome:"Marcos Souza",link:"https://api.whatsapp.com/send/?phone=5543999791183&text=Whatsapp&type=phone_number&app_absent=0", textoButton:"Fale com Marcos"}
   
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
               <EquipCard img={valor.img} nome={valor.nome} link={valor.link} textoButton={valor.textoButton}  /> 

            )}

                
                </div>
                <div className={styles.btncentralizar}>
                <Button text='Saiba Mais' link='https://www.instagram.com/advocaciasouzaeserra/'></Button>   
                </div> 




           





            </div>





        </section>
        
        </>


    )

}
