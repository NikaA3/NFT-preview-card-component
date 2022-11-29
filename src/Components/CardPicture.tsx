import React from "react";
import styles from "./CardPicture.module.css";
import image from "../images/image-equilibrium.jpg";
import view from "../images/icon-view.svg";

const CardPicture = () => {
  return (
    <div className={styles.main}>
      <img src={image} alt="nft" className={styles.image} />
      <div className={styles.overlay}></div>
      <img src={view} alt="nft" className={styles.view} />
    </div>
  );
};

export default CardPicture;
