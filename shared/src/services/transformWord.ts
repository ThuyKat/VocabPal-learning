import { DictionaryResponse,Word } from "../types";

export function transformToWord(
    apiResponse:DictionaryResponse,
    useId:string,
    sourceUrl?:string,
):Omit<Word, 'id'|'createdAt'|'updatedAt'> {
    return {
        word: apiResponse.word,
        definition: apiResponse.meanings[0]?.definitions[0]?.definition || "Definition not found.",
        partOfSpeech: apiResponse.meanings[0]?.partOfSpeech || "N/A",
        example: apiResponse.meanings[0]?.definitions[0]?.example,
        userId: useId,
        phonetics: apiResponse.phonetics.find(p => p.text)?.text,
        sourceUrl: sourceUrl,
    };
}
