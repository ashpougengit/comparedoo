import Image from "next/image"

function AdsHeaderBanner() {
  return (
    <>
      <div className="ads-header-banner all-ads-formats">
        <Image
          src="/images/header-top-banner-ads.png"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          alt="Header top banner ads"
        />
      </div>
    </>
  );
}

export default AdsHeaderBanner