import React from "react";
import styles from "./Card.module.css";
import CardPicture from "./CardPicture";
import CardText from "./CardText";

const Card = () => {
  const textInfo = {
    title: "Equilibrium #3429",
    body: "Our Equilibrium collection promotes balance and calm.",
    amount: "0.041 ETH",
    time: "3 days left",
    author: "Jules Wyvern",
  };
  return (
    <div className={styles.card}>
      <CardPicture />
      <CardText
        title={textInfo.title}
        body={textInfo.body}
        amount={textInfo.amount}
        time={textInfo.time}
        author={textInfo.author}
      />
    </div>
  );
};

export default Card;
