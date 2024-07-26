import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import FoodMenu from "../components/foodMenu";
import Carousel from "../components/carousel";
import LuckyDraw from "../components/LuckyDraw";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  return (
    <>
      <div className={styles.adsCarousel}>
        <Carousel />
      </div>
      <div className={styles.rankTable}>
        <LuckyDraw />
      </div>
      <div className={styles.foodMenu}>
        <FoodMenu scrollPosition_home={scrollPosition} />
      </div>
    </>
  );
};
export default Home;
