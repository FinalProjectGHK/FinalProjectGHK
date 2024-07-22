import styles from "./BulletinBoard.module.css";
import poster_offer1 from "../image/poster_offer1.png";
import poster_offer2 from "../image/poster_offer2.png";
import poster_offer3 from "../image/poster_offer3.png";
import poster_offer4 from "../image/poster_offer4.png";
import poster_offer5 from "../image/poster_offer5.png";
export default function BulletinBoard() {
  return (
    <>
      <div className={styles.bgContainer}>
        <div className={styles.filterBar}>
          <div className={styles.tagBar}>tag bar here</div>
          <div className={styles.timeBar}>time bar here</div>
        </div>
        <div className={styles.adsCard_container}>
          <div
            className={`${"w-full mb-10 bg-[#EBE3D5] border border-gray-200 rounded-lg"} ${
              styles.adsCard
            }`}
          >
            <a href="#">
              <img className="rounded-t-lg" src={poster_offer1} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                  Euismod lacinia at quis risus sed vulputate odio ut enim
                  blandit volutpat 2024
                </h5>
              </a>
              <div>Tag here</div>
              <div className="flex items-center justify-between">
                <p className="font-normal text-lg text-gray-700">
                  Release Time : 7-15-2024
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-[#8D7A5B] rounded-lg hover:bg-[#D1CABD]"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${"w-full mb-10 bg-[#EBE3D5] border border-gray-200 rounded-lg"} ${
              styles.adsCard
            }`}
          >
            <a href="#">
              <img className="rounded-t-lg" src={poster_offer2} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                  Euismod lacinia at quis risus sed vulputate odio ut enim
                  blandit volutpat 2024
                </h5>
              </a>
              <div>Tag here</div>
              <div className="flex items-center justify-between">
                <p className="font-normal text-lg text-gray-700">
                  Release Time : 7-15-2024
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-[#8D7A5B] rounded-lg hover:bg-[#D1CABD]"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${"w-full mb-10 bg-[#EBE3D5] border border-gray-200 rounded-lg"} ${
              styles.adsCard
            }`}
          >
            <a href="#">
              <img className="rounded-t-lg" src={poster_offer3} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                  Euismod lacinia at quis risus sed vulputate odio ut enim
                  blandit volutpat 2024
                </h5>
              </a>
              <div>Tag here</div>
              <div className="flex items-center justify-between">
                <p className="font-normal text-lg text-gray-700">
                  Release Time : 7-15-2024
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-[#8D7A5B] rounded-lg hover:bg-[#D1CABD]"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${"w-full mb-10 bg-[#EBE3D5] border border-gray-200 rounded-lg"} ${
              styles.adsCard
            }`}
          >
            <a href="#">
              <img className="rounded-t-lg" src={poster_offer4} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                  Euismod lacinia at quis risus sed vulputate odio ut enim
                  blandit volutpat 2024
                </h5>
              </a>
              <div>Tag here</div>
              <div className="flex items-center justify-between">
                <p className="font-normal text-lg text-gray-700">
                  Release Time : 7-15-2024
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-[#8D7A5B] rounded-lg hover:bg-[#D1CABD]"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${"w-full mb-10 bg-[#EBE3D5] border border-gray-200 rounded-lg"} ${
              styles.adsCard
            }`}
          >
            <a href="#">
              <img className="rounded-t-lg" src={poster_offer5} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                  Euismod lacinia at quis risus sed vulputate odio ut enim
                  blandit volutpat 2024
                </h5>
              </a>
              <div>Tag here</div>
              <div className="flex items-center justify-between">
                <p className="font-normal text-lg text-gray-700">
                  Release Time : 7-15-2024
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-[#8D7A5B] rounded-lg hover:bg-[#D1CABD]"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
