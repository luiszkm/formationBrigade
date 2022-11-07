import styled from "styled-components";



export const  Container = styled.div`

min-height:100vh;
display: flex;
flex-direction: column;
justify-content: space-between;



>div:nth-child(2){
  width:100% ;
  height: 30vh;
  background-image: linear-gradient(0deg, rgba(255,0,0,0), rgba(255,0,0,1),rgba(255,0,0,0));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight:bold;


  >ul{
    display: flex;
    flex-direction: column;
    gap: 12px;

    >li{
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }


  }
`
  




