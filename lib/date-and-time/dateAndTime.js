import moment from "moment-timezone";

export const currentYear = new Date().getFullYear();
export const lastYear = currentYear - 1;
export const dateRange = `${lastYear - 10}-${lastYear}`;
export const datePublished = '2024-09-30'; // ISO 8601 format for JSON-LD

// to get the formatted date of 7 days ago with the weekday
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
  const monthAndYear = parts[1].split(' ').slice(1).join(' '); // "September 2024"

  // Construct a new readable date string in a standard format: 'September 30, 2024'
  const readableDate = `${monthAndYear} ${day}`;

  // Create a Date object
  const dateObject = new Date(readableDate);

  // Check if the date is valid
  if (isNaN(dateObject)) {
    throw new Error('Invalid date format');
  }

  // Convert to ISO string (YYYY-MM-DD)
  return dateObject.toISOString().split('T')[0];
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

// timeapi.io
// export const fetchCountryTimeData = async (timezone) => {
//   try {
//     const timeResponse = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`);
//     if (!timeResponse.ok) throw new Error('Failed to fetch current time data');
//     const timeData = await timeResponse.json();

//     const result = {
//       currentDate: timeData.date,
//       currentTime: timeData.time,
//     };

//     return result;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// export const renderLineBreak = (timezonesArray) => (
//   <div>
//     {timezonesArray.reduce((acc, timezone, index) => (
//       index === 0 ? [timezone] : [...acc, <br key={index} />, timezone]
//     ), [])}
//   </div>
// );
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
