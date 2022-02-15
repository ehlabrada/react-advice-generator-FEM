import { homeObjFour } from "./Data";

// Components
import InfoSection from "../../components/InfoSection/InfoSection";
import { Pricing } from "../../components";

const Services = () => {
  return (
    <div>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </div>
  )
};

export default Services;
