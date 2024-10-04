import { Nunito_Sans } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.css'
import ScrollProgressBar from '@/components/scroll-progress-bar/ScrollProgressBar';
import ScrollToTopBottom from '@/components/scroll-to-top-bottom/ScrollToTopBottom';
import NetworkStatus from '@/components/network-status/NetworkStatus';
import Script from 'next/script';
import CookieBanner from '@/components/cookie-banner/CookieBanner';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
});

// generate Metadata
export async function generateMetadata() {
  try {
    const title = 'Comparedo home page';
    const description = 'A site for comparing countries, states and cities'

    return {
      title,
      description,
    };
  } catch (error) {
    return {
      title: 'Error loading page',
      description: error.message,
    };
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console */}
        <meta name="google-site-verification" content="bpl0jhFx1HsUh0FC9Aqd6HsB6NkAfzDx51KP8Ao6hug" />

        {/* Google Tag Manager Start */}
        <Script id="google-tag-manager" strategy="afterInteractive">{/* "beforeInteractive" or "lazyOnload" */}
          {`
          (function(w, d, s, l, i) {
            w[l] = w[l] || []; 
            w[l].push({
              'gtm.start': new Date().getTime(), 
              event: 'gtm.js'
            }); 
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), 
              dl = l != 'dataLayer' ? '&l=' + l : ''; 
            j.async = true; 
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; 
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-5VSW5DGK');
        `}
        </Script>
        {/* Google Tag Manager End */}

        {/* Bing Webmaster Code */}
        <meta name="msvalidate.01" content="E9245B8537461FF42A2F34B02F15C4D6" />

        {/* Yandex Webmaster Code */}
        <meta name="yandex-verification" content="7b8bbf8b8e6e1952" />

        <link rel="icon" href="/images/favicon-image-comparedoo.png" type="image/png" />
      </head>

      <body className={nunitoSans.className}>

        {/* Google Tag Manager (noscript) Start */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VSW5DGK"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {/* Google Tag Manager (noscript) End */}

        <ScrollProgressBar />

        <NetworkStatus />

        <Header />

        {children}

        <CookieBanner />
        
        <ScrollToTopBottom />

        <Footer />

      </body>
    </html>
  );
}
