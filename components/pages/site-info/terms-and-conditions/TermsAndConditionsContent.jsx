import Link from 'next/link'

function TermsAndConditionsContent() {
    return (
        <>
            <div className="content-for-privacy-policy-page">

                <p>Welcome to Comparedoo.com (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our website,
                    Comparedoo.com (the &quot;site&quot;). By accessing or using the site, you agree to be bound by these Terms. If you do not
                    agree with any part of these Terms, you must not use the site.</p>

                <h2>1. Use of the site</h2>
                <p>You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict, or
                    inhibit anyone else&apos;s use and enjoyment of the site. Prohibited behavior includes harassing or causing distress or
                    inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of
                    dialogue within the site.</p>

                <h2>2. Intellectual Property</h2>
                <p>All content on the site, including but not limited to text, graphics, logos, images, and software, is the property
                    of Comparedoo.com or its content suppliers and is protected by international copyright and trademark laws. You may
                    not reproduce, distribute, or create derivative works based on any content on the site without our prior written
                    permission.</p>

                <h2>3. User Content</h2>
                <p>By submitting content to the site, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to
                    use, modify, publish, and display such content. You represent and warrant that you own or have the necessary rights
                    to submit the content and that the content does not infringe the rights of any third party.</p>

                <h2>4. Third-Party Links</h2>
                <p>The site may contain links to third-party websites that are not owned or controlled by Comparedoo.com. We have no
                    control over and assume no responsibility for the content, privacy policies, or practices of any third-party
                    websites. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any
                    damage or loss caused by or in connection with the use of or reliance on any such content, goods, or services
                    available on or through any such websites.</p>

                <h2>5. Disclaimer of Warranties</h2>
                <p>The site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, express or implied, regarding
                    the operation or availability of the site, or the information, content, and materials included on the site. To the
                    fullest extent permitted by law, we disclaim all warranties, express or implied, including but not limited to
                    implied warranties of merchantability and fitness for a particular purpose.</p>

                <h2>6. Limitation of Liability</h2>
                <p>In no event shall Comparedoo.com, its directors, employees, or agents be liable for any direct, indirect,
                    incidental, special, or consequential damages arising out of or in any way connected with the use of the site, or
                    with the delay or inability to use the site, or for any information, products, and services obtained through the
                    site, or otherwise arising out of the use of the site, whether based on contract, tort, strict liability, or
                    otherwise, even if advised of the possibility of any such damages.</p>

                <h2>7. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless Comparedoo.com, its affiliates, and their respective officers,
                    directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses,
                    or fees (including reasonable attorneys&apos; fees) arising from your use of the site or your violation of these Terms.
                </p>

                <h2>8. Changes to These Terms</h2>
                <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting
                    the new Terms on this page. You are advised to review these Terms periodically for any changes. Your continued use
                    of the site following the posting of any changes constitutes acceptance of those changes.</p>


                <h2>9. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p>Comparedoo.com<br />[comparedoo@gmail.com]</p>

                <p>By using Comparedoo.com, you acknowledge that you have read and understand these Terms and agree to be bound by
                    them.</p>

                <p>You can click the following links to know better about our site operation policies.</p>
                
                <p>
                    <Link href="/privacy-policy">Privacy Policy</Link> <br />
                    <Link href="/about-us">About comparedoo.com</Link><br />
                    <Link href="/cookie-policy">Cookie Policy</Link><br />
                    <Link href="/contact-us">Contact Us</Link>
                </p>


            </div>
        </>
    )
}

export default TermsAndConditionsContent