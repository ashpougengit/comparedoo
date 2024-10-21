const mysql = require('mysql2/promise');

// Create a MySQL connection pool for better management of connections
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,   
  user: process.env.MYSQL_USER,          
  password: process.env.MYSQL_PASSWORD,  
  database: process.env.MYSQL_DATABASE,  
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to fetch country general info
export async function fetchCountryGeneralInfo(country) {
  try {
    const connection = await pool.getConnection();  // Get a connection from the pool
    const [rows] = await connection.execute('SELECT * FROM country_general_info WHERE country = ?', [country]);
    connection.release();  // Release the connection back to the pool
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching country info:", error.message);
    return null;
  }
}

// Function to fetch country cost info
export async function fetchCountryCostInfo(country) {
  try {
    const connection = await pool.getConnection();  // Get a connection from the pool
    const [rows] = await connection.execute('SELECT * FROM country_cost_info WHERE country = ?', [country]);
    connection.release();  // Release the connection back to the pool
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching country info:", error.message);
    return null;
  }
}

// Function to fetch country standard info
export async function fetchCountryStandardInfo(country) {
  try {
    const connection = await pool.getConnection();  // Get a connection from the pool
    const [rows] = await connection.execute('SELECT * FROM country_standard_info WHERE country = ?', [country]);
    connection.release();  // Release the connection back to the pool
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching country info:", error.message);
    return null;
  }
}

// Function to fetch us_state general info
export async function fetchUSStateGeneralInfo(state) {
  try {
    const connection = await pool.getConnection();  // Get a connection from the pool
    const [rows] = await connection.execute('SELECT * FROM us_state_general_info WHERE state = ?', [state]);
    connection.release();  // Release the connection back to the pool
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching state info:", error.message);
    return null;
  }
}

// Function to fetch us_state cost info
export async function fetchUSStateCostInfo(state) {
  try {
    const connection = await pool.getConnection();  // Get a connection from the pool
    const [rows] = await connection.execute('SELECT * FROM us_state_cost_info WHERE state = ?', [state]);
    connection.release();  // Release the connection back to the pool
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching state info:", error.message);
    return null;
  }
}

// Function to fetch us_state standard info
export async function fetchUSStateStandardInfo(state) {
  try {
    const connection = await pool.getConnection();  // Get a connection from the pool
    const [rows] = await connection.execute('SELECT * FROM us_state_standard_info WHERE state = ?', [state]);
    connection.release();  // Release the connection back to the pool
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching state info:", error.message);
    return null;
  }
}

// Function to fetch country currency info
export async function fetchCurrencyInfo(country) {
  try {
    const connection = await pool.getConnection();  // Get a connection from the pool
    const [rows] = await connection.execute('SELECT currencyName, currencySymbol, unitValueInUSD FROM country_general_info WHERE country = ?', [country]);
    connection.release();  // Release the connection back to the pool
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching country currency info: ", error.message);
    return null;
  }
}

// Function to fetch currentHealthExpenditurePercentage from country standard info
export async function fetchHealthExpenditurePercentage(country) {
  try {
    const connection = await pool.getConnection();  // Get a connection from the pool
    const [rows] = await connection.execute('SELECT currentHealthExpenditurePercentage FROM country_standard_info WHERE country = ?', [country]);
    connection.release();  // Release the connection back to the pool
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error fetching country currentHealthExpenditurePercentage info: ", error.message);
    return null;
  }
}

// Function to fetch fetchPropertyAndIncomeTaxInfo
export async function fetchPropertyAndIncomeTaxInfo(locationType, entity) {
try{
  const connection = await pool.getConnection();
  // Define the table name based on location type
  const tableName = locationType === 'country' ? 'country_standard_info' : 'us_state_standard_info';

  // Prepare the SQL query
  const query = `SELECT incomeTaxRates, propertyTaxRates FROM ${tableName} WHERE ${locationType} = ?`;

  // Execute the query using a parameterized statement to avoid SQL injection
  const [result] = await connection.execute(query, [entity]);

  return result.length > 0 ? result[0] : null; // Return the first row if found, otherwise null
} catch(error){
  console.error("Error fetching fetchPropertyAndIncomeTaxInfo info: ", error.message);
    return null;
}
  
}

// fetch indicators info
export async function fetchIndicatorInfo(locationType, indicator, tableType) {
  try {
    const connection = await pool.getConnection();
    // Define the table name based on locationType
    const tableName = `${locationType === 'country' ? 'country' : 'us_state'}_${tableType}_info`;

    // Check if the column exists in the specified table using INFORMATION_SCHEMA
    const columnQuery = `
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_NAME = ? 
      AND COLUMN_NAME = ?
    `;
    
    // If the indicator is DST and locationType is state, use DSTStart as the indicator value
    const indicatorValue = (indicator === 'DST' && locationType === 'state') ? 'DSTStart' : indicator;

    // Check if the column exists in the table
    const [columns] = await connection.execute(columnQuery, [tableName, indicatorValue]);
    if (columns.length === 0) {
      throw new Error(`Column "${indicatorValue}" does not exist in table "${tableName}"`);
    }

    // Fetch data from the table since the column exists
    const dataQuery = `SELECT ${locationType}, ${indicatorValue} FROM ${tableName}`;
    const [result] = await connection.execute(dataQuery);

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




// Example function for fetching tables (similar to your original tables query)
export async function listTables() {
  try {
    const connection = await pool.getConnection();
    const [tables] = await connection.execute("SHOW TABLES");
    connection.release();
    console.log("Tables in the database:", tables);
    return tables;
  } catch (error) {
    console.error("Error querying tables:", error.message);
    return [];
  }
}

// Close the pool connection (this can be done during app termination or if needed)
export async function closeConnectionPool() {
  try {
    await pool.end();
    console.log("MySQL connection pool closed.");
  } catch (error) {
    console.error("Error closing the pool:", error.message);
  }
}
