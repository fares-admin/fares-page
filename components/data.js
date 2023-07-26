import {
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  FaceSmileIcon
} from "@heroicons/react/24/solid";

import benefitTwoImg from "../public/img/undraw_browsing_re_eycn.svg";
import benefitOneImg from "../public/img/undraw_software_engineer_re_tnjc.svg";

const benefitOne = {
  title: "Attachment and understanding",
  desc: "With a team of highly qualified and experienced professionals, we are confident that we can bring outstanding value to our customers.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand our customers",
      desc: "We always observe and analyze accurately to be able to give useful advice to customers.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Communicate Regularly",
      desc: "We regularly communicate with our clients to understand the business and help them keep up with the progress.",
      icon: <ChatBubbleLeftRightIcon />,
    },
    {
      title: "Long-term cooperation",
      desc: "We aim to stick, develop, operate and update systems for customers.",
      icon: <CalendarDaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "High quality product",
  desc: "Always update technology and offer suitable and optimal solutions. We put our heart into the product.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Cross-platform product",
      desc: "We're always aiming for products that run on multiple devices, with experience and users in mind.",
      icon: <ComputerDesktopIcon />,
    },
    {
      title: "Scalable structure",
      desc: "We want to build a long-term system for customers. The products we create are easy to update, repair and expand in the future.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "New and stable technology",
      desc: "We always research and update new, stable technology for projects.",
      icon: <CpuChipIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };

