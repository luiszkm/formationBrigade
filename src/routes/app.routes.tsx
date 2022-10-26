import {Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { SingIn } from "../pages/SingIn";

import{ ClassOne} from "../pages/ClassOne"
import{ ClassTwo} from "../pages/ClassTwo"


export function AppRoutes (){
  return(
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      <Route path="/login" element ={<SingIn/>}/>
      <Route path="/aula" element ={<ClassOne/>}/>
      <Route path="/APH" element ={<ClassTwo/>}/>
    </Routes>
  )
}