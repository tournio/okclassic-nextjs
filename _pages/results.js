import React from 'react';
import {ListGroup, Button, Card, Row, Col} from "react-bootstrap";

import Layout from "../_components/layout";

import styles from './results.module.scss';

const results = () => {
  const available = [
    { id: 'team', name: 'Team Event' },
    { id: 'doubles', name: 'Doubles Event' },
    { id: 'singles', name: 'Singles Event' },
    { id: 'all_events', name: 'All Events' },
    { id: 'best_3_of_9', name: 'Best 3 of 9' },
    { id: 'optional_scratch_a', name: 'Optional Scratch - Div A' },
    { id: 'optional_scratch_b', name: 'Optional Scratch - Div B' },
    { id: 'optional_scratch_c', name: 'Optional Scratch - Div C' },
    { id: 'optional_scratch_d', name: 'Optional Scratch - Div D' },
    { id: 'optional_scratch_e', name: 'Optional Scratch - Div E' },
  ];

  return (
    <Layout>
      <div className={styles.Results}>
        <h1 className="display-4">
          Tournament Results
        </h1>

        {/*<h5 className="text-muted">*/}
        {/*  Results will be posted here when they're available.*/}
        {/*</h5>*/}

        <h5>
          2023 Tournament Results
        </h5>

        <Row>
          <Col lg={6}>
            <Card className='mb-2'>
              <ListGroup variant='flush'>
                { available.map((result, i) => {
                  return (
                    <ListGroup.Item key={i} className={'d-flex justify-content-between'}>
                      <a href={`/results/2023/${result.id}.pdf`}
                         className={`${styles.TextLink} mt-2`}>
                        {`${result.name}`}
                      </a>
                      <Button variant='outline-secondary'
                              href={`/results/2023/${result.id}.pdf`}
                              title='Download PDF'>
                        <i className="bi-download" aria-hidden={true}></i>
                      </Button>
                    </ListGroup.Item>
                  );
                }) }
              </ListGroup>
            </Card>
          </Col>
        </Row>

      </div>
    </Layout>
  );
};

export default results;
