import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/components/ReviewsCarousel.module.scss";
import zoomer from "../assets/images/zoomer.png";
import artvenue from "../assets/images/artvenue.png";
import kontrastk from "../assets/images/kontraster.png";
import user from "../assets/images/singleUser.png";

function ReviewsCarousel({ data }) {
  const iconMap = {
    1: zoomer,
    2: artvenue,
    3: kontrastk,
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
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
                <h4 className="my-2 fw-800">{input.title}</h4>
                <h6>{input.description}</h6>
                <img
                  className={styles.carouselImage}
                  src={user}
                  alt="single user img"
                />
              <h4 className="fw-800">{input.authorName}</h4>
              <p>{input.role}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ReviewsCarousel;
