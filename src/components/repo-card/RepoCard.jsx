import React from "react";
import { Card, ImageContainer, Image, Info, Title, Description, Link } from "./RepoCard.styles";

const RepoCard = ({ title, description, skills, backgroundColor, imageUrl, repoUrl, liveUrl }) => {
  return (
    <Card>
      <ImageContainer backgroundColor={backgroundColor}>
        <Image src={imageUrl} alt={title} />
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Description>Technologies used: {skills}</Description>
        <Link href={repoUrl}>GitHub Repository</Link>
        <Link href={liveUrl}>Live Site</Link>
      </Info>
    </Card>
  );
};

export default RepoCard;
