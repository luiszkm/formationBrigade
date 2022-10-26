import { Button } from "../../components/Button";
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai"
import { Container, FormLogin } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";



export function SingIn() {

  return (
    <Container>

      <section>
        <div>
          <h2>Formação Brigada</h2>
          <span>faça login e  comece a usar!</span>
        </div>
        {<FormLogin >
          <label htmlFor="email">
            Digite seu e-mail
           <Input />
          </label>

          <label htmlFor="password">
            Digite sua senha
            <Input />
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