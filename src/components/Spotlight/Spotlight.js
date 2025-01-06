import Image from "next/image";
import wrappedGift from "../../images/wrapped-gift.jpg";
import {REGISTER_URL} from "../../utils/misc";
import styles from './Spotlight.module.scss';

const Spotlight = () => {
  // const prelimText = <p>
  //   We&apos;re working hard putting together the 35th OKClassic, with several fun and fundraiser events happening in the meantime. Keep your eyes peeled for what we&apos;ve got cooking!
  // </p>;

  const registrationOpen = (
    <>
      <p>
        Registration is open, for bowlers with and without teams!
      </p>
      <p>
        <a href={REGISTER_URL}
           className={`btn btn-lg btn-primary`}
        >
          Register Online
        </a>
      </p>
    </>
  );

  // const thisWeekend = (
  //   <p>
  //     It&apos;s tournament weekend, y&apos;ll! We can&apos;t wait to see everyone!
  //   </p>
  // );

  // const allDone = (
  //   <div className={'row'}>
  //     <div className={'col-5 col-md-3'}>
  //       <Image src={wrappedGift}
  //              className={'img-fluid'}
  //              alt={"A wrapped gift"}>
  //       </Image>
  //       <a title={"Photo by Nina Mercado on Unsplash"}
  //          className={"d-block d-md-none"}
  //         href="https://unsplash.com/@nina_mercado?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
  //         <span className={'bi bi-camera'} aria-hidden={true}>
  //         </span>
  //         <span className={'visually-hidden'}>Photo by Nina Mercado on Unsplash</span>
  //       </a>
  //       <span className={`d-none d-md-block ${styles.PhotoCredit}`}>
  //         Photo by <a
  //           href="https://unsplash.com/@nina_mercado?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nina Mercado</a> on <a
  //           href="https://unsplash.com/photos/black-and-brown-gift-box-on-white-and-black-floral-textile-_qN6tmGjmtg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  //       </span>
  //     </div>
  //     <div className={`col`}>
  //       <p>
  //         That&apos;s a wrap! What a great weekend of tournament bowling. We hope everyone had a fantastic time!
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
        {/*{prelimText}*/}
        {registrationOpen}
        {/*{thisWeekend}*/}
        {/*{allDone}*/}
      </div>
    </section>
  );
}

export default Spotlight;
