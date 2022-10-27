import { InputHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  icon?:ReactNode;
}

export function Input(props: InputProps){

  return(
    <Container>
      {props.icon}
      <input {...props}/>
    </Container>
  )
}