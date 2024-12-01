import React from "react";
import styled from "styled-components";

const Styled = () => {
  return <RedContainer>Styled</RedContainer>;
};

export default Styled;

const RedContainer = styled.div`
  background-color: red;
  color: white;
  padding: 10px;
  width: 100vw;
  height: 100px;
`;
