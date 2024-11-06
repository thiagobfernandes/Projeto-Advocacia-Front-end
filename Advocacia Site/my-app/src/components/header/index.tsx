import { useState } from 'react';
import { Button } from '../button';
import styles from '../header/styles.module.css';
import { FaBars } from "react-icons/fa";

interface Iprops {
    logo: string;
    link: string;
}

export const Header = ({ logo, link }: Iprops) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <section className={styles.header} id='Header'>
                <div className={styles.envolver}>

                    <div className={styles.logo}>
                        <a href="#Banner"><img src={logo} alt="Logo" /></a>
                    </div>

                    <div className={`${styles.links} ${menuOpen ? styles.showMenu : ''}`}>
                        <a href="#Equipe">Equipe</a>
                        <a href="#Contato" >Contato</a>
                        <a href="#sobreNos">Sobre Nós</a>
                        <a href="#Servicos">Áreas de Atuação</a>
                        <div className={styles.botaocel}>
                            <Button text='Entre em contato ' link='https://api.whatsapp.com/send/?phone=5543999791183&text=Ol%C3%A1%21+Vim+pelo+site+e+preciso+de+uma+advogada+criminalista%21&type=phone_number&app_absent=0' />
                        </div>
                    </div>

                    <div className={styles.botao}>
                        <Button text='Entre em contato'link='https://api.whatsapp.com/send/?phone=5543999791183&text=Ol%C3%A1%21+Vim+pelo+site+e+preciso+de+uma+advogada+criminalista%21&type=phone_number&app_absent=0' />
                    </div>

                    <div className={styles.menu} onClick={toggleMenu}>
                        <FaBars />
                    </div>

                </div>
            </section>
        </>
    );
};
