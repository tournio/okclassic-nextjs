import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

import Layout from '../_components/layout';

import styles from './contact.module.scss';

const contact = () => {
  const roles = [
    {
      role: 'Director',
      name: 'David Barz',
    },
    {
      role: 'Treasurer',
      name: 'George Noe',
    },
    {
      role: 'Secretary',
      name: 'Donnie Chance, Jacque Bullock',
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
      name: 'Scott Stebleton'
    }
  ];

  return (
    <Layout>
      <div className={styles.Contact}>
        <h1 className="display-4">
          Tournament Committee
        </h1>
        <Row>
          {
            roles.map((person, i) => {
              return (
                <Col sm={4} key={i}>
                  <Card className={styles.Item}>
                    <Card.Header className={styles.Role}>
                      {person.role}
                    </Card.Header>
                    <Card.Body className={styles.Name}>
                      {person.name}
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
                <a href="mailto:okclassic2023@yahoo.com?subject=Question about OKClassic">
                  Email the committee
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default contact;
