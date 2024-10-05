import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { africaCountries } from '@/lib/array-list/allCountriesList'
import { toURLFormat } from '@/lib/format/format'
import Image from 'next/image'
import Link from 'next/link'

function CountriesListAfrica() {
  return (
    <>
      <AdsHeaderBanner />

      <div className="countries-list-continents-pages">
        <h2 className="pages-h2">Countries List</h2>
      </div>

      <div className="first-paragraph-of-the-page">
        <div className="first-para-single-div">
          <p>
            There are total of
            <strong>
              <span className="number-of-countries-in-the-given-continent">
                {' '} 54{' '}
              </span>
            </strong>
            countries in
            <strong>
              <span className="continent-name">{' '} Africa</span>
            </strong>
            . You can click the countries links below and compare them further
            to other countries, cities and states in the world.
          </p>
        </div>
      </div>

      <div className="sample-page">
        {africaCountries.map((country, index) => {
          const urlCasedCountry = toURLFormat(country);

          return (
            <Link
              href={`/general-information/${urlCasedCountry}`}
              key={index}
            >
              <div className="country-map-name-flag">
                <div className="country-map">
                  <Image
                    src={`/images/${urlCasedCountry}-map-small.png`}
                    fill
                    alt={`Pictorial representation of map of ${country}`}
                  />
                </div>

                <div className="country-name">{country}</div>

                <div className="country-flag">
                  <Image
                    src={`/images/${urlCasedCountry}-flag-small.png`}
                    fill
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

export default CountriesListAfrica