import { InputHTMLAttributes } from "react"
import { Container } from "./styles"
import {AiOutlineSearch } from "react-icons/ai"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
}


export function SearchBar(props: InputProps) {

  return (
    <Container>
      <AiOutlineSearch color="CC0000"/>
      <input {...props} />
    </Container>
  )
}