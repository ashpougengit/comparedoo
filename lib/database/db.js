const sql = require('better-sqlite3');
const db = sql('comparedoo.db');

// fetch * from country tables
export function fetchCountryGeneralInfo(country) {
  const stmt = db.prepare('SELECT * FROM country_general_info WHERE country = ?');
  const result = stmt.get(country)
  return result;
}

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

// fetch population from country data
// export function fetchPopulationInfo(country) {
//   const stmt = db.prepare('SELECT population FROM country_general_info WHERE country = ?');
//   const result = stmt.get(country);
//   return result;
// }

// fetch currentHealthExpenditurePercentage from country standard data
export function fetchHealthExpenditurePercentage(country) {
  const stmt = db.prepare('SELECT currentHealthExpenditurePercentage FROM country_standard_info WHERE country = ?');
  const result = stmt.get(country);
  return result;
}

// fetch property and income tax 
export function fetchPropertyAndIncomeTaxInfo( locationType, entity) {
  const stmt = db.prepare(`SELECT incomeTaxRates, propertyTaxRates FROM ${locationType === 'country'? 'country':'us_state'}_standard_info WHERE ${locationType} = ?`);
  const result = stmt.get(entity);
  return result;
}

// fetch indicators data
export function fetchIndicatorInfo(locationType, indicator, tableType) {
  try {
    // Check if the column exists in the specified table
    const tableName = `${locationType === 'country' ? 'country' : 'us_state'}_${tableType}_info`;
    const columnCheckStmt = db.prepare(`PRAGMA table_info(${tableName})`);
    const columns = columnCheckStmt.all().map(col => col.name);

    if (!columns.includes(indicator)) {
      throw new Error(`Column "${indicator}" does not exist in table "${tableName}"`);
    }

    // Fetch data if the column exists
    const stmt = db.prepare(`SELECT ${locationType}, ${indicator} FROM ${tableName}`);
    const result = stmt.all();
    return result;

  } catch (error) {
    console.error('Error fetching indicator:', error.message);
    return null;
  }
}
