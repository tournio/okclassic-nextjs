import styles from './Spotlight.module.scss';
import Image from "next/image";
import wrappedGift from "../../images/wrapped-gift.jpg";

const Spotlight = () => {
  // const REGISTER_URL = 'https://www.tourn.io/tournaments/okc-2024';

  // const prelimText = <p>
  //   We&apos;re working hard putting together the OKClassic 2024, with several fun and fundraiser events happening in the meantime. Keep your eyes peeled!
  // </p>;

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

  const allDone = (
    <div className={'row'}>
      <div className={'col-5 col-md-3'}>
        <Image src={wrappedGift}
               className={'img-fluid'}
               alt={"A wrapped gift"}>
        </Image>
      </div>
      <p className={'col'}>
        That&apos;s a wrap! What a great weekend of tournament bowling. We hope everyone had a fantastic time! Results will be posted here
        as soon as they are ready, keep your eyes peeled!
      </p>
    </div>
  );

  return (
    <section className={`${styles.Spotlight}`}>
      <div className={``}>
        {/*{prelimText}*/}
        {/*{registrationOpen}*/}
        {/*{thisWeekend}*/}
        {allDone}
      </div>
    </section>
  );
}

export default Spotlight;
