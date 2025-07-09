import styles from "./Hero.module.css";
import pufferFish from "../../assests/puffer_fish.svg";
export const Hero = () => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Flex your fish</h1>
          <h1>Best place for the fishing community</h1>
          <h3>
            Catch a fish, take a photo, upload it here, create a collection and
            share with other passionate fishers
          </h3>
        </div>
        <img
          src={pufferFish}
          alt="puffer fish"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    </div>
  );
};
