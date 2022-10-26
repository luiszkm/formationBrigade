import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;
  border: 1px solid ${({theme})=>theme.COLORS.GRAY_700};
  padding: 0 1.6rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  border-radius: 8px;
  :focus-within{
    border: 1px solid ${({theme})=>theme.COLORS.DARK_RED};
  }
  >input{
    background: transparent;
    width: 100%;
    height: 100%;
    outline: none;
    color: ${({theme})=>theme.COLORS.WHITE};
    :placeholder{
      color: ${({theme})=>theme.COLORS.GRAY_900};

    }
  }
  >svg{
    fill: ${({theme})=>theme.COLORS.GRAY_700};
  }

`
