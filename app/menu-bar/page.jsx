import Link from "next/link";

function MenuBar() {
    return (
        <div className="hamburger-menu">
            <hr className="divider" />
            <ul className="menu-items">
                <li><Link href={'/oceania'} className="next-link-header">Oceania</Link></li>
                <li><Link href={'/africa'} className="next-link-header">Africa</Link></li>
                <li><Link href={'/knowledgebase'} className="next-link-header">Knowledgebase</Link></li>
                <li><Link href={'/asia'} className="next-link-header">Asia</Link></li>
                <li><Link href={'/south-america'} className="next-link-header">South America</Link></li>
            </ul>
        </div>
    );
}

export default MenuBar;
