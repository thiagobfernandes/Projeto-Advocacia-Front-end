import styles from './styles.module.css';
import { Button } from '../button';
import axios from 'axios';
import { ReactElement, useRef, useState } from 'react';
import { HookCallbacks } from 'async_hooks';





export const Form = () => {
const nome : any =useRef();
const email :any = useRef();
const mensagem: any=useRef();


const [emailEnviado, setEmailEnviado] = useState(Boolean);
const [carregando, setcarregando] = useState(Boolean);
const [Erro, setErro] = useState(Boolean);
   

axios.defaults.headers.post['Content-Type'] = 'application/json';


function limpar() {
    nome.current.value= ''
    email.current.value= ''
    mensagem.current.value= ''
}



 async function enviarEmail ()  {

    
   

    
    try{
        if( nome.current.value == '' || email.current.value == '' ||  mensagem.current.value == ''){
            setcarregando(false);
            setErro(true);

    } else{
        setErro(false);
        setcarregando(true)

        setTimeout(() => {
            setEmailEnviado(true)
            setcarregando(false)
           },2000)

            
           
        setTimeout(() => {
            setEmailEnviado(false);
        },5000)
           


        await axios.post('https://formsubmit.co/ajax/advocaciasouzaeserra@gmail.com', {
            name: nome.current.value,
            email: email.current.value, 
            message:mensagem.current.value
             
            
        })

       
    
        console.log('Email enviado com sucesso!');
     

       
       
        
        }
    }
    catch(error){
        console.log(error)
        setcarregando(false);
        
        
    }
   
 }


    return(
        <>
<form className={styles.formu} method="POST" >
<h2>Enviar email</h2>
<input placeholder="Digite seu Email" className={styles.input} name="text" type="email" ref={email} />
<input type="text" name="name" required placeholder='Digite seu Nome' className={styles.input} ref={nome} />
<textarea name="message" placeholder="Digite aqui sua Mensagem" className={styles.input} ref={mensagem}>
</textarea>
<button  className={styles.btn}type='button' onClick={() => {
    enviarEmail();
    limpar();
}}

> Enviar email</button>
{carregando && 
    <div className={styles.carregando}> Carregando .....  </div>
}

{emailEnviado &&
    <div className={styles.messageEmail}> Email Enviado com sucesso  {nome.current.value} </div>
    
}
{Erro &&
    <div className={styles.messageEmail}> Preencha os campos  </div>
    
}



</form>

</>
    )




}