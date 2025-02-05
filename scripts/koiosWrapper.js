// scripts/koiosWrapper.js
const axios = require('axios');

/**
 * Fetch transactions for a given wallet, optionally filtering by date range.
 * @param {string} wallet - The wallet address.
 * @param {string} [startDate] - ISO date string for the start date.
 * @param {string} [endDate] - ISO date string for the end date.
 * @returns {Promise<Array>} Array of transactions.
 */
async function fetchWalletTransactions(wallet, startDate, endDate) {
  const url = "https://api.koios.rest/api/v1/address_txs";
  const data = {
    _addresses: [wallet]
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.KOIOS_API_KEY}`
      }
    });
    let txs = response.data;

    // Filter transactions by date if provided.
    if (startDate) {
      const start = new Date(startDate);
      txs = txs.filter(tx => new Date(tx.time) >= start);
    }
    if (endDate) {
      const end = new Date(endDate);
      txs = txs.filter(tx => new Date(tx.time) <= end);
    }

    return txs;
  } catch (error) {
    console.error('Error fetching wallet transactions:', error);
    return [];
  }
}

module.exports = {
  fetchWalletTransactions
};
