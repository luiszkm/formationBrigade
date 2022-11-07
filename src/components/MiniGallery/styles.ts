import styled from "styled-components";

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  gap:  1.6rem;
  max-width: 700px;
  
>div{
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media (min-width: 768px) {
flex-direction: row;
  }
  >img{
    max-width: 300px;
    width: 100%;
  }
}
`