import Image from "next/image";
import { Header } from "../components/header";
import { HeroCopy } from "../components/heroCopy";
import { DisplayCard } from "../components/displayCard";
import { DailyOffer } from "../components/dailyOffer";
import { PromotionalDisplay } from "../components/promotionalDisplay";
import { LatestArrivals } from "../components/latestArrivals";
import { NewsLetter } from "../components/newsLetter";
import { HurryUpCard } from "../components/hurryUpCard";
import { Footer } from "../components/footer";
import { DemoComponent } from "../components/test";
// import styles from "./page.module.css";


//=============================================================

const displayCardData = [{
  title: 'Shoes',
  image: '/belt.svg'
},
{
  title: 'Belt',
  image: '/belt.svg'
},
{
  title: 'Purse',
  image: '/belt.svg'
},
{
  title: 'Bracelet',
  image: '/belt.svg'
},
{
  title: 'Buckle',
  image: '/belt.svg'
}
]
//=============================================================


export default function Home() {
  return (
    <>
      {/* <div className="layout-container"> */}



      <Header />
      <HeroCopy />
      <div
        style={{
          backgroundColor: 'red',
          display: 'flex',
          flexWrap:'wrap',
          justifyContent:'center',
          
          // alignContent:'center'
        }}
      >
        {displayCardData.map(x => (

          <DisplayCard title={x.title} />
        ))
        }
      </div>

      <DailyOffer />
      <DemoComponent />
      <PromotionalDisplay />
      {/* <LatestArrivals /> */}
      <NewsLetter />
      <HurryUpCard />
      <Footer />
      {/* </div> */}

    </>
  );
}
