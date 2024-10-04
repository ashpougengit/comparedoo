
function TopDescription({ slug1, slug2 }) {
    return (
        <>
            <div className="first-paragraph-of-the-page">
                <div className="first-para-single-div">
                    <p>
                        Comparedoo.com welcomes you to explore the detailed comparison between
                        <strong>
                            <span className="first-entity-name-pages-paragraph">{' '} {slug1}{' '} </span>
                        </strong>
                        and
                        <strong>
                            <span className="second-entity-name-pages-paragraph">
                               {' '} {slug2}
                            </span>
                            .
                        </strong>
                        <br />
                        Dive in and compare them across different aspects like cost of living,
                        standard of living, geography, demographics, environment, society,
                        economy, health factors and many more.
                        <br />
                        Enjoy exploring!
                    </p>
                </div>
            </div>
        </>
    )
}

export default TopDescription