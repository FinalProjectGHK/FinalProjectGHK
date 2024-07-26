// import React, { useRef } from "https://cdn.skypack.dev/react@17.0.1";
import styles from "./RankTable.module.css";

const RankTable = () => {
    const rank = [
        {
            id: 1,
            name: 'Beef don',
            image: 'https://illustcenter.com/wp-content/uploads/2023/04/rdesign_15637.png',
            price: 105,
           
        },
        {
            id: 1,
            name: 'Chicken Don',
            image: 'https://illustcenter.com/wp-content/uploads/2023/02/rdesign_15557.png',
            price: 188,
          
        },
        {
            id: 1,
            name: 'Tin Don',
            image: 'https://illustcenter.com/wp-content/uploads/2023/02/rdesign_15522.png',
            price: 165,
           
        },
        {
            id: 1,
            name: 'Parent Don',
            image: 'https://illustcenter.com/wp-content/uploads/2023/02/rdesign_15528.png',
            price: 138,
          
        },
        {
            id: 1,
            name: '5',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            price: 16,
           
        },
        {
            id: 1,
            name: '6',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            price: 16,
        
        },
        {
            id: 1,
            name: '7',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            price: 16,
     
        },
        {
            id: 1,
            name: '8',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            price: 16,
           
        },
        {
            id: 1,
            name: '9',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            price: 16,
           
        },
        {
            id: 1,
            name: '10',
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            price: 16,
        
        }

    ];
    return (
        <div className={styles.container}>
           
                <h1 className={styles.title}>Top Sales</h1>
                <div className={styles.topLeadersList}>
                    {rank.map((leader, index) => (
                        <div className={styles.leader} key={leader.id}>
                            {index + 1 <= 3 && (
                                <div className={styles.containerImage}>
                                    <img className={styles.image} loading="lazy" src={leader.image} alt="" />
                                    <div className={styles.crown}>
                                        <svg
                                            id="crown1"
                                            fill="#0f74b5"
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 100 50"
                                        >
                                            <polygon
                                                className={styles.cls1}
                                                points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                                            />
                                        </svg>
                                    </div>
                                    <div className={styles.leaderName}><strong>{leader.name}</strong></div>
                                    <div className={styles.leaderPrice}>${leader.price}</div>
                                    <button className={styles.leaderButton}>Add</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
           
          
                <div className={styles.playerslist}>
                    <div className={styles.table}>
                        <div>#</div>
                        <div>Food Item</div>
                        <div>Price</div>
                        
                    </div>
                    <div className={styles.list}>
                        {rank.slice(3, 11).map((leader, index) => (
                            <div className={styles.player} key={leader.id}>
                                <span> {index + 4}</span>
                                <div className={styles.user}>
                                    <img className={styles.image} src={leader.image} alt="" />
                                    <span> {leader.name} </span>
                                </div>
                                <span>$ {leader.price} </span>
                                <button className={styles.button}>Add</button>
                                <span> {leader.coins} </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    
            );
}

            export default RankTable;