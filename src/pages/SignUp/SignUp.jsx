import {  homeObjThree } from "./Data";

// Components
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjOne } from "../HomePage/Data";

const SignUp = () => {
  return (
    <div>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </div>
  )
};

export default SignUp;
