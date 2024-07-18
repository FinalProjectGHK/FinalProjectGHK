import pasta from "../menu/pasta";
import Card from "../components/Card";
import styles from "./Rice.module.css";

const Pasta = () => {
  return (
    <div className={styles.container}>
      {pasta.map((pasta, index) => (
        <Card
          key={index}
          foodPic={pasta.img_url}
          chineseName={pasta.name_c}
          //   englishName={pasta.name_e}
          price={pasta.price}
          className={styles.card}
        />
      ))}
    </div>
  );
};

export default Pasta;
