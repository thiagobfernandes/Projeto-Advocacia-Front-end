import { link } from 'fs';
import styles from './styles.module.css';

interface button{
    text:string;
    link:string;
    
}

export const Button = ({text,link}:button) => {
    return (
        <>

       <a href={link} target='_blank'> <button className={styles.btn}> {text} </button></a> 
      
        
        </>



    )
}