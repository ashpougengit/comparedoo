function TopDescription({ slug1, slug2, costTimes, moreOrLess }) {
  return (
    <>
      <div className="paragraph-for-pages-below-table">
        <div className="para-for-pages-single-div">
          <p>
            <strong>
              The cost of living in
              <span className="first-entity-name-pages-paragraph">
                {' '}
                {slug1}{' '}
              </span>
              is
              <span className="all-cost-of-living-indicators-calculation">
                {' '}
                {costTimes}{' '}
              </span>
              times
              <span className="all-cost-of-living-indicators-more-or-less-calculation">
                {' '}
                {moreOrLess}{' '}
              </span>
              expensive as compared to
              <span className="second-entity-name-pages-paragraph">
              {' '}{slug2}
              </span>
              .
            </strong>
          </p>

          <p>
            In this page, you will find side-by-side cost comparison between
            <span className="first-entity-name-pages-paragraph"> {slug1} </span>
            and
            <span className="second-entity-name-pages-paragraph">
              {' '}
              {slug2}{' '}
            </span>
            covering various aspects. We have created 172 cost-of-living
            indicators. We average the prices of all those indicators and take a
            mathematically calculated approach to determine which entity is more
            expensive to live in between
            <span className="first-entity-name-pages-paragraph"> {slug1} </span>
            and
            <span className="second-entity-name-pages-paragraph"> {slug2}</span>
            .
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
  );
}

export default TopDescription;
