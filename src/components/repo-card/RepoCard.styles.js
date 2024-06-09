import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.285);
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 40px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  position: relative;
  min-height: 300px;

  @media (max-width: 950px) {
    border-radius: 10px 10px 0 0;
  }

  @media (max-width: 500px) {
    min-height: 230px;
  }
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 25px;

  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0px;
  }

  @media (max-width: 950px) {
    width: 65%;
    left: 25px;
  }

  @media (max-width: 700px) {
    width: 85%;
  }

  @media (max-width: 500px) {
    width: 100%;
    left: 0px;
  }
`;

export const Info = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  margin-top: 0px;
`;

export const Description = styled.p`
  font-size: 0.9em;
  margin-top: 0px;
`;

export const Link = styled.a`
  color: #248558;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
