import styles from "../styles/components/CardComponent.module.scss";

const CardComponent = ({ data, codeIcon, listIcon, networkIcon }) => {
  const iconMap = {
    1: codeIcon,
    2: networkIcon,
    3: listIcon,
  };

  return (
    <div className={styles.cards}>
      {data.map((input) => (
        <div
          key={input.id}
          className={styles.card}
          style={{ backgroundColor: input.color }}
        >
          <img src={iconMap[input.id]} alt={input.title} />
          <p>{input.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
