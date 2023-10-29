import Spotlight from "../Spotlight/Spotlight";

import styles from './MainText.module.scss';

const MainText = () => {

  return (
    <section className={`${styles.MainText}`}>
      <h3 className={`display-4 ${styles.Dates}`}>
        April 19-21, 2024
      </h3>
      <h4 className={`display-6 ${styles.City}`}>
        Oklahoma City, OK
      </h4>

      <Spotlight/>
    </section>
  )
}

export default MainText;
