import Image from "next/image";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { DisplayCard } from "../components/displayCard";
import { DailyOffer } from "../components/dailyOffer";
import { PromotionalDisplay } from "../components/promotionalDisplay";
import { LatestArrivals } from "../components/latestArrivals";
import { NewsLetter } from "../components/newsLetter";
import { HurryUpCard } from "../components/hurryUpCard";
import { Footer } from "../components/footer";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* <div className="layout-container"> */}



      <Header />
      <Hero />
        // <DisplayCard />
      <DailyOffer />
      <PromotionalDisplay />
      <LatestArrivals />
      <NewsLetter />
      <HurryUpCard />
      <Footer />
      {/* </div> */}

    </>
  );
}
