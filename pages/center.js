import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";

import Layout from '../components/layout';

import styles from './center.module.scss';

const center = () => {
  const centerUrl = 'https://www.amf.com/location/amf-windsor-lanes';
  const centerName = 'AMF Windsor Lanes';
  const features = [
    '40 lanes',
    'Full-service snack bar and grill',
    'Full-service cocktail lounge',
    'Pro Shop (open during the tournament)',
    'Billiards',
    'Arcade',
    'Private rooms',
  ];

  return (
    <Layout>
      <div className={styles.Center}>
        <h1 className="display-4">
          {centerName}
        </h1>

        <Row>
          <Col xs={12} sm={5}>
            <p className="lead">
              The OKClassic takes place at{' '}
              <a href={centerUrl}>
                {centerName}
              </a>
              . You can look forward to enjoying all this:
            </p>
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
              <i className="bi bi-shop" aria-hidden={true}></i>
              {' '}
              <a href="https://www.yelp.com/search?find_desc=Restaurants&find_loc=4600%20NW%2023rd%20St%2C%20Oklahoma%20City%2C%20OK">
                Restaurants near Windsor Lanes
              </a>
            </p>
          </Col>
          <Col xs={12} sm={7}>
            <h4 className="d-none d-md-block">
              Getting There
            </h4>

            <Ratio aspectRatio="4x3" className={styles.Map + " d-none d-md-block"}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25987.84169337282!2d-97.62032346174384!3d35.492402347910435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21005a93aec85%3A0x4f04c7fcfd12353!2sAMF%20Windsor%20Lanes!5e0!3m2!1sen!2sus!4v1580950897476!5m2!1sen!2sus"/>
            </Ratio>

            <address>
              <span className="line">
                <strong>
                  {centerName}
                </strong>
              </span>
              <span className="line">
                4600 NW 23rd St
              </span>
              <span className="line">
                Oklahoma City, OK 73127
              </span>
              <span className="line">
                <i className="bi bi-telephone" aria-hidden={true}></i>
                {' '}
                <a href="tel:405-755-7575">405-755-7575</a>
              </span>
            </address>
            <p className="d-md-none">
              <a
                href="https://goo.gl/maps/koJcLkZj4hQbBiuy5">
                View Map
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default center;
