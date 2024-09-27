import Image from "next/image"

function AdsHeaderBanner() {
    return (
      <>
        <div className="ads-header-banner all-ads-formats">
          <Image
            src="/images/header-top-banner-ads.png"
            layout="fill"
            objectFit="contain"
            alt="Header top banner ads"
          />
        </div>
      </>
    );
}

export default AdsHeaderBanner