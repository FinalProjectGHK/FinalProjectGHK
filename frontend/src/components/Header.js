import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const items = document.querySelectorAll('[data-carousel-item]');
        const showItem = (index) => {
            items.forEach((item, i) => {
                item.classList.toggle('hidden', i !== index);
            });
        };

        showItem(currentIndex);

        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        };

        const handlePrev = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        };

        document.querySelector('[data-carousel-next]').addEventListener('click', handleNext);
        document.querySelector('[data-carousel-prev]').addEventListener('click', handlePrev);

        return () => {
            document.querySelector('[data-carousel-next]').removeEventListener('click', handleNext);
            document.querySelector('[data-carousel-prev]').removeEventListener('click', handlePrev);
        };
    }, [currentIndex]);

    return (
        <div>
            <div className="bar">
                <Link to='/'>Home</Link>
                <div>
                    <Link to='/cart'>購物車</Link>
                </div>
            </div>
            <div className="ad">
                <div>
                    <div id="carouselExample" className="relative" data-carousel="static">
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://sushirohk.com.hk/attachment/news/16958926314kg8Z.png" className="block w-full" alt="Slide 1" />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://sushirohk.com.hk/attachment/news/1695892639fJnCb.png" className="block w-full" alt="Slide 2" />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://sushirohk.com.hk/attachment/news/16958926314kg8Z.png" className="block w-full" alt="Slide 3" />
                            </div>
                        </div>
                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg aria-hidden="true" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                                <svg aria-hidden="true" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="cat">
                <Link to='/sushi' className={styles.link}>壽司</Link>
                <Link to='/roll' className={styles.link}>卷物。軍艦</Link>
                <Link to='/soup' className={styles.link}>湯類</Link>
                <Link to='/side' className={styles.link}>副餐類</Link>
                <Link to='/dessert' className={styles.link}>甜品</Link>
                <Link to='/drinks' className={styles.link}>飲品</Link>
            </div>
        </div>
    );
};

export default Header;

