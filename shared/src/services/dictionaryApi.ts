import { DictionaryResponse } from "../types";
export async function fetchWordDefinition(word:string): Promise<DictionaryResponse |null> {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) {
        return null;
    }
    try {
        const data: DictionaryResponse[] = await response.json();
        return data[0];
    } catch (error) {
        console.error("Error parsing dictionary API response:", error);
        return null;
    }
}
