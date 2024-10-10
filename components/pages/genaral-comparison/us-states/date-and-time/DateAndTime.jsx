import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { determineCurrentTimezone, renderLineBreak } from "@/lib/date-and-time/dateAndTime";
import Image from "next/image";

function DateAndTime({ state1WeatherInfo, state2WeatherInfo, state1GeneralInfo, state2GeneralInfo, timeDifference, aheadOrBehind, state1URLCase, state2URLCase }) {
  const state1 = state1GeneralInfo.state
  const state1CurrentDate = state1WeatherInfo?.currentDate;
  const state1CurrentTime = state1WeatherInfo?.currentTime;
  const state1TotalTimezonesArray = state1GeneralInfo.totalTimezones.split('<br />');
  const state1DSTStart = state1GeneralInfo.DSTStart;
  const state1DSTEnd = state1GeneralInfo.DSTEnd;
  const state1DSTDuration = state1GeneralInfo.DSTDuration;
  const state1DST = state1DSTStart === 'DST Not Observed' ? 'Not Observed' : 'Observed'
  const state1TimezoneNormal = state1GeneralInfo.timezoneNormal
  const state1TimezoneSummer = state1GeneralInfo.timezoneSummer
  const state1CurrentTimezone = determineCurrentTimezone(state1DSTStart, state1DSTEnd, state1TimezoneNormal, state1TimezoneSummer);

  const state2 = state2GeneralInfo.state
  const state2CurrentDate = state2WeatherInfo?.currentDate;
  const state2CurrentTime = state2WeatherInfo?.currentTime;
  const state2TotalTimezonesArray = state2GeneralInfo.totalTimezones.split('<br />');
  const state2DSTStart = state2GeneralInfo.DSTStart;
  const state2DSTEnd = state2GeneralInfo.DSTEnd;
  const state2DSTDuration = state2GeneralInfo.DSTDuration;
  const state2DST = state2DSTStart === 'DST Not Observed' ? 'Not Observed' : 'Observed'
  const state2TimezoneNormal = state2GeneralInfo.timezoneNormal
  const state2TimezoneSummer = state2GeneralInfo.timezoneSummer
  const state2CurrentTimezone = determineCurrentTimezone(state2DSTStart, state2DSTEnd, state2TimezoneNormal, state2TimezoneSummer);

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
                      src={`/images/${state1URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${state1URLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state1}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state1URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${state1URLCase}`}
                    />
                  </div>
                </div>
              </th>

              <th>
                <div className="heading-map-name-flag">
                  <div className="second-entity-map-pages-comparison">
                    <Image
                      src={`/images/${state2URLCase}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of map of ${state2URLCase}`}
                    />
                  </div>

                  <div className="second-entity-name-pages-comparison">
                    {' '}
                    {state2}{' '}
                  </div>

                  <div className="second-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${state2URLCase}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${state2URLCase}`}
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
                {state1CurrentDate ?? 'Yet to Update'}
              </td>
              <td className="current-date-answer-second-entity all-indicator-answers">
                {state2CurrentDate ?? 'Yet to Update'}
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
                {state1CurrentTime ?? 'Yet to Update'}
              </td>
              <td className="current-time-answer-second-entity all-indicator-answers">
                {state2CurrentTime ?? 'Yet to Update'}
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
                {renderLineBreak(state1TotalTimezonesArray) ??
                  'Yet to Update'}
              </td>
              <td className="timezones-second-entity all-indicator-answers">
                {renderLineBreak(state2TotalTimezonesArray) ??
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
                {renderLineBreak(state1CurrentTimezone.split('<br />')) ??
                  'Yet to Update'}
              </td>
              <td className="current-timezone-answer-second-entity all-indicator-answers">
                {renderLineBreak(state2CurrentTimezone.split('<br />')) ??
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
                {state1DST ?? 'Yet to Update'}
              </td>
              <td className="dst-timezone-answer-second-entity all-indicator-answers">
                {state2DST ?? 'Yet to Update'}
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
                {state1DSTStart ?? 'Yet to Update'}
              </td>
              <td className="dst-start-answer-second-entity all-indicator-answers">
                {state2DSTStart ?? 'Yet to Update'}
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
                {state1DSTEnd ?? 'Yet to Update'}
              </td>
              <td className="dst-end-answer-second-entity all-indicator-answers">
                {state2DSTEnd ?? 'Yet to Update'}
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
                {state1DSTDuration ?? 'Yet to Update'}
              </td>
              <td className="dst-duration-answer-second-entity all-indicator-answers">
                {state2DSTDuration ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {(state1WeatherInfo || state2WeatherInfo) &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            {state1WeatherInfo && (
              <p>
                {' '}
                The current time and date in{' '}
                <strong>
                  {' '}
                  <span className="first-entity-name-pages-paragraph">
                    {state1}{' '}
                  </span>
                </strong>{' '}
                is{' '}
                <strong>
                  [
                  <span className="current-time-answer-first-entity">
                    {state1CurrentTime}
                  </span>
                  ], [
                  <span className="current-date-answer-first-entity">
                    {state1CurrentDate}
                  </span>{' '}
                  ].{' '}
                </strong>
              </p>
            )}

            {state2WeatherInfo && (
              <p>
                The current time and date in{' '}
                <strong>
                  <span className="second-entity-name-pages-paragraph">
                    {state2}{' '}
                  </span>
                </strong>
                is{' '}
                <strong>
                  [
                  <span className="current-time-answer-second-entity">
                    {state2CurrentTime}
                  </span>
                  ], [
                  <span className="current-date-answer-second-entity">
                    {state2CurrentDate}
                  </span>
                  ].{' '}
                </strong>{' '}
              </p>
            )}

            {state1WeatherInfo && state2WeatherInfo && (
              <>
                {aheadOrBehind === 'same time' ? (
                  <p>
                    So the current time and date in
                    <strong>
                      <span className="first-entity-name-pages-paragraph">
                        {' '}
                        {state1}{' '}
                      </span>
                    </strong>
                    and{' '}
                    <strong>
                      <span className="second-entity-name-pages-paragraph">
                        {state2}{' '}
                      </span>
                    </strong>
                    are same.
                  </p>
                ) : (
                  <p>
                    <strong>
                      <span className="first-entity-name-pages-paragraph">
                        {state1}{' '}
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
                        {state2}
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

export default DateAndTime