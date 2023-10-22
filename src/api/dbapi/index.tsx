import { url } from '@/App';
import axios from 'axios';

export async function setStorageValue(key: string, value: string): Promise<void> {
    const data = {
        key,
        value,
    };

    try {
        await axios.post(`${url}/api/set-data`, data);
    } catch (error: any) {
        // Handle the error, maybe by re-throwing it or logging it
        throw new Error(`Failed to set data: ${error.message}`);
    }
}

export async function getStorageValue(key: string): Promise<string> {
    try {
        const response = await axios.get(`${url}/api/get-data/${key}`);
        return response.data.value;
    } catch (error: any) {
        // Handle the error, maybe by re-throwing it or logging it
        throw new Error(`Failed to get data for key ${key}: ${error.message}`);
    }
}