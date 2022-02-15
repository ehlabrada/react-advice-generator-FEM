import { homeObjFour, homeObjThree, homeObjTwo } from "./Data";

// Components
import InfoSection from "../../components/InfoSection/InfoSection";
import { Pricing } from "../../components";

const Products = () => {
  return (
    <div>

      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </div>
  )
};

export default Products;
