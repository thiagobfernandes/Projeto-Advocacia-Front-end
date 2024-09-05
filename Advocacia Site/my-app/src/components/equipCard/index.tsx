import styles from './style.module.css';

interface Iprops {
    nome:string
    oab:string
    img:string
}

export const EquipCard= ({img,nome,oab}:Iprops) => {
return (
    <>
    <section className={styles.cardEquip}>
        <div className={styles.containerEquipCard}>
            <div className={styles.imagemCardEquip}>
            <img src={img} alt="" />
            </div>
            <div className={styles.textoCardEquip}>
                <h2>{nome}</h2>
                <p>{oab}</p>
            </div>
        </div>





    </section>
    
    </>
)

}