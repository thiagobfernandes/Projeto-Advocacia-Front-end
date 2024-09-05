import styles from './styles.module.css';

interface button{
    text:string;
}

export const Button = ({text}:button) => {
    return (
        <>

        <button className={styles.btn}> {text} </button>
        
        </>



    )
}