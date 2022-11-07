import { List } from "../../components/List";
import { MiniGallery } from "../../components/MiniGallery";
import { Section } from "../../components/Section";
import { SectionItem } from "../../components/SectionItem";


export function Class2Intro() {

  return (
    <Section title="Anatomia">
      <h3>Sinais Virais</h3>
      <MiniGallery title="">

        <List>
          <li><strong>Temperatura:</strong></li>
          <li>▪Hipotermia:meno qeu 35°C</li>
          <li>▪Normal:entre 36°C a 37°C</li>
          <li>▪Febreentre 37,1°C e 39,9°C</li>
          <li>▪hiperpirexiaacima de 40°C</li>
        </List>

        <List>
          <li><strong>Respiração:</strong></li>
          <li>▪Adulto:12 a 20 MRPM</li>
          <li>▪Criança:15 a 30 MRPM</li>
          <li>▪Bebê:25 50 MRPM</li>
          <li>▪Neonato:30 a 60 MRPM </li>
        </List>

        <List>
          <li><strong>Pulso:</strong></li>
          <li>▪Adulto:60 a 100 BPM</li>
          <li>▪Criança:80 a 120 BPM</li>
          <li>▪Bebê e Neonato:100 a 160 BPM</li>

        </List>
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/body2.png" alt="" />
      </MiniGallery>


      <Section title="Parada Cardio Respiratória">

        <SectionItem title=""
          paragraph="É um quadro em que a vítima não apresenta movimentos respiratórios e pulso	é	completamente	ausente ou seja: Parou de funcionar a respiração e		o	coração,	porém	não podemos afirmar que ela encontra-se em óbito." />

        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/body3.png" alt="" />
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/procedure1.png" alt="" />

        <SectionItem title=""
          paragraph="As mãos devem ser sobrepostas, dedos entrelaçados e somente uma das mãos em contato com o osso esterno.
        As compressões fazem com que o sangue circule, substituindo assim o trabalho que seria feito pelo coração."/>

        <SectionItem img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/procedure2.png"}
          title="Vias aéreas (abertura)"
          paragraph="" />

        <SectionItem img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/procedure3.png"}
          title="Respiração (verificar) ver, ouvir e sentir"
          paragraph="Se a vítima não tem pulso, então ela
          apresenta um quadro de Parada Cardiorrespiratória.
          Neste caso ache o local da massagem cardíaca externa.
          O local da massagem cardíaca externa é achada colocando a mão dois dedos acima do Apêndice Xifoide." />


        <SectionItem withH4
          img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/procedure4a.png"}
          title="Vítima adulta, atendida por 01 ou 02 socorristas."
          paragraph="O sincronismo será de 02 insuflações e 30 massagens cardíacas externas, a cada 05 ciclos.
          30 X 02	=	05 Ciclos ou 100 a 110 massagens/min" />

        <SectionItem withH4
          img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/procedure4b.png"}
          title="Vítima Criança, atendida por 01 ou 02 socorristas."
          paragraph="O sincronismo será de 02 insuflação e 30 massagens cardíacas externas, 
          verificando o pulso a cada 5 ciclos;30 X 02	=	05 Ciclos ou 100 a 110 massagens/min." />

        <SectionItem withH4
          img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/procedure4c.png"}
          title="Vítima Bebê, atendida por 01 socorrista."
          paragraph="O sincronismo será de 02 insuflações 30 massagens cardíacas externas,	a cada 5 ciclos;
          30 X 02	=	05 Ciclos ou 100 a 110 massagens/min." />

        <MiniGallery title="• ADULTO: 30 compressões e 2 insuflações Dois braços">
          <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/procedure5.png" alt="" />
        </MiniGallery>

        <MiniGallery title="•	CRIANÇAS: 30 compressões e 2 insuflações	Um braço">
          <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/procedure6.png" alt="" />
        </MiniGallery>

        <MiniGallery title="•	BEBÊS: 30 compressões e 2 insuflações Dois dedos">
          <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/procedure7.png" alt="" />
        </MiniGallery>

        <MiniGallery title="Verificação de pulso em bebê sempre tem que ser feito na braquial">
          <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-Intro/procedure8.png" alt="" />
        </MiniGallery>

      </Section>

    </Section>
  )
}