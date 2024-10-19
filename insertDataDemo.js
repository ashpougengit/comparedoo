const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

const countryGeneralPath = path.join(process.cwd(), 'country_general_info.json');
const countryCostPath = path.join(process.cwd(), 'country_cost_info.json');
const countryStandardPath = path.join(process.cwd(), 'country_standard_info.json');
const USStateGeneralPath = path.join(process.cwd(), 'us_state_general_info.json');
const USStateCostPath = path.join(process.cwd(), 'us_state_cost_info.json');
const USStateStandardPath = path.join(process.cwd(), 'us_state_standard_info.json');

const countryGeneralData = JSON.parse(fs.readFileSync(countryGeneralPath, 'utf8'));
const countryCostData = JSON.parse(fs.readFileSync(countryCostPath, 'utf8'));
const countryStandardData = JSON.parse(fs.readFileSync(countryStandardPath, 'utf8'));
const USStateGeneralData = JSON.parse(fs.readFileSync(USStateGeneralPath, 'utf8'));
const USStateCostData = JSON.parse(fs.readFileSync(USStateCostPath, 'utf8'));
const USStateStandardData = JSON.parse(fs.readFileSync(USStateStandardPath, 'utf8'));

async function insertData() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Sagar@1231',
        database: 'comparedoo',
    });

    try {
        // Insert data into country_general_info
        const insertCountryGeneralInfo = `
            INSERT INTO country_general_info (country, capitalCity, largestCity, populationGrowthAnnual)
            VALUES (?, ?, ?, ?)
        `;

        for (const row of countryGeneralData) {
            // Check if populationGrowthAnnual is a number
            const populationGrowthAnnual = isNaN(row.populationGrowthAnnual)
                ? null  // Insert NULL for non-numeric values
                : row.populationGrowthAnnual;

            await connection.execute(insertCountryGeneralInfo, [
                row.country,
                row.capitalCity,
                row.largestCity,
                populationGrowthAnnual,
            ]);
        }

        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Failed to insert data:', error);
    } finally {
        await connection.end();
    }
}

insertData();
