import Hero from "@/components/hero/Hero";
import PopularComparison from "@/components/popular-comparison/PopularComparison";
import ScrollProgressBar from "@/components/scroll-progress-bar/ScrollProgressBar";
import SearchBox from "@/components/search-box/SearchBox";
import { getCountryByIP } from "@/lib/array-list/allCountriesList";
import { convertToISODate, datePublished, getFormattedDate } from "@/lib/date-and-time/dateAndTime";

// generateMetadata function
export async function generateMetadata() {
  const title = 'Comparedoo.com'
  const description = 'Comparedoo, Countries - Cities - States, Comparetoo!'
  const formattedDate = getFormattedDate()
  const dateModified = convertToISODate(formattedDate)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${title}`,
    "publisher": {
      "@type": "Organization",
      "name": "Comparedoo.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.comparedoo.com/comparedoo-logo"
      }
    },
    "datePublished": `${datePublished}`,
    "dateModified": `${dateModified}`,
    "description": `${description}`
  }

  return {
    title,
    description,
    // Inject the JSON-LD script in metadata
    additionalMetaTags: [
      {
        tagName: 'script',
        innerHTML: JSON.stringify(jsonLd),
        type: 'application/ld+json',
        key: 'jsonld',
      },
    ],
  }
}

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
