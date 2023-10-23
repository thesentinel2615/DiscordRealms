import ElectronStore from 'electron-store';
import Store from 'electron-store';

let constructDB: ElectronStore<any>;
let chatsDB: ElectronStore<any>;
let attachmentDB: ElectronStore<any>;
let lorebookDB: ElectronStore<any>;

export const initEDB = () => {
    constructDB = new Store({
        name: 'constructData',
    });
    chatsDB = new Store({
        name: 'chatsData',
    });
    attachmentDB = new Store({
        name: 'attachmentsData',
    });
    lorebookDB = new Store({
        name: 'lorebookData',
    });
}

export const getConstructFromEDB = (id: string): any => {
    return constructDB.get(id);
}

export const getConstructsFromEDB = (): any[] => {
    const storeData = constructDB.store;
    const result = [];

    for (let id in storeData) {
        if (id !== 'ids') {
            const construct = storeData[id];
            result.push({
                doc: construct,
                id: id,
                key: id,
                value: {
                    rev: 'unknown'
                }
            });
        }
    }

    return result;
}


export const addConstructFromEDB = (id: string, data: any): void => {
    constructDB.set(id, data);
}

export const removeConstructFromEDB = (id: string): void => {
    constructDB.delete(id);
}

export const getChatFromEDB = (id: string): any => {
    return chatsDB.get(id);
}

export const getChatsFromEDB = (): any[] => {
    const storeData = chatsDB.store;

    const result = [];

    for (let id in storeData) {
        if (id !== 'ids') {
            const construct = storeData[id];
            result.push({
                doc: construct,
                id: id,
                key: id,
                value: {
                    rev: 'unknown'
                }
            });
        }
    }

    return result;
}

export const getChatsByConstructFromEDB = (id: string): any[] => {
    const chats = chatsDB.store;
    let constructChats: any[] = [];
    for(let chat of chats) {
        if(chat.agents.includes(id)) {
            constructChats.push({
                doc: {
                    ...chat
                },
                id: chat._id,
                key: chat._id,
                value: {
                    rev: 'unknown'
                }
            });
        }
    }

    return constructChats;
}

export const addChatFromEDB = (id: string, data: any): void => {
    chatsDB.set(id, data);
}

export const removeChatFromEDB = (id: string): void => {
    chatsDB.delete(id);
}

export const getAttachmentFromEDB = (id: string): any => {
    return attachmentDB.get(id);
}

export const getAttachmentsFromEDB = (): any[] => {
    const storeData = attachmentDB.store;

    const result = [];

    for (let id in storeData) {
        if (id !== 'ids') {
            const construct = storeData[id];
            result.push({
                doc: construct,
                id: id,
                key: id,
                value: {
                    rev: 'unknown'
                }
            });
        }
    }

    return result;
}

export const addAttachmentFromEDB = (id: string, data: any): void => {
    attachmentDB.set(id, data);
}

export const removeAttachmentFromEDB = (id: string): void => {
    attachmentDB.delete(id);
}

export const getLorebookFromEDB = (id: string): any => {
    return lorebookDB.get(id);
}

export const getLorebooksFromEDB = (): any[] => {
    const storeData = lorebookDB.store;

    const result = [];

    for (let id in storeData) {
        if (id !== 'ids') {
            const construct = storeData[id];
            result.push({
                doc: construct,
                id: id,
                key: id,
                value: {
                    rev: 'unknown'
                }
            });
        }
    }

    return result;
}

export const addLorebookFromEDB = (id: string, data: any): void => {
    lorebookDB.set(id, data);
}

export const removeLorebookFromEDB = (id: string): void => {
    lorebookDB.delete(id);
}

const clearLorebooksFromEDB = (): void => {
    lorebookDB.clear();
}

const clearConstructsFromEDB = (): void => {
    constructDB.clear();
}

const clearChatsFromEDB = (): void => {
    chatsDB.clear();
}

const clearAttachmentsFromEDB = (): void => {
    attachmentDB.clear();
}

export const clearEDB = (): void => {
    clearConstructsFromEDB();
    clearChatsFromEDB();
    clearAttachmentsFromEDB();
    clearLorebooksFromEDB();
}

export async function ElectronDBRoutes(){
    initEDB();
};