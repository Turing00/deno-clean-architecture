import { UseCase } from "../base/use_case.ts";
import { Product } from "../domain/product_model.ts";
import { ProductMockRepository } from "../../data/repository/product-mock-repository/product_mock_repository.ts";

export class GetAllProductsUsecase implements UseCase<void, Array<Product>> {
  constructor(private repository: ProductMockRepository) {}

  execute(): Array<Product> {
    return this.repository.getAllProducts();
  }
}