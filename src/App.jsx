import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import styles from "./App.module.scss";
import "./styles/globals.scss";
import signupbtnarrow from "./assets/images/signupbtnarrow.png";
import LeftSide from "./assets/images/Leftside.png";
import RightSide from "./assets/images/RightSide.png";
import Header from "./components/Header.jsx";
import ScholarshipSection from "./components/ScholarshipSection.jsx";
import Whatis30daysofcode from "./components/Whatis30daysofcode.jsx";
import BootcampCardComponent from "./components/BootcampCardComponent.jsx";
import bootcampCardsData from "./data/bootcampCardsData.json";
import StyledHeading from "./components/StyledHeading.jsx";
import StyledHeadingData from "./data/styledHeadingsData.json";
import advantagesCardsData from "./data/advantagesCardsData.json";
import AdvantagesCardComponent from "./components/AdvantagesCardComponent.jsx";
import datacodeCertificate from "./assets/images/datacodeCertificate.png";
import giftBox from "./assets/images/giftboxes.png";
import learningObjectiveCardsData from "./data/learningObjectiveCardsData.json";
import LearningObjectiveCardComponent from "./components/LearningObjectiveCardComponent.jsx";
import languageBoxes from "./assets/images/languageBoxes.png";
import codeIconBlack from "./assets/images/codeiconblack.png"
import registrationCardsData from "./data/registrationCardsData.json"
import RegistrationCardsData from "./components/RegistrationCardsData.jsx";
import BootcampsCarousel from "./components/BootcampsCarousel.jsx";
import carouselItemsData from "./data/carouselData.json"
import CompanyListComponent from "./components/companyListComponent.jsx";
import meetOurMentors from "./assets/images/meetourmentors.png"
import ReviewsCarousel from "./components/ReviewsCarousel.jsx";
import ReviewsCarouselData from "./data/reviewCarouselData.json"
import faqData from "./data/faqData.json";
import FAQ from "./components/Faq.jsx";

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.HeroSection}>
        <h1 className={styles.heroHeading}>30 DAYS OF CODE</h1>
        <h2 className={styles.heroSubHeading}>
          Your Pathway to Your Dream Tech Future
        </h2>
        <form className={`d-flex ${styles.searchForm}`} role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Technology"
            aria-label="Search"
          />
          <select className="form-select" aria-label="Default select example">
            <option selected>Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button
            className={`btn btn-outline-success ${styles.searchBtn}`}
            type="submit"
          >
            Search
          </button>
        </form>
        <p className="mb-0">Batch Registrations are opening soon</p>
        <div
          className="d-flex align-items-end gap-4"
          style={{ transform: "translatex(-15%)" }}
        >
          <img className={styles.img} src={signupbtnarrow} alt="asdfs" />
          <button className={` ${styles.signUpbtn}`}>Sign Up Today</button>
        </div>
        <img
          className={styles.leftsideimg}
          src={LeftSide}
          alt="left side tech stack"
        />
        <img
          className={styles.rightsideimg}
          src={RightSide}
          alt="right side tech stack"
        />
      </div>

      <ScholarshipSection />
      <Whatis30daysofcode />

      {/* Bootcamps section */}
      <hr className={styles.space} />
      <StyledHeading data={StyledHeadingData[0]} />

      <div className={styles.center}>
        <ul className={`nav nav-tabs ${styles.navBootstrap}`}>
          <li className="nav-item">
            <a
              className={`nav-link fw-bold text-dark ${styles.borderBottom}`}
              aria-current="page"
              href="."
            >
              Upcoming
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Past
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Attended
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href=".">
              Liked
            </a>
          </li>
        </ul>
      </div>

      <BootcampCardComponent data={bootcampCardsData} />

      <hr className={styles.space} />

      <StyledHeading data={StyledHeadingData[1]} />

      <AdvantagesCardComponent data={advantagesCardsData} />

      <div className="container">
        <div className={`${styles.bonusBox}`}>
          <div className={styles.content}>
            <h2 className={`grad1 fw-bold ${styles.heading2}`}>
              Added Bonuses!!
            </h2>
            <p className="text-dark">
              Earn 30 days of code participation certificate and win exciting
              goodies and rewards as you complete your program and gain the
              highest scores.
            </p>
          </div>
          <img
            className={styles.datacodeCertificate}
            src={datacodeCertificate}
            alt=""
          />
          <img className={styles.giftBox} src={giftBox} alt="" />
        </div>
      </div>

      <div className={styles.learingObjective}>
        <StyledHeading data={StyledHeadingData[2]} />
        <LearningObjectiveCardComponent data={learningObjectiveCardsData} />
      </div>

      <hr className={styles.space} />

      <div className={`container ${styles.languageBoxContainer}`}>
        <img src={languageBoxes} alt="languageBoxes" />
        <div className={` text-start ${styles.content}`}>
          <h2 className={`grad1 fw-bold ${styles.heading2}`}>
            How to Register for <br /> 30 Days of Code{" "}
            <img className="mx-2" src={codeIconBlack} alt="" />?
          </h2>
          <p className="text-dark ">
            Embark on a transformative coding journey with 30 Days of Code!
            Register now and explore our diverse bootcamps. From registration to
            acceptance, we guide you every step of the way towards coding
            mastery. Your pathway to success starts here.
          </p>
        </div>
      </div>

      <div className={`container ${styles.stepsContainer}`}>
        <RegistrationCardsData data={registrationCardsData} />
      </div>

      <hr className={styles.space} />

      <div className={`${styles.learingObjective} ${styles.bootcampsCarousel}`}>
        <StyledHeading data={StyledHeadingData[3]} />
        <BootcampsCarousel data={carouselItemsData} />
      </div>

      <hr className={styles.space} />

      <StyledHeading data={StyledHeadingData[4]} />
      <p style={{ padding: "0% 20%" }} className="text-dark text-center">
        Unlock the door to endless opportunities with our program. Prepare
        yourself for success at top-tier companies and seize your chance to
        shine. Join us on the path to your dream career!
      </p>
      <CompanyListComponent />

      <hr className={styles.space} />

      <StyledHeading data={StyledHeadingData[5]} />
      <img src={meetOurMentors} alt="" style={{width:"90vw"}} />

      <hr className={styles.space} />

      <div className={`${styles.learingObjective}`}>
        <StyledHeading data={StyledHeadingData[6]} />
        <ReviewsCarousel data={ReviewsCarouselData} />
      </div>

      <hr className={styles.space} />

      <StyledHeading data={StyledHeadingData[7]} />
      <FAQ data={faqData} />

    </div>
  );
}

export default App;
