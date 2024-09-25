import { allCountries } from "@/lib/array-list/allCountriesList";
import Image from "next/image"
import Link from "next/link"

function ComparisonLinks({ entity, listForLinks, pageType }) {
    const isCountry = allCountries.includes(entity)

    return (
      <>
        <div className="individual-country-vs-others-list-boxes-grids">
          {listForLinks.map((value) => {
            const lowerEntity = entity.toLowerCase().split(' ').join('-');
            const lowerValue = value.toLowerCase().split(' ').join('-');

            return (
              <Link
                href={`/${pageType}/${lowerEntity}/${lowerValue}`}
                key={lowerValue}
                className="comparison-links-bottom"
              >
                <div className="individual-country-vs-others-map-name-flag">
                  <div className="individual-country-first-entity-map">
                    <Image
                      src={`/images/${
                        isCountry ? `${lowerEntity}` : `${lowerEntity}-us-state`
                      }-map-small.png`}
                      fill
                      alt={`Pictorial representation of the map of ${entity}`}
                    />
                  </div>
                  <div className="individual-country-vs-another-country-name">
                    <div className="individual-country-first-entity-name">
                      {' '}
                      {entity}{' '}
                    </div>
                    <div className="versus-between-individual-country-and-another-country">
                      v/s
                    </div>
                    <div className="individual-country-another-country-name">
                      {' '}
                      {value}{' '}
                    </div>
                  </div>
                  <div className="individual-country-second-entity-map">
                    <Image
                      src={`/images/${
                        isCountry ? `${lowerValue}` : `${lowerValue}-us-state`
                      }-map-small.png`}
                      fill
                      alt={`Pictorial representation of the map of ${value}`}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </>
    );
}

export default ComparisonLinks