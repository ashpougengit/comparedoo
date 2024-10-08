'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from 'react';
import Loading from "../loading/Loading";

// Utility function to debounce events
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

function ThreeTabs({ entity1, entity2 = null }) {
  const path = usePathname();
  let category
  category = (path.startsWith('/general-information') ? '/general-information' : path.startsWith('/comparison')) ? 'comparison' : path.startsWith('/cost-of-living') ? 'cost-of-living' : 'standard-of-living'

  const slug1 = entity1?.toLowerCase().split(' ').join('-');
  const slug2 = entity2?.toLowerCase().split(' ').join('-');

  const tabRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const [toggledPath, setToggledPath] = useState(category)
  // new code for scrolling upward
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const [scrollDirectionUp, setScrollDirectionUp] = useState(false); // Track if scrolling up
  const [canBeSticky, setCanBeSticky] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(true);

  // IntersectionObserver to detect when the component leaves the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCanBeSticky(!entry.isIntersecting); // If not intersecting, make it eligible for sticky
      },
      {
        threshold: 0,
        rootMargin: '-60px 0px 0px 0px', // Adjust for any fixed header
      }
    );

    if (tabRef.current) {
      observer.observe(tabRef.current);
    }

    return () => {
      if (tabRef.current) {
        observer.unobserve(tabRef.current);
      }
    };
  }, []);

  // Detect scroll direction and toggle sticky class
  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;

      if (canBeSticky && currentScrollY < lastScrollY) {
        setScrollDirectionUp(true);
        setIsSticky(true);
      } else {
        setScrollDirectionUp(false);
        setIsSticky(false);
      }

      setLastScrollY(currentScrollY);
    }, 10); // Debouncing the scroll event handler

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, canBeSticky]);

  return (
    <>
      {category === toggledPath ? (
        <div
          ref={tabRef}
          className="three-tabs-links"
          style={{
            position: isSticky ? 'sticky' : 'relative',
            top: isSticky ? 0 : 'auto',
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: '#fff',
            boxShadow: isSticky ? '0 4px 6px rgba(90, 90, 90, 0.9)' : 'none',
            padding: '10px 0',
            transition: 'all 0.3s ease',
            willChange: 'transform, box-shadow', // Hint to browser for smoother transitions
          }}
        >
          <Link
            href={`/${slug2 ? 'comparison' : 'general-information'
              }/${slug1}/${slug2 ? slug2 : ''}`}
            onClick={() =>
              setToggledPath(slug2 ? 'comparison' : 'general-information')
            }
          >
            <div
              className={
                path.startsWith('/general-information') ||
                  path.startsWith('/comparison')
                  ? 'general-info three-tabs-links-flex active-link'
                  : 'general-info three-tabs-links-flex'
              }
            >
              <div className="three-tabs-links-image">
                <Image
                  src="/images/general-comparison-image-comparedoo.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="General Comparison Image Comparedoo.com"
                />
              </div>
              <div className="three-tabs-links-text">
                {slug2 ? 'General Comparison' : 'General Information'}
              </div>
            </div>
          </Link>

          <Link
            href={`/cost-of-living/${slug1}/${slug2 ? slug2 : ''}`}
            onClick={() => setToggledPath('cost-of-living')}
          >
            <div
              className={
                path.startsWith('/cost-of-living')
                  ? 'cost-of-living three-tabs-links-flex active-link'
                  : 'cost-of-living three-tabs-links-flex'
              }
            >
              <div className="three-tabs-links-image">
                <Image
                  src="/images/cost-of-living-image-comparedoo.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Cost of Living Image Comparedoo.com"
                />
              </div>
              <div className="three-tabs-links-text">Cost of Living</div>
            </div>
          </Link>

          <Link
            href={`/standard-of-living/${slug1}/${slug2 ? slug2 : ''}`}
            onClick={() => setToggledPath('standard-of-living')}
          >
            <div
              className={
                path.startsWith('/standard-of-living')
                  ? 'standard-of-living three-tabs-links-flex active-link'
                  : 'standard-of-living three-tabs-links-flex'
              }
            >
              <div className="three-tabs-links-image">
                <Image
                  src="/images/standard-of-living-image-comparedoo.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Standard Of Living Image Comparedoo.com"
                />
              </div>
              <div className="three-tabs-links-text">Standard of Living</div>
            </div>
          </Link>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ThreeTabs