export interface User {
    id: number,
    name: string,
    email: string,
    phone: string,
    website: string,
    company: {
        name: string
    }
}