import React, { ReactElement } from 'react';
import { Header } from '../components/header';
import logo from '../assets/images/logo.png'
import { Banner } from '../components/banner';
import './styles.module.css';
import { MdFamilyRestroom } from "react-icons/md";

import img from '../assets/images/bannerr.png';
import { Escritorio } from '../components/text';
import imglogo from '../assets/images/logotext.png';
import imglogo2 from '../assets/images/Souza.png';
import advocacia from '../assets/images/advocacia.jpg'
import { SectionService } from '../components/sectionService';
import { EquipSection } from '../components/equipSection';
import { Footer } from '../components/footer';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import logofooter from '../assets/images/logoFooter.png'
import { EntreEmContato } from '../components/entreEmcontato';
import { RedesSocias } from '../components/redesSocias';
import adv from '../assets/images/advogados.jpeg';


function Home() {
  return (
    <div className="Home">

      <Header link='#Header' logo={logo}/>

      <Banner img={img}  btn='Fale Conosco' p='Compromisso com agilidade e eficiência.' titulo='Soluções jurídicas rápidas e eficazes '/>

      <Escritorio imglogo={imglogo} texto='Fundada com o compromisso de defender os interesses de seus clientes com dedicação e excelência, a Advocacia Souza & Serra nasceu de uma paixão profunda pela justiça. Com uma trajetória marcada por desafios e conquistas, nosso escritório se destacou ao longo dos anos pela busca incessante por soluções jurídicas que atendam às necessidades individuais de cada cliente. Desde o início, nossa missão é clara: oferecer um atendimento personalizado, combinando conhecimento técnico com uma abordagem humana e ética. A cada caso, a Souza & Serra reafirma seu compromisso com a verdade, a justiça e a confiança de seus clientes.' titulo='' imgescritorio={adv} />


      <SectionService titulo='NOSSOS SERVIÇOS' paragrafo='CONHEÇA ALGUMAS DAS NOSSAS ESPECIALIDADES' />


      <EquipSection paragrafo='CONHEÇA NOSSOS PROFISSIONAIS' titulo='NOSSA EQUIPE' />


      <EntreEmContato paragrafo='Envie-nos um email' tituloTexto='Entre em Contato com a Souza Serra Advocacia' texto='
Na Souza Serra Advocacia, estamos comprometidos em oferecer assessoria jurídica de excelência e soluções personalizadas para nossos clientes. Seja você uma pessoa física ou jurídica, nossa equipe está pronta para ouvir suas necessidades e buscar as melhores estratégias para a sua situação.
Preencha o formulário ao lado e entre em contato conosco. Teremos o prazer de responder às suas dúvidas, marcar uma consulta ou iniciar uma parceria jurídica sólida e eficiente.
Estamos à disposição para atendê-lo(a) de maneira ágil e transparente.' titulo='Entre em Contato' />

<RedesSocias h2='Conecte-se Conosco!' facebook='Curtir nossa página para novidades e atualizações.' insta='Acompanhe nossos stories e posts para dicas e insights  diários.' p='Fique atualizado com as últimas notícias e informações da Souza Serra Advocacia seguindo-nos nas redes sociais. Estamos presentes nas seguintes plataformas:'/>

      <Footer  iconEmail={<IoMdMail />} email='advocaciasouzaeserra@gmail.com' iconNumero={<FaWhatsapp />} iconInstagram={<FaInstagramSquare />} logo={logofooter}  instagram='Advocacia Souza & Serra' numero='(43) 9979-1183' ></Footer>
      
    </div>
  );
}

export default Home;
