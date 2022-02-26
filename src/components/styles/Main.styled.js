import styled from "styled-components";
import iconDividerDesktop from "../../images/pattern-divider-desktop.svg";
import iconDividerMobile from "../../images/pattern-divider-mobile.svg";

export const MainWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.grayishBlue};
  width: 570px;
  height: 350px;
  border-radius: 20px;
  padding: 30px;

  /* text-align: justify;
  text-justify: inter-word; */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: relative;

  @media screen and (max-width: 768px) {
    width: 360px;
    height: 450px;
  }
`;

export const AdviceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.neonGreen};
`;

export const Quote = styled.p`
  color: ${({ theme }) => theme.colors.lightCyan};
  font-size: ${({ theme }) => theme.font.size};
`;

export const DividerImg = styled.img`
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: " ";
    display: block;
    width: 45%;
    height: 1px;
    opacity: 0.3;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.lightCyan};
    left: 0;
    top: 50%;
  }
  &::after {
    content: " ";
    display: block;
    width: 45%;
    height: 1px;
    opacity: 0.3;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.lightCyan};
    right: 0;
    top: 50%;
  }

  span {
    background-image: url(${iconDividerDesktop});
    background-repeat: no-repeat;
    /* background-position: ; */

    @media screen and (max-width: 768px) {
      background-image: url(${iconDividerMobile});
    }
  }
`;

export const LineDivider = styled.hr`
  border-top: solid #000 1px;
  margin: 50px 0;
  border: 1px solid red;

  &::after {
    content: url(${iconDividerDesktop});
    /* Controls the position of the logo */
    left: 50%;
    position: absolute;
    transform: translateY(-50%) translateX(-50%);
    /* Controls the whitespace around the symbol */
    padding: 20px;
    background: #fff;
  }
`;

export const DiceWrapper = styled.div`
  position: absolute;
  bottom: -12%;
  left: 43%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.neonGreen};

  img {
    width: 30px;

    align-self: center;
  }

  &:hover {
    box-shadow: 0px 0px 15px 13px rgb(32%, 100%, 66%, 0.4);
  }

  @media screen and (max-width: 768px) {
    bottom: -7%;
  }
`;
