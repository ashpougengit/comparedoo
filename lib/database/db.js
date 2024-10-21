const { Pool } = require('pg');

// Create a PostgreSQL connection pool for better management of connections
const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: 5432,  // Default PostgreSQL port
    max: 10,     // Maximum number of connections in the pool
    idleTimeoutMillis: 30000,  // Close idle clients after 30 seconds
    connectionTimeoutMillis: 5000,  // Return an error after 10 seconds if a connection cannot be established
    ssl: {
        rejectUnauthorized: false,     // Disable SSL certificate validation (use this if you don't have a custom SSL cert)
      }
});

// Function to fetch country general info
export async function fetchCountryGeneralInfo(country) {
    try {
        const client = await pool.connect();  // Get a connection from the pool
        const res = await client.query('SELECT * FROM public.country_general_info WHERE country = $1', [country]);
        client.release();  // Release the connection back to the pool
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (error) {
        console.error("Error fetching country general info:", error.message);
        return null;
    }
}

// Function to fetch country cost info
export async function fetchCountryCostInfo(country) {
    try {
        const client = await pool.connect();  // Get a connection from the pool
        const res = await client.query('SELECT * FROM public.country_cost_info WHERE country = $1', [country]);
        client.release();  // Release the connection back to the pool
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (error) {
        console.error("Error fetching country cost info:", error.message);
        return null;
    }
}

// Function to fetch country standard info
export async function fetchCountryStandardInfo(country) {
    try {
        const client = await pool.connect();  // Get a connection from the pool
        const res = await client.query('SELECT * FROM public.country_standard_info WHERE country = $1', [country]);
        client.release();  // Release the connection back to the pool
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (error) {
        console.error("Error fetching country standard info:", error.message);
        return null;
    }
}

// Function to fetch us_state general info
export async function fetchUSStateGeneralInfo(state) {
    try {
        const client = await pool.connect();  // Get a connection from the pool
        const res = await client.query('SELECT * FROM public.us_state_general_info WHERE state = $1', [state]);
        client.release();  // Release the connection back to the pool
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (error) {
        console.error("Error fetching us_state general info:", error.message);
        return null;
    }
}

// Function to fetch us_state cost info
export async function fetchUSStateCostInfo(state) {
    try {
        const client = await pool.connect();  // Get a connection from the pool
        const res = await client.query('SELECT * FROM public.us_state_cost_info WHERE state = $1', [state]);
        client.release();  // Release the connection back to the pool
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (error) {
        console.error("Error fetching us_state cost info:", error.message);
        return null;
    }
}

// Function to fetch us_state standard info
export async function fetchUSStateStandardInfo(state) {
    try {
        const client = await pool.connect();  // Get a connection from the pool
        const res = await client.query('SELECT * FROM public.us_state_standard_info WHERE state = $1', [state]);
        client.release();  // Release the connection back to the pool
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (error) {
        console.error("Error fetching us_state standard info:", error.message);
        return null;
    }
}

// Function to fetch country currency info
export async function fetchCurrencyInfo(country) {
    try {
        const client = await pool.connect();  // Get a connection from the pool
        const res = await client.query('SELECT "currencyName", "currencySymbol", "unitValueInUSD" FROM public.country_general_info WHERE country = $1', [country]);
        client.release();  // Release the connection back to the pool
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (error) {
        console.error("Error fetching country currency info: ", error.message);
        return null;
    }
}

// Function to fetch currentHealthExpenditurePercentage from country standard info
export async function fetchHealthExpenditurePercentage(country) {
    try {
        const client = await pool.connect(); // Get a connection from the pool
        const res = await client.query('SELECT "currentHealthExpenditurePercentage" FROM public.country_standard_info WHERE country = $1', [country]);
        client.release();  // Release the connection back to the pool
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (error) {
        console.error("Error fetching country currentHealthExpenditurePercentage info: ", error.message);
        return null;
    }
}

// Function to fetch fetchPropertyAndIncomeTaxInfo
export async function fetchPropertyAndIncomeTaxInfo(locationType, entity) {
    try {
        const client = await pool.connect();  // Get a connection from the pool

        // Define the table name based on location type
        const tableName = locationType === 'country' ? 'country_standard_info' : 'us_state_standard_info';

        // Prepare the SQL query (PostgreSQL uses $1 for parameterized queries)
        const query = `SELECT "incomeTaxRates", "propertyTaxRates" FROM public.${tableName} WHERE ${locationType} = $1`;

        // Execute the query using a parameterized statement to avoid SQL injection
        const res = await client.query(query, [entity]);

        client.release();  // Release the connection back to the pool

        // Return the first row if found, otherwise null
        return res.rows.length > 0 ? res.rows[0] : null;
    } catch (error) {
        console.error("Error fetching fetchPropertyAndIncomeTaxInfo info:", error.message);
        return null;
    }
}

// fetch indicators info
export async function fetchIndicatorInfo(locationType, indicator, tableType) {
    try {
        const client = await pool.connect();  // Get a connection from the pool

        // Define the table name based on locationType
        const tableName = `${locationType === 'country' ? 'country' : 'us_state'}_${tableType}_info`;

        // PostgreSQL query to check if the column exists in the specified table using INFORMATION_SCHEMA
        const columnQuery = `
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = $1 
        AND column_name = $2
      `;

        // If the indicator is DST and locationType is state, use DSTStart as the indicator value
        const indicatorValue = (indicator === 'DST' && locationType === 'state') ? 'DSTStart' : indicator;

        // Check if the column exists in the table
        const columnResult = await client.query(columnQuery, [tableName, indicatorValue]);
        if (columnResult.rows.length === 0) {
            throw new Error(`Column "${indicatorValue}" does not exist in table "${tableName}"`);
        }

        // Fetch data from the table since the column exists
        const dataQuery = `SELECT "${locationType}", "${indicatorValue}" FROM public.${tableName}`;
        const result = await client.query(dataQuery);

        // Handle specific case where indicator is 'population' and locationType is 'country'
        if (locationType === 'country' && indicatorValue === 'population') {
            return result.rows.map(row => {
                try {
                    const parsedPopulation = JSON.parse(row[indicatorValue]);
                    const populationValue = Array.isArray(parsedPopulation) ? parsedPopulation[0] : parsedPopulation;
                    return { country: row[locationType], population: populationValue };
                } catch (error) {
                    console.error('Error parsing population JSON:', error.message);
                    return { country: row[locationType], population: null }; // Return null if parsing fails
                }
            });
        }

        // Handle specific case where indicator is 'DST' and locationType is 'state'
        if (locationType === 'state' && indicator === 'DST') {
            return result.rows.map(row => ({
                state: row[locationType],
                DST: row[indicatorValue] === 'DST Not Observed' ? 'Not Observed' : 'Observed'
            }));
        }

        // Return the result for other indicators in the same structure
        return result.rows.map(row => ({
            [locationType]: row[locationType],
            [indicatorValue]: row[indicatorValue]
        }));

    } catch (error) {
        console.error('Error fetching indicator:', error.message);
        return null;
    } finally {
        client.release();  // Release the connection back to the pool
    }
}

// Example function for fetching tables (similar to your original tables query)
// Example function for fetching tables in PostgreSQL
export async function listTables() {
    try {
        const client = await pool.connect();  // Get a connection from the pool

        // Query to get the list of tables from the current schema
        const query = `
            SELECT "${table_name}" 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        `;

        const result = await client.query(query);  // Execute the query
        client.release();  // Release the connection back to the pool

        console.log("Tables in the database:", result.rows);
        return result.rows;  // Return the table names
    } catch (error) {
        console.error("Error querying tables:", error.message);
        return [];
    }
}

// Close the pool connection (this can be done during app termination or if needed)
// Close the PostgreSQL connection pool
export async function closeConnectionPool() {
    try {
        await pool.end();  // Close the PostgreSQL connection pool
        console.log("PostgreSQL connection pool closed.");
    } catch (error) {
        console.error("Error closing the pool:", error.message);
    }
}
