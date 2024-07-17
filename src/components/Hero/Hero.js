import styles from './Hero.module.scss';

const Hero = () => {

  return (
    <section className={`${styles.Hero} d-flex flex-column-reverse justify-content-start`}>
      <div className={`${styles.Title} `}>
        <h1 className={`display-1 ${styles.Title}`}>
          OKClassic
          <span className={styles.Year}>
            2025
          </span>
        </h1>
      </div>

      <div className={`section-image-background ${styles.BackgroundImage}`}></div>
      <div className={`section-background-shade ${styles.BackgroundShade}`}></div>
    </section>
  )
}

export default Hero;
