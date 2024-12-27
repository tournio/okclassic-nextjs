import styles from './Rules.module.scss';
import ReactMarkdown from "react-markdown";
import React from "react";

const Rules = () => {
  const sections = [
    {
      header: '',
      markdown: `
OKCLASSIC 2025 is a USBC-certified tournament, open to bowlers of any gender identification, by invitation only. Each participant may enter only once and cash only once. The Tournament Director reserves the right to refuse any application.

The number of games for each event of Singles, Doubles &amp; Team will be a set of three. A team will consist of four members, any mix of genders. Partial team entries are acceptable, but must be flexible as to whom they bowl with, as long as they can be accommodated.

Space is limited to 38 teams/152 bowlers.

All monetary awards are based on total pins plus handicap for each event. Awards will be paid to the highest scores in Singles, Doubles, & Team and Individual All-Events. The minimum payout ratio is 1:10, ties result in equal division of prizes. Prize fund returned 100%.

The Tournament Director reserves the right to dismiss and/or disqualify any bowler, at any time during the tournament. If a bowler is dismissed or disqualified, NO REFUND will be given. All decisions of the Tournament Director are final.
      `,
    },
    {
      header: 'Entering Average',
      markdown: `
1. Bowlers will use a combined (21 game minimum) standard composite average of:
    1. USBC 2024-2025 Standard Composite Average;
    1. IGBO Tournament Average for the last 12 months, if available.
1. If a bowler has no USBC 2024-2025 average and/or IGBO Tournament Average, the bowler must use an average calculated in the order listed below:
    1. A composite of all current USBC certified league averages as of March 16, 2025, provided that a minimum of 21 games have been bowled across all leagues. It is the bowler&apos;s responsibility to provide standings sheets (signed by a league officer), or information to retrieve them online, for ALL leagues bowled as of March 16, 2025.
    1. USBC 2023-2024 Standard Composite Average (minimum of 21 games).
    1. If none of the above averages are available, then the bowler will use a 235 average for the tournament
1. PBA/PWBA/Team USA members will use a minimum average of 210.
1. Only 10-pin averages will be used.
1. Youth and collegiate bowling averages will not be used for tournament averages.  Bowlers must have an adult league average of 21 games or more by March 16, 2025, or will bowl with a 235 average.
1. It is the bowler&apos;s responsibility to supply complete and accurate information.
1. Per USBC Rule 319a, item 2: When the previous season’s average is used, and at the time of bowling an entrant has a current average for 21 or more games that is 10 pins or more higher than the prior season&apos;s average, the current average must be used.
1. Per USBC Rule 319a, item 3: Bowlers are responsible for verifying his/her own average, whether submitted by the bowler, the team captain or others. If the submitted average is lower than required and results in a lower classification or more handicap, the bowler&apos;s score is disqualified. If the submitted average is higher than required, prize winnings will be based on the submitted average. In the case of a team of two or more bowlers, the averages will be combined to determine if the correct total is higher or lower than the submitted total.
1. Per USBC Rule 319c: The average of a bowler may be adjusted upward before participation in any event. If the assigned average is not accepted by the bowler, the entry fee shall be refunded.
1. Unless the tournament rules state otherwise, in a handicap or classified tournament, a bowler who has had his/her average adjusted/rerated in accordance with this rule is required to report all previous assigned average adjustments/rerates, whether the bowler accepted the adjustment/rerate or not, at the time of bowling.
1. If you have any questions regarding the USBC rules related to averages for tournaments (Rule 319), you can find the current USBC Playing Rules at [https://www.bowl.com/Rules/Rules_Home/USBC_Playing_Rules/](https://www.bowl.com/Rules/Rules_Home/USBC_Playing_Rules/)
1. Tournament Average relief can only be considered under USBC General Playing Rules 4e.
`,
    },
    {
      header: 'Handicap',
      markdown: `
1. A bowler&apos;s handicap for the OKCLASSIC will be set at 90% of the difference between the bowler&apos;s scratch entering average and 235, rounded down. An individual’s handicap will be capped at 100 pins per game. Negative handicap will not apply.
`,
    },
    {
      header: 'Other Entry Rules',
      markdown: `
1. Only one entry per bowler per event in Singles, Doubles, and Team.
1. Doubles partnerships must come from the same team.
1. Check-in time for all events is thirty (30) minutes prior to the starting time. Late bowlers will begin in the frame in which they are ready to begin bowling. A zero (0) score will be entered for each frame missed.
`,
    },
    {
      header: 'Eligibility',
      markdown: `
1.  Entrant must be a member of USBC, and provide proof of membership and certification number with their entry. Non-members must pay a Participation Fee of $5.00 to participate (USBC Rule 301b).
1. Entrants must be a member of an IGBO Member League, or current IGBO Associate Member. If not already an IGBO member, entrant must apply for Associate Membership, and pay the $25.00 IGBO fee prior to bowling.
1. Only one (1) PBA/PWBA/Team USA member is allowed per team.
1. Substitutes will be allowed to participate at the Tournament Director’s discretion. Their average will be determined by the *Entering Average* guidelines.
1. The team captain (for team submissions) or individuals&apos; online submission of the entry formacknowledging they have read the rules. All other USBC rules will apply.
`,
    },
    {
      header: 'Fees',
      markdown: `
1. Only online registration will be accepted. Entry fees are payable online using *STRIPE*. This is the preferred method. Once registration is complete you will receive an invoice to pay through *STRIPE*.
1. Entries received at or before 11:59pm March 22, 2025 and paid in full by March 29, 2025, will pay the early entry fee of $120.00 per bowler. Entries received and paid for after that will have a $10 late fee applied.
1. The official deadline for entries is 11:59pm March 30, 2025. Final payment due is 11:59 pm April 6, 2025.
1. Applications are subject to return if tournament fills. No walk-ins, fax, e-mail or telephone entries will be accepted. Prize money is paid within 30 days of the close of the tournament.
1. Entry Free Breakdown (All amounts are in US Dollars)

    $37.50
    : Lineage (includes sales tax)
    
    $53
    : Prize Fund
    
    $2
    : IGBO Fee
    
    $7.50
    : Tournament Expenses (postage, shipping, etc.)
    
    $20
    : Banquet
    
    **$120**
    : Total Standard Entry
`,
    },
    {
      header: '9-Pin No Tap Tournament Rules',
      markdown: `
1. We will be offering a 9-Pin No-Tap tournament on Friday, April 11th, 2025.
1. Sign-up will be between 5:00 p.m. and 6:45 p.m. during OKCLASSIC registration at Windsor Lanes. The 9
Pin-No-Tap Tournament will begin at 7:00 p.m.
1. Participation will be available to all participants and friends of OKCLASSIC. Bowling in the OKCLASSIC
Tournament is not mandatory to bowl in the 9-Pin No-Tap.
1. 9-Pin No Tap will be a scratch event.
1. The prize fund returned will be 100%. Total Entry Fee Payout is 1:10.
1. Bowling lineage ($12.50 per bowler) to be deducted from each entry fee.
`,
    },
  ];

  const scratchMarkdown = `
1. OKCLASSIC&apos;s **Ray Nastasi Scratch Masters** is a mixed competition open to bowlers of any gender identification. It will be offered to all participants using five divisions as determined by each participant&apos;s entering average.
1. Entry Fee:

    $30
    : Division E (0-149)
    
    $35
    : Division D (150-169)
    
    $40
    : Division C (170-189)
    
    $45
    : Division B (190-209)
    
    $50
    : Division A (210+)

1. Tournament directors shall use the same average assigned for the overall tournament to place bowlers in their respective divisions. Bowlers&apos; scores from the Doubles, and Team events will be used to determine the top eight qualifiers in each division. The top eight bowlers from each division will compete in a low-bowler-out competition for prize money. (If there are not enough entries for a division, other options will be used at the time of the tournament.) Entry fee will be returned 100%.
1. Top 8 bowlers will bowl one game on a pair of lanes with 2 lowest scoring bowlers dropped from competition.
1. Remaining 6 will move on to bowl one game with 2 lowest scoring bowlers dropped from competition.
1. Top 4 will move on to the next game with 2 lowest scoring bowlers dropped from competition.
1. Bowlers will move a pair after every round. Final Round all 3 games will be bowled on the same pair.
1. Final 2 bowlers will compete in a best 2 out of 3 matchup. Deciding by wins. If any games during Scratch Masters end in a tie to decide a winning match a 9th and 10th frame roll off will decide the winner.
1. Check-in for the **Ray Nastasi Scratch Masters** must be completed 30 minutes after last ball of singles is thrown. Actual start time of competition will be at the discretion of tournament officials. Check In must be completed by the qualifying bowler. No representative will be allowed to check-in for another bowler. Bowlers who do not check in will be disqualified with an alternate taking his/her place. Once checked in, qualifying bowlers are not permitted to leave the bowling center prior to the official start time of the event. This event is scheduled at AMF Windsor Lanes.
1. Scores bowled during the **Ray Nastasi Scratch Masters** event will not be used to calculate the All-Events category for the OKCLASSIC tournament.
1. Scores bowled during the **Ray Nastasi Scratch Masters** will count towards your IGBO tournament average.
`;

  return (
    <div>
      <section className={styles.Rules}>
        <h3 className={`section-heading`}>
          Tournament Rules
        </h3>

        <p className={`text-md-center`}>
          (Pending finalization)
        </p>

        <ol>
          {sections.map((section, i) => (
            <li key={i}>
              <h4>
                {section.header}
              </h4>

              <ReactMarkdown>{section.markdown}</ReactMarkdown>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.Rules}>
        <h3 className={`section-heading`} id={'scratch_masters_rules'}>
          Ray Nastasi Scratch Masters Rules
        </h3>

        <p className={`text-md-center`}>
          (Also pending finalization)
        </p>

        <ReactMarkdown>{scratchMarkdown}</ReactMarkdown>

      </section>
    </div>
  );
}

export default Rules;
