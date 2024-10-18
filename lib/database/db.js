const path = require('path');
const fs = require('fs');
const sql = require('better-sqlite3');

// Set the default path for local development
let dbPath = path.join(process.cwd(), 'public', 'db', 'comparedoo.db');

if (process.env.NODE_ENV === 'production') {
  const destPath = '/tmp/comparedoo.db';

  // Copy the database to /tmp if it doesn't exist
  if (!fs.existsSync(destPath)) {
    const sourcePath = path.join(process.cwd(), 'public', 'db', 'comparedoo.db');
    
    if (fs.existsSync(sourcePath)) {
      try {
        fs.copyFileSync(sourcePath, destPath);
        console.log("Database file copied from:", sourcePath, "to:", destPath);
      } catch (error) {
        console.error("Error copying database file:", error.message);
      }
    } else {
      console.error("Source DB file does not exist at:", sourcePath);
    }
  }

  dbPath = destPath;
}

const db = sql(dbPath);

// Log the database path and file size for debugging
if (fs.existsSync(dbPath)) {
  console.log("Database exists at:", dbPath);
  const stats = fs.statSync(dbPath);
  console.log(`File size of ${dbPath}: ${stats.size} bytes`);

  if (stats.size === 0) {
    console.error("Database file is empty! Check if the source file is correct.");
  }
} else {
  console.error("Database file does not exist at", dbPath);
}

// Query to list tables in the database
try {
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log("Tables in the database after copying:", tables);
} catch (error) {
  console.error("Error querying tables:", error.message);
}

// Function to fetch general country info
export function fetchCountryGeneralInfo(country) {
  try {
    const stmt = db.prepare('SELECT * FROM country_general_info WHERE country = ?');
    const result = stmt.get(country);
    return result;
  } catch (error) {
    console.error("Error fetching country info:", error.message);
    return null;
  }
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


