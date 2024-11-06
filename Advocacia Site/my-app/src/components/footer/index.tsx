import { ReactElement } from 'react';
import styles from './style.module.css';

interface Parametros {
    email:string,
    
    instagram:string,
    iconInstagram:ReactElement
    iconEmail:ReactElement
    iconNumero:ReactElement
    numero:string
    logo:string

}

export const Footer = ({email,iconEmail,iconInstagram,iconNumero,logo,instagram,numero}:Parametros) => {
    return (
            <footer className={styles.footer}>
                <div className={styles.envolvedFooter}>
                    <div className={styles.logoFooter}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={styles.texto}>
                        <p>{iconNumero} {numero}</p>
                        <p>{iconInstagram} <a href="https://www.instagram.com/advocaciasouzaeserra?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>{instagram}</a> </p>
                        <p>{iconEmail} {email}</p>
                    </div>


                </div>





            </footer>
    )
}

