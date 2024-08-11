import styles from "../styles/components/Whatis30daysofcode.module.scss";
import "../styles/globals.scss";
import heart from "../assets/images/heartred.png";
import codeIcon from "../assets/images/codelogo.png";
import listIcon from "../assets/images/listLogo.png";
import networkIcon from "../assets/images/networkLogo.png";
import listCardsData from "../data/listCardsData.json";
import CardComponent from "../components/CardComponent";

function Whatis30daysofcode() {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.subcontainer}>
        <div className={styles.content}>
          <p>What is 30 Days of Code??</p>
          <h1>
            A quality place to learn and{" "}
            <span>
              <img src={heart} alt="" />
            </span> <br />
            <span className="grad1">Problem Solving</span>
          </h1>
          <button className={`btn ${styles.signupbtn} `}>Sign Up Now</button>
        </div>
        <CardComponent
          data={listCardsData}
          codeIcon={codeIcon}
          networkIcon={networkIcon}
          listIcon={listIcon}
        />
      </div>
    </div>
  );
}

export default Whatis30daysofcode;
