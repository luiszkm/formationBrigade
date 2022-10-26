import { Button } from "../../components/Button";
import { Input} from "../../components/Input";
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai"
import { Container, FormLogin } from "./styles";
import { Link } from "react-router-dom";



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
            <Input id="email"
              type="email"
              placeholder="brigada@exemplo.com"
              icon={<AiOutlineMail />} />
          </label>

          <label htmlFor="password">
            Digite sua senha
            <Input id="password"
              type="email"
              placeholder="mínimo 6 carácter"
              icon={<AiOutlineUnlock />} />
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