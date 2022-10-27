import { Button } from "../../components/Button";
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai"
import { Container, FormLogin } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/InputComponent";

import logo from "../../assets/logo.svg"


export function SingIn() {

  return (
    <Container>

      <section>
        <div>
          <img src={logo} alt="" />
          <h2>Formação Brigada</h2>
          <span>faça login e  comece a usar!</span>
        </div>

        {<FormLogin >
          <label htmlFor="email">
            Digite seu e-mail
           <Input icon={<AiOutlineMail size ={24}/>}
            id="email"
            type="text"
            placeholder="brigada@email.com.br"
           />
          </label>

          <label htmlFor="password">
            Digite sua senha
            <Input icon={<AiOutlineUnlock size={24}/>} 
            id="password"
            type="password"
            placeholder="máximo 6 caracteres" />
          </label>
          
          <Link to='/'>
            <Button title={"Entrar na Plataforma"} />
          </Link>

        </FormLogin>
  }
      </section>
    </Container>
  )
}