import { titleCased } from "../format/format";

const allWorldCountries = {
    africa: [
        "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde",
        "Cameroon", "Central African Republic", "Chad", "Comoros", "Republic of the Congo",
         "Cote d'Ivoire", "Democratic Republic of the Congo", "Djibouti", "Egypt",
        "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
    ],
    asia: [
        "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei Darussalam", "Cambodia", "China", "Cyprus", "East Timor", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"
    ],
    europe: [
        "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina",
        "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"
    ],
    northAmerica: [
        "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica",
        "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala",
        "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States"
    ],
    oceania: [
        "Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru",
        "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"
    ],
    southAmerica: [
        "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana",
        "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"
    ]
};

export const allCountries = Object.values(allWorldCountries).flat().sort();
export const africaCountries = allWorldCountries.africa.sort();
export const asiaCountries = allWorldCountries.asia.sort();
export const europeCountries = allWorldCountries.europe.sort();
export const northAmericaCountries = allWorldCountries.northAmerica.sort();
export const oceaniaCountries = allWorldCountries.oceania.sort();
export const southAmericaCountries = allWorldCountries.southAmerica.sort();

export const ukParts = ["England", "Northern Ireland", "Scotland", "Wales"];
const totalCountries = allCountries.length;
const third = Math.ceil(totalCountries / 3);

const shuffledCountries = allCountries.sort(() => Math.random() - 0.5);

// Split countries into three arrays
const countryArr1 = shuffledCountries.slice(0, third);
const countryArr2 = shuffledCountries.slice(third, 2 * third);
const countryArr3 = shuffledCountries.slice(2 * third);

const today = new Date();
const dayIndex = today.getDay();

// Cycle through country arrays based on day of the week
const arrays = [countryArr1, countryArr2, countryArr3];

// Function to rotate arrays for each day
export const randomListCountries = () => {
    // Rotate arrays based on the day of the week
    const list1 = arrays[dayIndex % arrays.length];
    const list2 = arrays[(dayIndex + 1) % arrays.length];
    const list3 = arrays[(dayIndex + 2) % arrays.length];

    return { list1, list2, list3 };
}

// get country name of user using IP geolocation 
export async function getCountryByIP() {
    try {
      const response = await fetch(`http://ip-api.com/json/`);
      const data = await response.json();
  
      if (data && data.country) {
        return titleCased(data.country);
      } else {
        console.warn('No country found for the provided IP address. Falling back to default country.');
        return 'nepal'; // Fallback country
      }
    } catch (error) {
      console.error('Error fetching user country:', error);
      throw new Error('No country found for the provided IP address.');
    }
  }
  