import { InputHTMLAttributes, ReactNode } from "react"
import { Container } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}


export function Input(props: InputProps) {

  return (
    <Container>
      {props.icon}
      <input {...props} />
    </Container>
  )
}