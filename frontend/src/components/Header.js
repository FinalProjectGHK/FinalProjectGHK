import styles from "./Header.module.css";
import { Link } from "react-router-dom";


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
                            <Link to='/record'>訂單紀錄</Link>
                            <Link to='/location'>分店位置</Link>
                            <Link to='/about'>關於我們</Link>

                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="ad">
                <div>

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



