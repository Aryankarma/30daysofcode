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
  const iconMap = {
    1: carouselImage1,
    2: carouselImage2,
    3: carouselImage3,
    4: carouselImage4,
  };
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div
      style={{ color: "black" }}
      //   data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'
      className={styles.carouselCards}
    >
      <Slider className={styles.cardContiner} {...settings}>
        {data.map((input) => {
          return (
            <div key={input.id} className={styles.carouselCard}>
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