import React from "react";
import {
  ArticleTittle,
  CardFooter,
  ContainerInfo,
  CardImg,
  Line,
  StyledContainer,
  AmountAndTime,
  Amount,
  Time,
  FooterImg,
  ContainerImgWrapper,
  Overlay,
  Content,
} from "./styles/Container.styled";

import imgEquilibrium from "../images/image-equilibrium.jpg";
import avatarImg from "../images/image-avatar.png";
import clockIcon from "../images/icon-clock.svg";
import etherIcon from "../images/icon-ethereum.svg";
import viewIcon from "../images/icon-view.svg";

const Container = () => {
  return (
    <StyledContainer>
      <ContainerImgWrapper>
        <CardImg src={imgEquilibrium} alt="product-img" />
        <Overlay>
          <Content>
            <img src={viewIcon} alt="view-icon" />
          </Content>
        </Overlay>
      </ContainerImgWrapper>
      <ContainerInfo>
        <ArticleTittle>Equilibrium #3429</ArticleTittle>
        <p>Our Equilibrium collection promotes balance and calm</p>
        <AmountAndTime>
          <Amount>
            <img src={etherIcon} alt="ether-icon" /> 0.04ETH
          </Amount>
          <Time>
            <img src={clockIcon} alt="" /> 3 days left
          </Time>
        </AmountAndTime>
      </ContainerInfo>
      <Line />
      <CardFooter>
        <FooterImg src={avatarImg} alt="author-img" />
        <p>
          Creation of <span>Jules Wyvern</span>{" "}
        </p>
      </CardFooter>
    </StyledContainer>
  );
};

export default Container;
