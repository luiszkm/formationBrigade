import {Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home";
import { SingIn } from "../pages/SingIn";
import{ ClassRoom} from "../pages/ClassRoom"


export function AppRoutes (){
  return(
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element ={<SingIn/>}/>
      <Route path="/aula" element ={<ClassRoom/>}/>
    </Routes>
  )
}