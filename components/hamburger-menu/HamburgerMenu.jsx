'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function HamburgerMenu({ isOpen, handleToggle }) {
    // useEffect to handle adding/removing the no-scroll class to body
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Clean up by removing class when component is unmounted
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return (
        <div className={`hamburger-menu ${!isOpen && 'close-menu'}`}>
            <div className='close-button'>
                <Image onClick={() => { handleToggle() }}
                    src="/images/close.png"
                    alt="Close menu bar"
                    width={25}
                    height={25}
                />
            </div>

            <hr className="divider" />
            <ul className="content-list">
                <li><Link href={'/knowledgebase'} onClick={() => { handleToggle() }}>Knowledgebase</Link></li>
                <li><Link href={'/north-america'} onClick={() => { handleToggle() }}>North America</Link></li>
                <li><Link href={'/south-america'} onClick={() => { handleToggle() }}>South America</Link></li>
                <li><Link href={'/oceania'} onClick={() => { handleToggle() }}>Oceania</Link></li>
                <li><Link href={'/europe'} onClick={() => { handleToggle() }}>Europe</Link></li>
                <li><Link href={'/asia'} onClick={() => { handleToggle() }}>Asia</Link></li>
                <li><Link href={'/africa'} onClick={() => { handleToggle() }}>Africa</Link></li>
                <li><Link href={'/antarctica'} onClick={() => { handleToggle() }}>Antarctica</Link></li>
            </ul>
        </div>
    );
}

export default HamburgerMenu;
