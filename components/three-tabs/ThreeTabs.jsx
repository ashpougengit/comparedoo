'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';
import Loading from "../loading/Loading";

function ThreeTabs({ entity1, entity2 = null }) {
    const path = usePathname();
    const category = (path.startsWith('/general-information') ? '/general-information' : path.startsWith('/comparison')) ? 'comparison' : path.startsWith('/cost-of-living') ? 'cost-of-living' : 'standard-of-living'

    const slug1 = entity1?.toLowerCase().split(' ').join('-');
    const slug2 = entity2?.toLowerCase().split(' ').join('-');

    const [toggledPath, setToggledPath] = useState(category)

    return (
        <>
            {category === toggledPath ? (
                <div
                    className="three-tabs-links"
                >
                    <Link href={`/${slug2 ? 'comparison' : 'general-information'}/${slug1}/${slug2 ? slug2 : ''}`} onClick={() => setToggledPath(slug2 ? 'comparison' : 'general-information')} className="three-tabs-links-text">
                        <div className={path.startsWith('/general-information') || path.startsWith('/comparison') ? 'general-info three-tabs-links-flex active-link' : 'general-info three-tabs-links-flex'}>
                            <div className="three-tabs-links-image">
                                <Image src="/images/general-information-image-comparedoo.png" fill alt="General Comparison Image Comparedoo.com" />
                            </div>
                            <div className="three-tabs-links-text">
                                {slug2 ? 'General Comparison' : 'General Information'}
                            </div>
                        </div>
                    </Link>

                    <Link href={`/cost-of-living/${slug1}/${slug2 ? slug2 : ''}`} onClick={() => setToggledPath('cost-of-living')} className="three-tabs-links-text">
                        <div className={path.startsWith('/cost-of-living') ? "cost-of-living three-tabs-links-flex active-link" : "cost-of-living three-tabs-links-flex"}>
                            <div className="three-tabs-links-image">
                                <Image src="/images/cost-of-living-image-comparedoo.png" fill alt="Cost of Living Image Comparedoo.com" />
                            </div>
                            <div className="three-tabs-links-text">Cost of Living</div>
                        </div>
                    </Link >

                    <Link href={`/standard-of-living/${slug1}/${slug2 ? slug2 : ''}`
                    } onClick={() => setToggledPath('standard-of-living')} className="three-tabs-links-text">
                        <div className={path.startsWith('/standard-of-living') ? "standard-of-living three-tabs-links-flex active-link" : "standard-of-living three-tabs-links-flex"}>
                            <div className="three-tabs-links-image">
                                <Image src="/images/standard-of-living-image-comparedoo.png" fill alt="Standard Of Living Image Comparedoo.com" />
                            </div>
                            <div className="three-tabs-links-text">Standard of Living</div>
                        </div>
                    </Link >
                </div >
            ) : <Loading />}

        </>
    );
}

export default ThreeTabs