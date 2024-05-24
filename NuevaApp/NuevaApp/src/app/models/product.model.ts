export interface Product {
    id?: string;  // El '?' indica que el campo es opcional, útil para creaciones nuevas donde el ID aún no existe.
    name: string;
    price: number;
    quantity: number;
}
