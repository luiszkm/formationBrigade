import styled from "styled-components";

export const Container = styled.button`
  height: 5.6rem;
  padding: 1.6rem 3.2rem ;
  background-color: ${({theme})=>theme.COLORS.RED_600};
  color: ${({theme})=>theme.COLORS.WHITE_400};
  border-radius: 1.6rem;
  min-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
`