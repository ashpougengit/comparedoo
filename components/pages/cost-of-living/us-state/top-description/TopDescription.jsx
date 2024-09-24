
function TopDescription({state}) {
    return (
        <>
            <div className="paragraph-for-pages-below-table">
                <div className="para-for-pages-single-div">
                    <p>
                        In this page, you will find a detailed guide on the
                        <strong>
                            cost of living in
                            <span className="first-entity-name-pages-paragraph"> {state}</span>
                        </strong>
                        , covering various aspects such as housing, utilities, communication,
                        groceries, transportation, health, clothing, childcare, education,
                        entertainment, taxes, finances and professional services.
                    </p>
                    <p>
                        We always try to give you the latest data, but sometimes mistakes
                        might occur. If you believe some content on our site is not up to
                        date, please let us know by emailing us at
                        <span className="emailAddress">comparedoo@gmail.com</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default TopDescription