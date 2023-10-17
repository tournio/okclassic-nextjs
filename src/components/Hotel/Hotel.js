import React from 'react';

import styles from './Hotel.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Ratio from "react-bootstrap/Ratio";

const Hotel = () => {
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
    {alt: 'Hotel exterior', filename: 'rad_hotel1'},
    {alt: 'Hotel lobby', filename: 'rad_hotel2'},
    {alt: 'Fitness center', filename: 'rad_hotel3'},
    {alt: 'Pool', filename: 'rad_hotel4'},
    {alt: 'Restaurant and bar', filename: 'rad_hotel5'},
    {alt: 'King room', filename: 'rad_hotel6'},
    {alt: 'Two queens room', filename: 'rad_hotel7'},
  ];

  const address = (
    <address>
      <div>
        <span className="d-block">
          4716 W I-40 Service Road
        </span>
        <span className="d-block">
          Oklahoma City, OK 73128
        </span>
      </div>
    </address>
  );

  return (
    <section className={styles.Hotel}>
      <div className={styles.Content}>
        {/*<div className={styles.Hotel + " d-flex flex-column flex-nowrap"}>*/}
        <Row className="justify-content-center">
          <Col xs={6}>
            <p>
              <a href={hotelUrl} className={styles.Logo}>
                <img className="img-fluid"
                     src="/images/hotels/radisson/rad.svg"
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
                <a href={hotelUrl}>
                  online
                </a>
              </strong>
              {' '}or by phone to get the tournament rate.
            </p>
          </Col>
          <Col xs={12} sm={7}>
            <ul>
              {features.map((f, i) => {
                return <li key={i}>{f}</li>
              })}
              {otherFeatures.map((f, i) => {
                return <li key={i + 100} className={'d-none d-sm-block'}>{f}</li>
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
              <div href={'https://goo.gl/maps/nzfMpVDhDnfmmB8r9'} className={'d-none d-sm-block'}>
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
          </Col>
        </Row>
      </div>
      <Row className="order-3">
        <Col>
          <Carousel fade className={styles.Carousel}>
            {photoDeets.map((photo, i) => {
              return (
                <Carousel.Item key={i}>
                  <img src={'/images/hotels/radisson/' + photo.filename + '.jpeg'}
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.840269125851!2d-97.60670914829561!3d35.45874868014981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b2118146f0f12b%3A0xc83de50be8401d2f!2sRadisson%20Hotel%20Oklahoma%20City%20Airport!5e0!3m2!1sen!2sus!4v1580654964666!5m2!1sen!2sus"/>
          </Ratio>
        </Col>
      </Row>
    </section>
  );
};

export default Hotel;
