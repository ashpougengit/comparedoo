import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { determineCurrentTimezone, renderTimezones } from "@/lib/date-and-time/dateAndTime";
import Image from "next/image";

function DateAndTime({ generalInfo, weatherInfo, stateURLCase }) {
  const state = generalInfo.state
  const currentDate = weatherInfo?.currentDate;
  const currentTime = weatherInfo?.currentTime;
  const totalTimezonesArray = generalInfo.totalTimezones.split('<br />');
  const DSTStart = generalInfo.DSTStart;
  const DSTEnd = generalInfo.DSTEnd;
  const DSTDuration = generalInfo.DSTDuration;
  const DST = DSTStart === 'DST Not Observed' ? 'Not Observed' : 'Observed'
  const timezoneNormal = generalInfo.timezoneNormal
  const timezoneSummer = generalInfo.timezoneSummer

  const currentTimezone = determineCurrentTimezone(DSTStart, DSTEnd, timezoneNormal, timezoneSummer);
  const currentTimezoneArray = currentTimezone.split('<br />')
  const multipleTimezones = currentTimezoneArray.length > 1

  return (
    <>
      <AdsHeaderBanner />

      <div className="time-differences-comparison">
        <h2 className="pages-h2">Date and Time Information</h2>
      </div>
      <div className="time-factors-comparison">
        <table className="indicators-single-country-divs">
          <thead>
            <tr className="first-tr">
              <th>
                <div className="heading-map-name-flag">
                  <div className="right-indicator">
                    <Image
                      src="/images/indicators-right-image.png"
                      fill
                      alt="Image representing an indicator"
                    />
                  </div>
                  <div className="indicator-text">Indicators</div>
                  <div className="left-indicator">
                    <Image
                      src="/images/indicators-left-image.png"
                      fill
                      alt="Image illustrating an indicator"
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="heading-map-name-flag">
                  <div className="first-entity-map-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-map-small.png`}
                      fill
                      alt={`Pictorial representation of map of ${stateURLCase}`}
                    />
                  </div>

                  <div className="first-entity-name-pages-comparison">
                    {state}
                  </div>

                  <div className="first-entity-flag-pages-comparison">
                    <Image
                      src={`/images/${stateURLCase}-flag-small.png`}
                      fill
                      alt={`Image illustrating the flag of ${stateURLCase}`}
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
                    alt="Visual representation of current date of any specific country"
                  />
                </div>
              </td>
              <td className="current-date-answer-first-entity all-indicator-answers">
                {currentDate ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Current Time</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/current-time-image.png"
                    fill
                    alt="Visual representation of current time of any specific country"
                  />
                </div>
              </td>
              <td className="current-time-answer-first-entity all-indicator-answers">
                {currentTime ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Timezones</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/timezone-image.png"
                    fill
                    alt="Visual representation of timezones of any specific country"
                  />
                </div>
              </td>
              <td className="timezones-first-entity all-indicator-answers">
                {renderTimezones(totalTimezonesArray) ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Current Timezone</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/current-timezone-image.png"
                    fill
                    alt="Visual representation of current timezone of any specific country"
                  />
                </div>
              </td>
              <td className="current-timezone-answer-first-entity all-indicator-answers">
                {renderTimezones(currentTimezoneArray) ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Daylight Saving Time</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/internet-tld-image.png"
                    fill
                    alt="Visual representation of Daylight Saving Time of any specific country"
                  />
                </div>
              </td>
              <td className="dst-timezone-answer-first-entity all-indicator-answers">
                {DST ?? 'Yet to Update'}
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
                    alt="Visual representation of Daylight Saving Time Start of any specific country"
                  />
                </div>
              </td>
              <td className="dst-start-answer-first-entity all-indicator-answers">
                {DSTStart ?? 'Yet to Update'}
              </td>
            </tr>
            <tr>
              <td className="basic-info">
                <div className="all-indicators">Daylight Saving Time End</div>
                <div className="basic-information-images">
                  <Image
                    src="/images/dst-end-image.png"
                    fill
                    alt="Visual representation of Daylight Saving Time End of any specific country"
                  />
                </div>
              </td>
              <td className="dst-end-answer-first-entity all-indicator-answers">
                {DSTEnd ?? 'Yet to Update'}
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
                    alt="Visual representation of Daylight Saving Time Duration of any specific country"
                  />
                </div>
              </td>
              <td className="dst-duration-answer-first-entity all-indicator-answers">
                {DSTDuration ?? 'Yet to Update'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {(weatherInfo || DST) &&
        <div className="paragraph-for-pages-below-table">
          <div className="para-for-pages-single-div">
            {weatherInfo && (
              <p>
                The current time and date in
                <strong>
                  <span className="first-entity-name-pages-paragraph">
                    {' '}
                    {state}{' '}
                  </span>
                </strong>
                is{' '}
                <strong>
                  [
                  <span className="current-time-answer-first-entity">
                    {' '}
                    {currentTime}
                  </span>
                  ], [
                  <span className="current-date-answer-first-entity">
                    {currentDate}
                  </span>
                  ].
                </strong>
              </p>
            )}

            {/* -------- If the state doesn't observe daylight saving time ------ */}

            {DSTStart === 'DST Not Observed' && (
              <>
                <p>
                  <span className="first-entity-name-pages-paragraph">
                    {state}{' '}
                  </span>
                  doesn&apos;t observe Daylight Saving Time. The current{' '}
                  {multipleTimezones ? 'timezones' : 'timezone'} in {state}{' '}
                  {multipleTimezones ? 'are' : 'is'}{' '}
                  <strong>
                    <span className="current-timezone-answer-first-entity">
                      {currentTimezone.replaceAll('<br />', 'and')}
                    </span>
                    .
                  </strong>
                </p>
              </>
            )}

            {/*------ If the state observes daylight saving time -----  */}

            {DSTStart != 'DST Not Observed' && (
              <>
                <p>
                  <span className="first-entity-name-pages-paragraph">
                    {state}{' '}
                  </span>
                  observes Daylight Saving Time. The current{' '}
                  {multipleTimezones ? 'timezones' : 'timezone'} in {state}{' '}
                  {multipleTimezones ? 'are' : 'is'}
                  <strong>
                    <span className="current-timezone-answer-first-entity">
                      {' '}
                      {currentTimezone.replaceAll('<br />', 'and')}
                    </span>
                    .{' '}
                  </strong>
                  The Daylight Saving Time in
                  <span className="first-entity-name-pages-paragraph">
                    {' '}
                    {state}{' '}
                  </span>
                  starts on
                  <strong>
                    <span className="dst-start-answer-first-entity">
                      {' '}
                      {DSTStart}
                    </span>
                  </strong>
                  , and ends on
                  <strong>
                    <span className="dst-end-answer-second-entity">
                      {' '}
                      {DSTEnd}
                    </span>
                  </strong>
                  . The total DST Duration is
                  <strong>
                    <span className="dst-duration-answer-first-entity">
                      {' '}
                      {DSTDuration} hours
                    </span>
                  </strong>
                  .
                </p>
              </>
            )}
          </div>
        </div>
      }
    </>
  );
}

export default DateAndTime