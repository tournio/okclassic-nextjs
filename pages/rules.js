import React from 'react';

import Layout from "../components/layout";

import styles from './rules.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const rules = () => {
  return (
    <Layout>
      <div className={styles.Rules}>
        <h1 className="display-4">
          Tournament Rules
        </h1>

        <h4 className="my-2 text-muted">
          (2022 rules pending finalization)
        </h4>

        <ol>
          <li>
            OKClassic 2020 is a mixed handicap competition open to men and women by invitation only, each participant
            may enter only once and cash only once. OKClassic 2020 is USBC certified, all entrants must be USBC
            certified and provide proof at time of entry, or pay tournament participation fee of $5 U.S. (Rule 300c).
            Each participant must be a member of IGBO, in any of its membership classes and provide proof at time of
            entry, or pay a non-member participation fee of $25 U.S. This participation fee will be sent to IGBO for
            membership consideration. OKClassic 2020 contributes $0.75 of each bowler's entry fee to IGBO. The
            Tournament Directors reserve the right to refuse any application.
          </li>
          <li>
            The number of games for each event of Singles, Doubles &amp; Team will be a set of three. A team will
            consist of
            four members, any mix of men or women. Partial team entries are acceptable, but must be flexible as to whom
            they bowl with, as long as they can be accommodated.
          </li>
          <li>
            Space is limited to 38 teams/152 bowlers.
          </li>
          <li>
            All monetary awards are based on total pins plus handicap for each event. Handicap will be 80% of 220. An
            individual’s handicap will be capped at 100 pins per game. Negative handicap will not apply. Awards will be
            paid to the highest scores in Singles, Doubles, & Team and Individual All-Events. The minimum payout ratio
            is 1:10, ties result in equal division of prizes. Prize fund returned 100%.
          </li>
          <li>
            No refunds will be made once an application is accepted by the Tournament Directors, with the exception of
            Rule 9.
          </li>
          <h2>
            Average Information &ndash; please read rules 6-8 carefully
          </h2>
          <li>
            Any bowler entering OKClassic 2020 must establish a ten-pin average acceptable to USBC. The following rules
            shall be used to determine the entering average.
            <ol>
              <li>
                Only 10-pin averages can be used.
              </li>
              <li>
                The ending 2019-2020 FALL USBC certified composite book average (minimum of 21 games) or 12-month IGBO
                TAD average (minimum 18 games) as of July 1, 2020. The higher of the two will be used as your entering
                average.
              </li>
              <li>
                If no 2019-2020 composite book average, use HIGHEST CURRENT League Average (as of July 1 ,2020) with a
                minimum of 21 games. Current Standing Sheet(s) as of July 1, 2020 will be required.
              </li>
              <li>
                If none of the above is available, then the entering average shall be 220.
              </li>
            </ol>
          </li>
          <li>
            If current Summer season league average (as of July 1, 2020) for at least 21 games exceeds 2019-2020
            composite book average (or Igbo TAD average of 18 games) by 10 pins or more, current season league average
            will be used (Rule 319a, Item 2).
          </li>
          <li>Each bowler is responsible for verification of all averages existing on the USBC website (
            <a href='http://www.bowl.com/'>www.bowl.com</a>
            ) under Tournament Rule 6. If all averages are not on the bowl.com website, then League standing sheet or
            other acceptable verification must be either submitted as available online from all leagues in which a
            bowler has 21 or more games and/or IGBO Tournament in which a bowler has 18 or more games. Failure to use
            proper average shall disqualify scores if the submitted average is lower than the actual average, thereby
            resulting in a lower classification or more handicap. Prize winnings will be based on the submitted average,
            if it is a higher than the correct average (Rule 319a, Item 3). Please email standing sheets to
            okclassicbowling@gmail.com.
          </li>
          <li>
            The Tournament Directors have the authority to adjust the entering average of any bowler. Average
            adjustments will be applied as set forth under (Rule 319e). All average adjustments will be completed prior
            to the start of each tournament event. A bowler unwilling to accept an average adjustment is entitled to a
            full refund. The Committee will also be more than willing to refund anyone who is feeling sick or unsafe
            about traveling due to Coronavirus.
          </li>
          <h2>
            Schedule, Fees, Etc.
          </h2>
          <li>
            All team members must be present at the time of bowling; substitutes may be used for an absent bowler.
            Zeroes will be entered for missed or late frames; late bowlers will start when ready. Check-in is 30 minutes
            prior to each event. Substitutes must be approved by the tournament director, be sanctioned and have an
            average in accordance with Rule 6.
          </li>
          <li>
            All decisions of the tournament manager are final unless an appeal is made in accordance with (Rule 329).
          </li>
          <li>Tournament registration can be completed online at the following website:
            <a href='http://www.okclassic.com'>www.okclassic.com</a></li>
          <li>Entry fees are payable online using PayPal. This is the preferred method. To pay online, visit
            <a href='http://www.okclassic.com'>www.okclassic.com</a>
            . Once registration is complete you will receive an invoice to pay through PayPal.
          </li>
          <li>
            Entry fee is $109.00 for entries. Payment must be made by July 15th 2020 at midnight.. after that there will
            be a $10 late fee applied. Applications are subject to return if tournament fills. No walk-ins, fax, e-mail
            or telephone entries will be accepted. Prize money is paid within 30 days of the close of the tournament.
          </li>
          <li>
            The team captain (for team submissions) or individuals' online submission of the entry form acknowledging
            he/she has read the rules.
          </li>
          <li>
            All other USBC rules will apply.
          </li>
        </ol>
        <h2>
          Entry Free Breakdown
          <small>(All amounts are in US Dollars)</small>
        </h2>
        <dl>
          <dt>$27</dt>
          <dd>Lineage (includes sales tax)</dd>
          <dt>$55</dt>
          <dd>Prize Fund</dd>
          <dt>$0.75</dt>
          <dd>IGBO Donation</dd>
          <dt>$1.25</dt>
          <dd>Tournament Expenses (postage, shipping, etc.)</dd>
          <dt>$25</dt>
          <dd>Banquet</dd>
          <dt className='total'>$109</dt>
          <dd className='total'>Total Standard Entry Fee</dd>
        </dl>
        <h3>
          Non-participant fee
        </h3>
        <dl>
          <dt>$40</dt>
          <dd>Banquet</dd>
        </dl>
        <hr/>
        <h2>
          9-Pin No Tap Tournament Rules
        </h2>
        <p>
          We will be offering a 9-Pin No-Tap tournament on Friday, July 17, 2020.
        </p>
        <p>
          Participation will be available to all participants and friends of OKClassic. Bowling in the OKClassic
          Tournament is not mandatory to bowl in the 9-Pin No-Tap.
        </p>
        <p>
          <strong>
            9-pin No Tap will be a scratch event.
          </strong>
        </p>
        <p>
          The prize fund returned will be 100%.
        </p>
        <p>
          Sign-up will be between 6:00 p.m. and 6:45 p.m. during OKClassic registration at Windsor Lanes. The 9
          Pin-No-Tap Tournament will begin at 7:00 p.m.
        </p>
        <h3>
          Entry Fee
        </h3>
        <p>
          Pre-registration is not required. You will be able to pay at registration.
        </p>
        <dl>
          <dt>$9</dt>
          <dd>Lineage (includes sales tax)</dd>
          <dt>$15</dt>
          <dd>Prize Fund</dd>
          <dt>$1.00</dt>
          <dd>OKClassic</dd>
          <dt className='py-1 total'>
            $25
          </dt>
          <dd className='py-1 total'>
            Total Entry Fee
          </dd>
        </dl>
        <p>
          Payout is 1:10
        </p>
        <hr/>
        <h2>
          Ray Nastasi Scratch Masters
        </h2>
        <p>
          Pre-registration is not required. You will be able to pay at registration.
        </p>
        <p>
          OKClassic's Ray Nastasi Scratch Masters is a mixed competition open to men and women. It will be offered
          to all participants using five divisions as determined by each participant's entering average.
        </p>
        <h3>
          Entry Fee
        </h3>
        <dl className='longer'>
          <dt>Division E (0-159)</dt>
          <dd>$30</dd>
          <dt>Division D (160-185)</dt>
          <dd>$35</dd>
          <dt>Division C (186-200)</dt>
          <dd>$40</dd>
          <dt>Division B (201-215)</dt>
          <dd>$45</dd>
          <dt>Division A (216+)</dt>
          <dd>$50</dd>
        </dl>
        <p>
          Tournament directors shall use the same average assigned for the overall tournament to place bowlers in
          their respective divisions. Bowlers' scores from the Singles, Doubles, and Team events will be used to
          determine the top eight qualifiers in each division. The top eight bowlers from each division will compete
          in a low man out competition for prize money. (If there are not enough entries for a division, other
          options will be used at the time of the tournament.) Entry fee will be returned 100%.
        </p>
        <p>
          Top 8 bowlers will bowl one game on a pair of lanes with 2 lowest scoring bowlers dropped from
          competition.
        </p>
        <p>
          Remaining 6 will move on to bowl one game with 2 lowest scoring bowlers dropped from competition.
        </p>
        <p>
          Top 4 will move on to the next game with 2 lowest scoring bowlers dropped from competition.
        </p>
        <p>
          Bowlers will move a pair after every round. Final Round all 3 games will be bowled on the same pair.
        </p>
        <p>
          Final 2 bowlers will compete in a best 2 out of 3 matchup. Deciding by wins. If any games during
          scratchmasters end in a tie to decide a winning match a 9th and 10th frame roll off will decide the
          winner.
        </p>
        <p>
          Check-in for the Ray Nastasi Scratch Masters must be completed 30 minutes after last ball of singles is
          thrown. Actual start time of competition will be at the discretion of tournament officials. Check In must
          be completed by the qualifying bowler. No representative will be allowed to check-in for another bowler.
          Bowlers that do not check in will be disqualified with an alternate taking his/her place. Once checked in,
          qualifying bowlers are not permitted to leave the bowling center prior to the official start time of the
          event. This event is scheduled at Windsor Lanes.
        </p>
        <p>
          Scores bowled during the Ray Nastasi Scratch Masters event will not be used to calculate the All-Events
          category for the OKClassic tournament.
        </p>

      </div>
    </Layout>
  );
};

export default rules;
