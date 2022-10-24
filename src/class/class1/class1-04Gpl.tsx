import { List } from "../../components/List";
import { Section } from "../../components/Section";
import { SectionItem } from "../../components/SectionItem";

import glp1 from "../../assets/img01/glp1.png"
import glp2 from "../../assets/img01/glp2.png"
import glp3 from "../../assets/img01/glp3.png"
import glp4 from "../../assets/img01/glp4.png"
import glp5 from "../../assets/img01/glp5.png"

import epi1 from "../../assets/img01/epi1.png"
import epi2 from "../../assets/img01/epi2.png"
import epi3 from "../../assets/img01/epi3.png"
import epi4 from "../../assets/img01/epi4.png"

import { MiniGallery } from "../../components/MiniGallery";

export function Class1Glp() {

  return (

    <Section title="G.L.P">
      <List>
        <li>&rarr;	Produto constituído de hidrocarbonetos com três ou quatro átomos de carbono (propano, propeno, butano, buteno)</li>
        <li>&rarr;	É gás à temperatura ambiente, e líquido quando submetido a pressão É mais pesado que o ar</li>
        <li>&rarr;	Em estado líquido é mais leve que a água</li>
        <li>&rarr;	É um produto gasoso, inflamável, inodoro e asfixiante quando inalado em altas concentrações;</li>
        <li>&rarr;	Compostos à base de enxofre, mercaptanos, são adicionados, apenas para lhe dar cheiro característico.</li>
      </List>


      <h3>Vazamento de GLP com fogo</h3>
      <List>
        <li>&rarr;	É um produto gasoso, inflamável, inodoro e asfixiante quando inalado em altas concentrações.</li>
        <li>&rarr;	Compostos à base de enxofre, mercaptanos, são adicionados, apenas para lhe dar cheiro característico.</li>
      </List>

      <h3>Vazamento de GLP sem fogo</h3>
      <List img={glp1}>
        <li>&rarr;	Apague as chamas do ambiente.</li>
        <li>&rarr;	Compostos à base de enxofre, mercaptanos, são adicionados, apenas para lhe dar cheiro característico.</li>
        <li>&rarr;	Feche o registro ou retire-o.</li>
        <li>&rarr;	Providenciar	o	desligamento	da energia elétrica.</li>
        <li>&rarr;	Abrir todas as portas e janelas.</li>
        <li>&rarr;	Isolar o restante da residência.</li>
        <li>&rarr;	Retire o botijão para um local isolado e ventilado.</li>
        <li>&rarr;	Evite arrastar o botijão ou qualquer objeto que possa soltar faísca.</li>
      </List>


      <MiniGallery title="Atitudes preventiva">
        <img src={glp2
        } alt="" />
        <img src={glp3} alt="" />
      </MiniGallery>
      <List img={glp4}>
        <li>&rarr;	Verifique se o registro do botijão de GLP está fechado, quando não estiver sendo utilizado e se está em bom estado de conservação.</li>
        <li>&rarr;	Instale seu botijão fora da cozinha, nunca deixe-os em local fechado.</li>
        <li>&rarr;	Verifique o estado das tubulações.</li>
        <li>&rarr;	Antes de sair verifique se não há panelas sobre o fogo.</li>
        <li>&rarr;	Nunca instale cortinas próximo ao fogão.</li>
        <li>&rarr;	Ao acender o fogo, primeiro acenda o fósforo.</li>
        <li>&rarr;	Não solte balões.</li>
        <li>&rarr;	Não acumule lixo.</li>
        <li>&rarr;	Não guarde panos impregnados com produtos perigosos.</li>
        <li>&rarr;	Acabando de fumar, apague completamente o cigarro em local apropriado.</li>
        <li>&rarr;	Deixe-os fora do alcance de crianças.</li>
        <li>&rarr;	Deixe-os bem fechados e identificados.</li>
        <li>&rarr;	Guarde-os em local ventilado e isolado.</li>
        <li>&rarr;	Não fume na cama, o sono as vezes não espera o cigarro acaba.</li>
        <li>&rarr;	Não permita que crianças brinque com fogo.</li>
        <li>&rarr;	Não deixe crianças sozinha em casa.</li>
        <li>&rarr;	Desligue	o	ferro	elétrico,	mesmo	que	vá	se ausentar só alguns instantes.</li>
        <li>&rarr;  Não ligue vários aparelhos numa só tomada.</li>
        <li>&rarr;	Não faça gambiarras elétricas.</li>
        <li>&rarr;	Não faça ligação direta nem reforce fusíveis.</li>
      </List>
      <SectionItem title="PREVENÇÃO AINDA É VISTA DA SEGUINTE FORMA:"
        paragraph="Quando tudo vai bem, ninguém lembra que existe;	Quando algo vai mal, dizem que não existe;
        Quando é prá gastar, acha-se que não é preciso que exista;"/>
      <SectionItem title="PORÉM:"
        paragraph="Quando realmente não existe, todos concordam que deveria existir" />

      <h3>Equipamento de combate ao Incêndio</h3>
      <h4>Equipamentos de detecção e alarme:</h4>
      <List img={glp5}>
        <li>▪	Possuem dispositivos mecânicos, elétricos ou eletrônicos, tem a função de denunciar por sinais luminosos e sonoros, em caso de emergência</li>
        <li>▪	Os tipos mais comuns são: Detector Térmico – Calor; Detector Infravermelho – Chamas; Detector Fotoelétrico – Fumaça; Detector de Ionização – Produto invisível à combustão.</li>
        <li>▪ Comunicação varia de acordo com o Sistema Instalado nas dependências. Pode ser geral ou parcial.</li>
      </List>
      <h4>Outros materiais:</h4>

      <List img={epi1}>
        <li>▪ <strong>Para corte:</strong> Moto Serra – MadeiraMoto Abrasivo – Chapas, blocos, pedras e similares.</li>
        <li>▪ <strong>Arrombamento e Salvamento:</strong> Machado de Orelha,Machado, Machado picareta Marreta, Pé de Cabra Tesourão, Cunha</li>
        <li>▪ <strong>Equipamento de Remoção:</strong> Serrote, Arco de Serra Facão, Pás, picaretas. Enxadas, Croque</li>
        <li>▪ <strong>Equipamento de Iluminação:</strong> Lanterna, Farol, Farolete</li>
        <li>▪ <strong>E.P.I:</strong>É todo material ou dispositivo de uso pessoal destinado a preservar e proteger a integridade física do usuário.</li>

      </List>

      <List img={epi2}>
        <li>▪ <strong>Esguichos:</strong> são equipamentos que têm a função de dar a forma ao jato de água</li>
        <li>▪ Jato semi-sólido. </li>
        <li>▪ Jato chuveiro. </li>
        <li>▪ Jato neblina.</li>
      </List>
      <SectionItem img={epi3}
        title="Mangueiras"
        paragraph="são condutores flexíveis de água. Devem ser revestidos internamente com borracha e externamente com lona sintética e podem ser encontradas no diâmetro de 1’1/2 e 2’1/2.Nas extremidades são encontradas juntas metálicas storz (engate rápido)." />

      <SectionItem
        title="Aparelho de Hidrante: "
        paragraph="são equipamentos de combate a incêndio constituído de tubulações, registros, mangueiras e esguichos, a pressão de água pode ser obtida por gravidade ou através de bomba." />

      <SectionItem
        title="Acessórios:"
        paragraph="esguichos, chaves e reduções estão colocados em uma caixa junto ao registro ou com o registro colocado dentro da mesma." />
      <SectionItem img={epi4}
        title="Uso:"
        paragraph="oSeu uso para melhor segurança é efetuado no mínimo por três pessoas." />

      <small>Fim deste modulo!</small>



    </Section>

  )
}