export interface PokemonsResponseObject {
    id: number;
    identifier: string;
    species_id: number;
    height: number;
    weight: number;
    base_experience: number;
    order: number;
    is_default: boolean;
}

export interface User {
    id: number;
    name: string;
    email_verified_at?: string; 
    created_at?: string; 
    updated_at?: string; 
}