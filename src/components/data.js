import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";


import claimMe from "../../public/img/ww.jpg";
import benefitOneImg from "../../public/img/exp_new.jpg";
import benefitTwoImg from "../../public/img/new_cred1.jpg";

const claimYourself = {
  title : "The Credit Card Designed for Your Future.",
  desc: "Comprehensive features designed for the modern financial lifestyle.",
  image: claimMe,
  bullets: [
    {
      title: "No annual fee & low interest rates",
      desc: "No hiden fees, 0% APR for 15 months on purchases.",
      icon: <FaceSmileIcon />,
    },

    {
      title: "Premium rewards",
      desc: "2x points on dining, travel, and entertainment purchases. ",
      icon: <SunIcon />,
    },
        {
      title: "24/7 Support",
      desc: "Round-the-clock customer service with instant chat and phone support.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};


const benefitOne = {
  title: "Features that empower you",
  desc: "Experience banking reimagined with cutting-edge technology and user-centric design.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Mobile-First design",
      desc: "Manage your finances on-the-go with our award-winning mobile app.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Smart analytics",
      desc: "AI-powered insights help you understand and optimize your spending patterns.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Global acceptance",
      desc: "Use your card anywhere in the world with no foreign transaction fees.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Rewards that actually matter",
  desc: "Every swipe earns you more. Our reward program is designed to maximize your benefits.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "5% Cashback",
      desc: "Earn 5% cashback on all purchases in your top spending category*.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "$200 Welcome bonus",
      desc: "Get $200 bonus after spending $1,000 in first 3 months*.",
      icon: <DevicePhoneMobileIcon />,
    },

        {
      title: "3x Fast credit score building",
      desc: "Faster credit score building and free credit score monitoring.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};


export {benefitOne, benefitTwo, claimYourself};
