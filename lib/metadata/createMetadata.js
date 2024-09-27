// lib/metadata.js
export function createMetadata({ slug1, slug2 }) {
    const title = `Comparison: ${slug1.charAt(0).toUpperCase() + slug1.slice(1)} vs ${slug2.charAt(0).toUpperCase() + slug2.slice(1)}`;
    const description = `Compare ${slug1.charAt(0).toUpperCase() + slug1.slice(1)} and ${slug2.charAt(0).toUpperCase() + slug2.slice(1)}. Discover the differences and similarities between these two locations.`;
  
    return {
      title,
      description,
    };
  }
  