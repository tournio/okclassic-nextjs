import {Row, Card, Col} from 'react-bootstrap'

import Layout from '../components/layout';
import Spotlight from '../components/spotlight';

import {useClientReady} from "../js/utils";
import styles from './index.module.scss';

const index = () => {
  const ready = useClientReady();
  if (!ready) {
    return null;
  }

  const tournamentDates = 'April 21-23, 2023';
  const year = 2023;
  const tournamentName = 'OKClassic';
  const city = 'Oklahoma City, OK';
  const logoPath = '/images/logo.jpg';
  const logoAltText = 'OKClassic logo';
  const paragraphs = [
    'Join us in Oklahoma City as we showcase the best of the midwest.',
    "We're excited to bring everyone back together at AMF Windsor Lanes!",
  ]

  const jumbotronClasses = ['d-flex', 'flex-column-reverse', 'align-items-end', 'px-4'];
  jumbotronClasses.push(styles.JumbotronImage);

  return (
    <Layout home={true}>

      <div className={jumbotronClasses.join(' ')}>
        <h1 className="display-1">
          <span className={styles.Title}>
            {tournamentName}
          </span>
          <span className={styles.Year}>
            {year}
          </span>
        </h1>
      </div>

      <Row>
        <Col xs={12} md={8} lg={4}>
          <Card className={'mb-2'}>
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
                <img className={styles.LogoImage + " float-end img-fluid col-6 p-0"}
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

        <Col lg={4} className="d-none d-lg-block text-center">
          <img className={styles.LogoImage + " img-fluid"}
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
