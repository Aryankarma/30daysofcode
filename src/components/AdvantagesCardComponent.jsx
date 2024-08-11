import styles from "../styles/components/AdvantagesCardComponent.module.scss";
import logo from "../assets/images/heartred.png";

function AdvantagesCardComponent({ data }) {
  return (
    <div className="container">
      <div className={styles.cards}>
        {data.map((input) => {
          return (
            <div key={input.id} className={styles.card}>
              <div className={styles.boxTop}>
                {/* image not provided in figma hence this heart logo */}
                <img src={logo} alt="" />
                <h4 className="fw-bold">{input.title}</h4>
              </div>
              <p className="fw-normal">{input.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AdvantagesCardComponent;
