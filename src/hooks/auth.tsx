import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"
interface ProvideAuthContext {
  user?: string;
  signIn?: (props: singInProps) => void;
  signOut?: any;
}
interface singInProps {
  email: string;
  password: string;
}
interface dataProps {
  user: string;
  token: string
}

export const AuthContext = createContext({} as ProvideAuthContext)

function AuthProvider({ children }: any) {

  const [data, setData] = useState<dataProps>({ user: '', token: '' })

  async function signIn({ email, password }: singInProps) {
    console.log(email);

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data

      localStorage.setItem("@fireman:user", JSON.stringify(user));
      localStorage.setItem("@fireman:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });


    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@fireman:token")
    localStorage.removeItem("@fireman:user")

    setData({ user: '', token: '' })
  }

  useEffect(() => {
    const token = localStorage.getItem("@fireman:token")
    const user = localStorage.getItem("@fireman:user")
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])


  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }