import Link from "next/link";

function HamburgerMenu() {
    return (
        <div className="hamburger-menu">
            <hr className="divider" />
            <ul className="content-list">
                <li><Link href={'/oceania'}>Oceania</Link></li>
                <li><Link href={'/africa'}>Africa</Link></li>
                <li><Link href={'/knowledgebase'}>Knowledgebase</Link></li>
                <li><Link href={'/asia'}>Asia</Link></li>
                <li><Link href={'/south-america'}>South America</Link></li>
            </ul>
        </div>
    );
}

export default HamburgerMenu;
