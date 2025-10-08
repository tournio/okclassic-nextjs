import Image from "next/image";
import wrappedGift from "../../images/wrapped-gift.jpg";
import {REGISTER_URL} from "../../utils/misc";
import styles from './Spotlight.module.scss';

const Spotlight = () => {
  const prelimText = <p>
    We&apos;re working hard putting together the next OKClassic, with several fun and fundraiser events happening in the meantime. Keep your eyes peeled for what we&apos;ve got cooking!
  </p>;

  // const registrationOpen = (
  //   <>
  //     <p>
  //       Registration is open, for bowlers with and without teams!
  //     </p>
  //     <p>
  //       <a href={REGISTER_URL}
  //          className={`btn btn-lg btn-primary`}
  //       >
  //         Register Online
  //       </a>
  //     </p>
  //   </>
  // );

  // const thisWeekend = (
  //   <p>
  //     It&apos;s tournament weekend, y&apos;ll! We can&apos;t wait to see everyone!
  //   </p>
  // );

  // const allDone = (
  //   <div className={'row'}>
  //     <div className={`col`}>
  //       <p>
  //         That&apos;s a wrap! What a great weekend of tournament bowling. We hope everyone had a fantastic time. We&apos;re already looking forward to 2026...
  //       </p>
  //       <p>
  //         <a href={'/results'} className={`btn btn-info`}>
  //           Results
  //         </a>
  //       </p>
  //     </div>
  //   </div>
  // );

  return (
    <section className={`${styles.Spotlight}`}>
      <div className={``}>
        {prelimText}
        {/*{registrationOpen}*/}
        {/*{thisWeekend}*/}
        {/*{allDone}*/}
      </div>
    </section>
  );
}

export default Spotlight;
