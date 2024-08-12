import styles from "../styles/components/learningObjectiveCardComponent.module.scss";

function LearningObjectiveCardComponent({ data }) {
  return (
    <div className="containerOwn">
      <div className={styles.cards}>
        {data.map((input) => {
          return (
            <div key={input.id} className={styles.card}>
              <div className={styles.box}></div>
              <h5 className="fw-bold">{input.title}</h5>
              <p className="fw-normal">{input.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LearningObjectiveCardComponent;
