"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert to milliseconds
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
};

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();
    const path = usePathname();

    useEffect(() => {
        const cookieConsent = getCookie("cookieConsent");
        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        setCookie("cookieConsent", "true", 30); // Set cookie for 30 days
        setIsVisible(false);
        router.refresh();
    };

    if (!isVisible) return null;

    return (
        <>
            {!path.includes('/cookie-policy') && !path.includes('/privacy-policy') && (
                <>
                    <div className="cookie-overlay"></div>
                    <div className="cookie-policy-banner">
                        <div className="cookie-policy-content">
                            <p>
                                This website uses cookies to personalize content, provide custom
                                experiences, target ads, to provide social media features, and to analyze
                                our traffic. Your privacy is important to us. We use cookies to improve
                                your experience on our site. By continuing to use our website, you
                                consent to our cookie policy.
                            </p>

                            <div className="cookie-policy-accept-button" onClick={acceptCookies}>
                                Accept and Continue
                            </div>

                            <div className="cookie-policy-and-privacy-policy-links">
                                <Link href='/cookie-policy' onClick={acceptCookies}>Cookie Policy</Link>
                                <p>|</p>
                                <Link href='/privacy-policy' onClick={acceptCookies}>Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CookieBanner;
