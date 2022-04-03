import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import styles from './spotlight.module.scss';

const spotlight = () => {
  // const registrationUrl = "https://www.igbo-reg.com/tournaments/okclassic-2022";

  // const text = (
  //   <Card.Text>
  //     <p>
  //       After a tough year-plus enduring the pandemic, we're working hard putting together the OKClassic 2022, in a way that will be both fun and safe for everyone. Keep your eyes peeled!
  //     </p>
  //     <p>
  //       Reservations at
  //       <a href="/hotels">
  //         {' '}our host hotels{' '}
  //       </a>
  //       are now available!
  //     </p>
  //   </Card.Text>
  // );

  const equipmentText = (
    <Card.Text>
      <div className={'alert alert-warning'}>
        OKClassic has adopted the USBC's decision to prohibit the use of certain Storm bowling balls that were found to be in violation of USBC specifications. See{' '}
        <a href={"/rules"} className={'alert-link'}>
          the Rules page
        </a>
        {' '}for full details.
      </div>
    </Card.Text>
  )

  const text = (
    <Card.Text>
      <p>
        The registration deadline has been extended to{' '}
        <strong>April 10</strong>
        , so what are you waiting for?
      </p>
      <p className={'text-center mb-0'}>
        <a href="https://www.igbo-reg.com/tournaments/ok-classic-2022"
           className="btn btn-primary">
          Register Online
          {' '}<svg xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right aria-hidden"
                    viewBox="0 0 16 16">
          <path fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
        </a>
      </p>
    </Card.Text>
  );

  return (
    <Col xs={12} md={4}>
      <Card>
        <Card.Header bg="light">
          <Card.Title className={styles.Title}>
            Spotlight
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {equipmentText}
          {text}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default spotlight;
