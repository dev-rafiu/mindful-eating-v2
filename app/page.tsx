import Hero from "./components/hero";
import MagicBehind from "./components/magic-behind";
import About from "./components/about";
import WhatWeOffer from "./components/what-we-offer";
import Article from "./components/article";
import Team from "./components/team";
import Pricing from "./components/pricing";
import Feedback from "./components/feedback";
import UnlockDream from "./components/unlock-dream";
import DietPlan from "./components/diet-plan";

export default function Home() {
  return (
    <>
      <Hero />
      <MagicBehind />
      <About />
      <WhatWeOffer />
      <DietPlan />
      <Pricing />
      <Feedback />
      <UnlockDream />
      <Team />
      <Article />
    </>
  );
}
