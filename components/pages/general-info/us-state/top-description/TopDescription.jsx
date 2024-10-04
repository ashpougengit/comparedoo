function TopDescription({ state }) {
  return (
    <>
      <div className="first-paragraph-of-the-page">
        <div className="first-para-single-div">
          <p>
            In this page, you will get to read a detailed guide on the
            <strong>
            {' '}general information about
              <span className="first-entity-name-pages-paragraph">{' '}{state}{' '}</span>
            </strong>
            regarding various aspects such as geography, demographics, time, and
            weather.
          </p>
        </div>
      </div>
    </>
  );
}

export default TopDescription;
