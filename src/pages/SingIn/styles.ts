import styled from "styled-components";

export const Container = styled.div`
background-color:  ${({theme})=>theme.COLORS.GRAY_900};
color:  ${({theme})=>theme.COLORS.WHITE_300};
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

  >section{
    width: 100%;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.4rem;
    >div:first-child{
      text-align: center;
    
      >img{
        width: 100%;
        max-width: 300px;
      }
    >span{
      color: ${({theme})=> theme.COLORS.GRAY_500};
      font-size: 1.4rem;
      line-height: 2.2rem;     
      }
    }
  }
 

`

export const FormLogin = styled.form`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  >label{
    display: flex;
    flex-direction: column;
    gap:  1.6rem;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.6rem;
    width: 100%;

  }

`
