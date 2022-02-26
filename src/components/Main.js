import {
  AdviceTitle,
  DiceWrapper,
  DividerImg,
  MainWrapper,
  Quote,
} from "./styles/Main.styled";
import iconDividerDesktop from "../images/pattern-divider-desktop.svg";
import iconDividerMobile from "../images/pattern-divider-mobile.svg";
import iconDice from "../images/icon-dice.svg";
import { useState } from "react";
import { useEffect } from "react";

const Main = ({ error, loading, data, handleAdvice }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);

    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  const iconImg = windowWidth <= 768 ? iconDividerMobile : iconDividerDesktop;

  return (
    <MainWrapper>
      <AdviceTitle>Advice # {data?.slip.id}</AdviceTitle>
      {loading ? (
        <p style={{ color: "hsl(193, 38%, 86%)" }}>Loading...</p>
      ) : (
        <Quote>"{data?.slip.advice}"</Quote>
      )}

      <DividerImg src={iconImg} alt="divider-icon" />
      <DiceWrapper onClick={handleAdvice}>
        <img src={iconDice} alt="dice-divider" />
      </DiceWrapper>
    </MainWrapper>
  );
};

export default Main;
