import Image from "next/image"
import SearchBox from "../search-box/SearchBox"
import { getCountryByIP } from "@/lib/array-list/allCountriesList"

async function Error404() {
  const userCountry = await getCountryByIP()

  return (
    <>
      <div className="error-404">
        <div className="error-image">
          <Image
            src="/images/error-404.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="404 Error, Page Not Found" />
        </div>
      </div>

      <div className="error-404-text">
        <p>“Oops! You’ve traveled off the grid. No comparisons here!”</p>
        <p>Try searching again.</p>
      </div>
      <SearchBox userCountry={userCountry} slug2='' />
    </>
  )
}

export default Error404