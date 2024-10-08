// 'use client';

// import React from 'react';
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { lastYear } from '@/lib/date-and-time/dateAndTime';

// // Register the components
// ChartJS.register(
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const PopulationChart = ({ popInfo, ariaLabel }) => {
//   const labels = [];
//   const startYear = lastYear - 10;

//   // Generate labels with a step of 2 years
//   for (let i = 0; i < popInfo.length; i += 2) {
//     labels.push(startYear + i);
//   }

//   // Adjust popInfo to match the years that appear on the X-axis
//   const adjustedPopInfo = popInfo.filter((_, index) => index % 2 === 0);

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: 'Population',
//         data: adjustedPopInfo, // Use adjusted population data
//         borderColor: 'darkcyan',
//         backgroundColor: 'white',
//         fill: false,
//       },
//     ],
//   };

//   const chartOptions = {
//     scales: {
//       x: {
//         ticks: {
//           autoSkip: false, // Show every label in the 'labels' array
//         },
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return <Line data={chartData} options={chartOptions} aria-label={ariaLabel} />;
// };

// export default PopulationChart;

'use client';

import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { lastYear } from '@/lib/date-and-time/dateAndTime';

// Register the components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const PopulationChart = ({ popInfo, ariaLabel }) => {
  const labels = [];
  const startYear = lastYear - 10;

  for (let i = 0; i < popInfo.length; i++) {
    labels.push(startYear + i);
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Population',
        data: popInfo,
        borderColor: 'darkcyan',
        backgroundColor: 'white',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          autoSkip: false, // Ensure all years are displayed
          stepSize: 1,     // Increment by 1 year
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false, // You can tweak the ratio if necessary
  };

  return (
    <div className='population-chart'>
      <Line data={chartData} options={chartOptions} aria-label={ariaLabel} />
    </div>
  );
};

export default PopulationChart;
