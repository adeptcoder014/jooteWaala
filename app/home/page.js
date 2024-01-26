import Image from "next/image";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="layout-container">

        <Header />
        <Hero />
        {/* <Hero />
      <DisplayCard /> */}
      </div>

    </>
  );
}
