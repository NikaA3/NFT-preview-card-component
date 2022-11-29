import React from "react";
import styles from "./CardText.module.css";
import eth from "../images/icon-ethereum.svg";
import clock from "../images/icon-clock.svg";
import avatar from "../images/image-avatar.png";

const CardText = (props: {
  title: string;
  body: string;
  amount: string;
  time: string;
  author: string;
}) => {
  return (
    <div className={styles.main}>
      <p className={styles.header}>{props.title}</p>
      <p className={styles.desctription}>{props.body}</p>
      <div className={styles.text}>
        <img src={eth} alt="eth" />
        <p className={styles.etherium}>{props.amount}</p>
        <img src={clock} alt="clock" />
        <p className={styles.time}>{props.time}</p>
      </div>
      <div className={styles.footer}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <p className={styles.author}>
          Creatation of <span>{props.author}</span>
        </p>
      </div>
    </div>
  );
};

export default CardText;
