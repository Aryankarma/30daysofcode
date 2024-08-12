import styles from "../styles/components/ScholarshipSection.module.scss";
import Announce from "../assets/images/Announce.png"

function ScholarshipSection() {
    return (
      <div className={styles.container}>
        <div className={styles.announcement}>

          <img src={Announce} alt="" />
          
          <h2 className="fw-bold">100% scholarship for up to 100 students</h2>
          <p>
            We are giving away 100% scholarship for upto 100 beginner students
            to help them get started with their Coding journey with datacode.in
          </p>
        </div>
      </div>
    );
}

export default ScholarshipSection;
