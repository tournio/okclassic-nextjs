import React from "react";
import Image from "next/image";
import Link from "next/link";
import amfLogo from '../../images/amf-logo-pride-600.webp';
import styles from './Location.module.scss';

const Location = () => {
  const address = (
    <address>
      <span className="d-block">
        4600 NW 23rd St
      </span>
      <span className="d-block">
        Oklahoma City, OK 73127
      </span>
    </address>
  );

  const features = [
    '40 lanes',
    'Full-service snack bar and grill',
    'Cocktail lounge',
    'Pro Shop (open during the tournament)',
    'Billiards',
    'Arcade',
    'Private meeting rooms',
  ];

  return (
    <section className={`${styles.Location}`}>
      <h3 className={`section-heading`}>
        Bowling Center
      </h3>

      <div className={styles.Content}>

        <div className={'row d-flex justify-content-center'}>
          <div className={'col-8 col-md-4'}>
            <Link href={'https://www.amf.com/location/amf-windsor-lanes'}
                  target={'_blank'}>
              <Image src={amfLogo}
                     alt={'Logo for AMF Windsor Lanes'}
                     className={`img-fluid ${styles.Logo}`}
              />
            </Link>
          </div>

          <div className={`col`}>
            <h4 className={'display-5 text-center text-sm-start'}>
              <a href={'http://www.classicbowling.com/'}>
                AMF Windsor Lanes
              </a>
            </h4>

            <ul>
              {features.map((f, i) => {
                return (
                  <li key={i}>
                    {f}
                  </li>
                )
              })}
            </ul>

            <p>
              <span className={`${styles.NoAtmGlyphs} float-start`}>
                <i className={`bi bi-slash-circle ${styles.CircleSlash}`} aria-hidden={true}></i>
              </span>
              There is
                <strong>
                  {' '}no ATM{' '}
                </strong>
              at the bowling center. We apologize for any inconvenience this may cause.
            </p>

            <div className={'d-flex'}>
              <i className={'bi bi-geo-fill pe-2 h1'} aria-hidden={true}/>
              <a href={'https://maps.app.goo.gl/hiQe7rXcRvwakMRZA'} className={'d-block d-sm-none'}>
                {address}
              </a>
              <div className={'d-none d-sm-block'}>
                {address}
              </div>
            </div>

            <p className="d-block">
              <i className={'bi-telephone-outbound-fill pe-2'} aria-hidden={true}/>
              <span className={'visually-hidden'}>
                Telephone:
              </span>
              <a href="tel:405-601-0062">405-601-0062</a>
            </p>
          </div>
        </div>


        <div className={`ratio ratio-4x3 d-md-none`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25987.84169337282!2d-97.62032346174384!3d35.492402347910435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21005a93aec85%3A0x4f04c7fcfd12353!2sAMF%20Windsor%20Lanes!5e0!3m2!1sen!2sus!4v1580950897476!5m2!1sen!2sus"
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className={`row gx-1`}>
          {/* On medium viewports (tablet in portrait) */}
          <div className={`ratio ratio-16x9 d-none d-md-block d-lg-none col ${styles.Map}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25987.84169337282!2d-97.62032346174384!3d35.492402347910435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21005a93aec85%3A0x4f04c7fcfd12353!2sAMF%20Windsor%20Lanes!5e0!3m2!1sen!2sus!4v1580950897476!5m2!1sen!2sus"
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* On large viewports (tablet in landscape, laptops & monitors) */}
          <div className={`ratio ratio-21x9 d-none d-lg-block col`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25987.84169337282!2d-97.62032346174384!3d35.492402347910435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21005a93aec85%3A0x4f04c7fcfd12353!2sAMF%20Windsor%20Lanes!5e0!3m2!1sen!2sus!4v1580950897476!5m2!1sen!2sus"
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </div>

      <div className={`section-image-background ${styles.BackgroundImage}`}></div>
      <div className={`section-background-shade ${styles.BackgroundShade}`}></div>
    </section>
  )
}

export default Location;
