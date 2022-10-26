import { List } from "../../components/List";
import { MiniGallery } from "../../components/MiniGallery";
import { Section } from "../../components/Section";
import { SectionItem } from "../../components/SectionItem";



export function Class2Fracture (){

  return(
    <Section title="Fraturas" >
      <p>É uma ruptura total ou parcial da estrutura óssea ( solução de continuidade no osso).</p>
      
      <SectionItem img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-04Frature/frature1.png"}
      title="Luxação:"
      paragraph="É quando os ossos das articulações deixam de se tocar ou seja, perdem o contato entre si." />

      <SectionItem img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-04Frature/frature2.png"}
      title="Entrose:"
      paragraph="Rompimento ou estiramento do ligamento	da articulações, 
      que também pode ser entendido como uma	distensão	brusca	de uma articulação,	além de seu	grau normal de amplitude." />

    <MiniGallery title="Tipos de Fraturas, Completa ou Incompleta">
    <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-04Frature/frature3.png" alt="" />
    </MiniGallery>
   
    <h3>Reconhecimento de Fratura</h3>
    <List>
      <li>- Deformação (angulação e encurtamento).</li>
      <li>-	Inchaço, hematomas.</li>
      <li>-	Ferida (pode existir ou não).</li>
      <li>-	Palidez ou Cianose da extremidade.</li>
      <li>-	Diferença de temperatura no membro afetado.</li>
      <li>-	Crepitação (rangido).</li>
      <li>-	Incapacidade funcional.</li>
    </List>.

    <h4>Fraturas de Extremidades, reconhecimento:</h4>
    <List>
      <li>-	Pesquise a dor.</li>
      <li>-	Incapacidade funcional.</li>
      <li>-	Alteração da cor da pele.</li>
      <li>-	Observe deformidade ou sangramento.</li>
    </List>

    <h4>Conduta</h4>
    <List>
      <li>- Cheque o pulso e perfusão capilar antes e depois da imobilização.</li>
      <li>- Nas fraturas alinhadas, imobilize	com tala rígida ou moldável.</li>
      <li>- A imobilização deve atingir uma articulação	acima e outra abaixo da fratura.</li>
      <li>- Em fratura de fêmur, não tente realinhar, imobilize na posição encontrada.</li>
      <li>- Após a imobilização, continue checando pulso e perfusão capilar.</li>
    </List>
    <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-04Frature/frature4.png" alt="" />

    <Section title="Desmaio">
      <p>É	a	diminuição	da	circulação	e oxigenação cerebral</p>
      <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-04Frature/fainting1.png" alt="" />

      <h4>Causas</h4>
      <List>
        <li>•	Ambientes	com	muitas	pessoas,	sem	uma adequada ventilação.</li>
        <li>•	Emoções fortes</li>
        <li>•	Fome</li>
        <li>•	Insolação</li>
        <li>•	Inadequado recebimento de circulação e oxigênio no cérebro</li>
        <li>•	Dor intensa</li>
        <li>•	Outras causas</li>
        <li>•	Insolação</li>
        <li>•	Inadequado recebimento de circulação e oxigênio no cérebro</li>
        <li>•	Dor intensa</li>
        <li>•	Outras causas</li>
      </List>

      <h4>Atendimento</h4>
      <List>
        <li>•	Arejar o ambiente, ou transportar a vítima para um local com melhor ventilação.</li>
        <li>•	Elevar os membros inferiores, com uma mochila, roupas, etc. com isso, o sangue circula em maior quantidade no cérebro e nos órgãos nobres.</li>
        <li>•	Lateralizar a cabeça, evitando que a vítima venha a se asfixiar em caso de vômito.</li>
        <li>•	Afrouxar a roupa, para uma melhor circulação.</li>
        <li>•	Faça-a sentar e respirar fundo, após auxilie-a a dar uma volta, respirando fundo e devagar.</li>
        <li>•	Com isso, o organismo se readapta a posição vertical e evita que ela possa desmaiar novamente, o que pode ocorrer se ela levantar bruscamente.</li>
      </List>

    </Section>

    <Section title="Convulsões">
      <p>Distúrbio que ocorre no cérebro, podendo ocasionar contrações involuntárias da musculatura, provocando movimentos desordenados e em geral, perda da consciência.</p>
      <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-04Frature/convulsion1.png" alt="Convulsão" />

      <h4>Causas:</h4>
      <List>
        <li>•	Acidentes com traumatismo crânio encefálico.</li>
        <li>•	Febre alta.</li>
        <li>•	Epilepsia.</li>
        <li>•	Alcoolismo.</li>
        <li>•	Drogas.</li>
        <li>•	Determinados medicamentos.</li>
        <li>•	Tumores cerebrais.</li>
        <li>•	Lesões neurológicas.</li>
        <li>•	Choque elétrico.</li>
        <li>•	Origem desconhecida</li>
        <li>•	Outras causas.</li>
      </List>

      <h4>Sinais e Sintomas</h4>
      <List>
        <li>•	Agitação psicomotora.</li>
        <li>•	Espasmos musculares (contrações) ou não.</li>
        <li>•	Salivação intensa ("baba").</li>
        <li>•	Perda dos sentidos.</li>
        <li>•	Relaxamento dos esfíncteres, podendo urinar e evacuar, durante a convulsão.</li>
      </List>

    </Section>
    <small>Fim do Modulo!</small>

    </Section>
  )
}