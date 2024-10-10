import Link from "next/link"

function PrivacyPolicyContent() {
    return (
        <>
            <div className="content-for-privacy-policy-page">
                <p>Comparedoo.com (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) values your privacy. This Privacy Policy outlines how we collect, use, disclose,
                    and protect your personal information when you use our website, Comparedoo.com (the &quot;site&quot;). By accessing or using
                    the site, you agree to the terms of this Privacy Policy. If you do not agree with these terms, please do not use the
                    site.</p>

                <h2>1. Information We Collect</h2>

                <h3> Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you use our site, such as:</p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Location information</li>
                    <li>Any other information you choose to provide</li>
                </ul>

                <h3>Non-Personal Information</h3>


                <p>We may automatically collect non-personal information about your visit to our site, including:</p>
                <ul>
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Referring website</li>
                    <li>Pages you view on our site</li>
                    <li>The date and time of your visit</li>
                </ul>

                <h3>Cookies and Tracking Technologies</h3>
                <p>We use cookies and similar tracking technologies to enhance your experience on our site. Cookies are small data
                    files that are placed on your device. You can control the use of cookies through your browser settings.</p>

                <h2>2. How We Use Your Information</h2>

                <h3> To Provide and Improve Our Services</h3>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Operate and maintain our site</li>
                    <li>Improve our site and services</li>
                    <li>Personalize your experience</li>
                    <li>Respond to your comments, questions, and requests</li>
                </ul>

                <h3> Communication</h3>
                <p>We may use your personal information to:</p>
                <ul>
                    <li>Send you newsletters, updates, and promotional materials</li>
                    <li>Respond to your inquiries and provide customer support</li>
                </ul>

                <h3> Analytics</h3>
                <p>We use non-personal information for analytics purposes to understand how our site is used and to improve its
                    performance and functionality.</p>

                <h2>3. Information Sharing and Disclosure</h2>

                <h3> Third-Party Service Providers</h3>
                <p>We may share your information with third-party service providers who perform services on our behalf, such as
                    website hosting, data analysis, and email delivery. These third parties are required to use your information only
                    for the purpose of providing services to us.</p>

                <h3> Legal Requirements</h3>
                <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities
                    (e.g., a court or government agency).</p>

                <h3> Business Transfers</h3>
                <p>In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be
                    transferred as part of that transaction. We will notify you via email and/or a prominent notice on our site of any
                    change in ownership or use of your personal information.</p>

                <h2>4. Data Security</h2>
                <p>We implement reasonable security measures to protect your personal information from unauthorized access, use, or
                    disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure, and
                    we cannot guarantee its absolute security.</p>

                <h2>5. Your Rights</h2>

                <h3>Access and Update</h3>
                <p>You have the right to access and update your personal information. You can do so by contacting us at
                    &quot;info.comparedoo@gmail.com&quot;.</p>

                <h3> Opt-Out</h3>
                <p>You may opt-out of receiving promotional communications from us by following the unsubscribe instructions provided
                    in those communications or by contacting us directly.</p>

                <h3> Data Deletion</h3>
                <p>You may request that we delete your personal information by contacting us at &quot;info.comparedoo@gmail.com&quot;. We will take
                    reasonable steps to delete your information, except where we are required to retain it for legal purposes.</p>

                <h2>6. Children&apos;s Privacy</h2>
                <p>Our site is not intended for children under the age of 13. We do not knowingly collect personal information from
                    children under 13. If we become aware that we have collected personal information from a child under 13, we will
                    take steps to delete such information.</p>

                <h2>7. Changes to this Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
                    Policy on this page and updating the effective date. We encourage you to review this Privacy Policy periodically to
                    stay informed about our information practices.</p>

                <h2>8. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <p>Comparedoo.com<br />&quot;<a href="mailto:info.comparedoo@gmail.com" className="emailAddress">info.comparedoo@gmail.com</a>&quot;</p>

                <p>By using Comparedoo.com, you acknowledge that you have read and understand this Privacy Policy and agree to its
                    terms and conditions.</p>
                    <p>You can click the following links to know better about our site operation policies.</p>
                
                <p>
                    <Link href="/terms-and-conditions">Terms and Conditions</Link> <br />
                    <Link href="/about-us">About comparedoo.com</Link><br />
                    <Link href="/cookie-policy">Cookie Policy</Link><br />
                    <Link href="/contact-us">Contact Us</Link>
                </p>
            </div>
        </>
    )
}

export default PrivacyPolicyContent