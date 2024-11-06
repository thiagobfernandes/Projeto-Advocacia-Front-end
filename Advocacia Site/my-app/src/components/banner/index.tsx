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
        <section className={styles.banner} id='Banner'>
            <div className={styles.images}>
                <img src={img} alt="" />

            </div>
            <div className={styles.texto}>
                <h1 className={styles.h1}>{titulo}</h1>
                <p className={styles.p}>{p}</p>
              
                <div className={styles.botao}>
                    <Button text='Entre em Contato' link='https://api.whatsapp.com/send/?phone=5543999791183&text=Ol%C3%A1%21+Vim+pelo+site+e+preciso+de+uma+advogada+criminalista%21&type=phone_number&app_absent=0'/>
                
                </div>

            </div>






        </section>
        
        
        
        
        </>
    )

}