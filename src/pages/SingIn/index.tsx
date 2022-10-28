import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/InputComponent";

import { useState } from "react";
import { useAuth } from "../../hooks/auth"



import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai"
import logo from "../../assets/logo.svg"
import { Container, FormLogin } from "./styles";



export function SingIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const {signIn} = useAuth()
  
  function handleSignIn(e: React.MouseEvent<Element, MouseEvent>) {
    e.preventDefault()
    signIn({email, password})
  }

  return (
    <Container>

      <section>
        <div>
          <img src={logo} alt="logo brigada" />
          <h2>Formação Brigada</h2>
          <span>faça login e  comece a usar!</span>
        </div>

        {<FormLogin >
          <label htmlFor="email">
            Digite seu e-mail
            <Input icon={<AiOutlineMail size={24} />}
              id="email"
              type="text"
              placeholder="brigada@email.com.br"
              onChange={(
                e: React.ChangeEvent<HTMLInputElement>,
              ): void => setEmail(e.target.value)}
            />
          </label>

          <label htmlFor="password">
            Digite sua senha
            <Input icon={<AiOutlineUnlock size={24} />}
              id="password"
              type="password"
              placeholder="máximo 6 caracteres"
              onChange={(
                e: React.ChangeEvent<HTMLInputElement>,
              ): void => setPassword(e.target.value)}
            />
          </label>

          <Link to='/'>
            <Button title={"Entrar na Plataforma"}
            onClick={(e)=>handleSignIn(e)} />
          </Link>

        </FormLogin>
        }
      </section>
    </Container>
  )
}


