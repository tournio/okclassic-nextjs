import styles from './Rules.module.scss';
import ReactMarkdown from "react-markdown";
import React from "react";

const Rules = () => {
  const sections = [
    {
      header: 'Logistics',
      markdown: `
1. OKCLASSIC is a USBC-certified, IGBO-affiliated tournament, open to bowlers of any gender identification, by invitation only. Each participant may enter only once and cash only once. The Tournament Director reserves the right to refuse any application.

1. The number of games for each event of Singles, Doubles &amp; Team will be a set of three. A team will consist of four members, any mix of gender. Partial team entries are acceptable, but must be flexible as to whom they bowl with, as long as they can be accommodated.

1. Space is limited to 38 teams/152 bowlers.

1. **NO PERSON IS COMPLETELY REGISTERED UNTIL ENTRY FEE IS PAID. NO DOUBLES OR TEAM IS COMPLETELY REGISTERED UNTIL ALL MEMBERS HAVE PAID THEIR ENTRY FEE.**

1. All monetary awards are based on total pins plus handicap for each event. Awards will be paid to the highest scores in Singles, Doubles, & Team and Individual All-Events. The minimum payout ratio is 1:10, ties result in equal division of prizes. Prize fund returned 100%.

1. The Tournament Director reserves the right to dismiss and/or disqualify any bowler, at any time during the tournament. If a bowler is dismissed or disqualified, NO REFUND will be given. All decisions of the Tournament Director are final.

1. **PROTESTS:** A protest or appeal involving eligibility or playing rules must be filed with the Tournament Management, the local association or USBC by a participating bowler within 72 hours of the close of the tournament. The protest or appeal must be in writing and the grounds for the protest or appeal briefly stated. An appeal regarding the decision of the Tournament Management or local association may be made to USBC. The decision of USBC is final and binding on all involved parties. Prizes for the positions affected will not be distributed until the protest or appeal is resolved.

1. **EQUIPMENT RULE:** All bowling balls must be USBC approved, properly drilled, and meet all USBC requirements. Balls must have been released and available for public purchase no later than the start of OKCLASSIC 2026 on April 11, 2026. Pre-release and test equipment is not permitted.
      `,
    },
    {
      header: 'Entering Average',
      markdown: `
1. Any bowler entering the OKCLASSIC Bowling  Tournament must establish a ten-pin average acceptable to USBC. This excludes USBC Sport, PBA Experience, or any league that identifies itself as having more difficult lane conditions. Averages will be determined as follows:

1. OKCLASSIC  will use a composite of the bowler’s current IGBO TAD Average (minimum 18 games, with tournament scores bowled between April 01, 2025, and March 31, 2026) and the bowler’s 2024–2025 USBC Standard Composite Average (minimum 21 games).

1. If no IGBO TAD Average exists, the 2024–2025 USBC Standard Composite Average (minimum 21 games) will be used.

1. If no 2024–2025 USBC Standard Composite Average exists, the bowler’s highest current league average (minimum 21 games) will be used.

1. If no current league average exists, the 2023–2024 USBC Standard Composite Average will be used.

1. If none of the above exists, the bowler will enter using a scratch score equal to the highest average in the tournament.

1. OKCLASSIC does not recognize the 10-pin rule (USBC Rule 319a.2). However, Tournament Directors reserve the right to renegotiate a bowler at the start of any event.
`,
    },
    {
      header: 'Handicap',
      markdown: `
1. A bowler&apos;s handicap for the OKCLASSIC shall be based upon 90% of the difference between the highest entered average in the tournament and the bowler&apos;s entering tournament average
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
1. The team captain (for team submissions) or individuals&apos; online submission of the entry form acknowledging they have read the rules. All other USBC rules will apply.
`,
    },
    {
      header: 'Fees',
      markdown: `
1. Only online registration will be accepted. Entry fees are payable online using *PayPal*. This is the preferred method. Once registration is complete you will receive an invoice to pay through *PayPal*.
1. Entries received and paid in full at or before 11:59pm March 21, 2026, will pay the early entry fee of $120.00 per bowler. Entries received and/or paid for after that will have a $10 late fee applied.
1. The official deadline for entries is 11:59pm March 29, 2026. Final payment due is 11:59 pm April 5, 2026.
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
      header: 'Optional Scratch',
      markdown: `
1. The entry fee for this optional event is $40.00.
1. This event uses the same average divisions as the Ray Nastasi Scratch Masters.
1. Scores will be based on all scratch scores bowled across the nine (9) games of the Handicap Tournament.
1. Payout will be awarded for **High Scratch Game**, **High Scratch Series**, and **High Scratch All-Events** for each division.
1. Participants in each division are eligible to win only one of these awards.
`,
    },
    {
      header: 'Best 3 of 9',
      markdown: `
1. The entry fee for this optional event is $25.00
1. This event uses the bowlers&apos; highest three (3) handicap games bowled during any of the Singles, Doubles, or Team events.
1. Payout ratio will be no less than 1 in 10.
`,
    },
    {
      header: 'Mystery Score',
      markdown: `
1. The entry fee for this optional event is $20.00.
1. This event applies to games 1 and 2 of each of the Singles, Doubles, and Team events.
1. The last two (2) digits of a score will be randomly generated, and the prize money will be split between all of the entrants with a matching score. We will continue this process until someone wins each game.
`,
    },
    {
      header: '9-Pin No Tap Tournament Rules',
      markdown: `
1. We will be offering a 9-Pin No-Tap tournament on Friday, April 10th, 2026.
1. Sign-up will be between 5:00 p.m. and 6:45 p.m. during OKCLASSIC registration at Windsor Lanes. The 9
Pin-No-Tap Tournament will begin at 7:00 p.m.
1. Participation will be available to all participants and friends of OKCLASSIC. Bowling in the OKCLASSIC
Tournament is not mandatory to bowl in the 9-Pin No-Tap.
1. 9-Pin No Tap will be a scratch event.
1. Bowling lineage ($12.50 per bowler) to be deducted from each entry fee.
1. The prize fund returned will be 100%. Total Entry Fee Payout is 1:10.
`,
    },
  ];

  const scratchMarkdown = `
1. OKCLASSIC&apos;s **Ray Nastasi Scratch Masters** is a mixed competition open to bowlers of any gender identification. It will be offered to all participants using five divisions as determined by each participant&apos;s entering average.
1. Entry Fee:

    $50
    : Division A (210+)
    
    $45
    : Division B (190-209)
    
    $40
    : Division C (170-189)
    
    $35
    : Division D (150-169)

    $30
    : Division E (0-149)
    
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

        {/*<p className={`text-md-center`}>*/}
        {/*  (Pending finalization)*/}
        {/*</p>*/}

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
          Ray Nastasi Scratch Masters
        </h3>

        {/*<p className={`text-md-center`}>*/}
        {/*  (Also pending finalization)*/}
        {/*</p>*/}

        <ReactMarkdown>{scratchMarkdown}</ReactMarkdown>

      </section>
    </div>
  );
}

export default Rules;
