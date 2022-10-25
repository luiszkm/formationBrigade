import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  >main{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    width: 100%;
    //max-width: 1136px;
   
    background: ${({theme})=> theme.COLORS.GRAY_400};
    >section{
      width: initial;

    }
  }
`