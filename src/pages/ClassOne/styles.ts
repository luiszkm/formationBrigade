import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({theme})=> theme.COLORS.GRAY_400};

  @media (min-width:800px) {
    //flex-direction: row;

  }
  >main{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;
    min-height: 80vh;
    width: 100%;
    max-width: 1136px;
    position: relative;
   @media (min-width: 900px) {
    flex-direction: row;
   }
    >section{
      //width: initial;
    }
  
    
  }
`