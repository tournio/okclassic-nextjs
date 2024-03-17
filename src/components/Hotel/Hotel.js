import React, {useEffect, useState} from 'react';

import styles from './Hotel.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Ratio from "react-bootstrap/Ratio";
import {useThemeContext} from "../../utils/ThemeContext";
import Image from "next/image";

import hotel1 from '../../images/hotel/rad_hotel1.jpeg';
import hotel2 from '../../images/hotel/rad_hotel2.jpeg';
import hotel3 from '../../images/hotel/rad_hotel3.jpeg';
import hotel4 from '../../images/hotel/rad_hotel4.jpeg';
import hotel5 from '../../images/hotel/rad_hotel5.jpeg';
import hotel6 from '../../images/hotel/rad_hotel6.jpeg';
import hotel7 from '../../images/hotel/rad_hotel7.jpeg';

const Hotel = () => {
  const {theme} = useThemeContext();

  const [colorScheme, setColorScheme] = useState('dark');
  useEffect(() => {
    if (!theme) {
      return;
    }
    setColorScheme(theme.active);
  }, [theme]);

  const hotelUrl = 'https://www.choicehotels.com/reservations/groups/G9658998';
  const hotelName = 'Radisson Hotel OKC Airport';
  const features = [
    'Rooms start at $84/night available April 19-22 (plus taxes)',
    'Complimentary WiFi and breakfast',
    'Restaurant and bar',
    'Hospitality suites',
  ];
  const otherFeatures = [
    'Outdoor swimming pool',
    'Fitness center',
    'Room service',
    'Shuttle service to and from the airport (call upon arrival)',
  ];
  const photoDeets = [
    {alt: 'Hotel exterior', file: hotel1},
    {alt: 'Hotel lobby', file: hotel2},
    {alt: 'Fitness center', file: hotel3},
    {alt: 'Pool', file: hotel4},
    {alt: 'Restaurant and bar', file: hotel5},
    {alt: 'King room', file: hotel6},
    {alt: 'Two queens room', file: hotel7},
  ];

  const address = (
    <address>
      <span className="d-block">
        4716 W I-40 Service Road
      </span>
      <span className="d-block">
        Oklahoma City, OK 73128
      </span>
    </address>
  );

  const hotelLogoPath = `/images/hotels/radisson/rad${colorScheme === 'dark' ? '-dark' : ''}.svg`;

  return (
    <section className={styles.Hotel}>
      <h3 className={`section-heading`}>
        Host Hotel
      </h3>

      <div className={styles.Content}>
        <Row className="justify-content-center">
          <Col xs={6}>
            <p>
              <a href={hotelUrl} className={styles.Logo}>
                <img className="img-fluid"
                     src={hotelLogoPath}
                     alt={hotelName + ' Logo'}/>
              </a>
            </p>
          </Col>
        </Row>
        <Row className="order-2">
          <Col xs={12}>
            <p className={styles.Lead + " lead"}>
              <a href={hotelUrl}>{hotelName}</a>
              {' '}is proud to host the OKClassic, with special rates for tournament bowlers.
            </p>
            <p className={'d-none d-sm-block'}>
              Nestled four miles north of Will Rogers World Airport on Interstate 40, Radisson Hotel Oklahoma City
              Airport is perfectly positioned for your family vacation or corporate trip to The Big Friendly. Our newly
              built property provides easy access to State Fair Park, Frontier City and Stars basketball games at
              Oklahoma City University.
            </p>
            <p>
              Book your reservation{' '}
              <strong>
                {/*<a href={hotelUrl}>*/}
                {/*  online*/}
                {/*</a>*/}
                by phone
              </strong>
              {' '}to get the special rate, making sure to mention the{' '}
              <strong>
                OKClassic bowling tournament
              </strong>.
            </p>
          </Col>
          <Col xs={12} sm={7}>
            <ul className={styles.HotelFeature}>
              {features.map((f, i) => {
                return <li key={i}>{f}</li>
              })}
              {otherFeatures.map((f, i) => {
                return <li key={i + 100} className={'d-none d-sm-list-item'}>{f}</li>
              })}
              <li>Reservation deadline is April 14, 2024</li>
            </ul>
          </Col>
          <Col xs={12} sm={5}>
            <div className={'d-flex'}>
              <i className={'bi bi-geo-fill pe-2 h1'} aria-hidden={true}/>
              <a href={'https://goo.gl/maps/nzfMpVDhDnfmmB8r9'} className={'d-block d-sm-none'}>
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
              <a href="tel:405-546-3305">405-546-3305</a>
            </p>
          </Col>
        </Row>
        <Row className="order-3">
          <Col>
            <Carousel fade className={styles.Carousel}>
              {photoDeets.map((photo, i) => {
                return (
                  <Carousel.Item key={i}>
                    <Image src={photo.file}
                           alt={photo.alt}
                           className={"d-block w-100 img-fluid"}
                    />
                    <Carousel.Caption>
                      <p>{photo.alt}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="order-4 d-none d-sm-block">
          <Col>
            <Ratio aspectRatio="4x3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.840269125851!2d-97.60670914829561!3d35.45874868014981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b2118146f0f12b%3A0xc83de50be8401d2f!2sRadisson%20Hotel%20Oklahoma%20City%20Airport!5e0!3m2!1sen!2sus!4v1580654964666!5m2!1sen!2sus"/>
            </Ratio>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hotel;
