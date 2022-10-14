import styled from "styled-components";

export const Container = styled.main`
  background: ${({theme})=> theme.COLORS.GRAY_400};
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3.2rem;
`