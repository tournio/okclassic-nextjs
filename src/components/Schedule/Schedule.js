import styles from './Schedule.module.scss';
import Link from "next/link";

const Schedule = () => {

  const days = [
    {
      date: 'Friday, April 10',
      events: [
        {
          name: 'Tournament Check-in',
          detail: 'Bowling center main lobby',
          more: '',
          time: '5pm - 9pm',
        },
        {
          name: '9-pin No-tap',
          detail: 'AMF Windsor Lanes',
          more: 'Open to all, including non-tournament bowlers',
          time: '7pm - 9pm',
        },
        {
          name: 'Hospitality Suite',
          detail: 'District Hotel & Resort, Room 3',
          more: 'badge required to enter',
          time: '9pm - midnight',
        },
      ],
    },
    {
      date: 'Saturday, April 11',
      events: [
        {
          name: 'All-Tournament Registration',
          detail: 'Bowling center main lobby',
          more: '',
          time: '8am - 9am',
        },
        {
          name: 'Doubles Event',
          detail: 'AMF Windsor Lanes',
          more: '',
          time: '9am -12pm',
        },
        {
          name: 'Team Event',
          detail: 'AMF Windsor Lanes',
          more: '',
          time: '1pm - 4pm',
        },
        {
          name: 'Hospitality Suite',
          detail: 'District Hotel & Resort, Room 3',
          more: 'badge required to enter',
          time: '7pm - midnight',
        },
      ],
    },
    {
      date: 'Sunday, April 12',
      events: [
        {
          name: 'Singles Event',
          detail: 'AMF Windsor Lanes',
          more: '',
          time: '9am - 12pm',
        },
        {
          name: 'Ray Nastasi Scratch Masters',
          detail: 'AMF Windsor Lanes',
          more: '',
          time: '1pm - 4pm',
        },
        {
          name: 'Banquet and Cocktail Hour',
          detail: 'Yukon Czech Hall',
          more: '205 N Czech Hall Rd, Yukon, OK 73099',
          url: 'https://czechhall.com/',
          time: '5pm - 6pm',
        },
        {
          name: 'Awards Ceremony',
          detail: 'Yukon Czech Hall',
          more: '205 N Czech Hall Rd, Yukon, OK 73099',
          url: 'https://czechhall.com/',
          time: '6pm - 8pm',
        },
      ]
    },
  ]

  return (
    <section className={styles.Schedule} id={'section-schedule'}>
      <h3 className={`section-heading`}>
        Schedule of Events
      </h3>

      <div className={styles.Content}>
        <p className={`${styles.Disclaimer}`}>
          (All times subject to change)
        </p>

        {days.map((day, i) => (
          <div key={`day_${i}`}
               className={`row g-0 ${styles.DayOfEvents}`}>
            <div className={`${styles.Date} col-md-4`}>
              <h4>
                {day.date}
              </h4>
            </div>

            <div className={`col-md-8`}>
              {day.events.map((e, j) => (
                <div key={`event_${j}`}>
                  <div className={`${styles.Event} d-flex justify-content-between`}>
                    <div className={`${styles.Detail}`}>
                      <h5>
                        {e.name}
                      </h5>
                      {e.detail && (
                        <p>
                          {e.detail}
                        </p>
                      )}
                      {e.more && (
                        <p className={styles.More}>
                          {e.url && (
                            <Link href={e.url}
                                  target={'_blank'}>
                              {e.more}
                            </Link>
                          )}
                          {!e.url && e.more}
                        </p>
                      )}
                    </div>
                    <div className={`${styles.Time}`}>
                      <h5>
                        {e.time}
                      </h5>
                    </div>
                  </div>

                  {j+1 < day.events.length && <hr />}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/*<div className={`section-image-background ${styles.BackgroundImage}`}></div>*/}
      {/*<div className={`section-background-shade ${styles.BackgroundShade}`}></div>*/}
    </section>
  )
}

export default Schedule;
