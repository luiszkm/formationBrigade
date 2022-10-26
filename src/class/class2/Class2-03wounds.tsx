import { List } from "../../components/List";
import { MiniGallery } from "../../components/MiniGallery";
import { Section } from "../../components/Section";
import { SectionItem } from "../../components/SectionItem";




export function Class2Wounds() {

  return (
    <Section title="Hemorragias e Ferimentos Especiais">
      <SectionItem title="Hemorragia"
        paragraph="É a perda aguda de sangue circulante." />

      <SectionItem title="Ferimento"
        paragraph="Ferida é o resultado da agressão sofrida pelas
      partes moles, produzindo lesão tecidual."/>

      <SectionItem title="Hemorragia"
        paragraph="É a perda aguda de sangue circulante." />

      <SectionItem title="Hemorragia"
        paragraph="É a perda aguda de sangue circulante." />

      <h3>Procedimentos em Hemorragias Externas</h3>
      <List>
        <li>•	Nunca toque na ferida.</li>
        <li>•	Não toque e nem aplique medicamento ou qualquer produto no ferimento.</li>
        <li>•	Não tente retirar objeto empalado.</li>
        <li>•	Proteger com gases ou pano limpo, fixando com bandagem, sem apertar o ferimento.</li>
        <li>•	Fazer compressão local suficiente para cessar o sangramento.</li>
      </List>

      <MiniGallery title="• COMPRESSÃO LOCAL">
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03Wounds/wound1.png" alt="" />
      </MiniGallery>

      <MiniGallery title="• ELEVAÇÃO DO MEMBRO">
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03Wounds/wound2.png" alt="" />
      </MiniGallery>

      <MiniGallery title="• PRESSÃO NO PONTO ARTERIAL">
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03Wounds/wound3.png" alt="" />
      </MiniGallery>

      <h4>Ferimento na cabeça:</h4>
      <List>
        <li>•	Procedimento semelhante a ferimentos em partes moles.</li>
        <li>•	Não tente limpar o ferimento, há perigo de aumentar a hemorragia.</li>
        <li>•	Não faça compressão com os dedos.</li>
      </List>

      <Section title="Estado de Choque" >
        <p>As causas podem ser diferentes, porém o efeito é um distúrbio da circulação periférica que pode evoluir para a falência circulatória total.</p>


        <SectionItem withH4
          title="Hipovolêmico"
          paragraph="Pode ocorrer devido a hemorragias graves (internas ou externas) Nas queimaduras, diarreias, vômitos (desidratação) perda de Volume circulante" />

        <SectionItem withH4
          title="Cardiogênico"
          paragraph="Acontece nos caso de IAM (Infarto Agudo do Miocárdio);Hipertensão seguido de hipotensão; Taquicardia seguida de braquicardia; Dispneia ( respiração franca; Sudorese; Palidez; Alterações comportamentais (neurológica).
      " />

        <SectionItem withH4
          title="Distributivo (Séptico, Anafilático, Neurogênico, Pirogênico)"
          paragraph="Séptico: Ocorre em caso de infecções graves (A toxina do agente infeccioso entra nas células e causa a morte da mesma);
      Anafilático: Acontece uma reação de hipersensibilidade a medicamentos ou alimentos (causando edema de glote
      causando dificuldade respiratória);
      Neurogênico: Pode ocorre quando existe lesão na medula espinhal;
      Pirogênico: Agentes que fazem aumentar a temperatura corporal " />

        <MiniGallery title="•Posição para prevenir o estado de choque">
          <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03Wounds/wound4.png" alt="" />
        </MiniGallery>

      </Section>

      <Section title="Queimaduras">
        <p><strong>Definição:</strong>Definição: Lesão no tecido de revestimento do corpo, causada por agentes térmicos, químicos, radioativos ou elétricos.Podendo ser classificadas em: 1° Grau, 2° Grau e 3° Grau</p>

        <h3>1° Grau</h3>
        <List img={'https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03Wounds/burn1.png'}>
          <li>•	Atinge somente a epiderme.</li>
          <li>•	Dor e vermelhidão local.</li>
        </List>

        <h3>2° Grau</h3>
        <List img={'https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03Wounds/burn2.png'}>
          <li>•	Atinge a Epiderme mais derme.</li>
          <li>•	Dor e vermelhidão local mais intensa.</li>
        </List>

        <h3>3° Grau</h3>
        <List img={'https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03Wounds/burn3.png'}>
          <li>•	Todas as camadas da pele são atingidas (pele, gordura, músculos e ossos).</li>
          <li>•	Pouca ou ausência de dor (destruição dos terminais nervosos).</li>
        </List>

        <SectionItem withH4
          title="Tratamento"
          paragraph="Cobrir regiões queimadas com plástico estéril ou papel alumínio;
        Quando em olhos, cobrir com gaze embebida em soro fisiológico as duas vistas." />

      </Section>

      <Section title="Choque Elétrico">
        <p>Acidente causado pelo contato com corrente de alta ou baixa tensão elétrica contínua ou alternada. A gravidade das lesões dependerá da resistência da pele e das estruturas internas do corpo; do tipo de polaridade da corrente; da frequência, intensidade</p>

        <p>A lesão é auto limitada, ou seja, interrompida a corrente, não causa mais lesão;A temperatura atingida no tecido é o fator critico que chamamos de magnitude da lesão;Sempre encontramos um ponto de entrada, trajeto e um ponto de saída.</p>

        <SectionItem withH4
          img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03Wounds/shock1.png"}
          title="Queimaduras"
          paragraph="a lesão cutânea é mínima quando comparada às lesões profundas. Temos um ponto de entrada (contato) e um ponto de saída (aterramento)" />

        <SectionItem withH4
          img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03Wounds/shock2.png"}
          title="CHOQUE ELÉTRICO,	VIAS DE ENTRADA E SAÍDA DA CORRENTE"
          paragraph="Mão; Pé; TÓRAX 	NOTA: O quadro clínico por choque elétrico provoca agravos secundários de queimaduras, alterações cardiopulmonares, complicações neurológicas, lesões musculares e alterações vasculares sistêmicas.
          " />

        <SectionItem withH4
          img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03Wounds/shock3.png"}
          title="Alterações Cardíacas"
          paragraph="a corrente elétrica provoca alterações na despolarização cardíaca, podendo levar a arritmias, fibrilação e PCR. " />
          <SectionItem withH4
          title="Conduta"
          paragraph="Desligue a energia e afaste a vítima da fonte, antes de iniciar o atendimento;
          Verifique sinais vitais e inicie as manobras de RCP, se necessário."/>
      </Section>

    </Section>
  )
}