export interface Profile {
    nev: string;
    leiras: string;
    kep: string;
    media: {
        tipus: 'github' | 'instagram' | 'twitter';
        link: string;
    }[];
}
