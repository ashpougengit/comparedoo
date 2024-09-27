import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"

function LastParagraph({ state1, state2 }) {
    return (
        <>
            <AdsHeaderBanner />

            <div className="last-paragraph-of-the-page">
                <div className="last-para-single-div">
                    <p>
                        We hope you enjoyed the detailed guide on the general information
                        comparsion between
                        <strong>
                            <span className="first-entity-name-pages-paragraph">
                                {' '}{state1}{' '}
                            </span>
                        </strong>
                        and
                        <strong>
                            <span className="second-entity-name-pages-paragraph">
                                {' '} {state2}
                            </span>
                            .
                        </strong>
                    </p>
                    <p>
                        For more side-by-side comparsion between Countries, States and Cities,
                        you can use the search box above or click the links below.
                    </p>
                    <p>
                        The Comparedoo.com family sincerely appreciates your time with us. We
                        look forward to seeing you on our other pages.
                    </p>
                </div>
            </div>
        </>
    )
}

export default LastParagraph