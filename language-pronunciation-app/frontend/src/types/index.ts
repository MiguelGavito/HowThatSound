export interface WordRequest {
    word: string;
    language: string;
    motherTongue: string;
}

export interface PronunciationResponse {
    pronunciation: string;
    similarWords: string[];
}