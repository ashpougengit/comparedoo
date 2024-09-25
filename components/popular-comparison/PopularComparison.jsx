import { allEntities } from '@/lib/array-list/allEntitiesList'
import { toURLFormat } from '@/lib/format/format'
import Image from 'next/image'
import Link from 'next/link'

async function PopularComparison({ userCountry }) {
    const urlCasedCountry = toURLFormat(userCountry)

    return (
        <>
            <div className="popular-comparisons-heading-title">
                <h2 className="pages-h2">More Popular Comparisons</h2>
            </div>

            <div className="individual-country-vs-others-list-boxes-grids">
                {
                    allEntities
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 24)
                        .map((entity, index) => {
                            const urlCasedEntity = toURLFormat(entity)

                            return (
                              <Link
                                href={`/comparison/${urlCasedCountry}/${urlCasedEntity}`}
                                key={index}
                                className="comparison-links-bottom"
                              >
                                <div className="individual-country-vs-others-map-name-flag">
                                  <div className="individual-country-first-entity-map">
                                    <Image
                                      src={`/images/${urlCasedCountry}-map-small.png`}
                                      fill
                                      alt={`Pictorial representation of map of ${userCountry}`}
                                    />
                                  </div>

                                  <div className="individual-country-vs-another-country-name">
                                    <div className="individual-country-first-entity-name">
                                      {userCountry}
                                    </div>

                                    <div className="versus-between-individual-country-and-another-country">
                                      v/s
                                    </div>

                                    <div className="individual-country-another-country-name">
                                      {entity}
                                    </div>
                                  </div>

                                  <div className="individual-country-second-entity-map">
                                    <Image
                                      src={`/images/${urlCasedEntity}-map-small.png`}
                                      fill
                                      alt={`Pictorial representation of map of ${entity}`}
                                    />
                                  </div>
                                </div>
                              </Link>
                            );
                        })
                }
            </div>
        </>
    )
}

export default PopularComparison