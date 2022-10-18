import styled from "styled-components";

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  gap:  1.6rem;
  max-width: 700px;
>div{
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap: 1.6rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2,1fr);

  }
  >img{
    max-width: 300px;
    width: 100%;
  }
}
`