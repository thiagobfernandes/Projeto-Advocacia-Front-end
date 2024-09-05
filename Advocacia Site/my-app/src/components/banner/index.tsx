import styles from './styles.module.css';
import { Button } from '../button';


interface banner{
    titulo:string;
    p: string;
    btn:string;
    img:string;

}
export const Banner = ({titulo,img,p}:banner)=> {
    return (
        <>
        <section className={styles.banner}>
            <div className={styles.images}>
                <img src={img} alt="" />

            </div>
            <div className={styles.texto}>
                <h1 className={styles.h1}>{titulo}</h1>
                <p className={styles.p}>{p}</p>
              
                <div className={styles.botao}>
                    <Button text='Entre em Contato'/>
                
                </div>

            </div>






        </section>
        
        
        
        
        </>
    )

}