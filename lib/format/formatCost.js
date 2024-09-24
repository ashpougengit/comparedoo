// lib/costHelpers.js

import { dollarizedCountries } from "../array-list/dollarizedCountries";
import { formatNumberWithCommas } from "./format";


// Helper function for cost formatting
export const formatCost = (cost, exchangeRate, currency, isDollarized) => {
    if (isDollarized) {
        return `${formatNumberWithCommas(cost)} USD`;
    } else {
        return (
            <>
                {`${formatNumberWithCommas(cost)} ${currency}`} <br />
                {`(${formatNumberWithCommas(cost * exchangeRate)} USD)`}
            </>
        );
    }
};

// Helper function to determine if a slug is dollarized
export const isDollarized = (value, slug) => {
    return value === 'state' || dollarizedCountries.includes(slug);
};
