// src/services/koios.ts
import axios from 'axios';

export interface AddressTxResponse {
  // Define the shape of the response according to Koios documentation.
  [key: string]: any;
}

export async function getAddressTxs(wallet: string): Promise<AddressTxResponse> {
  const url = "https://api.koios.rest/api/v1/address_txs";
  const data = {
    _addresses: [wallet]
  };

  const response = await axios.post(url, data, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.KOIOS_API_KEY}` // Ensure your API key is set in your environment
    },
  });
  return response.data;
}

/**
 * Interface for the response from the address info endpoint.
 * Adjust the fields below to match the Koios API response.
 */
export interface AddressInfoResponse {
  [key: string]: any;
}

/**
 * Fetches address information (e.g. balance) for a given wallet.
 *
 * @param wallet - The wallet address to fetch info for.
 * @returns A promise that resolves to the address info.
 */
export async function getAddressInfo(wallet: string): Promise<AddressInfoResponse> {
  const url = "https://api.koios.rest/api/v1/address_info?select=balance";
  const data = {
    _addresses: [wallet],
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.KOIOS_API_KEY}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching address info:", error);
    throw new Error(error.message);
  }
}

/**
 * Interface for the response from the transaction info endpoint.
 * Adjust the fields below to match the Koios API response.
 */
export interface TxInfoResponse {
  [key: string]: any;
}

/**
 * Fetches transaction information for a given transaction ID.
 *
 * @param txId - The transaction hash to fetch details for.
 * @returns A promise that resolves to the transaction info.
 */
export async function getTxInfo(txId: string): Promise<TxInfoResponse> {
  const url = "https://api.koios.rest/api/v1/tx_info";
  const data = {
    _tx_hashes: [txId],
    _inputs: true,
    _metadata: true,
    _assets: true,
    _withdrawals: true,
    _certs: true,
    _scripts: true,
    _bytecode: true,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.KOIOS_API_KEY}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching transaction info:", error);
    throw new Error(error.message);
  }
}


export interface AssetInfoResponse {
  // Define the response shape as needed. For now, we'll use an index signature.
  [key: string]: any;
}

/**
 * Fetches asset information from Koios based on a transformed asset list.
 *
 * @param transformedArray - An array of asset identifiers
 * @returns A promise that resolves to the asset information data
 */
export async function getAssetInfo(transformedArray: string[]): Promise<AssetInfoResponse> {
  const url = "https://api.koios.rest/api/v1/asset_info";
  const data = {     
    _asset_list: transformedArray,
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.KOIOS_API_KEY}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching asset info:", error);
    throw new Error(error.message);
  }
}