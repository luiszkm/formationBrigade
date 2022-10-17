import { Container } from "./styles";


interface SectionItemProps {
  title: string;
  paragraph: string;
  img?: any
  withH4?:boolean 
}


export function SectionItem(props: SectionItemProps) {

  return (
    <Container>
      <div>
     {
       props.withH4 ? <h4>{props.title}</h4> : ''}

      <p>
        {!props.withH4 ? <strong>{props.title}</strong> : ''}
        {props.paragraph}
        </p>
     </div> 
        {
          props.img ? <img src={props.img}/> : ''
        }
    </Container>
  )
}