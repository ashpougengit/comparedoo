const path = require('path');
const sql = require('better-sqlite3');

// Define the path based on the environment
let dbPath = 'comparedoo.db'; // Default for local development

// For production (like Vercel), ensure correct path to the read-only database
if (process.env.NODE_ENV === 'production') {
  dbPath = path.join(process.cwd(), 'public', 'db', 'comparedoo.db'); // Ensure this path points to the correct location in production
}

const db = sql(dbPath);

// Check if the database exists
if (db) {
  console.log("Database connected at", dbPath);
} else {
  console.error("Failed to connect to the database at", dbPath);
}

// Function to fetch general country info
export function fetchCountryGeneralInfo(country) {
  const stmt = db.prepare('SELECT * FROM country_general_info WHERE country = ?');
  const result = stmt.get(country);
  return result;
}


// fetch * from country tables
// export function fetchCountryGeneralInfo(country) {
//   const stmt = db.prepare('SELECT * FROM country_general_info WHERE country = ?');
//   const result = stmt.get(country)
//   return result;
// }

export function fetchCountryCostInfo(country) {
  const stmt = db.prepare('SELECT * FROM country_cost_info WHERE country = ?');
  const result = stmt.get(country);
  return result
}

export function fetchCountryStandardInfo(country) {
  const stmt = db.prepare('SELECT * FROM country_standard_info WHERE country = ?');
  const result = stmt.get(country);
  return result
}

// fetch * from us_state tables
export function fetchUSStateGeneralInfo(state) {
  const stmt = db.prepare('SELECT * FROM us_state_general_info WHERE state = ?');
  const result = stmt.get(state);
  return result
}

export function fetchUSStateCostInfo(state) {
  const stmt = db.prepare('SELECT * FROM us_state_cost_info WHERE state = ?');
  const result = stmt.get(state);
  return result
}

export function fetchUSStateStandardInfo(state) {
  const stmt = db.prepare('SELECT * FROM us_state_standard_info WHERE state = ?');
  const result = stmt.get(state);
  return result
}

// fetch currency from country data
export function fetchCurrencyInfo(country) {
  const stmt = db.prepare('SELECT currencyName, currencySymbol, unitValueInUSD FROM country_general_info WHERE country = ?');
  const result = stmt.get(country);
  return result;
}

// fetch currentHealthExpenditurePercentage from country standard data
export function fetchHealthExpenditurePercentage(country) {
  const stmt = db.prepare('SELECT currentHealthExpenditurePercentage FROM country_standard_info WHERE country = ?');
  const result = stmt.get(country);
  return result;
}

// fetch property and income tax 
export function fetchPropertyAndIncomeTaxInfo(locationType, entity) {
  const stmt = db.prepare(`SELECT incomeTaxRates, propertyTaxRates FROM ${locationType === 'country' ? 'country' : 'us_state'}_standard_info WHERE ${locationType} = ?`);
  const result = stmt.get(entity);
  return result;
}

// fetch indicators data
export function fetchIndicatorInfo(locationType, indicator, tableType) {
  try {
    // Define the table name based on locationType
    const tableName = `${locationType === 'country' ? 'country' : 'us_state'}_${tableType}_info`;

    // Check if the column exists in the specified table
    const columnCheckStmt = db.prepare(`PRAGMA table_info(${tableName})`);
    const columns = columnCheckStmt.all().map(col => col.name);

    // If the indicator is DST and locationType is state, use DSTStart as the indicator value
    const indicatorValue = (indicator === 'DST' && locationType === 'state') ? 'DSTStart' : indicator;

    if (!columns.includes(indicatorValue)) {
      throw new Error(`Column "${indicatorValue}" does not exist in table "${tableName}"`);
    }

    // Fetch data if the column exists
    const stmt = db.prepare(`SELECT ${locationType}, ${indicatorValue} FROM ${tableName}`);
    const result = stmt.all();

    // Handle specific case where indicator is 'population' and locationType is 'country'
    if (locationType === 'country' && indicatorValue === 'population') {
      return result.map(row => {
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
      return result.map(row => ({
        state: row[locationType],
        DST: row[indicatorValue] === 'DST Not Observed' ? 'Not Observed' : 'Observed'
      }));
    }

    // Return the result for other indicators in the same structure
    return result.map(row => ({
      [locationType]: row[locationType],
      [indicatorValue]: row[indicatorValue]
    }));

  } catch (error) {
    console.error('Error fetching indicator:', error.message);
    return null;
  }
}


