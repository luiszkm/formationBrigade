import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
min-height: 100vh;
background: ${({theme})=> theme.COLORS.GRAY_400};


`

export const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap: 2.4rem;
  @media (min-width: 900px) {
    grid-template-columns: repeat(2,1fr);

  }

`