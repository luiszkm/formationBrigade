import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme})=>theme.COLORS.GRAY_900};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:6rem ;
  color: ${({theme})=> theme.COLORS.WHITE_400};

  >footer{
    width: 100%;
    max-width: 1136px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >small a {
      color: ${({theme})=> theme.COLORS.WHITE_400};
    }
  }



`