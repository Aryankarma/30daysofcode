import styles from "../styles/components/RegistrationCards.module.scss";
import img1 from "../assets/images/step1icon.png";
import img2 from "../assets/images/step2icon.png";
import img3 from "../assets/images/step3icon.png";

function RegistrationCards({ data }) {
  const iconMap = {
    1: img1,
    2: img2,
    3: img3,
  };
    
  return (
    <div className="containerOwn">
      <div className={styles.cards}>
        {data.map((input) => {
          return (
            <div key={input.id} className={styles.card}>
              <img src={iconMap[input.id]} alt={input.title} />
              <p className="fw-bold">{input.step}</p>
              <p>{input.subheading}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RegistrationCards;
