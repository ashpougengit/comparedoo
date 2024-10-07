import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { convertDateToTimestamp, determineCurrentTimezone, renderTimezones } from "@/lib/date-and-time/dateAndTime";
import Image from "next/image";

function Time({ slug1, slug2, slug1GeneralInfo, slug2GeneralInfo, slug1WeatherInfo, slug2WeatherInfo, timeDifference, aheadOrBehind, slug1URLCase, slug2URLCase }) {
  const slug1CurrentDate = slug1WeatherInfo?.currentDate;
  const slug1CurrentTime = slug1WeatherInfo?.currentTime;
  const slug1TotalTimezonesArray = slug1GeneralInfo.totalTimezones.split('<br />');
  const slug1DSTStart = slug1GeneralInfo.DSTStart;
  const slug1DSTEnd = slug1GeneralInfo.DSTEnd;
  const slug1DSTDuration = slug1GeneralInfo.DSTDuration;
  const slug1DST = slug1DSTStart === 'DST Not Observed' ? 'Not Observed' : 'Observed'
  const slug1TimezoneNormal = slug1GeneralInfo.timezoneNormal
  const slug1TimezoneSummer = slug1GeneralInfo.timezoneSummer
  const slug1CurrentTimezone = determineCurrentTimezone(slug1DSTStart, slug1DSTEnd, slug1TimezoneNormal, slug1TimezoneSummer);

  const slug2CurrentDate = slug2WeatherInfo?.currentDate;
  const slug2CurrentTime = slug2WeatherInfo?.currentTime;
  const slug2TotalTimezonesArray = slug2GeneralInfo.totalTimezones.split('<br />');
  const slug2DSTStart = slug2GeneralInfo.DSTStart;
  const slug2DSTEnd = slug2GeneralInfo.DSTEnd;
  const slug2DSTDuration = slug2GeneralInfo.DSTDuration;
  const slug2DST = slug2DSTStart === 'DST Not Observed' ? 'Not Observed' : 'Observed'
  const slug2TimezoneNormal = slug2GeneralInfo.timezoneNormal
  const slug2TimezoneSummer = slug2GeneralInfo.timezoneSummer
  const slug2CurrentTimezone = determineCurrentTimezone(slug2DSTStart, slug2DSTEnd, slug2TimezoneNormal, slug2TimezoneSummer);

  return (
    <>
      <AdsHeaderBanner />

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
                      src={`/images/${slug1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${slug1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {slug1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${slug1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${slug2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {slug2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${slug2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${slug2URLCase}`}
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
                {slug1CurrentDate ?? 'Yet to Update'}
              </td>
              <td className="current-date-answer-second-entity all-indicator-answers">
                {slug2CurrentDate ?? 'Yet to Update'}
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
                {slug1CurrentTime ?? 'Yet to Update'}
              </td>
              <td className="current-time-answer-second-entity all-indicator-answers">
                {slug2CurrentTime ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Timezones</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/timezone-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of timezones of any specific country"
                  />
                </div>
              </td>
              <td className="timezones-first-entity all-indicator-answers">
                {renderTimezones(slug1TotalTimezonesArray) ?? 'Yet to Update'}
              </td>
              <td className="timezones-second-entity all-indicator-answers">
                {renderTimezones(slug2TotalTimezonesArray) ?? 'Yet to Update'}
              </td>
            </tr>

            <tr>
              <td className="basic-info">
                <div className="all-indicators">Current Timezone</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/current-timezone-image.png"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Visual representation of current timezone of any specific country"
                  />
                </div>
              </td>
              <td className="current-timezone-answer-first-entity all-indicator-answers">
                {renderTimezones(slug1CurrentTimezone.split('<br />')) ??
                  'Yet to Update'}
              </td>
              <td className="current-timezone-answer-second-entity all-indicator-answers">
                {renderTimezones(slug2CurrentTimezone.split('<br />')) ??
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
                {slug1DST ?? 'Yet to Update'}
              </td>
              <td className="dst-timezone-answer-second-entity all-indicator-answers">
                {slug2DST ?? 'Yet to Update'}
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
                {slug1DSTStart ?? 'Yet to Update'}
              </td>
              <td className="dst-start-answer-second-entity all-indicator-answers">
                {slug2DSTStart ?? 'Yet to Update'}
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
                {slug1DSTEnd ?? 'Yet to Update'}
              </td>
              <td className="dst-end-answer-second-entity all-indicator-answers">
                {slug2DSTEnd ?? 'Yet to Update'}
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
                {slug1DSTDuration ?? 'Yet to Update'}
              </td>
              <td className="dst-duration-answer-second-entity all-indicator-answers">
                {slug2DSTDuration ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {(slug1WeatherInfo || slug2WeatherInfo) &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            {slug1WeatherInfo && (
              <p>
                {' '}
                The current time and date in{' '}
                <strong>
                  {' '}
                  <span className="first-entity-name-pages-paragraph">
                    {slug1}{' '}
                  </span>
                </strong>{' '}
                is{' '}
                <strong>
                  [
                  <span className="current-time-answer-first-entity">
                    {slug1CurrentTime}
                  </span>
                  ], [
                  <span className="current-date-answer-first-entity">
                    {slug1CurrentDate}
                  </span>{' '}
                  ].{' '}
                </strong>
              </p>
            )}

            {slug2WeatherInfo && (
              <p>
                The current time and date in{' '}
                <strong>
                  <span className="second-entity-name-pages-paragraph">
                    {slug2}{' '}
                  </span>
                </strong>
                is{' '}
                <strong>
                  [
                  <span className="current-time-answer-second-entity">
                    {slug2CurrentTime}
                  </span>
                  ], [
                  <span className="current-date-answer-second-entity">
                    {slug2CurrentDate}
                  </span>
                  ].{' '}
                </strong>{' '}
              </p>
            )}

            {slug1WeatherInfo && slug2WeatherInfo && (
              <>
                {aheadOrBehind === 'same time' ? (
                  <p>
                    So the current time and date in
                    <strong>
                      <span className="first-entity-name-pages-paragraph">
                        {' '}
                        {slug1}{' '}
                      </span>
                    </strong>
                    and{' '}
                    <strong>
                      <span className="second-entity-name-pages-paragraph">
                        {slug2}{' '}
                      </span>
                    </strong>
                    are same.
                  </p>
                ) : (
                  <p>
                    <strong>
                      <span className="first-entity-name-pages-paragraph">
                        {slug1}{' '}
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
                        {slug2}
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
    </>
  );
}

export default Time