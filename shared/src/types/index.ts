interface Word{
    id: string;
    word: string;
    definition: string;
    partOfSpeech: string;
    example?:string;
    phenetics?: string;
    sourceUrl?:string;
    categoryId?: string;
    userId:String;
    createdAt: Date;
    updatedAt: Date;
}

interface Category{
    id: string;
    name: string;
    color?:string;
    userId:string;
    createdAt: Date;
}

interface User{
    id:string;
    email:string;
    displayName?:string;
    photoUrl?:string;
    createdAt: Date;
}
//dictionary interface
interface DictionaryResponse{
    word: string;
    phonetic: string;
    phonetics: Phonetics[];
    origin: string;
    meanings: Meaning[];
}
interface Phonetics{
    text: string;
    audio?: string;
}
interface Meaning{
    partOfSpeech: string;
    definitions: Definition[];
}
interface Definition{
    definition: string;
    example: string;
    synonyms: string[] | [];
    antonyms: string[] | [];
}