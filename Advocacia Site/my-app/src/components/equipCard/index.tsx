import { Button } from '../button';
import styles from './style.module.css';

export interface Iprops {
    nome:string
    link:string
    img:string
    textoButton:string
}

export const EquipCard= ({img,nome,link,textoButton}:Iprops) => {
return (
    <>
    <section className={styles.cardEquip}>
        <div className={styles.containerEquipCard}>
            <div className={styles.imagemCardEquip}>
            <img src={img} alt="" />
            </div>
            <div className={styles.textoCardEquip}>
                <h2>{nome}</h2>
                <Button link={link} text={textoButton} />
                
               
            </div>
        </div>





    </section>
    
    </>
)

}