export interface Category {
    id: number;
    title: string;
}

export interface Profile {
    name: string;
}

export interface Slider {
    id: number;
    title: string;
    foods: Food[];
}

export interface Food {
    id: number;
    title: string;
    rate: string;
    discount: number;
    price: number;
    picture: string;
    category: number;
}

