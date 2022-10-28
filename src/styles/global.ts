import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  }
  :root{
  font-size: 62.5%;
  }
  html{
    scroll-behavior: smooth;
  }
  body{
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  font-family: 'Poppins', sans-serif;
  }
  img{
    width: 100%;
    max-width: 500px;
    height: 100%;
    max-height: 400px;
    margin: 0 auto;
  }
  .sr-only {
  opacity: 0;
  width: 1px;
  height: 1px;
  position: absolute;
  margin: -1px;
  white-space: nowrap;
  overflow: hidden;
  border-width: 0;
  clip: rect(0, 0, 0, 0);
  }
  .hide{
  display: none;
  }
  a{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  button,
  a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover,
   a:hover{
    cursor: pointer;
    filter: brightness(0.9);
  } @keyframes topToDown {
    0%{
      transform:translateY(-50%);
      opacity: 0;
    }
    100%{
      transform:translateY(0);
      opacity: 1;
    }
    } 
  @keyframes rotateAnimation {
    from {transform: rotateY(45deg)}
    to {transform: rotateY(225deg);}
  }
`