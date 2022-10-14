import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 504px;
  background: ${({theme})=>theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 12px;

  >div:first-child div{
    display: flex;
    flex-direction: column;
    align-items: center;

    >div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.6rem;
    }
  } img{
    max-width: 300px;
    max-height: 300px;
    object-fit: fill;

  }

  @media (min-width: 768px) {
    >div:first-child div{
    display: flex;
    flex-direction: row;
    > img{
      max-width: 200px;
      max-height: 200px;
      object-fit: fill;
      }
    }
  }
`

export const ClassInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: space-between;
  margin-top: 1.6rem;
  >div{
    display:flex;
    align-items: center;
    gap: 3.2rem;
  }
  @media (min-width:768px) {
    flex-direction: row;

  }
`

export const ClassItem = styled.div`
display: flex;
align-items: center;
flex-direction: column;

`
