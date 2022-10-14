import styled from "styled-components";

export const Container = styled.label`
  background: ${({theme})=> theme.COLORS.GRAY_400};
  border-radius: 1.6rem;
  width:100%;
  max-width: 46.4rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  gap: 8px;
  :visited{
    background: '#000000'
  }
  >input{
    background: transparent;
    outline: none;
    width: 100%;
  }

`


