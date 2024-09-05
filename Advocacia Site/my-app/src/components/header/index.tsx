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
            <section className={styles.header}>
                <div className={styles.envolver}>

                    <div className={styles.logo}>
                        <a href={link}><img src={logo} alt="Logo" /></a>
                    </div>

                    <div className={`${styles.links} ${menuOpen ? styles.showMenu : ''}`}>
                        <a href="#Equipe">Equipe</a>
                        <a href="https://wa.me/+5543999791183" target='_blank'>Contato</a>
                        <a href="#sobreNos">Sobre Nós</a>
                        <a href="#Servicos">Áreas de Atuação</a>
                        <div className={styles.botaocel}>
                            <Button text='Entre em contato ' />
                        </div>
                    </div>

                    <div className={styles.botao}>
                        <Button text='Entre em contato' />
                    </div>

                    <div className={styles.menu} onClick={toggleMenu}>
                        <FaBars />
                    </div>

                </div>
            </section>
        </>
    );
};
