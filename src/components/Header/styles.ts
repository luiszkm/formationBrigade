import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme})=>theme.COLORS.GRAY_900};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:8rem ;
  color: ${({theme})=> theme.COLORS.WHITE_400};
  >header{
    width: 100%;
    max-width: 1136px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >a{
      color: ${({theme})=> theme.COLORS.WHITE_400};
     }

    >nav ul {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      >a li{
      color: white;
      display: block;
      position: relative;
       ::after {
        content: '';
        position: absolute;
        bottom: 1rem;
        left: 50%;
        width: 0;
        height: 0.3rem;
        top: 25px;
        background: linear-gradient(to right, #ff6666 0%, #92000E 100%);
        transition: all 300ms ease-in-out;
      }
      :hover::after{
       width: 100%;
        left: 0%;
        color: red;
      }
    }
 }
  @media (min-width: 768px) {
    display: flex;
  }
 

    }

  



`