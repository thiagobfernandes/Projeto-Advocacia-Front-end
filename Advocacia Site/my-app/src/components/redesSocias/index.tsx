import styles from './style.module.css';
import { FaSquareInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
interface Redes {
    h2:string,
    p:string
    insta:string,
    facebook:string,
}

export const RedesSocias = ({facebook,h2,insta,p}:Redes) => {
    return (
        <>
        <section className={styles.redes}>
            <div className={styles.container}>
                <div className={styles.texto}>
                    <h2>{h2}</h2>
                    <p className={styles.paragrafo}>{p}</p>
                    <div className={styles.instagram}>
                        <p> <a href="https://www.instagram.com/advocaciasouzaeserra/?igsh=bWk0M3JzeHliZTBv" target='_blank'><FaSquareInstagram /></a></p>
                        <p>{insta}</p>
                    </div>
                    <div className={styles.facebook}>
                        <p> <a href="https://www.facebook.com/advocaciasouzaeserra?locale=pt_BR" target='_blank'><ImFacebook2 /></a></p>
                        <p>{facebook}</p>
                    </div>
                    

                </div>




            </div>




        </section>
        
        </>
    )

}