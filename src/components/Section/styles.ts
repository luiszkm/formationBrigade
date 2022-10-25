import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 100%;
  max-width: 1136px;
  background: ${({theme})=> theme.COLORS.WHITE};
  padding: 2.4rem 1.2rem;
  >h2{
    font-size: 3.2rem;
  }
  >div{
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(1, 1fr);
   

  }


`