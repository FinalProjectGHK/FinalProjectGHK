import drink from "../menu/drink";
import Card from "../components/Card";
import styles from "./Rice.module.css";

const Drinks = () => {
  return (
    <div className={styles.container}>
      {drink.map((drink, index) => (
        <Card
          key={index}
          foodPic={drink.img_url}
          chineseName={drink.name_c}
          //   englishName={drink.name_e}
          price={drink.price}
          className={styles.card}
        />
      ))}
    </div>
  );
};

export default Drinks;
