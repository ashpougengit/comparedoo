import { allCountries } from '@/lib/array-list/allCountriesList'
import { toURLFormat } from '@/lib/format/format'
import Image from 'next/image'
import Link from 'next/link'

function AllCountriesAntartica() {
    return (
        <>
            <div className="countries-list-continents-pages">
                <h2 className="pages-h2">All Countries in the world</h2>
            </div>

            <div className="countries-list-boxes-grids">
                {allCountries.map((country, index) => {
                    const urlCasedCountry = toURLFormat(country)
                    return (
                            <Link className='next-link-country' href={`/general-information/${urlCasedCountry}`} key={index}>
                                <div className="country-map-name-flag">
                                    <div className="country-map">
                                        <Image src={`/images/${urlCasedCountry}-map-small.png`} fill alt={`Pictorial representation of the map of ${country}`} />
                                    </div>

                                    <div className="country-name">
                                        {country}
                                    </div>

                                    <div className="country-flag">
                                        <Image src={`/images/${urlCasedCountry}-flag-small.png`} fill alt={`Image illustrating the flag of ${country}`} />
                                    </div>
                                </div>
                            </Link>
                    )
                })}
            </div>
        </>
    )
}

export default AllCountriesAntartica