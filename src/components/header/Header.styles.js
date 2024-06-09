import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 40vh;
  background-color: white;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligns content to the top */
  align-items: flex-start; /* Aligns content to the left */
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 0.8em;
  align-self: flex-start;
  margin-top: 0;
  font-weight: 400;
`;

export const Subtitle = styled.h1`
  font-size: 1.5em;
  font-weight: normal;
  text-align: center;
  width: 100%;
  padding-top: 50px;
`;
