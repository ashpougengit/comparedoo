import { USStates } from '@/lib/array-list/allUSStates';
import { toURLFormat } from '@/lib/format/format'
import Image from 'next/image'
import Link from 'next/link'

function AllUSStates() {
    return (
        <>
            <div className="countries-list-continents-pages">
                <h2 className="pages-h2">List of 50 US States</h2>
            </div>

            <div className="sample-page">
                {USStates.map((state, index) => {
                    const urlCasedState = toURLFormat(state);
                    return (
                        <Link className="next-link-country comparison-links-continent"
                            href={`/general-information/${urlCasedState}`}
                            key={index}
                        >
                            <div className="country-map-name-flag">
                                <div className="country-map">
                                    <Image
                                        src={`/images/${urlCasedState}-map-small.png`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt={`Pictorial representation of the map of ${state}`}
                                    />
                                </div>

                                <div className="country-name">{state}</div>

                                <div className="country-flag">
                                    <Image
                                        src={`/images/${urlCasedState}-flag-small.png`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        alt={`Image illustrating the flag of ${state}`}
                                    />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}

export default AllUSStates