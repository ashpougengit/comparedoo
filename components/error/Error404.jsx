import SearchBox from "../search-box/SearchBox"

function Error404() {
  return (
    <>
    {/* <SearchBox slug1='' slug2=''/> */}

      <div className="error-404">
        <div className="error-image">
          <img
            src="images/error-404.png"
            alt="404 Error, Page Not Found" />
        </div>
      </div>

      <div className="error-404-text">
        <p>“Oops! You’ve traveled off the grid. No comparisons here!”</p>
        <p>Try searching again.</p>
      </div>
    </>
  )
}

export default Error404