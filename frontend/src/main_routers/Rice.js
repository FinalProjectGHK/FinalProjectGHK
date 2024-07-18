import rice from "../menu/rice";
import Card from "../components/Card";
import styles from "./Rice.module.css";

const Rice = () => {
  return (
    <div className={styles.container}>
      {rice.map((rice, index) => (
        <Card
          key={index}
          foodPic={rice.img_url}
          chineseName={rice.name_c}
          //   englishName={rice.name_e}
          price={rice.price}
          className={styles.card}
        />
      ))}
    </div>
  );
};

export default Rice;
