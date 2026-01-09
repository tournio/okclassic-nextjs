import logo from '../../images/logo.jpg';
import styles from './Hero.module.scss';
import Image from "next/image";

const Hero = () => {

  return (
    <section className={`${styles.Hero}`}>
      <div className={'row'}>
        <div className={'col-4 offset-md-1 col-md-3 offset-xxl-2 col-xxl-2'}>
          <Image src={logo}
                 alt={'Tournament logo'}
                 className={`img-fluid logo-image`}/>
        </div>
        <div className={'col'}>
          <h2 className={`display-1 fw-lighter mt-md-5 lh-1`}>
            OKClassic 2026
          </h2>
          <h3 className={`display-4 fw-lighter`}>
            Oklahoma City
          </h3>
          <h4 className={`display-6 fw-lighter`}>
            April 10-12, 2026
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Hero;
