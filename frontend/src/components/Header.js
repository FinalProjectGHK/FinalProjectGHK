import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
    return <div >
        <div className="bar">
            <Link to='/'>Home</Link>
            <div>
                <Link to='/cart'>購物車</Link>
            </div>
        </div>
        
    {/* <div style={{ display: 'flex', justifyContent: 'space-around', height: '40vh', backgroundColor: "#B78F76" }}> */}
           <div className="ad"> 
            <div>ad</div>
    
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
}

export default Header;

