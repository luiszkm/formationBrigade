import {Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home";
import { SingIn } from "../pages/SingIn";



export function AppRoutes (){
  return(
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/login" element ={<SingIn/>}/>
    </Routes>
  )
}