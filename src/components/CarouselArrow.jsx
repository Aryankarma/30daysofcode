import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Example icons, you can use any
import styles from "../styles/components/arrowStyles.module.scss"

const NextArrow = (props) => {
  const { onClick, className } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        borderRadius: "50%",
        padding: "30px",
        left: "-250px",
      }}
      onClick={onClick}
    >
      <FaArrowRight className={styles.rightArrow} color="black" size={20} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick, className } = props;
  return (
    <div
      className={className}
      style={{
        borderRadius: "50%",
        padding: "30px",
        left: "-400px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowLeft className={styles.leftArrow} color="black" size={20} />
    </div>
  );
};

export { NextArrow, PrevArrow };
