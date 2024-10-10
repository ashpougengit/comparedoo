import { allCountries } from "@/lib/array-list/allCountriesList";
import { toURLFormat } from "@/lib/format/format";
import Image from "next/image"
import Link from "next/link"

function ComparisonLinks({ entity, listForLinks, pageType }) {
  let filteredEntity = entity

  const specialEntities = {
    'Georgia (USA)': 'Georgia USA',
    "Côte d'Ivoire": "Cote d'Ivoire",
    "São Tomé and Príncipe": "Sao Tome and Principe"
  };

  filteredEntity = specialEntities[filteredEntity] || filteredEntity;
  const entityURL = toURLFormat(filteredEntity);
  const isCountry = allCountries.includes(entity)

  return (
    <>
      <div className="individual-country-vs-others-list-boxes-grids">
        {listForLinks.map((value) => {
          const valueURL = toURLFormat(value);
          const isValueCountry = allCountries.includes(value)

          return (
            <Link
              href={`/${pageType}/${entityURL}/${valueURL}`}
              key={valueURL}
              className="comparison-links-bottom"
            >
              <div className="individual-country-vs-others-map-name-flag">
                <div className="individual-country-first-entity-map">
                  <Image
                    src={`/images/${isCountry ? `${entityURL}` : `${entityURL}-us-state`
                      }-map-small.png`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    {value === 'Georgia USA' ? 'Georgia (USA)' : value}{' '}
                  </div>
                </div>
                <div className="individual-country-second-entity-map">
                  <Image
                    src={`/images/${isValueCountry ? `${valueURL}` : `${valueURL}-us-state`
                      }-map-small.png`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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