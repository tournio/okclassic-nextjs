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

  // const equipmentText = (
  //   <Card.Text className={'alert alert-warning'}>
  //     OKClassic has adopted the USBC's decision to prohibit the use of certain Storm bowling balls that were found to be in violation of USBC specifications. See{' '}
  //     <a href={"/rules"} className={'alert-link'}>
  //       the Rules page
  //     </a>
  //     {' '}for full details.
  //   </Card.Text>
  // )

  // const text = (
  //   <Card.Text>
  //     <p>
  //       The registration deadline has been extended to{' '}
  //       <strong>April 10</strong>
  //       , so what are you waiting for?
  //     </p>
  //     <p className={'text-center mb-0'}>
  //       <a href="https://www.igbo-reg.com/tournaments/ok-classic-2022"
  //          className="btn btn-primary">
  //         Register Online
  //         {' '}<i className="bi bi-arrow-right" aria-hidden={true} />
  //       </a>
  //     </p>
  //   </Card.Text>
  // );

  // const text = (
  //   <Card.Text>
  //     Not long to go now! We can&apos;t wait to see everyone at the tournament!
  //   </Card.Text>
  // );

  // const text = (
  //   <Card.Text>
  //     It's tournament weekend! We wish everyone the best of luck on the lanes! Results will be posted here as they become available.
  //   </Card.Text>
  // );

  const text = (
    <>
      <Card.Subtitle className={'pb-2'}>
        That&apos;s a wrap!
      </Card.Subtitle>
      <Card.Text>
        Thank you for a wonderful tournament! We want to thank our committee members, volunteers, and especially our bowlers for making this year&apos;s tournament a success! We can&apos;t wait to see everyone back next year.
      </Card.Text>
      <Card.Text>
        Results will be posted soon.
        {/*Check out the{' '}*/}
        {/*<a href={'/results'}>*/}
        {/*  results*/}
        {/*</a>.*/}
      </Card.Text>
    </>
  )

  return (
    <Col xs={12} md={4}>
      <Card>
        <Card.Header bg="light">
          <Card.Title className={styles.Title}>
            Spotlight
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {text}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default spotlight;
