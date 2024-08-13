import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/components/BootcampsCarousel.module.scss";
import { NextArrow, PrevArrow } from "./CarouselArrow";
import "../styles/hideDefaultArrow.module.css";
import { FaArrowRight } from "react-icons/fa";
import carouselImage1 from "../assets/images/carouselImage1.png";
import carouselImage2 from "../assets/images/carouselImage2.png";
import carouselImage3 from "../assets/images/carouselImage3.png";
import carouselImage4 from "../assets/images/carouselImage4.png";

function BootcampsCarousel({ data }) {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const iconMap = {
    1: carouselImage1,
    2: carouselImage2,
    3: carouselImage3,
    4: carouselImage4,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 800) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // removing the default arrows provided by react carousel
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      .slick-prev:before, .slick-next:before {
        content: '' !important;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div
      style={{ color: "black" }}
      //   data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'
      className={styles.carouselCards}
    >
      <Slider className={styles.cardContiner} {...settings}>
        {data.map((input) => {
          return (
            <div key={input.id} style={{width:"90%"}} className={styles.carouselCard}>
              <img
                className={styles.carouselImage}
                src={iconMap[input.id]}
                alt="carouselImage"
              />
              <div className={styles.content}>
                <div className={styles.titleDiscript}>
                  <h4 className="my-2 fw-800">{input.title}</h4>
                  <h6>{input.description}</h6>
                </div>
                <a href={input.linkUrl}>
                  {input.linkText} <FaArrowRight />
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default BootcampsCarousel;