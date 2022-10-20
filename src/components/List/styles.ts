import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    //align-items: flex-start;

  }

  >ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    max-width: 400px;
  }
  >img{
    width: 100%;
    max-width: 300px;
  }

  &&.list2{
    justify-content: start;
    >ul{
    max-width: 400px;

  }
   @media (min-width: 768px) {
    flex-direction: row-reverse;

  }


  }
`