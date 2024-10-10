import { allCountries } from '@/lib/array-list/allCountriesList'
import { toURLFormat } from '@/lib/format/format'
import Image from 'next/image'
import Link from 'next/link'

function AllCountriesAntarctica() {
  return (
    <>
      <div className="countries-list-continents-pages">
        <h2 className="pages-h2">All Countries in the world</h2>
      </div>

      <div className="sample-page">
        {allCountries
          .filter(country => country !== "Côte d'Ivoire" && country !== "São Tomé and Príncipe")
          .map((country, index) => {
            const urlCasedCountry = toURLFormat(country);
            return (
              <Link className="next-link-country comparison-links-continent"
                href={`/general-information/${urlCasedCountry}`}
                key={index}
              >
                <div className="country-map-name-flag">
                  <div className="country-map">
                    <Image
                      src={`/images/${urlCasedCountry}-map-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Pictorial representation of the map of ${country}`}
                    />
                  </div>

                  <div className="country-name">{country}</div>

                  <div className="country-flag">
                    <Image
                      src={`/images/${urlCasedCountry}-flag-small.png`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={`Image illustrating the flag of ${country}`}
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

export default AllCountriesAntarctica