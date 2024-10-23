import Hero from "@/components/hero/Hero";
import PopularComparison from "@/components/popular-comparison/PopularComparison";
import SearchBox from "@/components/search-box/SearchBox";
import { getCountryByIP } from "@/lib/array-list/allCountriesList";
import { convertToISODate, datePublished } from "@/lib/date-and-time/dateAndTime";
import { getJsonLd } from "@/lib/helper";
import Script from "next/script";

const title = 'Comparedoo.com'
const description = 'Comparedoo, Countries - Cities - States, Comparetoo!'

// generateMetadata function
export async function generateMetadata() {
  return {
    title,
    description
  }
}

export default async function HomePage() {
  const dateResponse = await fetch(`${process.env.BASE_URL}/api/date`, {
    headers: {
      'x-internal-request': process.env.INTERNAL_API_TOKEN
    },
    cache: 'no-store'
  });
  const { formattedDate } = await dateResponse.json();
  const dateModified = convertToISODate(formattedDate)
  const jsonLd = getJsonLd(title, datePublished, dateModified, description)

  const userCountry = await getCountryByIP()

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"

        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <SearchBox userCountry={userCountry} />
      <PopularComparison userCountry={userCountry} />
    </>
  );
}
