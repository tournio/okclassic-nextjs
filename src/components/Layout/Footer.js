import Image from "next/image";
import Sponsors from "../Sponsors/Sponsors";
import logo from '../../images/logo.jpg';

const Footer = () => {
  return (
    <div>
      <Sponsors/>
      <hr />
      <div className={`row d-flex justify-content-center flex-wrap pb-0`}>
        <div className={`col-6 col-md-5 col-lg-4`}>
          <Image src={logo}
                 alt={'Tournament logo'}
                 className={`img-fluid logo-image`}/>
        </div>
        <p className={`col-12 text-center pt-3`}>
          <span>
            &copy; 2024&nbsp;
          </span>
          <span>
            OKClassic
          </span>

          <a href={'https://www.facebook.com/OKClassicBowlingTournament'}
             className={'ps-2'}>
            <i className={'bi bi-facebook'} aria-hidden={true}/>
            <span className={'visually-hidden'}>
              SHIFTID on Facebook
            </span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer;
