import Link from "next/link";

function MenuBar() {
    return (
        <div className="hamburger-menu">
            <hr className="divider" />
            <ul className="content-list">
                <li><a href={'/oceania'}>Oceania</a></li>
                <li><a href={'/africa'}>Africa</a></li>
                <li><a href={'/knowledgebase'}>Knowledgebase</a></li>
                <li><a href={'/asia'}>Asia</a></li>
                <li><a href={'/south-america'}>South America</a></li>
            </ul>
        </div>
    );
}

export default MenuBar;
