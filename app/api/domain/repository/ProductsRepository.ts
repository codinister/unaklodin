import { dollarRateType, productsType } from "@/types/types";

 abstract class ProductsRepository {
  abstract getDollarRate(): Promise<dollarRateType>;
  abstract getProductById(id: string): Promise<productsType[]>;
  abstract getProducts(type: string): Promise<productsType[]>;
  abstract getMatchedProducts(arr: string[]): Promise<productsType[]>;
}

export default ProductsRepository;
