import {Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home";
import { SingIn } from "../pages/SingIn";
import{ ClassOne} from "../pages/ClassOne"


export function AppRoutes (){
  return(
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element ={<SingIn/>}/>
      <Route path="/aula" element ={<ClassOne/>}/>
    </Routes>
  )
}