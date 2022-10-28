import styled from "styled-components";

export const Container = styled.button`
background: transparent;
width: 4rem;
height: 4rem;
border-radius: 50%;
border: 1px solid ${({theme})=>theme.COLORS.DARK_RED};
position: fixed;
right: 1rem;
bottom: 1rem;
display: flex;
align-items: center;
justify-content: center;

a>{
  color: ${({theme})=> theme.COLORS.WHITE_400};
}

`