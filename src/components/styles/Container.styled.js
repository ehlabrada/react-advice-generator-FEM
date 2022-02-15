import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 420px;
  padding: 25px;
  padding-bottom: 40px;
  border-radius: 12px;
  background-color: hsl(216, 50%, 16%);
`;

export const ContainerImgWrapper = styled.div`
  position: relative;
`;

export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 60%;
  border-radius: 12px;
  margin-bottom: 1.5em;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  border-radius: 15px;
  transition: opacity 0.4s ease-in-out;
  /* background: hsl(178, 100%, 50%); */
  background: rgba(0, 255, 247, 0.5);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }
`;

export const Content = styled.div`
  font-weight: bold;
  position: absolute;
  /* color: hsl(0, 0%, 100%) !important; */
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleTittle = styled.h3`
  font-size: 1.7em;
  font-weight: 600;
  color: hsl(0, 0%, 100%);
  margin-bottom: 0.8em;

  &:hover {
    cursor: pointer;
    color: hsl(178, 100%, 50%);
  }
`;

export const AmountAndTime = styled.div`
  margin-top: 1.1em;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Amount = styled.span`
  color: hsl(178, 100%, 50%);

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Time = styled.span`
  color: hsl(215, 51%, 70%);
  display: flex;
  align-items: center;
`;

export const Line = styled.hr`
  opacity: 0.6;
  margin: 20px 0;
  height: 0;
  border: 0.5px solid hsl(215, 32%, 27%);
  background-color: red;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;

  span {
    color: hsl(0, 0%, 100%);

    &:hover {
      cursor: pointer;
      color: hsl(178, 100%, 50%);
    }
  }
`;

export const FooterImg = styled.img`
  border-radius: 50%;
  width: 30px;

  margin-right: 15px;
`;
