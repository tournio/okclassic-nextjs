import styles from './Spotlight.module.scss';

const Spotlight = () => {
  const REGISTER_URL = 'https://www.tourn.io/tournaments/okc-2024';

  const prelimText = <p>
    We&apos;re working hard putting together the OKClassic 2024, with several fun and fundraiser events happening in the meantime. Keep your eyes peeled!
  </p>;

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

  const thisWeekend = (
    <p>
      It&apos;s tournament weekend, y&apos;ll! We can&apos;t wait to see everyone!
    </p>
  );

  return (
    <section className={`${styles.Spotlight}`}>
      <div className={``}>
        {/*{prelimText}*/}
        {/*{registrationOpen}*/}
        {thisWeekend}
      </div>
    </section>
  );
}

export default Spotlight;
