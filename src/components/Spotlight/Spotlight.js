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

  return (
    <section className={`${styles.Spotlight}`}>
      <div className={``}>
        {/*{prelimText}*/}
        {registrationOpen}
      </div>
    </section>
  );
}

export default Spotlight;
