import { ReactElement } from "react";

import styles from './style.module.css';
import { ServiceCard } from "../cardService";
import { GoLaw } from "react-icons/go";

interface ServicesProps {
    icon:ReactElement
      titulo:string
      texto:string
  }
  
  const valores:ServicesProps[] = [{icon:<GoLaw />,titulo:"Direito Previdenciário",texto:"Focado na regulamentação dos benefícios sociais, como aposentadoria e pensões, garantindo a seguridade social dos trabalhadores."},
    {icon:<GoLaw />,titulo:"Direito Familiar",texto:"O direito familiar regula as relações entre membros de uma família, abordando temas como casamento, separação e guarda de filhos."},
    {icon:<GoLaw />,titulo:"Direito Criminal",texto:"Disciplina os crimes e punições, protegendo a ordem social e aplicando sanções a condutas ilícitas, garantindo a justiça e a segurança pública.",},
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