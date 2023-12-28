// pages/api/stock/[symbol].tsx

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { symbol },
  } = req;

  try {
    const apiKey = process.env.ALPHA_VANTAGE_API_KEY; // Load your API key from environment variables
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
