import { Container } from "./styles";


interface SectionItemProps {
  title: string;
  paragraph: string;
}


export function SectionItem(props: SectionItemProps) {

  return (
    <Container>
      <p>
        <strong>{props.title}</strong>
        {props.paragraph}
        </p>
    </Container>
  )
}