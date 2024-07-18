import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Carousel from "./carousel";

const Header = () => {
    return (
        <div>
            <div className={styles.bar}>
                <Link to='/'>Home</Link>
                <div className={styles.rightContainer}>
                    <Link to='/cart'>
                        <img src='/cart.png' alt='購物車' className={styles.cart} />
                    </Link>
                    <div className={styles.menuContainer}>
                        <img src='/menu.png' alt='Menu' className={styles.menuButton} />
                        <div className={styles.sidebar}>
                            <Link to='/login'>會員登入</Link>
                            <Link to='/register'>會員登記</Link>
                            <Link to='/account'>帳戶資料</Link>
                            <Link to='/record'>訂單紀錄</Link>
                            <Link to='/location'>分店位置</Link>
                            <Link to='/about'>關於我們</Link>

                        </div>
                    </div>
                </div>
            </div>
            <div className="ad">
                <Carousel/>
            </div>
            <div className="cat">
                <Link to='/favorite' className={styles.link}>Favorite</Link>
                <Link to='/vegan' className={styles.link}>Vegan</Link>
                <Link to='/rice' className={styles.link}>Rice</Link>
                <Link to='/pasta' className={styles.link}>Pasta</Link>
                <Link to='/noodle' className={styles.link}>Noodle</Link>
                <Link to='/dessert' className={styles.link}>Dessert</Link>
                <Link to='/drinks' className={styles.link}>Drinks</Link>
            </div>
        </div>
    );
};

export default Header;



