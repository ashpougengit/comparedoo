import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import Image from "next/image"

function Employment({ standardInfo, stateURLCase }) {
    const state = standardInfo.state
    const agricultureForestryFishing = standardInfo.agricultureForestryFishing
    const construction = standardInfo.construction
    const manufacturing = standardInfo.manufacturing
    const transportationAndWarehousing = standardInfo.transportationAndWarehousing
    const ITAndInformation = standardInfo.ITAndInformation
    const artsEntertainmentRecreation = standardInfo.artsEntertainmentRecreation
    const educationAndHealthCare = standardInfo.educationAndHealthCare
    const financeAndRealEstate = standardInfo.financeAndRealEstate
    const wholesaleTrade = standardInfo.wholesaleTrade
    const retailTrade = standardInfo.retailTrade
    const publicAdministration = standardInfo.publicAdministration

    return (
      <>
        <AdsHeaderBanner />

        <div className="environmental-factors-comparison">
          <h2 className="pages-h2">Job and Employment Factors Information</h2>
        </div>
        <div className="environment-factors-comparison">
          <table className="indicators-single-country-divs">
            <thead>
              <tr className="first-tr">
                <th>
                  <div className="heading-map-name-flag">
                    <div className="right-indicator">
                      <Image
                        src="/images/indicators-right-image.png"
                        layout="fill"
                        objectFit="contain"
                        alt="Image representing an indicator"
                      />
                    </div>
                    <div className="indicator-text">Indicators</div>
                    <div className="left-indicator">
                      <Image
                        src="/images/indicators-left-image.png"
                        layout="fill"
                        objectFit="contain"
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
                        layout="fill"
                        objectFit="contain"
                        alt={`Pictorial representation of map of ${stateURLCase}`}
                      />
                    </div>

                    <div className="first-entity-name-pages-comparison">
                      {state}
                    </div>

                    <div className="first-entity-flag-pages-comparison">
                      <Image
                        src={`/images/${stateURLCase}-flag-small.png`}
                        layout="fill"
                        objectFit="contain"
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
                  <div className="all-indicators">
                    <div className="agriculture-forestry-states-text">
                      Agriculture, Forestry and Fishing Sectors ({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/agriculture-forestry-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Agriculture, Forestry and Fishing Sectors jobs available in any specific country or state"
                    />
                  </div>
                </td>
                <td className="agriculture-forestry-states-answer-first-entity all-indicator-answers">
                  {agricultureForestryFishing
                    ? `${agricultureForestryFishing} %`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Construction Sector
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/construction-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Construction Sector workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {construction ? `${construction} %` : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Manufacturing Sector
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/manufacturing-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Manufacturing Sector workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {manufacturing ? `${manufacturing} %` : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Transportation and Warehousing Sectors ({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/transportation-and-warehousing-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Transportation and Warehousing Sectors workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {transportationAndWarehousing
                    ? `${transportationAndWarehousing} %`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      IT and Information Sectors
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/information-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total IT and Information Sectors workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {ITAndInformation ? `${ITAndInformation} %` : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Arts and Entertainment
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/arts-and-entertainment-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Arts and Entertainment workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {artsEntertainmentRecreation
                    ? `${artsEntertainmentRecreation} %`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Education and Healthcare Sectors ({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/education-and-healthcare-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Education and Healthcare Sectors workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {educationAndHealthCare
                    ? `${educationAndHealthCare} %`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Finance and Real Estate Sectors ({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/real-estate-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Finance and Real Estate Sectors workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {financeAndRealEstate
                    ? `${financeAndRealEstate} %`
                    : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Wholesale Trade
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/wholesale-trade-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Wholesale Trade workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {wholesaleTrade ? `${wholesaleTrade} %` : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Retail Trade
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/retail-trade-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Retail Trade workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {retailTrade ? `${retailTrade} %` : 'Yet to Update'}
                </td>
              </tr>
              <tr>
                <td className="basic-info">
                  <div className="all-indicators">
                    <div className="employment-rate-states-text">
                      Public Administration
                      <br />({lastYear})
                    </div>
                  </div>
                  <div className="basic-information-images">
                    <Image
                      src="/images/public-administration-states-images.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Image Depicting the total Public Administration workers percentage in any specific country or state"
                    />
                  </div>
                </td>
                <td className="employment-rate-states-answer-first-entity all-indicator-answers">
                  {publicAdministration
                    ? `${publicAdministration} %`
                    : 'Yet to Update'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default Employment