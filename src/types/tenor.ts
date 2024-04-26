

export interface MediaFormat {
    url: string;
    duration: number;
    preview: string;
    dims: [number, number];
    size: number;
}

export interface Result {
    id: string;
    title: string;
    media_formats: {
        tinygif: MediaFormat;
        tinywebm: MediaFormat;
        nanogifpreview: MediaFormat;
        tinymp4: MediaFormat;
        nanogif: MediaFormat;
        gifpreview: MediaFormat;
        loopedmp4: MediaFormat;
        nanomp4: MediaFormat;
        webm: MediaFormat;
        gif: MediaFormat;
        tinygifpreview: MediaFormat;
        mp4: MediaFormat;
        mediumgif: MediaFormat;
        nanowebm: MediaFormat;
    };
    created: number;
    content_description: string;
    itemurl: string;
    url: string;
    tags: string[];
    flags: [];
    hasaudio: boolean;
}

export interface TenorResponse {
    results: Result[];
    next: string;
}