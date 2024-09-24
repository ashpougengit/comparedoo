
function TopDescription({ slug1, slug2, standardTimes, betterOrLesser }) {
    return (
        <>
            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <p>
                        <strong>
                            The Standard of living in
                            <span className="first-entity-name-pages-paragraph"> {slug1} </span>
                            is
                            <span className="all-standard-of-living-calculation"> {standardTimes} </span>
                            times
                            <span className="all-standard-of-living-better-lesser-calculation">
                               {' '} {betterOrLesser}{' '}
                            </span>
                            as compared to
                            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                            .
                        </strong>
                    </p>
                    <p>
                        In this page, you will find side-by-side Standard of Living comparison
                        between
                        <span className="first-entity-name-pages-paragraph"> {slug1} </span>
                        and
                        <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                        . We have created 20 standard-of-living indicators. We average the
                        values and ranges of all those indicators and take a mathematically
                        calculated approach to determine which entity has a better standard of
                        living between
                        <span className="first-entity-name-pages-paragraph"> {slug1} </span>
                        and
                        <span className="second-entity-name-pages-paragraph"> {slug2}</span>
                        .
                    </p>
                </div>
            </div>
        </>
    )
}

export default TopDescription