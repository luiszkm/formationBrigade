import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  >section{
    display: flex;
    min-height: 80vh;
    width: 100%;
    max-width: 1136px;
  }
`