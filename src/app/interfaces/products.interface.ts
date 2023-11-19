export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    ratin: Ratin,
}

interface Ratin {
    rate: number,
    count: number,
}