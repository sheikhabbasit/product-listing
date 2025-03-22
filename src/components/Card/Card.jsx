import React from "react";
import styles from "./Card.module.css";

function Card({ children, onClick }) {
  return (
    <div onClick={onClick} className={styles.card}>
      {children}
    </div>
  );
}

export default Card;
