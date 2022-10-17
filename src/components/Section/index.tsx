import { ReactNode } from "react";
import { Container } from "./styles";



interface SectionProps {
  title: string;
  children?: ReactNode

}


export function Section(props: SectionProps) {

  return (
    <Container>
      <h2>{props.title}</h2>
      <div>
        {props.children}

      </div>
    </Container>
  )

}