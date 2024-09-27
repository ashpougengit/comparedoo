export const USStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia (USA)', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const totalstates = USStates.length;
const third = Math.ceil(totalstates / 3);

const shuffledStates = USStates.sort(() => Math.random() - 0.5)
// Split USStates into three arrays
const statesArr1 = shuffledStates.slice(0, third);
const statesArr2 = shuffledStates.slice(third, 2 * third);
const statesArr3 = shuffledStates.slice(2 * third);

const today = new Date();
const dayIndex = today.getDay();

// Cycle through state arrays based on day of the week
const arrays = [statesArr1, statesArr2, statesArr3];

// Function to rotate arrays for each day
export const randomListUSStates = () => {
    // Rotate arrays based on the day of the week
    const list1 = arrays[dayIndex % arrays.length];
    const list2 = arrays[(dayIndex + 1) % arrays.length];
    const list3 = arrays[(dayIndex + 2) % arrays.length];

    return { list1, list2, list3 };
}