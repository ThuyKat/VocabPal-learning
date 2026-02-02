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