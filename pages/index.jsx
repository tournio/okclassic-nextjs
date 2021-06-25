import {Jumbotron, Row, Card, Col} from 'react-bootstrap'

import Layout from '../components/layout';
import Spotlight from '../components/spotlight';

import styles from './index.module.scss';

const index = () => {
  const tournamentDates = 'April 22-24, 2022';
  const year = 2022;
  const tournamentName = 'OKClassic';
  const city = 'Oklahoma City, OK';
  const logoPath = '/images/logo.jpg';
  const logoAltText = 'OKClassic logo';
  const paragraphs = [
    'Join us in Oklahoma City as we showcase the best of the midwest.',
    'It all starts with a 9-pin No-Tap sweeper on Friday. Bowling starts at 7pm, so come to AMF Windsor Lanes to both register for the tournament and sign up for the sweeper!',
  ]

  const jumbotronClasses = ['d-flex', 'flex-column-reverse', 'align-items-end'];
  jumbotronClasses.push(styles.JumbotronImage);

  return (
    <Layout home={true}>

      <Jumbotron className={jumbotronClasses.join(' ')}>
        <h1 className="display-1">
          <span className={styles.Title}>
            {tournamentName}
          </span>
          <span className={styles.Year}>
            {year}
          </span>
        </h1>
      </Jumbotron>

      <Row>
        <Col xs={12} md={8} lg={4}>
          <Card>
            <Card.Header>
              <Card.Title>
                {/*<h4>*/}
                {tournamentDates}
                {/*</h4>*/}
              </Card.Title>
              <Card.Subtitle className="text-muted">
                {city}
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <div className="d-lg-none">
                <img className="float-right img-fluid col-6 p-0"
                     src={logoPath}
                     alt={logoAltText}
                />
              </div>
              {paragraphs.map((graf, i) => {
                return (
                  <Card.Text key={i}>
                    {graf}
                  </Card.Text>
                );
              })}
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="d-none d-lg-block">
          <img className="img-fluid"
               src={logoPath}
               alt={logoAltText}
          />
        </Col>

        <Spotlight />
      </Row>

    </Layout>
  )
}

export default index;
