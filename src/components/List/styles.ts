import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  >ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }
  >img{
    width: 100%;
    max-width: 300px;
  }

  &&.list2{
    >ul{
    max-width: 500px;
  }
   @media (min-width: 768px) {
    flex-direction: row-reverse;

  }


  }
`