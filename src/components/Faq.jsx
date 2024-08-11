import styles from "../styles/components/faqStyles.module.scss";
import Accordion from "react-bootstrap/Accordion";

function Faq({ data }) {
  return (
    <div className={styles.faqContainer}>
      <Accordion defaultActiveKey="0">
        {data.map((input) => {
          return (
            <Accordion.Item className={styles.item} key={input.id} eventKey={input.id}>
              <Accordion.Header>{input.question}</Accordion.Header>
              <Accordion.Body>{input.answer}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

export default Faq;
