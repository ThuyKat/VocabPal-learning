import { Word } from "../types";
import { fetchWordDefinition } from "./dictionaryApi";
import { transformToWord } from "./transformWord";
class DictionaryAdapter{
    private userId: string;
    private sourceUrl?: string;

    constructor(userId: string, sourceUrl?: string) {
        this.userId = userId;
        this.sourceUrl = sourceUrl;
    }
    lookup = async (word: string): Promise<Omit<Word, 'id'|'createdAt'|'updatedAt'>> => {
        //fetch definition from dictionary API
        const apiResponse = await fetchWordDefinition(word);
        if (!apiResponse) {
            throw new Error(`Word "${word}" not found in dictionary API.`);
        }
        //transform API response to Word format
        //return transformed Word object
        return transformToWord(apiResponse, this.userId, this.sourceUrl);
    };
}

class  FreeDictionaryAdapter extends DictionaryAdapter {
    constructor(userId: string, sourceUrl?: string) {
        super(userId, sourceUrl);
    }
}
