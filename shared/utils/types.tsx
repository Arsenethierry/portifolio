export interface PersonalDetails {
    name: string;
    logo: string;
    about: string;
    socialMedia: SocialMedia[];
    work: Work;
    resume: string;
    profile_img: string;
    calendyUrl: string;
}

export interface SocialMedia {
    link: string;
    image_file: string;
    alt_text: string;
}

export interface Work {
    company: string;
    destination: string;
    logo: string;
}