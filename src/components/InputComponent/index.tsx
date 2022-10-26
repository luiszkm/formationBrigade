import { ReactNode } from "react";
import { Container } from "./styles";

interface InputProps {
  icon?:ReactNode
}

export function Input(props: InputProps){

  return(
    <Container>
      {props.icon}
      <input type="text" />
    </Container>
  )
}