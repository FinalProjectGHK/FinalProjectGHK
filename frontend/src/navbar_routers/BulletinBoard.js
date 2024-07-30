import styles from "./BulletinBoard.module.css";
import shopNews from "../JS_Data/shopNews";
import { Link, useOutletContext } from "react-router-dom";

export default function BulletinBoard() {
  const [outletContextObj] = useOutletContext();
  const setCurrentNews = outletContextObj['currentNews'][1];

  function handleClicked(id) {
    setCurrentNews(id)
  }

  return (<>
    <div className={styles.bgContainer}>
      <div className={styles.filterBar}>
        <div className={styles.tagBar}>tag bar here</div>
        <div className={styles.timeBar}>time bar here</div>
      </div>
      <div className={styles.adsCard_container}>
        {shopNews.map((news, index) => {
          return(
            <div key={index} className={`${"w-full mb-10 bg-[#EBE3D5] border border-gray-200 rounded-lg"} ${styles.adsCard}`}>
              <img className="rounded-t-lg" src={news['src']} alt="" />
              <div className="p-5 ">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">{news['title']}</h5>
                <div>{news['tag']}</div>
                <div className="flex items-center justify-between">
                  <p className="font-normal text-lg text-gray-700">{news['release_time']}</p>
                  <Link to="/news" onClick={() => handleClicked(news['id'])} className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-[#8D7A5B] rounded-lg hover:bg-[#D1CABD]">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </>);
}
