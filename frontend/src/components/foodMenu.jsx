import styles from "./foodMenu.module.css";
import { useState, useEffect, useRef } from "react";
import Card from "./Card";

/* const scrollDistance = 220;
const barMaxWidth = 1270; */

export default function FoodMenu({ scrollPosition_home }) {
  const categoryNameArr = [
    "favorite",
    "rice",
    "pasta",
    "noodle",
    "vegan",
    "dessert",
    "drink",
  ];
 
  const [categoryFoods, setCategoryFoods] = useState();
  const [selectedCategory, setSelectedCategory] = useState("rice");
  const [scrollPostion, setScrollPostion] = useState(0);
  const scrollViewRef = useRef();
  const btnContainerRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const data = {
        favorite: [],
        rice: [],
        pasta: [],
        noodle: [],
        vegan: [],
        dessert: [],
        drink: [],
      }
      try {
        const res = await fetch("http://localhost:3001/allproducts");
        const result = await res.json();
        for(let i = 0; i < result.length; i++) {
          for(let l = 0; l < result[i]['category'].length; l++){
            for(let categoryName of categoryNameArr) {
              if(result[i]['category'][l] === categoryName) {
                data[categoryName].push(result[i])
              } 
            }
          }
        }
        setCategoryFoods(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  function handleButton(categroy) {
    setTimeout(() => {
      window.scrollTo({
        top: 900,
        behavior: 'smooth'
      });
    }, 100) 
    setSelectedCategory(categroy);
    /* // TODO
    setScrollPostion(0)
    scrollViewRef.current.scrollLeft = 0 */
  }
  /* function handleScroll(scrollAmount) {
    //let newScrollPostion = scrollPostion + scrollAmount
    let newScrollPostion = scrollPostion + scrollAmount;
    if (newScrollPostion < 0) {
      newScrollPostion = 0;
    } else if (
      newScrollPostion >
      scrollViewRef.current.scrollLeft + scrollDistance
    ) {
      newScrollPostion = scrollViewRef.current.scrollLeft;
    }
    setScrollPostion(newScrollPostion);
    scrollViewRef.current.scrollLeft = newScrollPostion;
  } */

  return (
    <>
      {/* <div className={styles.categroyBar_container2}> </div>*/}
      <div className={styles.categroyBar_container}>
        <div className={styles.categroyBar}>
          {/* <div className={styles.div_controlLeft}>
            <button
              className="flex items-center justify-center cursor-pointer group focus:outline-none"
              onClick={() => {
                handleScroll(-scrollDistance);
              }}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EBE3D5] group-hover:bg-[#D1CABD] group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray"
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
              </span>
            </button>
          </div> */}
          <div ref={scrollViewRef} className={styles.div_scrollView}>
            <div
              ref={btnContainerRef}
              className={
                scrollPosition_home && scrollPosition_home >= 900
                  ? `${styles.div_btnContainer_bg} ${styles.div_btnContainer}`
                  : `${styles.div_btnContainer}`
              }
            >
              {categoryNameArr.map((categoryName, index) => (<>
                {selectedCategory === categoryName? 
                  (<button key={index} className={`${styles.btn_categroy_pressed} ${styles.btn_categroy}`} onClick={() => handleButton(categoryName)}>
                    <label className={styles.lbl_categroy}>{categoryName}</label>
                  </button>) : 
                  (<button key={index} className={styles.btn_categroy} onClick={() => handleButton(categoryName)}>
                    <label className={styles.lbl_categroy}>{categoryName}</label>
                  </button>)
                }
              </>))}
            </div>
          </div>
          {/* <div className={styles.div_controlRight}>
            <button
              className="flex items-center justify-center cursor-pointer group focus:outline-none"
              onClick={() => {
                handleScroll(scrollDistance);
              }}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#EBE3D5] group-hover:bg-[#D1CABD] group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray"
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
              </span>
            </button>
          </div> */}
        </div>
      </div>
      <div className={styles.foodList_outside}>
        <div className={styles.foodList}>
          {categoryFoods &&
          categoryFoods[selectedCategory].map((categoryFood, index) => (
            <Card
              key={index}
              foodPic={categoryFood.img_url}
              chineseName={categoryFood.name_c}
              //englishName={dessert.name_e}
              price={categoryFood.price}
              className={styles.card}
            />
          ))}
        </div>
      </div>
    </>
  );
}
