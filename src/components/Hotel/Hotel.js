import React, {useEffect, useState} from 'react';

import styles from './Hotel.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Ratio from "react-bootstrap/Ratio";
import {useThemeContext} from "../../utils/ThemeContext";
import Image from "next/image";

import hotel1 from '../../images/hotel/hotel-sign.jpeg';
import hotel2 from '../../images/hotel/pool-party.jpeg';
import hotel3 from '../../images/hotel/pool-ladder.jpeg';
import hotel4 from '../../images/hotel/pool-igloo.jpeg';
import hotel5 from '../../images/hotel/boom-suite.jpeg';
import hotel6 from '../../images/hotel/double-queen-room.jpeg';
import hotel7 from '../../images/hotel/double-queen-suite.jpeg';
import hotel8 from '../../images/hotel/king-room.jpeg';
import hotel9 from '../../images/hotel/suite-bathroom.jpeg';
import hotelA from '../../images/hotel/eagle.jpeg';

const Hotel = () => {
  const {theme} = useThemeContext();

  const [colorScheme, setColorScheme] = useState('dark');
  useEffect(() => {
    if (!theme) {
      return;
    }
    setColorScheme(theme.active);
  }, [theme]);

  const hotelUrl = 'https://www.districthotelok.com/';
  const hotelName = 'The District';
  const features = [
    '$79/night room rate for OKC bowlers',
    'Hospitality Suite Friday and Saturday nights',
    'Two heated outdoor resort-style pools',
    'Jaw-dropping theme rooms and suites',
    'Elevated bars: the OKC Eagle and The County Line',
    'Free parking',
    'Free Wi-fi',
  ];
  const photoDeets = [
    {alt: 'Hotel sign', file: hotel1},
    {alt: 'Pool party at District', file: hotel2},
    {alt: 'One of the pools at District', file: hotel3},
    {alt: 'Wintertime means an igloo for the pool', file: hotel4},
    {alt: 'The Boom Suite', file: hotel5},
    {alt: 'The Double Queen Room', file: hotel6},
    {alt: 'The Double Queen Suite', file: hotel7},
    {alt: 'King room', file: hotel8},
    {alt: 'A suite bathroom', file: hotel9},
    {alt: 'The logo for the OKC Eagle', file: hotelA},
  ];

  const address = (
    <address>
      <span className="d-block">
        2200 NW 40th St.
      </span>
      <span className="d-block">
        Oklahoma City, OK 73112
      </span>
    </address>
  );

  const hotelLogoPath = `/images/district-logo-transparent.webp`;

  return (
    <section className={styles.Hotel}>
      <h3 className={`section-heading`}>
        Host Hotel
      </h3>

      <div className={styles.Content}>
        <Row className="justify-content-center">
          <Col xs={6}>
            <p className={styles.Logo}>
              <a href={hotelUrl}>
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
              Formerly known as Habana Inn, our establishment has a long history and has undergone various transformations. Under the new ownership group of Steve Blundell and Tim Selby, we are proud to introduce The District Hotel, a place that aims to bring the LGBTQ+ & Ally community together and create a vibrant and inclusive atmosphere for all.
            </p>
            <p>
              Book your reservation{' '}
              <strong>
                {/*<a href={hotelUrl}>*/}
                {/*  online*/}
                {/*</a>*/}
                by phone
              </strong>
              {' '}to get the special rate, making sure to use the discount code {' '}
              <strong>
                OKCLASSIC
              </strong>. We expect our block to sell out, so be sure to get your reservation in early!
            </p>
          </Col>
          <Col xs={12} sm={7}>
            <ul className={styles.HotelFeature}>
              {features.map((f, i) => {
                return <li key={i}>{f}</li>
              })}
              {/*<li>Reservation deadline is April 14, 2024</li>*/}
            </ul>
          </Col>
          <Col xs={12} sm={5}>
            <div className={'d-flex'}>
              <i className={'bi bi-geo-fill pe-2 h1'} aria-hidden={true}/>
              <a href={'https://maps.app.goo.gl/U6DwHFNjEyzYB8SC7'} className={'d-block d-sm-none'}>
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
              <a href="tel:405-528-2221">405-528-2221</a>
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
                           className={"d-block mx-auto img-fluid"}
                    />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.6753727443834!2d-97.55244032313584!3d35.512304472642334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21bba70aef765%3A0xc49d8d9aa3385b86!2sDistrict%20Hotel!5e0!3m2!1sen!2sus!4v1731088345735!5m2!1sen!2sus"/>
            </Ratio>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hotel;
