// country
export async function fetchCountryGeneralInfo(country) {
  if (typeof window === 'undefined') {
    const db = await import('./db');
    return db.fetchCountryGeneralInfo(country);
  } else {
    throw new Error('Database operations are only supported on the server side.');
  }
}

export async function fetchCountryCostInfo(country) {
  if (typeof window === 'undefined') {
    const db = await import('./db');
    return db.fetchCountryCostInfo(country);
  } else {
    throw new Error('Database operations are only supported on the server side.');
  }
}

export async function fetchCountryStandardInfo(country) {
  if (typeof window === 'undefined') {
    const db = await import('./db');
    return db.fetchCountryStandardInfo(country);
  } else {
    throw new Error('Database operations are only supported on the server side.');
  }
}

// us-state
export async function fetchUSStateGeneralInfo(state) {
  if (typeof window === 'undefined') {
    const db = await import('./db');
    return db.fetchUSStateGeneralInfo(state);
  } else {
    throw new Error('Database operations are only supported on the server side.');
  }
}

export async function fetchUSStateCostInfo(state) {
  if (typeof window === 'undefined') {
    const db = await import('./db');
    return db.fetchUSStateCostInfo(state);
  } else {
    throw new Error('Database operations are only supported on the server side.');
  }
}

export async function fetchUSStateStandardInfo(country) {
  if (typeof window === 'undefined') {
    const db = await import('./db');
    return db.fetchUSStateStandardInfo(country);
  } else {
    throw new Error('Database operations are only supported on the server side.');
  }
}

// fetch currency info from country data
export async function fetchCurrencyInfo(country) {
  if (typeof window === 'undefined') {
    const db = await import('./db');
    return db.fetchCurrencyInfo(country);
  } else {
    throw new Error('Database operations are only supported on the server side.');
  }
}

// fetch health expenditure percentage from country standard data
export async function fetchHealthExpenditurePercentage(country) {
  if (typeof window === 'undefined') {
    const db = await import('./db');
    return db.fetchHealthExpenditurePercentage(country);
  } else {
    throw new Error('Database operations are only supported on the server side.');
  }
}

// fetch property and income tax info 
export async function fetchPropertyAndIncomeTaxInfo(locationType, entity) {
  if (typeof window === 'undefined') {
    const db = await import('./db');
    return db.fetchPropertyAndIncomeTaxInfo(locationType, entity);
  } else {
    throw new Error('Database operations are only supported on the server side.');
  }
}

// fetch indicator value of all countries
export async function fetchIndicatorInfo(locationType, indicator, tableType) {
  if (typeof window === 'undefined') {
    const db = await import('./db');
    return db.fetchIndicatorInfo(locationType, indicator, tableType);
  } else {
    throw new Error('Database operations are only supported on the server side.');
  }
}