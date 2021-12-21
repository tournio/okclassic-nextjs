import React from 'react';

import styles from './district.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Ratio from "react-bootstrap/Ratio";

const district = () => {
  const hotelUrl = 'https://districthotelokc.com/';
  const hotelName = 'District';
  const features = [
    'Lounge Bar',
    'Two pools',
    'Nightclub',
    'Restaurant coming soon',
    'Tournament rate: $79/night',
    'Promotion code: OK Classic Bowling Tournament',
    'Reservations available April 21-24, 2022',
    'Must book by April 16',
  ];
  const photoDeets = [
    {alt: 'Lounge Bar', filename: 'lounge_bar'},
    {alt: 'East Pool', filename: 'east_pool'},
    {alt: 'West Pool', filename: 'west_pool'},
    {alt: 'King Bed', filename: 'king_bed'},
    {alt: 'King Deluxe', filename: 'king_deluxe'},
    {alt: 'King Room', filename: 'king_room'},
    {alt: 'Suite 172', filename: 'suite_172'},
    {alt: 'Suite 236', filename: 'suite_236'},
    {alt: 'Suite Bathroom', filename: 'suite_bathroom'},
  ];

  return (
    <div className={styles.Hotel + " d-flex flex-column flex-nowrap"}>
      <Row className="justify-content-center">
        <Col xs={6}>
          <p>
            <a href={hotelUrl} className={styles.Logo}>
              <img className="img-fluid"
                   src="/images/hotels/district/logo.jpg"
                   alt={hotelName + ' Logo'}/>
            </a>
          </p>
        </Col>
      </Row>
      <Row className="order-2">
        <Col xs={12}>
          <p className={styles.Lead + " lead"}>
            <a href={hotelUrl}>{hotelName}</a>
            {' '}is proud to host the OKClassic. Formerly the Habana Inn, District is Oklahoma City's renowned, multi-venue wonderland for adults only.
          </p>
        </Col>
        <Col xs={12} sm={7}>
          <ul>
            {features.map((f, i) => {
              return <li key={i}>{f}</li>
            })}
          </ul>
        </Col>
        <Col xs={12} sm={5}>
          <address>
            <span className="line">2200 NW 40th St</span>
            <span className="line">Oklahoma City, OK 73112</span>
            <span className="line">United States</span>
            <span className="line">Tel:{' '}
              <a href="tel:405-528-2221">405-528-2221</a>
                </span>
          </address>
          <p className="d-sm-none">
            <a href="https://goo.gl/maps/xcj3S7YPSEtCwn3g9">
              Map to Hotel
            </a>
          </p>
        </Col>
        <Col>
          <p className="text-center">
            <a href={hotelUrl}>
              Book Your Room
            </a>
            {' '}
            using the group code
            {' '}
            <span className="fw-bold fst-italic">BOWL</span>
            .
          </p>
        </Col>
      </Row>
      <Row className="order-3">
        <Col>
          <Carousel fade className={styles.Carousel}>
            {photoDeets.map((photo, i) => {
              return (
                <Carousel.Item key={i}>
                  <img src={'/images/hotels/district/' + photo.filename + '.jpg'}
                       alt={photo.alt}
                       className="d-block w-100"
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.6629502932988!2d-97.55187914829253!3d35.51261158013703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21bba70aef765%3A0xc49d8d9aa3385b86!2sDistrict%20Hotel%20OKC!5e0!3m2!1sen!2sus!4v1634147775746!5m2!1sen!2sus"/>
          </Ratio>
        </Col>
      </Row>
    </div>
  );
};

export default district;
