import styles from './Spotlight.module.scss';

const Spotlight = () => {
  const REGISTER_URL = 'https://www.tourn.io/tournaments/okclassic-2024';

  const prelimText = <p>
    We&apos;re working hard putting together the OKClassic 2024, with several fun and fundraiser events happening in the meantime. Keep your eyes peeled!
  </p>;

  const registrationOpen = (
    <>
      <p>
        Registration is open.
      </p>
      <p>
        <a href={REGISTER_URL}
           className={``}
        >
          Register Online
        </a>
      </p>
    </>
  );

  return (
    <section className={`${styles.Spotlight}`}>
      <div className={``}>
        {prelimText}
        {/*{registrationOpen}*/}
      </div>
    </section>
  );
}

export default Spotlight;
