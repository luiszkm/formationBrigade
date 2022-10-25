import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  max-width:300px;
  min-height: 400px;
  border-radius: 8px;
  border: 1px solid ${({theme})=>theme.COLORS.DARK_RED};
  margin-top: 2.4em;
  background: ${({theme})=> theme.COLORS.WHITE};



`