import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap:  1.6rem;
  width: 100%;
  max-width: 70rem;
  text-align: justify;
  >div{
    display: flex;
  flex-direction: column;
  gap:  1.6rem;
  width: 100%;
  max-width: 70rem;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }
  >img{
    width: 100%;
    max-width: 400px;
  }
`