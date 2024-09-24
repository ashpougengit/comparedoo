import { Nunito_Sans } from 'next/font/google';
// import Head from 'next/head';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import './globals.css'
import ScrollProgressBar from '@/components/scroll-progress-bar/ScrollProgressBar';
import HamburgerMenu from '@/components/hamburger-menu/HamburgerMenu';
import ScrollToTopBottom from '@/components/scroll-to-top-bottom/ScrollToTopBottom';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Comparedo home page',
  description: 'A site for comparing countries, states and cities',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head> */}

      <body className={nunitoSans.className}>

        <ScrollProgressBar />

        <Header />

        {children}

        <ScrollToTopBottom />

        <Footer />

      </body>
    </html>
  );
}
