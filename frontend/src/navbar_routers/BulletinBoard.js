import styles from "./BulletinBoard.module.css";
import shopNews from "../JS_Data/shopNews";
import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";

const tagBarCollection = [
  {'name': "活動優惠", 'btnStyle': styles.btn_tagBar1, 'spnStyle': styles.spn_tagBar1, 'iptStyle': styles.ipt_tagBar1},
  {'name': "最新商品", 'btnStyle': styles.btn_tagBar2, 'spnStyle': styles.spn_tagBar2, 'iptStyle': styles.ipt_tagBar2},
  {'name': "店舖資訊", 'btnStyle': styles.btn_tagBar3, 'spnStyle': styles.spn_tagBar3, 'iptStyle': styles.ipt_tagBar3},
]
const tagCollection = {
  "活動優惠": styles.tagName1,
  "最新商品": styles.tagName2,
  "店舖資訊": styles.tagName3,
}

export default function BulletinBoard() {
  const [isChecked, setIsChecked] = useState(false);
  const [outletContextObj] = useOutletContext();
  const setCurrentNews = outletContextObj['currentNews'][1];
  
  function handleTagBarBtn() {
    setIsChecked(!isChecked);
  }
  function handleReadMore(id) {
    setCurrentNews(id)
  }

  return (<>
    <div className={styles.bgContainer}>
      <div className={styles.filterBar}>
        <div className={styles.tagBar}>
          {tagBarCollection.map((item, index) => {
            return (<>
              <button key={index} className={item.btnStyle} onClick={() => handleTagBarBtn()}>
                <div>
                  {isChecked ?
                    (<input type="checkbox" className={item.iptStyle} checked></input>) :
                    (<input type="checkbox" className={item.iptStyle}></input>)
                  }
                </div>
                <span className={item.spnStyle}>{item.name}</span>
              </button>
            </>)
          })}
        </div>
        <div className={styles.timeBar}>time bar here</div>
      </div>
      <div className={styles.adsCard_container}>
        {shopNews.map((news, index) => {
          return(
            <div key={index} className={`${"w-full mb-10 bg-[#EBE3D5] border border-gray-200 rounded-lg"} ${styles.adsCard}`}>
              <img className="rounded-t-lg" src={news['src']} alt="" />
              <div className="p-5 ">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">{news['title']}</h5>
                <div className={tagCollection[news['tag']]}>{news['tag']}</div>
                <div className="flex items-center justify-between">
                  <p className="font-normal text-lg text-gray-700">{news['release_time']}</p>
                  <Link to="/news" onClick={() => handleReadMore(news['id'])} className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-[#8D7A5B] rounded-lg hover:bg-[#D1CABD]">
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
