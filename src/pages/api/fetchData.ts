import { NextApiRequest, NextApiResponse } from 'next';
import { fetchData } from '../../lib/fetchData'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { wallet } = req.query;

  if (!wallet) {
    return res.status(400).json({ error: 'Wallet address is required' });
  }

  try {
    const data = await fetchData(wallet as string);
    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: 'Failed to fetch data', message: error.message });
    } else {
      res.status(500).json({ error: 'Failed to fetch data', message: 'Unknown error' });
    }
  }
}