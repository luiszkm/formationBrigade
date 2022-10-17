import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;

  >h2{
    font-size: 3.2rem;
  }
  >div{
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(1, 1fr);

  }


`