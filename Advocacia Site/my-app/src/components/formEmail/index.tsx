import styles from './styles.module.css';
import { Button } from '../button';

export const Form = () => {


    return(
        <>
<form action="https://formsubmit.co/thiago5437br@gmail.com" className={styles.formu} method="POST" >
<h2>Enviar email</h2>
<input placeholder="Digite seu Email" className={styles.input} name="text" type="email" />
<input type="text" name="name" required placeholder='Digite seu Nome' className={styles.input} />

<textarea name="message" placeholder="Digite aqui sua Mensagem" className={styles.input}>
</textarea>
<Button text='Enviar email'/>





</form>

</>
    )




}