import React from 'react';

import Layout from '../_components/layout';
import District from '../_components/district';
import Radisson from '../_components/radisson';

import styles from './hotels.module.scss';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const hotels = () => {
  return (
    <Layout>
      <div className={styles.Hotels}>
        {/*<h1 className="display-4">*/}
        {/*  Host Hotel*/}
        {/*</h1>*/}

        {/*<h6 className={'text-muted'}>*/}
        {/*  TBD...*/}
        {/*</h6>*/}

        <Radisson />

        {/*<Tabs defaultActiveKey="radisson" className={styles.Menu + " d-flex justify-content-between justify-content-sm-center"}>*/}
        {/*  <Tab title="District Hotel" eventKey="district" tabClassName={styles.MenuItem}>*/}
        {/*    <District />*/}
        {/*  </Tab>*/}
        {/*  <Tab title="Radisson OKC Airport" eventKey="radisson" tabClassName={styles.MenuItem}>*/}
        {/*    <Radisson />*/}
        {/*  </Tab>*/}
        {/*</Tabs>*/}
      </div>
    </Layout>
  );
};

export default hotels;
