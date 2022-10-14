import { InputHTMLAttributes } from "react"
import { Container } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
}


export function Input(props: InputProps) {

  return (
    <Container>
      {props.icon}
      <input {...props} />
    </Container>
  )
}