import styles from  './style.module.css';
import { Form } from '../formEmail';
interface EntreEmContato {
    titulo:string
    paragrafo:string
    texto:string
    tituloTexto:string
}

export const EntreEmContato = ({titulo, paragrafo,texto,tituloTexto}:EntreEmContato) => {
return( 

    <>
   
    <section className={styles.contatoSection}> 
    <div className={styles.titulo}>
        <h2> {titulo} </h2>
        <p>{paragrafo}</p>

        </div>
        <div className={styles.contato}>

        
        
  

    <div className={styles.containerContato}>
    

        <div className={styles.entreEmContato}>
            
            <div className={styles.formulario}>
                <Form/>
                
            </div>



            </div>

            <div className={styles.texto}>
                <h2>{tituloTexto}</h2>
                <p>{texto}</p>
            </div>
    </div>



</div>
    </section>
    </>
)


}