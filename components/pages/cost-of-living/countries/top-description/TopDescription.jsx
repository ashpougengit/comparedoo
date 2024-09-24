
function TopDescription({ country1, country2, costTimes, moreOrLess }) {
    return (
        <>
            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">


                    <p>
                        <strong> The cost of living in <span className="first-entity-name-pages-paragraph">{country1}</span> is <span
                            className="private-classes-cost-calculation">{' '}{costTimes}{' '}</span> times <span
                                className="private-classes-cost-more-or-less-calculation">{' '}{moreOrLess}{' '}</span> expensive as compared to{' '}

                            <span className="second-entity-name-pages-paragraph">{country2}</span>.</strong>
                    </p>

                    <p>
                        On this page, you will find side-by-side cost comparison between <span
                            className="first-entity-name-pages-paragraph">{country1}</span> and <span
                                className="second-entity-name-pages-paragraph">{country2}</span>. We have created
                        172 cost-of-living indicators. We average the prices of all those indicators and take a mathematically
                        calculated approach
                        to determine which country is more expensive to live in between <span
                            className="first-entity-name-pages-paragraph">{country1}</span> and <span
                                className="second-entity-name-pages-paragraph">{country2}</span>.
                    </p>
                    <p>
                        We always try to give you the latest data, but sometimes mistakes might occur. If you think some content
                        on
                        our site is not updated, please let us know by emailing us at: <span className="emailAddress">
                            comparedoo@gmail.com</span>
                    </p>



                </div>
            </div>
        </>
    )
}

export default TopDescription