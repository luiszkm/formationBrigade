import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
  background-color: transparent;
  >a{
    color: ${({theme})=> theme.COLORS.RED_600};
    font-size: 12px;
    :hover{
      font-size:1.6rem
    }
  }

`