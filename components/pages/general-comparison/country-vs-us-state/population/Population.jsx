import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"
import { USStates } from "@/lib/array-list/allUSStates"
import { lastYear } from "@/lib/date-and-time/dateAndTime"
import { formatNumberWithCommas } from "@/lib/format/format"

function Population({ slug1, slug2, slug1GeneralInfo, slug2GeneralInfo }) {
    const isSlug1State = USStates.includes(slug1)
    const slug1Population = isSlug1State ? slug1GeneralInfo.population : JSON.parse(slug1GeneralInfo.population).reverse().at(-1)
    const slug1PopulationStr = formatNumberWithCommas(slug1Population)

    const slug2Population = isSlug1State ? JSON.parse(slug2GeneralInfo.population).reverse().at(-1) : slug2GeneralInfo.population
    const slug2PopulationStr = formatNumberWithCommas(slug2Population)

    const popDifference = formatNumberWithCommas(Math.abs(slug1Population - slug2Population))
    const moreOrLess = slug1Population > slug2Population ? 'more' : 'less'

    return (
        <>
            <AdsHeaderBanner />

            <div className="population-comparison">
                <h2 className="pages-h2">Population Comparison</h2>
            </div>

            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <p>
                        Based on the elaboration of latest World Bank Data, the total
                        population of
                        <strong>
                            <span className="first-entity-name-pages-paragraph"> {' '}{slug1}{' '} </span>
                        </strong>
                        as of {' '}{lastYear}{' '} is estimated to be around
                        <strong>
                            <span className="population-of-first-entity-name">{' '} {slug1PopulationStr}</span>
                        </strong>
                        , and the total population of
                        <strong>
                            <span className="second-entity-name-pages-paragraph">
                                {' '}{slug2}{' '}
                            </span>
                        </strong>
                        as of {' '}{lastYear}{' '} is estimated to be around
                        <strong>
                            <span className="population-of-second-entity-name">{' '} {slug2PopulationStr}</span>
                            .
                        </strong>
                    </p>

                    <p>
                        As per the above data, we can say that in the year
                        <span className="last-year"> {' '}{lastYear}</span>
                        ,
                        <strong>
                            <span className="first-entity-name-pages-paragraph"> {' '}{slug1} {' '}</span>
                        </strong>
                        had
                        <span className="population-difference-number">{' '} {popDifference}{' '} </span>
                        <span className="more-or-less-population">{' '} {moreOrLess}{' '} </span>
                        people than
                        <strong>
                            <span className="second-entity-name-pages-paragraph">
                                {' '} {slug2}
                            </span>
                            .
                        </strong>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Population