import React from "react";
import styles from './CzechHall.module.scss';

const CzechHall = () => {
  const address = (
    <address>
      <span className="d-block">
        205 N Czech Hall Rd
      </span>
      <span className="d-block">
        Yukon, OK 73099
      </span>
    </address>
  );

  return (
    <section className={`${styles.CzechHall}`}>
      <h3 className={`section-heading`}>
        Yukon Czech Hall
      </h3>

      <div className={styles.Content}>

        <div className={'row'}>
          <div className={`col`}>
            <h4 className={'display-5'}>
              <a href={'https://czechhall.com/'}>
                Yukon Czech Hall
              </a>
            </h4>

            <p>
              The Yukon Czech Hall will host the banquet and awards ceremony for the OKClassic on Sunday. We look forward to seeing everyone there to celebrate all the great bowling, forget every ringing ten pin, and toasting to a great time!
            </p>

            <div className={'d-flex'}>
              <i className={'bi bi-geo-fill pe-2 h1'} aria-hidden={true}/>
              <a href={'https://maps.app.goo.gl/1gF3AYyHCuJNsQgd8'} className={'d-block d-sm-none'}>
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
              <a href="tel:405-324-8073">405-324-8073</a>
            </p>
          </div>
        </div>

        <div className={`ratio ratio-4x3 d-md-none`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.4374139156926!2d-97.74539208762116!3d35.46871994150281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b20855edc5d635%3A0xf5e8881ff738cbb1!2sYukon%20Czech%20Hall!5e0!3m2!1sen!2sus!4v1698683014709!5m2!1sen!2sus"
            allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className={`row gx-1`}>
          {/* On medium viewports (tablet in portrait) */}
          <div className={`ratio ratio-16x9 d-none d-md-block d-lg-none col ${styles.Map}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.4374139156926!2d-97.74539208762116!3d35.46871994150281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b20855edc5d635%3A0xf5e8881ff738cbb1!2sYukon%20Czech%20Hall!5e0!3m2!1sen!2sus!4v1698683014709!5m2!1sen!2sus"
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* On large viewports (tablet in landscape, laptops & monitors) */}
          <div className={`ratio ratio-21x9 d-none d-lg-block col`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.4374139156926!2d-97.74539208762116!3d35.46871994150281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b20855edc5d635%3A0xf5e8881ff738cbb1!2sYukon%20Czech%20Hall!5e0!3m2!1sen!2sus!4v1698683014709!5m2!1sen!2sus"
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CzechHall;
