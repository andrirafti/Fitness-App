export const URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Fitness`;
export const URL1 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Quotes`;
export const URL2 = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Fitness1`;
export const config1 = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};