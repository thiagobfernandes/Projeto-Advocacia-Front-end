import { ReactElement } from 'react';
import styles from './style.module.css';


interface Iprops{
    icon:ReactElement
    titulo:string
    texto:string
    
    
}

export const ServiceCard = ({icon,texto,titulo}:Iprops) => {
    return (
        <>
       
                <div className={styles.card}>
                    <div className={styles.imgCard}>

                       {icon}
                        
                    </div>

                    <div className={styles.tituloCard}>
                        <p>{titulo}</p>
                    </div>

                    <div className={styles.textoCard}>
                        <p>{texto}</p>
                    </div>




                </div>





           
            







      
        
        
        
        </>
    )

}