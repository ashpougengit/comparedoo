import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer>
      <div className="primary-footer">
        <div className="footer-logo">
          <Image
            src="/images/comparedoo-logo-footer.png"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

            alt="Comparedoo Official Logo Footer"
          />
        </div>

        <div className="footer-links">
          <ul>
            <li>
              <Link className="next-link-footer" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="next-link-footer" href="/contact-us">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="next-link-footer" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="next-link-footer" href="/terms-and-conditions">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link className="next-link-footer" href="/cookie-policy">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link className="next-link-footer" href="/sitemap.xml">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>

        <div className="secondary-footer">
          <p>
            &copy; Copyright | comparedoo.com - 2024 | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer