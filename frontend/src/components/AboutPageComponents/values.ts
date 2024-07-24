import mastery from "../../resources/images/mastery-icon.svg";
import finland from "../../resources/images/finland-icon.svg";
import multiplicity from "../../resources/images/multiplicity-icon.svg";
import heart from "../../resources/images/heart-icon.svg";

export type Value = {
  name: string;
  icon: string;
  desc: string;
};

const values: Array<Value> = [
  {
    name: "Kutsumus",
    icon: heart,
    desc: "Lorem ipsum dolor sit amet, qui minim labore",
  },
  {
    name: "Kotimaisuus",
    icon: finland,
    desc: "Lorem ipsum dolor sit amet, qui minim labore. Sit amet, qui.",
  },
  {
    name: "Moninaisuus",
    icon: multiplicity,
    desc: "Lorem ipsum dolor sit amet, qui minim labore",
  },
  {
    name: "Yritä olla mestari",
    icon: mastery,
    desc: "Lorem ipsum dolor sit amet, qui minim labore",
  },
];

export default values;
