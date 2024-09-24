'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { allEntities } from '@/lib/array-list/allEntitiesList';
import { allCountries } from '@/lib/array-list/allCountriesList';
import { USStates } from '@/lib/array-list/allUSStates';
import { titleCased } from '@/lib/format/format';
import Loading from '../loading/Loading';

export default function SearchBox({ userCountry, slug1, slug2 = null }) {
    const isSlug2 = slug2 !== null;
    let value1, value2;
    if (isSlug2) {
        value1 = slug1;
        value2 = slug2;
    }
    const router = useRouter();

    const [input1, setInput1] = useState(userCountry ? userCountry : titleCased(slug1));
    const [input2, setInput2] = useState('');

    const [tempInput1, setTempInput1] = useState(userCountry ? userCountry : titleCased(slug1));
    const [tempInput2, setTempInput2] = useState('');

    const [loading, setLoading] = useState(false);
    const [dropdown1Visible, setDropdown1Visible] = useState(false);
    const [dropdown2Visible, setDropdown2Visible] = useState(false);
    const [filteredCountries1, setFilteredCountries1] = useState(allEntities);
    const [filteredCountries2, setFilteredCountries2] = useState(allEntities);

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);
    const previousInput1 = useRef(userCountry ? userCountry : titleCased(slug1));
    const previousInput2 = useRef('');

    useEffect(() => {
        setLoading(false);
    }, []);

    useEffect(() => {
        if (input1 && input2) {
            setLoading(true);
            router.push(`/comparison/${input1.toLowerCase().split(' ').join('-')}/${input2.toLowerCase().split(' ').join('-')}`);
            if (slug1 === input1 && slug2 === input2) {
                setLoading(false);
            }
            return () => setLoading(false);
        }
    }, [input1, input2, router]);

    useEffect(() => {
        setFilteredCountries1(getFilteredCountries(input2));
        setFilteredCountries2(getFilteredCountries(input1));
    }, [input1, input2]);

    // Helper function to filter countries based on the other input
    const getFilteredCountries = (otherInput) => {
        if (otherInput === 'United States') {
            // If the other input is "United States", remove all US states from the dropdown
            return allCountries;
        } else if (USStates.includes(otherInput)) {
            // If the other input is a US state, remove "United States" from the dropdown
            return allEntities.filter(entity => entity !== 'United States');
        } else {
            // Otherwise, return all entities except the other input
            return allEntities.filter(entity => entity !== otherInput).sort();
        }
    };

    // Handle input change
    const handleInputChange = (e, setTempInput, setFilteredCountries, otherSelectedCountry) => {
        const value = e.target.value;
        setTempInput(value);
        setFilteredCountries(
            getFilteredCountries(otherSelectedCountry).filter(entity =>
                entity.toLowerCase().includes(value.toLowerCase()) && entity !== otherSelectedCountry
            ).sort()
        );
    };

    // Handle clicking outside of input fields
    const handleClickOutside = (e) => {
        if (input1Ref.current && !input1Ref.current.contains(e.target) &&
            input2Ref.current && !input2Ref.current.contains(e.target)) {
            setDropdown1Visible(false);
            setDropdown2Visible(false);

            if (!input1 && previousInput1.current) {
                setTempInput1(previousInput1.current);
            }
            if (!input2 && previousInput2.current) {
                setTempInput2(previousInput2.current);
            }
        }
    };

    // Add/remove event listener for outside click detection
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle item click in dropdown
    const handleItemClick = (item, setInput, setTempInput, setDropdownVisible, previousInputRef) => {
        setInput(item);
        setTempInput(item);
        setDropdownVisible(false);
        previousInputRef.current = item;
    };

    // Handle focus to clear input and show dropdown
    const handleInputFocus = (setTempInput, previousInputRef, tempValue, setDropdownVisible) => {
        previousInputRef.current = tempValue;
        setTempInput('');
        setDropdownVisible(true);
    };

    // Handle arrow toggle and restore value when collapsing dropdown
    const handleArrowClick = (setDropdownVisible, dropdownVisible, setOtherDropdownVisible, inputState, setTempInput, previousInputRef) => {
        if (dropdownVisible) {
            // Restoring the previous value when collapsing the dropdown
            if (!inputState && previousInputRef.current) {
                setTempInput(previousInputRef.current);
            }
        }
        setDropdownVisible(!dropdownVisible);
        setOtherDropdownVisible(false); // Collapse the other dropdown
    };

    // Updated to restore and collapse dropdown when switching between fields
    const handleInputFocusWithRestoration = (setTempInput, previousInputRef, tempValue, setDropdownVisible, otherInputState, setOtherDropdownVisible, setOtherTempInput) => {
        if (otherInputState) {
            setOtherTempInput(otherInputState);  // Restore the value in the other input
        }
        setOtherDropdownVisible(false); // Collapse the other dropdown
        handleInputFocus(setTempInput, previousInputRef, tempValue, setDropdownVisible);
    };

    return (
        <>
            {loading ? <Loading /> : (
                <div className="comparedoo-compare-main">
                    <div className="compare-first-entity" ref={input1Ref}>
                        <div className="first-entity-map-compare-section">
                            {isSlug2 ? (
                                <img src={`/images/${value1}-map-small.png`} alt={`Image illustrating the map of ${titleCased(value1)}`} width="80" />
                            ) : ''}
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a country or a us-state"
                            value={tempInput1}
                            onChange={(e) => handleInputChange(e, setTempInput1, setFilteredCountries1, input2)}
                            onFocus={() => {
                                handleInputFocusWithRestoration(setTempInput1, previousInput1, tempInput1, setDropdown1Visible, input2, setDropdown2Visible, setTempInput2);
                            }}
                        />
                        <div className="down-arrow" onClick={() => handleArrowClick(setDropdown1Visible, dropdown1Visible, setDropdown2Visible, input1, setTempInput1, previousInput1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                <path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z" />
                            </svg>
                        </div>
                        {dropdown1Visible && (
                            <div className="dropdown-menu">
                                {filteredCountries1.map((entity, index) => (
                                    <div key={index} className="dropdown-item" onClick={() => handleItemClick(entity, setInput1, setTempInput1, setDropdown1Visible, previousInput1)}>
                                        {entity}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="compare-second-entity">
                        <div className='heading-second'>
                            <img src="/images/comparedoo-logo-for-comparison.png" width='300px' alt="Comparedoo" />
                        </div>
                    </div>

                    <div className="compare-third-entity" ref={input2Ref}>
                        <div className="second-entity-map-compare-section">
                            {isSlug2 ? (
                                <img src={`/images/${value2}-map-small.png`} alt={`Image illustrating the map of ${titleCased(value2)}`} width="80" />
                            ) : ''}
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a country or a us-state"
                            value={tempInput2}
                            onChange={(e) => handleInputChange(e, setTempInput2, setFilteredCountries2, input1)}
                            onFocus={() => {
                                handleInputFocusWithRestoration(setTempInput2, previousInput2, tempInput2, setDropdown2Visible, input1, setDropdown1Visible, setTempInput1);
                            }}
                        />
                        <div className="down-arrow" onClick={() => handleArrowClick(setDropdown2Visible, dropdown2Visible, setDropdown1Visible, input2, setTempInput2, previousInput2)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                <path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z" />
                            </svg>
                        </div>
                        {dropdown2Visible && (
                            <div className="dropdown-menu">
                                {filteredCountries2.map((entity, index) => (
                                    <div key={index} className="dropdown-item" onClick={() => handleItemClick(entity, setInput2, setTempInput2, setDropdown2Visible, previousInput2)}>
                                        {entity}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )

            }
        </>

    );
}
