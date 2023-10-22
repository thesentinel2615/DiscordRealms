import { ClientStatus } from "discord.js";
import { useState } from "react";
type ValidStatus = 'online' | 'dnd' | 'idle' | 'invisible';

const ProfilePage = () => {
    const [botName, setBotName] = useState<string>('');
    const [botToken, setBotToken] = useState<string>('');
    const [botApplicationID, setBotApplicationID] = useState<string>('');
    const [botAvatarURL, setBotAvatarURL] = useState<string>('');
    const [botStatusMessage, setBotStatusMessage] = useState<string>('');
    const [botStatusType, setBotStatusType] = useState<ValidStatus>('online');
    const [botStatus, setBotStatus] = useState<string>('');


    return (
        <>
        </>
    )
};
export default ProfilePage;