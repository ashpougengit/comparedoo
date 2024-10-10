import AdsHeaderBanner from '@/components/ads/AdsHeaderBanner';
import { oceaniaCountries } from '@/lib/array-list/allCountriesList';
import { toURLFormat } from '@/lib/format/format';
import Image from 'next/image';
import Link from 'next/link';

function CountriesListOceania() {
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
                {' '}14{' '}
              </span>
            </strong>
            countries in
            <strong>
              <span className="continent-name">{' '}Oceania</span>
            </strong>
            . You can click the countries links below and compare them further
            to other countries, cities and states in the world.
          </p>
        </div>
      </div>

      <div className="sample-page">
        {oceaniaCountries.map((country, index) => {
          const urlCasedCountry = toURLFormat(country);

          return (
            <Link className='comparison-links-continent' href={`/general-information/${urlCasedCountry}`} key={index}>
              <div className="country-map-name-flag">
                <div className="country-map">
                  <Image
                    src={`/images/${urlCasedCountry}-map-small.png`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={`Pictorial representation of map of ${country}`}
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

export default CountriesListOceania;
