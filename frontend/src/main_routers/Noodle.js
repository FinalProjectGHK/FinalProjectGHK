import noodle from "../menu/noodle";
import Card from "../components/Card";
import styles from "./Rice.module.css";

const Noodle = () => {
  return (
    <div className={styles.container}>
      {noodle.map((noodle, index) => (
        <Card
          key={index}
          foodPic={noodle.img_url}
          chineseName={noodle.name_c}
          //   englishName={noodle.name_e}
          price={noodle.price}
          className={styles.card}
        />
      ))}
    </div>
  );
};

export default Noodle;
