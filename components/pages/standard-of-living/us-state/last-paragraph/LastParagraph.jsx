import AdsHeaderBanner from "@/components/ads/AdsHeaderBanner"

function LastParagraph({ state }) {
    return (
        <>
            <AdsHeaderBanner />

            <div className="last-paragraph-of-the-page">
                <div className="last-para-single-div">
                    <p>
                        We hope you enjoyed the detailed guide on the{' '}
                        <strong>
                            standard of living in
                            <span className="first-entity-name-pages-paragraph"> {state}</span>
                            .
                        </strong>
                    </p>
                    <p>
                        If you wish to compare
                        <span className="first-entity-name-pages-paragraph"> {state} </span>
                        with other Countries, States and Cities in the world, you can use the
                        search box above or click the links below.
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