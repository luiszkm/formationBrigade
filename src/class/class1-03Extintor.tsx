import { List } from "../components/List";
import { SectionItem } from "../components/SectionItem";
import { MiniGallery } from "../components/MiniGallery";

import { FaFireExtinguisher } from "react-icons/fa"


import extintor1 from "../assets/img01/extintor1.png"
import extintor2 from "../assets/img01/extintor2.png"
import extintor3 from "../assets/img01/extintor3.png"

import etiqueta1 from "../assets/img01/etiqueta1.png"
import etiqueta2 from "../assets/img01/etiqueta2.png"
import etiqueta3 from "../assets/img01/etiqueta3.png"
import etiqueta4 from "../assets/img01/etiqueta4.png"
import etiqueta5 from "../assets/img01/etiqueta5.png"

import classificacao from "../assets/img01/classificacao.png"

import transporte1 from "../assets/img01/transporte1.png"
import transporte2 from "../assets/img01/transporte2.png"
import transporte3 from "../assets/img01/transporte3.png"

export function Class1Extintor() {

  return (
    <>
      <h3>MÉTODOS DE EXTINÇÃO DE INCÊNDIOS<FaFireExtinguisher size={24} /></h3>
      <h4>Rescaldo</h4>
      <SectionItem title=""
        paragraph="▪É a operação final de um serviço de extinção de incêndio. 
        Esta operação consiste na movimentação de todo o material sólido envolvido pelas chamas, 
        a fim de se ter certeza da não existência de resíduos e a facilidade de um melhor resfriamento, 
        cuja complementação poderá ser feita com água, de forma moderada."/>

      <SectionItem title=""
        paragraph="▪Por mais insignificante que seja um incêndio, 
        nunca de as costas de imediato para o local do sinistro, 
        pois além do perigo da resignação, poderá você se ver envolvido pelas chamas." />


      <SectionItem withH4
        title="EXTINTORES DE INCÊNDIO"
        paragraph="São regulamentados pela Portaria 237 de 03 de Setembro de 2000 -INMETRO."
      />
      <List img={extintor1} className="list2">
        <li><strong>Definição:</strong>Aparelhos	de	prevenção,	destinados	a	dar	combate a princípio de incêndio por injeção de substância extintora.</li>
        <li><strong>Finalidade:</strong>Debelar os princípios de incêndio</li>
        <li><strong>Constituição:</strong>Recipiente metálico com a finalidade de armazenar agente extintor específico e expeli-lo.</li>
      </List>
      <SectionItem title="As empresas credenciadas pelo INMETRO a partir de 01/01/2001, deverá proceder da seguinte forma:"
        paragraph="Emitir data de garantia do extintor, através dos manuais técnicos;
        ( a responsabilidade é da empresa )
        ;Todas as empresas deverão realizar os três níveis de manutenção - NBR 12962/98;
        " />

      <h4>Tipos de identificação</h4>
      <List img={extintor2} >
        <li>▪ Tipo de manutenção executada</li>
        <li>▪ Data da próxima manutenção</li>
        <li>▪ prazo de garantia;</li>
        <li>▪ 	Nome da empresa responsável.</li>
      </List>

      <MiniGallery title="Selos para extintores novos/originais fabricados 
        após Mar/2001 tem que ter este selo a cor do anel muda todo ano
        (OCP: Logomarca do Organismo Credenciado pelo INMETRO)">
        <img src={etiqueta1} alt="" />
        <img src={etiqueta2} alt="" />
      </MiniGallery>

      <h4>Tipos de identificação</h4>
      <List img={extintor3} >
        <li>▪<strong>Extintores novos:</strong>Selo na cor vermelha</li>
        <li>▪<strong>Recondicionados:</strong>Selo na cor AMARELO 2019</li>
      </List>

      <MiniGallery title="O Selo do ano de 2013 foi verde; 2018 ROXO; 2019 AMARELO">
        <img src={etiqueta3} alt="" />
      </MiniGallery>

      <MiniGallery title="Recondicionados(OCP: Logomarca do Organismo Credenciado pelo INMETRO)">
        <img src={etiqueta4} alt="" />
        <img src={etiqueta5} alt="" />
      </MiniGallery>

      <h3>Classificação dos extintores</h3>
      <SectionItem title="Pressão:"
        paragraph="Baixa Pressão (até 30Kgf/cm²) e Alta Pressão (acima de 30 Kgf/cm²)" />
      <SectionItem title="Pressurização:"
        paragraph="A pressurizar e pressurizado" />
      <SectionItem title="Portabilidade:"
        paragraph="Portáteis (menos que 25Kg), Não Portáteis(sobre rodas ou rebocáveis), Estacionários" />

      <h3>Extintores padronizados</h3>
      <List  >
        <li>▪ Portáteis</li>
        <li>Água 10 litros (Pressurização(AP) ou Não Pressurização(AP)) </li>
        <li>Pressurizado (1,2,3,4,5,6, 10 e 12Kg</li>
      </List>

      <SectionItem title="Cilindros de pressurização:"
        paragraph="São cilindros de alta pressão, que armazenam o gás
        propelente (co2 ou n2) destinado a pressurizar o
        aparelho extintor
        "
      />

      <SectionItem title="Agentes propelentes:"
        paragraph="São elementos destinados a pressurizar os extintores	que	contêm	
        os	agentes	extintores,fazendo que estes sejam	expelidos quando do aumento 
        da pressão no interior do extintor."
      />

      <SectionItem withH4
        title="MANÔMETRO"
        paragraph="Medir pressões. Componentes: Caixa metálica, mostrador,ponteiro, visor de plástico resistente"
      />
      <List  >
        <li>FAIXA “VERMELHA” - FALTA DE PRESSÃO</li>
        <li>FAIXA “VERDE “ - IDEAL PARA OPERAÇÃO</li>
        <li>FAIXA “AMARELA”OU “BRANCA”- EXCESSO DE PRESSÃO</li>
      </List>

      <SectionItem
        title="Vantagens:"
        paragraph="Pequeno porte
        -	Fácil manuseio
        -	Custo razoável
        -	Fácil localização"
      />
      <SectionItem
        title="Limitações:"
        paragraph="Quantidade de agente extintor
        -	Distância de segurança."
      />
      <SectionItem
        title="Localização e sinalização:"
        paragraph="0,20m acima do extintor, Altura máxima: 1,60m
        (Obs: Diâmetro do quadrado pintado de amarelo e vermelho no piso deve ser de no mínimo, 1 m²)"
      />
      <h3>Capacidade</h3>
      <List  >
        <li><strong>Portáteis:</strong>10LTS</li>
        <li><strong>Sobre Rodas:</strong>75, 100 e 150LTS</li>
        <li><strong>Comprimento Mangueiras:</strong>70cm</li>
      </List>
      <MiniGallery title="Identificação nos extintores">
        <img src={classificacao} alt="" />
      </MiniGallery>

      <h3>Utilização do extintor</h3>
      <MiniGallery title="Transporte o extintor pela alça.">
        <img src={transporte1} alt="" />
        <img src={transporte2} alt="" />
      </MiniGallery>
      <MiniGallery title="Retire a trava de segurança, 
      direcione o jato para	a	base	do
      fogo e aperte o gatilho">
        <img src={transporte3} alt="" />
      </MiniGallery>




    </>
  )
}