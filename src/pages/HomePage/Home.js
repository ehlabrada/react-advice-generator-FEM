import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

// Components
import InfoSection from "../../components/InfoSection/InfoSection";
import { Pricing } from "../../components";

const Home = () => {
  return (
    <div>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </div>
  )
};

export default Home;
