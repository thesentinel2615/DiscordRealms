import { url } from '@/App';
import { Attachment } from '@/classes/Attachment';
import { Construct } from '@/classes/Construct';
import { Lorebook } from '@/classes/Lorebook';
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

export async function getConstructs(): Promise<Construct[]> {
    try {
        const response = await axios.get(`${url}/api/constructs`);
        const data = response.data;
        console.log("Constructs:", data);
        return data.map((doc: any) => {
            return new Construct(
                doc.doc._id,
                doc.doc.name,
                doc.doc.nickname,
                doc.doc.avatar,
                doc.doc.commands,
                doc.doc.visualDescription,
                doc.doc.personality,
                doc.doc.background,
                doc.doc.relationships,
                doc.doc.interests,
                doc.doc.greetings,
                doc.doc.farewells,
                doc.doc.authorsNote,
                doc.doc.defaultConfig,
                doc.doc.thoughtPattern,
                doc.doc.sprites
            );
        });
    } catch (error: any) {
        throw new Error(`Failed to fetch constructs: ${error.message}`);
    }
}

export async function getConstruct(id: string): Promise<Construct> {
    try {
        const response = await axios.get(`${url}/api/construct/${id}`).then(response => response.data);
        console.log("Construct:", response);
        return new Construct(
            response._id,
            response.name,
            response.nickname,
            response.avatar,
            response.commands,
            response.visualDescription,
            response.personality,
            response.background,
            response.relationships,
            response.interests,
            response.greetings,
            response.farewells,
            response.authorsNote,
            response.defaultConfig,
            response.thoughtPattern,
            response.sprites
        );
    } catch (error: any) {
        throw new Error(`Failed to fetch construct with ID ${id}: ${error.message}`);
    }
}

export async function saveNewConstruct(construct: Construct) {
    await axios.post(`${url}/api/constructs/add/${construct._id}`, construct);
}

export async function updateConstruct(construct: Construct) {
    await axios.put(`${url}/api/update-construct/${construct._id}`, construct);
}

export async function deleteConstruct(id: string) {
    await axios.delete(`${url}/api/delete-construct/${id}`);
}

export async function getAttachments(): Promise<Attachment[]> {
    try {
        const response = await axios.get(`${url}/api/attachments`);
        const data = response.data;

        return data.map((doc: any) => {
            return new Attachment(
                doc.doc._id,
                doc.doc.name,
                doc.doc.type,
                doc.doc.fileext,
                doc.doc.data,
                doc.doc.metadata
            );
        });
    } catch (error) {
        throw new Error("Failed to fetch attachments from the server.");
    }
}

export async function getAttachment(id: string): Promise<Attachment> {
    try {
        const response = await axios.get(`${url}/api/attachment/${id}`);
        const data = response.data;

        return new Attachment(
            data._id,
            data.name,
            data.type,
            data.fileext,
            data.data,
            data.metadata
        );
    } catch (error) {
        throw new Error("Failed to fetch the attachment from the server.");
    }
}

export async function saveNewAttachment(attachment: Attachment) {
    try {
        await axios.post(`${url}/api/attachment`, attachment);
    } catch (error) {
        throw new Error("Failed to save the new attachment to the server.");
    }
}

export async function updateAttachment(attachment: Attachment) {
    try {
        await axios.put(`${url}/api/attachment/${attachment._id}`, attachment);
    } catch (error) {
        throw new Error("Failed to update the attachment on the server.");
    }
}

export async function deleteAttachment(id: string) {
    try {
        await axios.delete(`${url}/api/attachment/${id}`);
    } catch (error) {
        throw new Error("Failed to delete the attachment from the server.");
    }
}

export async function getLorebooks(): Promise<Lorebook[]> {
    try {
        const response = await axios.get(`${url}/api/lorebooks`);
        return response.data.map((lorebookData: any) => {
            return new Lorebook(
                lorebookData.doc._id,
                lorebookData.doc.name,
                lorebookData.doc.avatar,
                lorebookData.doc.description,
                lorebookData.doc.scan_depth,
                lorebookData.doc.token_budget,
                lorebookData.doc.recursive_scanning,
                lorebookData.doc.global,
                lorebookData.doc.constructs,
                lorebookData.doc.extensions,
                lorebookData.doc.entries
            );
        });
    } catch (error: any) {
        throw new Error("Failed to fetch lorebooks: " + error.message);
    }
}

export async function getLorebook(id: string): Promise<Lorebook> {
    try {
        const response = await axios.get(`${url}/api/lorebook/${id}`);
        const lorebookData = response.data;
        return new Lorebook(
            lorebookData._id,
            lorebookData.name,
            lorebookData.avatar,
            lorebookData.description,
            lorebookData.scan_depth,
            lorebookData.token_budget,
            lorebookData.recursive_scanning,
            lorebookData.global,
            lorebookData.constructs,
            lorebookData.extensions,
            lorebookData.entries
        );
    } catch (error: any) {
        throw new Error("Failed to fetch lorebook: " + error.message);
    }
}

export async function saveNewLorebook(lorebook: Lorebook) {
    try {
        await axios.post(`${url}/api/lorebook`, lorebook);
    } catch (error: any) {
        throw new Error("Failed to save new lorebook: " + error.message);
    }
}

export async function updateLorebook(lorebook: Lorebook) {
    try {
        await axios.put(`${url}/api/lorebook/${lorebook._id}`, lorebook);
    } catch (error: any) {
        throw new Error("Failed to update lorebook: " + error.message);
    }
}

export async function deleteLorebook(id: string) {
    try {
        await axios.delete(`${url}/api/lorebook/${id}`);
    } catch (error: any) {
        throw new Error("Failed to delete lorebook: " + error.message);
    }
}