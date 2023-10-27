import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styles from './Committee.module.scss';

const Committee = () => {
  const roles = [
    {
      role: 'Director',
      name: 'David Barz',
      email: 'director@okclassic.com',
    },
    {
      role: 'Treasurer',
      name: 'George Noe',
      email: 'treasurer@okclassic.com',
    },
    {
      role: 'Co-Secretaries',
      name: 'Donnie Chance, Jacque Bullock',
      email: 'secretary@okclassic.com',
    },
    {
      role: 'Fundraising',
      name: 'Jay Witt',
    },
    {
      role: 'Raffles',
      name: 'Gary Jordan, Bobby McKaughan',
    },
    {
      role: 'Technologist',
      name: 'Scott Stebleton',
      email: 'website@okclassic.com',
    }
  ];

  return (
    <section className={`${styles.Committee}`}>
      <h3 className={`section-heading`}>
        Tournament Committee
      </h3>

      <Row>
        {roles.map((person, i) => {
            return (
              <Col sm={4} key={i}>
                <Card className={styles.Item}>
                  <Card.Header className={styles.Role}>
                    {person.role}
                  </Card.Header>
                  <Card.Body className={styles.Name}>
                    {person.email && (
                      <a href={`mailto:${person.email}`}>{person.name}</a>
                    )}
                    {!person.email && (
                      <span>{person.name}</span>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
      <Row>
        <Col>
          <Card className={styles.Questions}>
            <Card.Body>
              Questions?{' '}
              <a href="mailto:info@okclassic.com?subject=Question+about+OKClassic">
                Email the committee
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
}

export default Committee;
