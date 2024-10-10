import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { determineCurrentTimezone, renderLineBreak } from '@/lib/date-and-time/dateAndTime';
import Image from 'next/image';

function TimeDifference({ country1GeneralInfo, country2GeneralInfo, country1WeatherInfo, country2WeatherInfo, timeDifference, aheadOrBehind, country1URLCase, country2URLCase }) {
  const country1 = country1GeneralInfo.country;
  const country1CurrentDate = country1WeatherInfo?.currentDate;
  const country1CurrentTime = country1WeatherInfo?.currentTime;
  const country1TotalTimezonesArray = country1GeneralInfo.totalTimezones.split('<br />')
  const country1DST = country1GeneralInfo.DST;
  const country1DSTStart = country1GeneralInfo.DSTStart;
  const country1DSTEnd = country1GeneralInfo.DSTEnd;
  const country1DSTDuration = country1GeneralInfo.DSTDuration;
  const country1TimezoneNormal = country1GeneralInfo.timezoneNormal
  const country1TimezoneSummer = country1GeneralInfo.timezoneSummer
  const country1CurrentTimezone = determineCurrentTimezone(country1DSTStart, country1DSTEnd, country1TimezoneNormal, country1TimezoneSummer);

  const country2 = country2GeneralInfo.country;
  const country2CurrentDate = country2WeatherInfo?.currentDate;
  const country2CurrentTime = country2WeatherInfo?.currentTime;
  const country2TotalTimezonesArray = country2GeneralInfo.totalTimezones.split('<br />')
  const country2DST = country2GeneralInfo.DST;
  const country2DSTStart = country2GeneralInfo.DSTStart;
  const country2DSTEnd = country2GeneralInfo.DSTEnd;
  const country2DSTDuration = country2GeneralInfo.DSTDuration;
  const country2TimezoneNormal = country2GeneralInfo.timezoneNormal
  const country2TimezoneSummer = country2GeneralInfo.timezoneSummer
  const country2CurrentTimezone = determineCurrentTimezone(country2DSTStart, country2DSTEnd, country2TimezoneNormal, country2TimezoneSummer);

  return (
    <>
      <div className="time-differences-comparison">
        <h2 className="pages-h2">Time Differences Comparison</h2>
      </div>

      <div className="time-factors-comparison">
        <table className="indicators-first-entity-and-second-entity-div1">
          <thead>
            <tr className="first-tr">
              <th>
                <div className="heading-map-name-flag">
                  <div className="right-indicator">
                    <Image
                      src="/images/indicators-right-image.png"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Image representing an indicator"
                    />
                  </div>

                  <div className="indicator-text">Indicators</div>

                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${country1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {country1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${country2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {country2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${country2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country2URLCase}`}
                    />
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Current Date</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/current-date-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of current date of any specific country"
                  />
                </div>
              </td>
              <td className="current-date-answer-first-entity all-indicator-answers">
                {country1CurrentDate ?? 'Yet to Update'}
              </td>
              <td className="current-date-answer-second-entity all-indicator-answers">
                {country2CurrentDate ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Current Time</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/current-time-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of current time of any specific country"
                  />
                </div>
              </td>
              <td className="current-time-answer-first-entity all-indicator-answers">
                {country1CurrentTime ?? 'Yet to Update'}
              </td>
              <td className="current-time-answer-second-entity all-indicator-answers">
                {country2CurrentTime ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Timezones</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/total-timezones-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of timezones of any specific country"
                  />
                </div>
              </td>
              <td className="timezones-first-entity all-indicator-answers">
                {renderLineBreak(country1TotalTimezonesArray) ??
                  'Yet to Update'}
              </td>
              <td className="timezones-second-entity all-indicator-answers">
                {renderLineBreak(country2TotalTimezonesArray) ??
                  'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Current Timezone</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/current-total-timezones-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of current timezone of any specific country"
                  />
                </div>
              </td>
              <td className="current-timezone-answer-first-entity all-indicator-answers">
                {renderLineBreak(country1CurrentTimezone.split('<br />')) ??
                  'Yet to Update'}
              </td>
              <td className="current-timezone-answer-second-entity all-indicator-answers">
                {renderLineBreak(country2CurrentTimezone.split('<br />')) ??
                  'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Daylight Saving Time</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/internet-tld-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of Daylight Saving Time of any specific country"
                  />
                </div>
              </td>
              <td className="dst-timezone-answer-first-entity all-indicator-answers">
                {country1DST ?? 'Yet to Update'}
              </td>
              <td className="dst-timezone-answer-second-entity all-indicator-answers">
                {country2DST ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Daylight Saving Time Start
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/dst-start-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of Daylight Saving Time Start of any specific country"
                  />
                </div>
              </td>

              <td className="dst-start-answer-first-entity all-indicator-answers">
                {country1DSTStart ?? 'Yet to Update'}
              </td>
              <td className="dst-start-answer-second-entity all-indicator-answers">
                {country2DSTStart ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Daylight Saving Time End</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/dst-end-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of Daylight Saving Time End of any specific country"
                  />
                </div>
              </td>
              <td className="dst-end-answer-first-entity all-indicator-answers">
                {country1DSTEnd ?? 'Yet to Update'}
              </td>
              <td className="dst-end-answer-second-entity all-indicator-answers">
                {country2DSTEnd ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">
                  Daylight Saving Time Duration
                </div>
                <div className="basic-information-images">
                  <Image
                    src="/images/dst-duration-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of Daylight Saving Time Duration of any specific country"
                  />
                </div>
              </td>
              <td className="dst-duration-answer-first-entity all-indicator-answers">
                {country1DSTDuration ?? 'Yet to Update'}
              </td>
              <td className="dst-duration-answer-second-entity all-indicator-answers">
                {country2DSTDuration ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {(country1WeatherInfo || country2WeatherInfo) &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            {country1WeatherInfo && (
              <p>
                {' '}
                The current time and date in{' '}
                <strong>
                  {' '}
                  <span className="first-entity-name-pages-paragraph">
                    {country1}{' '}
                  </span>
                </strong>{' '}
                is{' '}
                <strong>
                  [
                  <span className="current-time-answer-first-entity">
                    {country1CurrentTime}
                  </span>
                  ], [
                  <span className="current-date-answer-first-entity">
                    {country1CurrentDate}
                  </span>{' '}
                  ].{' '}
                </strong>
              </p>
            )}

            {country2WeatherInfo && (
              <p>
                The current time and date in{' '}
                <strong>
                  <span className="second-entity-name-pages-paragraph">
                    {country2}{' '}
                  </span>
                </strong>
                is{' '}
                <strong>
                  [
                  <span className="current-time-answer-second-entity">
                    {country2CurrentTime}
                  </span>
                  ], [
                  <span className="current-date-answer-second-entity">
                    {country2CurrentDate}
                  </span>
                  ].{' '}
                </strong>{' '}
              </p>
            )}

            {country1WeatherInfo && country2WeatherInfo && (
              <>
                {aheadOrBehind === 'same time' ? (
                  <p>
                    So the current time and date in
                    <strong>
                      <span className="first-entity-name-pages-paragraph">
                        {' '}
                        {country1}{' '}
                      </span>
                    </strong>
                    and{' '}
                    <strong>
                      <span className="second-entity-name-pages-paragraph">
                        {country2}{' '}
                      </span>
                    </strong>
                    are same.
                  </p>
                ) : (
                  <p>
                    <strong>
                      <span className="first-entity-name-pages-paragraph">
                        {country1}{' '}
                      </span>
                    </strong>
                    is{' '}
                    <strong>
                      [{' '}
                      <span className="time-difference">
                        {' '}
                        {timeDifference}{' '}
                      </span>{' '}
                      ]
                    </strong>
                    <span className="ahead-or-behind"> {aheadOrBehind} </span>{' '}
                    of{' '}
                    <strong>
                      <span className="second-entity-name-pages-paragraph">
                        {country2}
                      </span>
                      .
                    </strong>
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      }

      <AdsHeaderBanner />
    </>
  );
}

export default TimeDifference;
