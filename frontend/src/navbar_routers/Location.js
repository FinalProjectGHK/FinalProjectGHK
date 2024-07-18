import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Location.module.css";
import DrawerComponent from "../components/DrawerComponent";

const Location = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    return (
        <div>
            <div>
                <div className={styles.bar}>
                    <Link to="/">Home</Link>
                    <div className={styles.rightContainer}>
                        <Link to="/cart">
                            <img src="/cart.png" alt="購物車" className={styles.cart} />
                        </Link>
                        <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;

