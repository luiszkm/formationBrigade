import { List } from "../../components/List";
import { MiniGallery } from "../../components/MiniGallery";
import { Section } from "../../components/Section";
import { SectionItem } from "../../components/SectionItem";





export function Class2Ovace() {


  return (
    <Section title="Obstrução Respiratória OVACE">
      <p>É um quadro em que algum objeto ou alimento,	causa obstrução	ou	dificulta	a passagem do ar para dentro dos pulmões da vítima.</p>

      <SectionItem title="Obstrução Parcial:"
        paragraph="" />

      <SectionItem title="Obstrução Total:"
        paragraph="A vítima não consegue falar nem tossir ou emitir sons." />

      <SectionItem title="Vítima consciente engasgada:"
        paragraph="Pergunte para a vítima:“Você pode falar?”.Se não puder falar, se
      coloque atrás da vítima e posicione as mãos para as Manobras de Heimlich
      " />

      <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace1.png" alt="Manobras de Heimlich" />

      <h3>Manobras de Heimlich</h3>
      <List img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace2.png"}>
        <li>•	Efetue repetidas compressões no abdome, se adulto ou criança, até a desobstrução ou até a chegada de socorro adequado.</li>
        <li>•	Em gestantes ou obesos, efetue as compressões no osso Esterno.</li>
        <li>•	Se a vítima for bebê, dê 5 pancadas entre as escapulas do bebê e faça 5 compressões abaixo da linha dos mamilos.</li>
        <li>• Repita os passos anteriores até a desobstrução ou até a chegada de socorro adequado, ou até a vítima ficar inconsciente.</li>
      </List>


      <MiniGallery title="Manobras de Heimlich em Bebês">
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace3a.png" alt="" />
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace3b.png" alt="" />
      </MiniGallery>

      <SectionItem title="Vítima inconsciente engasgada:"
        paragraph="Verifique a inconsciência.Se a vítima estiver inconsciente, 
      abra as Vias aéreas e verifique a Respiração(Ver, Ouvir e Sentir). " />

      <MiniGallery title="Caso a vítima não respire, efetue duas insuflações boca a máscara.">
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace5.png" alt="" />
      </MiniGallery>

      <MiniGallery title="Se não conseguir (o tórax não se elevar), repita a liberação das vias aéreas e as duas ventilações.">
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace7a.png" alt="" />
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace7b.png" alt="" />
      </MiniGallery>

      <MiniGallery title="Se o ar não passar, inicie o procedimento de RCP, 30 compressões e 2 ventilações por 5 vezes ou 2 minutos de duração.">
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace8.png" alt="" />
      </MiniGallery>

      <h4>OVACE - Vítima Adulta</h4>
      <List img={"https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace9.png"}>
        <li>• Após as manobras, tente visualizar e remover o objeto estranho.</li>
        <li>• Abra a boca da vítima e realize uma varredura digital,tentando remover o corpo estranho</li>
        <li>OBS: Somente realize a varredura se o objeto estiver visível.</li>
      </List>

      <p>Se não respira e persiste a obstrução, repita os passos anteriores, até a desobstrução, ou chegada de socorro adequado.</p>

      <h4>Bebê engasgado</h4>
      <List>
        <li>• Verifique inconsciência.</li>
        <li>• Provoque um estimulo na sola do pezinho do bebê.</li>
      </List>

      <MiniGallery title="Se não respira, efetue duas insuflações boca a boca e nariz.">
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace10.png" alt="" />
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace11.png" alt="" />
      </MiniGallery>

      <p>Ser o ar não passa (o tórax não se eleva), repita a abertura das vias aéreas e as insuflações. Se persistir a obstrução, segure o bebê em suas mãos.</p>

      <MiniGallery title="Vire o bebê de bruços e efetue 05 pancadas entre as escápulas do bebê.">
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovacea.png" alt="" />
      </MiniGallery>

      <MiniGallery title="OVACE - Manobra para desobstrução das vias aéreas, manobras no bebê consciente:">
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace12a.png" alt="" />
        <img src="https://imgbrigadeformation.s3.sa-east-1.amazonaws.com/Class2-03OVACE/ovace12b.png" alt="" />
      </MiniGallery>

      <p>Vire o bebê de barriga para cima, visualize a linha dos mamilos e coloque dois dedos no Esterno, abaixo desta linha e efetue 05 compressões.</p>


    </Section>
  )
}