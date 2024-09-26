import Link from 'next/link'

function CookiePolicyContent() {
    return (
        <>
            <div className="content-for-privacy-policy-page">


                <p>This Cookie Policy explains how Comparedoo.com (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) uses cookies and similar technologies to
                    recognize you when you visit our website, Comparedoo.com (the &quot;site&quot;). It explains what these technologies are and
                    why we use them, as well as your rights to control our use of them.</p>

                <h2>1. What Are Cookies?</h2>
                <p>Cookies are small data files that are placed on your device when you visit a website. Cookies are widely used by
                    website owners to make their websites work, or to work more efficiently, as well as to provide reporting
                    information.</p>

                <h2>2. Why Do We Use Cookies?</h2>
                <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in
                    order for our site to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies
                    enable us to track and target the interests of our users to enhance the experience on our site. Third parties serve
                    cookies through our site for advertising, analytics, and other purposes.</p>

                <h2>3. The Cookies We Use</h2>

                <h3>3.1. Essential Cookies</h3>
                <p>These cookies are strictly necessary to provide you with services available through our site and to use some of its
                    features, such as access to secure areas.</p>

                <h3>3.2. Performance and Functionality Cookies</h3>
                <p>These cookies are used to enhance the performance and functionality of our site but are non-essential to its use.
                    However, without these cookies, certain functionality may become unavailable.</p>

                <h3>3.3. Analytics and Customization Cookies</h3>
                <p>These cookies collect information that is used either in aggregate form to help us understand how our site is being
                    used or how effective our marketing campaigns are, or to help us customize our site for you.</p>

                <h3>3.4. Advertising Cookies</h3>
                <p>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing
                    the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some
                    cases selecting advertisements that are based on your interests.</p>

                <h2>4. How Can You Control Cookies?</h2>
                <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to
                    accept or refuse cookies. If you choose to reject cookies, you may still use our site though your access to some
                    functionality and areas of our site may be restricted.</p>
                <p>Most web browsers allow you to control cookies through their settings preferences. </p>

                <h2>5. Changes to This Cookie Policy</h2>
                <p>We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other
                    operational, legal, or regulatory reasons. Please re-visit this Cookie Policy regularly to stay informed about our
                    use of cookies and related technologies.</p>

                <p>You can click the following links to know better about our site operation policies.</p>
                
                <p>
                    <Link href="/privacy-policy">Privacy Policy</Link> <br />
                    <Link href="/about-us">About comparedoo.com</Link><br />
                    <Link href="/terms-and-conditions">Terms and Conditions</Link><br />
                    <Link href="/contact-us">Contact Us</Link>
                </p>


            </div>

        </>
    )
}

export default CookiePolicyContent