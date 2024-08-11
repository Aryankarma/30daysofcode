import styles from "../styles/components/BootcampCardComponent.module.scss";
import heartOutline from "../assets/images/heartoutline.png";
import peopleGroup from "../assets/images/peopleGroup.png";
import flameforcard from "../assets/images/flameforcard.png";

function BootcampCardComponent({data}) {
    return (
      <div className="container">
        <div className={styles.cards}>
          {data.map((input) => {
            return (
              <div key={input.id} className={styles.card}>
                <div key={input.id} className={styles.tags}>
                  {input.tags.map((taginput) => {
                    return <div className={styles.tag}>{taginput}</div>;
                  })}
                </div>
                <div key={input.id} className={`text-start ${styles.content}`}>
                  <h4 className={`fw-bold   ${styles.heading}`}>
                    {input.title}
                  </h4>
                  <p className={styles.subheading}>{input.description}</p>
                  <p className={styles.date}>Starting on : {input.startDate}</p>
                  <button className="btn btn-primary">Apply Now</button>
                    <img
                      className={styles.heartOutline}
                      src={heartOutline}
                      alt="heart outline"
                    />
                  <img
                    className={styles.falmework}
                    src={flameforcard}
                    alt="flame art"
                  />
                  <div className={styles.applied}>
                    <img src={peopleGroup} alt="people group icon" />
                    <span
                      className={styles.appliedNumber}
                      style={{ color: "white" }}
                    >
                      {input.appliedCount} Applied
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
export default BootcampCardComponent;
