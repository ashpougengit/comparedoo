import { NextResponse } from 'next/server';

function getFormattedDate() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

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

  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return `${dayOfWeek}, ${day}${daySuffix(day)} ${month} ${year}`;
}

// API route that checks if the request is internal (not accessible by users)
export async function GET(request) {
  // Check for a special internal header to allow only internal requests
  const internalRequestHeader = request.headers.get('x-internal-request');

  // Block request if the header is not present or invalid
  if (!internalRequestHeader || internalRequestHeader !== process.env.INTERNAL_API_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Return the formatted date if the request is authorized
  const formattedDate = getFormattedDate();
  return NextResponse.json({ formattedDate: formattedDate }, { status: 200 });
}
