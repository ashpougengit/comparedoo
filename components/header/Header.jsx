
import Link from 'next/link';
import Image from 'next/image';
import HamburgerIcon from '../hamburger-icon/HamburgerIcon';

function Header() {

  return (
    <header>
      <div className="header">
        <div className="navigation-bar">
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/comparedoo-logo.png"
                fill
                alt="Comparedoo Official Logo"
              />
            </Link>
          </div>

          <div className="nav-menus">
            <ul>
              <li>
                <Link className="next-link-header" href="/knowledgebase">
                  Knowledgebase
                </Link>
              </li>
              <li className='menu-items-dropdown next-link-header'>Americas
                <div className='nav-items-after-dropdown'>
                  <Link className="next-link-header" href="/north-america">
                    North America
                  </Link>
                  <Link className="next-link-header" href="/south-america">
                    South America
                  </Link>
                </div>
              </li>
              <li>
                <Link className="next-link-header" href="/oceania">
                  Oceania
                </Link>
              </li>
              <li>
                <Link className="next-link-header" href="/europe">
                  Europe
                </Link>
              </li>
              <li>
                <Link className="next-link-header" href="/asia">
                  Asia
                </Link>
              </li>
              <li>
                <Link className="next-link-header" href="/africa">
                  Africa
                </Link>
              </li>
              <li>
                <Link className="next-link-header" href="/antartica">
                  Antarctica
                </Link>
              </li>
            </ul>
          </div>
          
          <HamburgerIcon />
        </div>

      </div>
    </header>
  );
}

export default Header;
