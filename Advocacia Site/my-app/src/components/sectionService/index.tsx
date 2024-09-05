import { ReactElement } from "react";
import { MdFamilyRestroom } from "react-icons/md";
import styles from './style.module.css';
import { ServiceCard } from "../cardService";
import { GoLaw } from "react-icons/go";

interface ServicesProps {
    icon:ReactElement
      titulo:string
      texto:string
  }
  
  const valores:ServicesProps[] = [{icon:<GoLaw />,titulo:"Direito Previdenciário",texto:"Focado na regulamentação dos benefícios sociais, como aposentadoria e pensões, garantindo a seguridade social dos trabalhadores."},
    {icon:<GoLaw />,titulo:"Direito Familiar",texto:"Ramo do direito que trata de crimes e penalidades, protegendo a ordem pública e punindo condutas ilícitas que afetam a sociedade."},
    {icon:<GoLaw />,titulo:"Direito Trabalhista",texto:"Regula as relações de trabalho entre empregados e empregadores, estabelecendo direitos, deveres e condições laborais justas."},
    {icon:<GoLaw />,titulo:"Inventário",texto:"Processo jurídico que organiza a distribuição dos bens de uma pessoa falecida entre seus herdeiros, de acordo com a lei ou o testamento"}
    
  ]

  interface tituloProps {
    titulo:string
    paragrafo:string
  }

  export const SectionService = ({titulo,paragrafo}:tituloProps) => {
    return (
        <>
        <div className={styles.SectionService} id="Servicos">
            <div className={styles.ContainerSection}>
              <div className={styles.tituloService}>
                <h2>{titulo}</h2>
                <p>{paragrafo}</p>
              </div>
              <div className={styles.envolved}>
              
                {valores.map((valor) => 
                <ServiceCard icon={valor.icon} texto={valor.texto} titulo={valor.titulo}/>
                
                
                )}

</div>


                



            </div>

            





        </div>
        
        
        </>

    )



  }