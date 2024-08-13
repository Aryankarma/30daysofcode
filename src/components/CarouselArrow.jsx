import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Example icons, you can use any
import styles from "../styles/components/arrowStyles.module.scss"

const NextArrow = (props) => {
  const { onClick, className } = props;
  return (
    <div
      className={className}
      style={{
        right: "40%",
        zIndex: 5,
        top:"100%",
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
        left: "40%",
        top: "100%",
        zIndex: 5,
      }}
      onClick={onClick}
    >
      <FaArrowLeft className={styles.leftArrow} color="black" size={20} />
    </div>
  );
};

export { NextArrow, PrevArrow };
