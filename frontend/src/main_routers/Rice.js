import sushii from "../sushi_json";    // json act as database
import Card from "../components/Card";
import styles from "./Rice.module.css";

const Rice = () => {
    return (
        <div className={styles.container}>
            
            {sushii.map((sushi, index) => (
                <Card 
                    key={index}
                    sushiPic={sushi.img_url}
                    japaneseName={sushi.name_j}
                    chineseName={sushi.name_c}
                    //englishName={sushi.name_e}
                    price={sushi.price}
                    className={styles.card}
                />

            //     <Card 
            //     sushiPic={sushii[0].img_url}
            //     chineseName={sushii[0].name_c}
            //     japaneseName={sushii[0].name_j}
            //     englishName={sushii[0].name_e}
            //     className={styles.card}

            // />
            ))}
        </div>
    );
}

export default Rice;