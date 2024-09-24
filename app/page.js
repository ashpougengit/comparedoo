import Hero from "@/components/hero/Hero";
import PopularComparison from "@/components/popular-comparison/PopularComparison";
import SearchBox from "@/components/search-box/SearchBox";
import { getCountryByIP } from "@/lib/array-list/allCountriesList";

export default async function HomePage() {
  const userCountry = await getCountryByIP()

  return (
    <>
      <Hero />
      <SearchBox userCountry={userCountry} />
      <PopularComparison userCountry={userCountry} />
    </>
  );
}
