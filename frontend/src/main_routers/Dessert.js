import dessert from "../menu/dessert";
import Card from "../components/Card";
import styles from "./Rice.module.css";

const Dessert = () => {
  return (
    <div className={styles.container}>
      {dessert.map((dessert, index) => (
        <Card
          key={index}
          foodPic={dessert.img_url}
          chineseName={dessert.name_c}
          //   englishName={dessert.name_e}
          price={dessert.price}
          className={styles.card}
        />
      ))}
    </div>
  );
};

export default Dessert;
