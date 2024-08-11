import styles from "../styles/components/StyledHeading.module.scss";
import "../styles/globals.scss";

function StyledHeading({data}) {
    return (
      <div className={styles.headingContainer}>
        <p className={styles.heading1}>{data.heading1}</p>
        <h2 className={`grad1 ${styles.heading2}`}>{data.heading2}</h2>
      </div>
    );
}
export default StyledHeading;