export interface IProduct {
  id: string;
  name: string;
  price: number;
  images: IImage[];
}
export interface IImage {
  url: string;
}
export interface IFilter {
  id: string;
  name: string;
}
export interface IFilters {
  filters: Record<string, IFilter[]>;
}
export interface IShoppingCart {
  isOpen: boolean;
  products: IProduct[];
}
