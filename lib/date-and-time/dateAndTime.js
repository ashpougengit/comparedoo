import moment from "moment-timezone";

export const currentYear = new Date().getFullYear();
export const lastYear = currentYear - 1;
export const dateRange = `${lastYear - 10}-${lastYear}`;
export const datePublished = '2024-10-21'; // ISO 8601 format for JSON-LD

export function getFormattedDate() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  // const sevenDaysAgo = new Date();
  // sevenDaysAgo.setDate(currentDate.getDate() - 7);

  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  // Get the day with the correct suffix (st, nd, rd, th)
  const day = currentDate.getDate();
  const daySuffix = (day) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  // Get the month and year
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  // Combine day of the week, day with suffix, month, and year
  return `${dayOfWeek}, ${day}${daySuffix(day)} ${month} ${year}`;
}

export function convertToISODate(friendlyDate) {
  // Extract the relevant parts from the friendly date format: 'Monday, 30th September 2024'
  const parts = friendlyDate.split(', ');

  // Extract the day, removing the 'th', 'st', 'nd', or 'rd' suffix from the day
  const dayWithSuffix = parts[1].split(' ')[0];
  const day = dayWithSuffix.replace(/\D/g, ''); // Remove any non-digit characters (like 'th')

  // Extract the month and year
  const [monthName, year] = parts[1].split(' ').slice(1); // Get month and year separately

  // Convert the month name to a numerical value
  const month = new Date(`${monthName} 1`).getMonth() + 1; // Month is 0-indexed, so add 1

  // Construct the date in YYYY-MM-DD format manually to avoid timezone issues
  const isoDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  // Validate the date by creating a new Date object and checking if it's valid
  const dateObject = new Date(isoDate);
  if (isNaN(dateObject.getTime())) {
    throw new Error('Invalid date format');
  }

  return isoDate; // Return the ISO date (YYYY-MM-DD)
}

// Function to update the date daily
export function updateDateDaily(callback) {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  const msUntilMidnight = midnight - now;

  setTimeout(() => {
    // Execute the callback function to update the date
    callback(getFormattedDate());

    // Set the next update to the next midnight
    updateDateDaily(callback);
  }, msUntilMidnight);
}

// calculate time difference
export const calculateTimeDifference = (weatherInfo1, weatherInfo2) => {
  if (!weatherInfo1 || !weatherInfo2) return {};

  // Parse the date and time together for accurate comparison
  const dateTime1 = moment(`${weatherInfo1.currentDate} ${weatherInfo1.currentTime}`, 'dddd, Do MMMM, YYYY hh:mm A');
  const dateTime2 = moment(`${weatherInfo2.currentDate} ${weatherInfo2.currentTime}`, 'dddd, Do MMMM, YYYY hh:mm A');

  // Calculate the difference in minutes
  const diffMinutes = dateTime2.diff(dateTime1, 'minutes');

  const hours = Math.floor(Math.abs(diffMinutes) / 60);
  const minutes = Math.abs(diffMinutes) % 60;

  return {
    timeDifference: hours === 0 ? `${minutes} minutes` : minutes === 0 ? `${hours} hours` : `${hours} hours and ${minutes} minutes`,
    aheadOrBehind: diffMinutes > 0 ? 'behind' : diffMinutes < 0 ? 'ahead' : 'same time'
  };
};

// Helper function to convert month name to month index
function getMonthIndex(monthName) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months.indexOf(monthName);
}

// handle custom date formats and ISO strings
export function convertDateToTimestamp(dateString) {
  // Check if the date string is in ISO 8601 format (standard format)
  const ISODateObject = new Date(dateString);
  if (!isNaN(ISODateObject.getTime())) {
    return ISODateObject.getTime();
  }

  // Custom format: 'Sunday, 31st March, 2024'
  const customFormatRegex = /(\w+),\s(\d+)(?:st|nd|rd|th)\s(\w+),\s(\d{4})/;
  const match = dateString.match(customFormatRegex);

  if (match) {
    // Extract day, month, and year from the string
    const day = parseInt(match[2]);
    const monthName = match[3];
    const year = parseInt(match[4]);

    // Convert month name to month index (0-11)
    const monthIndex = getMonthIndex(monthName);

    // Create a new Date object with the parsed values
    const dateObject = new Date(year, monthIndex, day);

    if (!isNaN(dateObject.getTime())) {
      return dateObject.getTime();
    }
  }

  // Return NaN or throw an error if parsing fails
  console.error('Invalid date format:', dateString);
  return NaN;
}

export function determineCurrentTimezone(DSTStart, DSTEnd, timezoneNormal, timezoneSummer) {
  if (DSTStart === "DST Not Observed") {
    return timezoneNormal;
  }

  // Get the timestamps
  const currentDate = convertDateToTimestamp(new Date());
  const startDate = convertDateToTimestamp(DSTStart);
  const endDate = convertDateToTimestamp(DSTEnd);

  // Check if the current date falls within the DST period
  if (startDate <= currentDate && currentDate <= endDate) {
    return timezoneSummer;
  } else {
    return timezoneNormal;
  }
}

export const renderLineBreak = (timezonesArray) => (
  <div>
    {timezonesArray.map((timezone, index) => (
      <span key={index}>
        {timezone}
        {index !== timezonesArray.length - 1 && <br />}
      </span>
    ))}
  </div>
);
