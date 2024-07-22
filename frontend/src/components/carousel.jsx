import { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import poster_offer1 from "../image/poster_offer1.png";
import poster_offer2 from "../image/poster_offer2.png";
import poster_offer3 from "../image/poster_offer3.png";
import poster_offer4 from "../image/poster_offer4.png";
import poster_offer5 from "../image/poster_offer5.png";
/* const itemss = [
    { imgURL: 'https://flowbite.com/docs/images/carousel/carousel-1.svg', id: 1 },
    { imgURL: 'https://flowbite.com/docs/images/carousel/carousel-2.svg', id: 2 },
    { imgURL: 'https://flowbite.com/docs/images/carousel/carousel-3.svg', id: 3 },
    { imgURL: 'https://flowbite.com/docs/images/carousel/carousel-4.svg', id: 4 },
    { imgURL: 'https://flowbite.com/docs/images/carousel/carousel-5.svg', id: 5 },
]; */
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer_autoSlide, setTimer_autoSlide] = useState(() => {});
  const [isAutoSlide, setIsAutoSlide] = useState(false);
  /* const listItemss = itemss.map(item =>
        <li
          key= {item.id}
          src= {imgURL}
          className= "absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt= "Slide 1"
        ></li>
    ); */
  const items = ["", "", "", "", ""];
  useEffect(() => {
    setIsAutoSlide(false);
    const items = document.querySelectorAll("[data-carousel-item]");
    const showItem = (index) => {
      items.forEach((item, i) => {
        //console.log(items)
        item.classList.toggle("hidden", i !== index);
      });
    };
    showItem(currentIndex);
    clearTimeout(timer_autoSlide);
    setTimer_autoSlide(
      setTimeout(() => {
        //console.log('useEffect run twice at start')
        //console.log(items)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000)
    );
    /* const timer_autoSlide = setTimeout(() => {
            console.log('useEffect run twice at start')
            console.log(items)
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 1000); */
    const dots = document.querySelectorAll("[data-carousel-slide-to]");
    const showDot = (index) => {
      dots.forEach((dot, i) => {
        dot.classList.toggle("bg-gray-400", i !== index);
        dot.classList.toggle("bg-white", i === index);
      });
    };
    showDot(currentIndex);
    /* const handleNext = () => {
            clearTimeout(timer_autoSlide);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        };
        const handlePrev = () => {
            clearTimeout(timer_autoSlide);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        }; */
    /* document.querySelector('[data-carousel-next]').addEventListener('click', handleNext);
        document.querySelector('[data-carousel-prev]').addEventListener('click', handlePrev); */
    /* return () => {
            document.querySelector('[data-carousel-next]').removeEventListener('click', handleNext);
            document.querySelector('[data-carousel-prev]').removeEventListener('click', handlePrev);
        }; */
  }, [currentIndex, isAutoSlide]);
  function handleNext() {
    clearTimeout(timer_autoSlide);
    setCurrentIndex((currentIndex + 1) % items.length);
  }
  function handlePrev() {
    clearTimeout(timer_autoSlide);
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }
  function handleDot1() {
    clearTimeout(timer_autoSlide);
    setCurrentIndex(0);
  }
  function handleDot2() {
    clearTimeout(timer_autoSlide);
    setCurrentIndex(1);
  }
  function handleDot3() {
    clearTimeout(timer_autoSlide);
    setCurrentIndex(2);
  }
  function handleDot4() {
    clearTimeout(timer_autoSlide);
    setCurrentIndex(3);
  }
  function handleDot5() {
    clearTimeout(timer_autoSlide);
    setCurrentIndex(4);
  }
  function handleImg1() {
    console.log("img1");
  }
  function handleImg2() {
    console.log("img2");
  }
  function handleImg3() {
    console.log("img3");
  }
  function handleImg4() {
    console.log("img4");
  }
  function handleImg5() {
    console.log("img5");
  }
  const btn_prev = document.querySelector("[data-carousel-prev]");
  const btn_next = document.querySelector("[data-carousel-next]");
  function handleMouseOver() {
    clearTimeout(timer_autoSlide);
    btn_prev.classList.toggle("hidden");
    btn_next.classList.toggle("hidden");
  }
  function handleMouseOut() {
    /* setCurrentIndex(currentIndex); */
    setIsAutoSlide(true);
    btn_prev.classList.toggle("hidden");
    btn_next.classList.toggle("hidden");
  }
  return (
    /* src="https://flowbite.com/docs/images/carousel/carousel-1.svg" */
    <div
      className={`${styles.carousel_container} ${"h-full w-full relative"}`}
      data-carousel="slide"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="h-full w-full relative overflow-hidden rounded-lg cursor-pointer bg-[#EBE3D5]">
        <div
          className="h-full w-full hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={poster_offer1}
            className="h-full w-full object-contain absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 1"
            onClick={handleImg1}
          />
        </div>
        <div
          className="h-full w-full hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={poster_offer2}
            className="h-full w-full object-contain absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 2"
            onClick={handleImg2}
          />
        </div>
        <div
          className="h-full w-full hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={poster_offer3}
            className="h-full w-full object-contain absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 3"
            onClick={handleImg3}
          />
        </div>
        <div
          className="h-full w-full hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={poster_offer4}
            className="h-full w-full object-contain absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 4"
            onClick={handleImg4}
          />
        </div>
        <div
          className="h-full w-full hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <img
            src={poster_offer5}
            className="h-full w-full object-contain absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide 5"
            onClick={handleImg5}
          />
        </div>
      </div>
      <div className="p-2 absolute bottom-0 left-1/2 z-1 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-gray-400 hover:bg-white"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to
          onClick={handleDot1}
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-gray-400 hover:bg-white"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to
          onClick={handleDot2}
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-gray-400 hover:bg-white"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to
          onClick={handleDot3}
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-gray-400 hover:bg-white"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to
          onClick={handleDot4}
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-gray-400 hover:bg-white"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to
          onClick={handleDot5}
        ></button>
      </div>
      <div
        data-carousel-prev
        className="hidden absolute top-1/2 left-3 -translate-y-1/2 z-1"
      >
        <button
          type="button"
          className="flex items-center justify-center cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Carousel Previous</span>
          </span>
        </button>
      </div>
      <div
        data-carousel-next
        className="hidden absolute top-1/2 right-3 -translate-y-1/2 z-1"
      >
        <button
          type="button"
          className=" flex items-center justify-center cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Carousel Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
