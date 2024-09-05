import exp from 'constants';
import styles from './style.module.css';

interface Iprops {
    imglogo:string,
    titulo:string,
    texto:string,
    imgescritorio?:string
}

export const Escritorio = ({imgescritorio,imglogo,texto,titulo}:Iprops) => {
    return (
        <>
        <section className={styles.escritorio} id='sobreNos'>
            <div className={styles.container}>
                <div className={styles.textlogo}>

                    <div className={styles.titulo}>
                        <h2>{titulo}</h2>
                    </div>

                    <div className={styles.imagem}>
                        <img src={imglogo} alt="" />
                    </div>

                    <div className={styles.texto}>
                        <p>{texto}</p>


                    </div>
                    
                </div>
                <div className={styles.imgaux}>
                    <img src={imgescritorio} alt="" />

                </div>
            









            </div>





        </section>
        
        
        
        
        
        </>




    )

}
