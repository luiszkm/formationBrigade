import { List } from "../components/List";
import { SectionItem } from "../components/SectionItem";
import { AiTwotoneFire } from "react-icons/ai"

import trianguloFogo from "../assets/img01/trianguloFogo.png"
import conducaoCalor from "../assets/img01/conducaoCalor.webp"
import conveccao from "../assets/img01/conveccao.png"
import radiacao from "../assets/img01/radiacao.png"
import classeA from "../assets/img01/classeA.png"
import classeB from "../assets/img01/classeB.png"
import classeC from "../assets/img01/classeC.png"
import classeD from "../assets/img01/classeD.png"



export function Class1Fire() {

  return (
    <>
      <h3>Introdução ao comportamento do fogo <AiTwotoneFire size={24} /></h3>
      <List>
        <li>▪Fogo e Incêndio</li>
        <li>▪Elementos essenciais ao fogo</li>
        <li>▪Efeitos do calor</li>
        <li>▪Transferência de Calor</li>
        <li>▪Classe de Incêndio</li>
        <li>▪Processo de Extinção de Incêndios</li>
      </List>
      <SectionItem title="Fogo:"
        paragraph="É uma reação química
      que se processa em alta velocidade,
      com liberação de energia sob a forma de
      luz e calor.Inicia-se por um processo
      endotérmico, passando a
      exotérmico, através da reação
      em cadeia."
      />
      <SectionItem title="Incêndio:"
        paragraph="É o FOGO fora de controle, pode
     causar danos à vida e ao patrimônio."
      />

      <List img={trianguloFogo}>
        <li>Combustível</li>
        <li>O Oxigênio (COMBURENTE)</li>
        <li>O Calor (AGENTE IGNEO)</li>
      </List>

      <SectionItem withH4
        title="Reação em cadeia"
        paragraph="A reação em cadeia torna a queima auto-
        sustentável. O calor irradiado das chamas
        atinge o combustível e este é decomposto
        em partículas menores, que se combinam
        com o oxigênio e queimam, irradiando outra
        vez calor para o combustível, formando um
        ciclo constante."
      />

      <h4>Efeitos do calor</h4>
      <List>
        <li>Elevação da temperatura</li>
        <li>Aumento do volume</li>
        <li>Mudança do estado físico da matéria</li>
        <li>Mudança do estado químico da matéria</li>
      </List>

      <h4>Formas de propagação do calor</h4>
      <p>-Condução -Convecção -Radiação</p>

      <SectionItem withH4
        title="Condução"
        paragraph="O calor se propaga de molécula
        para molécula. O calor se propagando
        em uma barra metálica aquecida."
        img={conducaoCalor}
      />
      <SectionItem withH4
        title="Convecção"
        paragraph="O calor se propaga nos líquidos e/ou gases
        aquecidos devido ao movimento ascendente de
        massas aquecidas, por diferença de densidade.
        Exemplo:Propagação de incêndios em edifícios
        (os gases aquecidos deslocam para andares superiores)."
        img={conveccao}
      />

      <SectionItem withH4
        title="Radiação"
        paragraph="O calor independe de um meio físico para se propagar.
        Nessa forma o calor se propaga através das ondas."
        img={radiacao}
      />

      <h4>Classes de Incêndio</h4>
      ▪ Classe A
      ▪ Classe B
      ▪ Classe C
      ▪ Classe D

      <SectionItem withH4
        title="Incêndio de Classe A"
        paragraph={`São aqueles ocorridos em materiais sólidos. 
        Queimam em razão da área (superfície) e	da profundidade.
        Deixam resíduos.
        Papel, madeira, etc.`}
        img={classeA}
      />

      <SectionItem withH4
        title="Incêndio de Classe B"
        paragraph="São aqueles que ocorrem em líquidos, pastosos e/ou gases inflamáveis.
         Queimam em razão da área.Não deixam resíduos.Ex: Gasolina, GLP etc."
        img={classeB}
      />

      <SectionItem withH4
        title="Incêndio de Classe C"
        paragraph="São os que envolvem aparelhos elétricos energizados. 
        Devendo	sempre desligar a fonte de energia elétrica.
	      Alto risco de vida.Fios energizados, Tomadas etc."
        img={classeC}
      />

      <SectionItem withH4
        title="Incêndio de Classe D"
        paragraph="São	aqueles	que	ocorrem	em	metais pirofóricos.
        Para sua extinção devem ser usados agentes extintores especiais.
        Incêndios em	ligas de magnésio, selênio etc."
        img={classeD}
      />

      <h4>Processões e Extinção de incêndio</h4>
      ▪ Resfriamento
      ▪ Abafamento
      ▪ Retirada de material
      ▪ Extinção Química
      
      <SectionItem 
        title="Resfriamento:"
        paragraph="Consiste	na	retirada	de	calor do combustível incendiado.
        O melhor agente de absorção do calor é a água."
      />
      <SectionItem 
        title="Abafamento:"
        paragraph="Consiste na extinção de um incêndio pela diminuição do oxigênio."
      />
      <SectionItem 
        title="Retirada de Material:"
        paragraph="Consiste	na	diminuição	do	campo	de propagação do	incêndio."
      />
      <SectionItem 
        title="Quebra da reação:"
        paragraph="Consiste em interromper a reação química através de agentes químicos especiais."
      />
    </>
  )
}