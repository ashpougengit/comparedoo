import { Nunito_Sans } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.css'
import ScrollProgressBar from '@/components/scroll-progress-bar/ScrollProgressBar';
import ScrollToTopBottom from '@/components/scroll-to-top-bottom/ScrollToTopBottom';
import NetworkStatus from '@/components/network-status/NetworkStatus';

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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon-image-comparedoo.png" type="image/png" />
      </head>

      <body className={nunitoSans.className}>

        <ScrollProgressBar />

        <NetworkStatus />
        
        <Header />


        {children}

        <ScrollToTopBottom />

        <Footer />

      </body>
    </html>
  );
}
