export interface IProduct {
    id?: string | number,
    name: string,
    imgUrl: string,
    original_price: number,
    price: number,
    description: string,
    categoryId: string,
    size_id: string,
    color_id: string,
    quantity: number,
    quantity_sold: number,
    inventory_number: number,
    discount_code_id: string,
    point_id: string
}