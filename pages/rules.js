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

        {/*<h4 className="my-2 text-muted">*/}
        {/*  (2022 rules pending finalization)*/}
        {/*</h4>*/}

        <div className={'alert alert-warning'}>
          <h4 className={'alert-heading'}>
            Equipment Notice
          </h4>
          <div>
            The OKClassic has made the decision to adopt the USBC's rule prohibiting the use of certain Storm Products bowling balls that were recently found to be below USBC minimum 73D hardness specification. The affected bowling ball models are:
          </div>
          <ul>
            <li>Storm Phaze 4</li>
            <li>Storm Electrify Solid</li>
            <li>Storm Trend 2</li>
            <li>900 Global Altered Reality</li>
            <li>900 Global Wolverine</li>
            <li>Roto Grip UFO Alert</li>
          </ul>
          <div>
            Bowlers found using any of the prohibited equipment will face the following sanctions:
          </div>
          <ul>
            <li>
              First infraction: zero for the game in progress.
            </li>
            <li>
              Second infraction: disqualification and dismissal from the tournament.
            </li>
          </ul>
          <div>
            <strong>
              No refunds
            </strong>
            {' '}will be given to any bowlers affected by these sanctions, including bowlers who choose not to continue with the tournament following a first infraction.
          </div>
          <div className={'mt-3'}>
            For further information, including information about the related ball exchange program, see the{' '}
            <a href={"https://www.bowl.com/News/NewsDetails.aspx?id=23622337509"}
               className={'alert-link'}
               target={"_new"}>
              announcement from the USBC and Storm Products
            </a>.
          </div>
        </div>

        <ol>
          <li>
            OKCLASSIC 2022 is a USBC-certified tournament, open to all genders by invitation only. Each participant may
            enter only once and cash only once. The Tournament Director reserves the right to refuse any application.
          </li>
          <li>
            The number of games for each event of Singles, Doubles &amp; Team will be a set of three. A team will
            consist of four members, any mix of genders. Partial team entries are acceptable, but must be flexible as to
            whom they bowl with, as long as they can be accommodated.
          </li>
          <li>
            Space is limited to 38 teams/152 bowlers.
          </li>
          <li>
            All monetary awards are based on total pins plus handicap for each event. Awards will be paid to the highest
            scores in Singles, Doubles, & Team and Individual All-Events. The minimum payout ratio is 1:10, ties result
            in equal division of prizes. Prize fund returned 100%.
          </li>
          <li>
            A full team is not officially registered until all team members' payments are received by the cut off date.
          </li>
          <li>
            OKCLASSIC Director reserves the right to dismiss and/or disqualify any bowler, at any time during the
            tournament. If a bowler is dismissed or disqualified, NO REFUND will be given. All decisions of the
            Tournament Director are final.
          </li>
          <h2>
            Entering Averages
          </h2>
          <li>
            Bowlers will use a combined (21 game minimum) standard composite average of:
            <ol>
              <li>
                USBC 2021-2022 Standard Composite Average
              </li>
              and
              <li>
                IGBO Tournament Average for the last 12 months (if available)
              </li>
            </ol>
          </li>
          <li>
            If a bowler has no USBC 2021-2022 average and/or IGBO Tournament Average, the bowler must use an average
            calculated in the order listed below:
            <ol>
              <li>
                A composite of all current USBC certified league averages as of April 1, 2022, provided that a
                minimum of 21 games have been bowled across all leagues. It is the bowler’s responsibility to
                provide standings sheets (signed by a league officer), or information to retrieve them online, for
                ALL leagues bowled as of April 1, 2022
              </li>
              <li>
                USBC 2020-2021 Standard Composite Average (minimum of 21 games).
              </li>
              <li>
                If none of the above averages are available, then the bowler will use a 235 average for the
                tournament.
              </li>
            </ol>
          </li>
          <li>
            PBA/PWBA/Team USA members will use a minimum average of 210.
          </li>
          <li>
            Only 10-pin averages will be used.
          </li>
          <li>
            It is the bowler’s responsibility to supply complete and accurate information.
          </li>
          <li>
            Per USBC Rule 319a, item 2: When the previous season’s average is used, and at the time of bowling an
            entrant has a current average for 21 or more games that is 10 pins or more higher than the prior season’s
            average, the current average must be used.
          </li>
          <li>
            Per USBC Rule 319a, item 3: Bowlers are responsible for verifying their own average,
            whether submitted by the bowler, the team captain or others. If the submitted average is lower than required
            and results in a lower classification or more handicap, the bowler’s score is disqualified. If the submitted
            average is higher than required, prize winnings will be based on the submitted average. In the case of a
            team of two or more bowlers, the averages will be combined to determine if the correct total is higher or
            lower than the submitted total.
          </li>
          <li>
            Per USBC Rule 319c: The average of a bowler may be adjusted upward before participation in any event. If the
            assigned average is not accepted by the bowler, the entry fee shall be refunded.
          </li>
          <li>
            Unless the tournament rules state otherwise, in a handicap or classified tournament, a bowler who has had
            their average adjusted/rerated in accordance with this rule is required to report all previous assigned
            average adjustments/rerates, whether the bowler accepted the adjustment/rerate or not, at the time of
            bowling.
          </li>
          <li>
            If you have any questions regarding the USBC rules related to averages for tournaments (Rule 319), you can
            find the current USBC Playing Rules at
            {' '}
            <a href="https://www.bowl.com/Rules/Rules_Home/USBC_Playing_Rules/">
              https://www.bowl.com/Rules/Rules_Home/USBC_Playing_Rules/
            </a>
          </li>
          <li>
            Tournament Average relief can only be considered under USBC General Playing Rules 4e.
          </li>

          <h2>
            Handicap
          </h2>
          <li>
            A bowler’s handicap for OKCLASSIC will be set at 90% of the difference between the bowler’s scratch entering
            average and 235, rounded down. An individual’s handicap will be capped at 100 pins per game. Negative
            handicap will not apply.
          </li>

          <h2>
            Other Entry Rules
          </h2>
          <li>
            Only one entry per bowler per event in Singles, Doubles, and Team.
          </li>
          <li>
            Doubles partnerships must come from the same team.
          </li>
          <li>
            Check-in time for all events is thirty (30) minutes prior to the starting time. Late bowlers will begin in
            the frame in which they are ready to begin bowling. A zero (0) score will be entered for each frame missed.
          </li>

          <h2>
            Eligibility
          </h2>
          <li>
            Entrants must be a member of USBC, and provide proof of membership and certification number with their
            entry. Non-members may pay a Participation Fee of $5.00 to participate (USBC Rule 301b).
          </li>
          <li>
            Entrants must be a member of an IGBO Member League, or current IGBO Associate Member. If not already an IGBO
            member, entrant must apply for Associate Membership, and pay the $25.00 IGBO fee prior to bowling.
          </li>
          <li>
            Only one (1) PBA/PWBA/Team USA member is allowed per team.
          </li>
          <li>
            Substitutes will be allowed to participate at the Tournament Director’s discretion. Their average will be
            determined by the Entering Average guide lines.
          </li>
          <li>
            The team captain (for team submissions) or individuals' online submission of the entry form acknowledges
            that they have read the rules. All other USBC rules will apply.
          </li>

          <h2>
            Fees
          </h2>
          <li>
            Only online registration will be accepted. Entry fees are payable online using PayPal. This is the preferred
            method. Once registration is complete you will receive an invoice to pay through PayPal.
          </li>
          <li>
            Entries received on or before 11:59 pm March, 27th 2022 and paid in full will pay the early entry fee
            $110.00 per bowler. Entries received and paid for after that will have a $10 late fee applied.
          </li>
          <li>
            The official deadline for entries is 11:59pm April 3, 2022. Final payment is due 11:59 pm April 10, 2022.
          </li>
          <li>
            A full team is not officially registered until all team members' payments are received by the cut off date.
          </li>
          <li>
            Applications are subject to return if tournament fills. No walk-ins, fax, e-mail or telephone entries will
            be accepted. Prize money is paid within 30 days of the close of the tournament.
          </li>
          <li>
            Entry Free Breakdown{' '}
            <small>(All amounts are in US Dollars)</small>
            <dl className={styles.FeeBreakdown}>
              <dt>$27</dt>
              <dd>Lineage (includes sales tax)</dd>
              <dt>$55</dt>
              <dd>Prize Fund</dd>
              <dt>$0.75</dt>
              <dd>IGBO Donation</dd>
              <dt>$2.25</dt>
              <dd>Tournament Expenses (postage, shipping, etc.)</dd>
              <dt>$25</dt>
              <dd>Banquet</dd>
              <dt className={styles.Total}>$110</dt>
              <dd className={styles.Total}>Total Standard Entry Fee</dd>
            </dl>
            Non-participant fee
            <dl className={styles.FeeBreakdown}>
              <dt>$40</dt>
              <dd>Banquet attendance</dd>
            </dl>
          </li>
        </ol>

        <h2>
          9-Pin No Tap Tournament Rules
        </h2>
        <ol>
          <li>
            We will be offering a 9-Pin No-Tap tournament on Friday, April 22, 2022.
          </li>
          <li>
            Sign-up will be between 5:00 p.m. and 6:45 p.m. during OKCLASSIC registration at Windsor Lanes. The 9
            Pin-No-Tap Tournament will begin at 7:00 p.m.
          </li>
          <li>
            Participation will be available to all participants and friends of OKCLASSIC. Bowling in the OKCLASSIC
            Tournament is not mandatory to bowl in the 9-Pin No-Tap.
          </li>
          <li>
            9-Pin No Tap will be a scratch event.
          </li>
          <li>
            The prize fund returned will be 100%. Total Entry Fee Payout is 1:10
          </li>
        </ol>


        <h2>
          Ray Nastasi Scratch Masters
        </h2>
        <ol>
          <li>
            OKCLASSIC's Ray Nastasi Scratch Masters is a mixed competition open to all genders. It will be offered to
            all participants using five divisions as determined by each participant's entering average.
          </li>
          <li>
            Entry Fee
            <dl className={styles.Divisions}>
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
          </li>
          <li>
            Tournament directors shall use the same average assigned for the overall tournament to place bowlers in
            their respective divisions. Bowlers' scores from the Doubles and Team events will be used to determine the
            top eight qualifiers in each division. The top eight bowlers from each division will compete in a low man
            out competition for prize money. (If there are not enough entries for a division, other options will be used
            at the time of the tournament.) Entry fee will be returned 100%
          </li>
          <li>
            Top 8 bowlers will bowl one game on a pair of lanes with 2 lowest scoring bowlers dropped from competition.
          </li>
          <li>
            Remaining 6 will move on to bowl one game with 2 lowest scoring bowlers dropped from competition.
          </li>
          <li>
            Top 4 will move on to the next game with 2 lowest scoring bowlers dropped from competition.
          </li>
          <li>
            Bowlers will move a pair after every round. Final Round all 3 games will be bowled on the same pair.
          </li>
          <li>
            Final 2 bowlers will compete in a best 2 out of 3 matchup. Deciding by wins. If any games during scratch
            masters end in a tie to decide a winning match a 9th and 10th frame roll off will decide the winner.
          </li>
          <li>
            Check-in for the Ray Nastasi Scratch Masters must be completed 30 minutes after last ball of singles is
            thrown. Actual start time of competition will be at the discretion of tournament officials. Check In must be
            completed by the qualifying bowler. No representative will be allowed to check-in for another bowler.
            Bowlers that do not check in will be disqualified with an alternate taking their place. Once checked in,
            qualifying bowlers are not permitted to leave the bowling center prior to the official start time of the
            event. This event is scheduled at Windsor Lanes.
          </li>
          <li>
            Scores bowled during the Ray Nastasi Scratch Masters event will not be used to calculate the All-Events
            category for the OKCLASSIC tournament.
          </li>
          <li>
            Scores bowled during the Ray Nastasi Scratch Masters will be used towards your IGBO average.
          </li>
        </ol>

      </div>
    </Layout>
  )
    ;
};

export default rules;
