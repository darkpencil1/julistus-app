import { Request, Response } from "express";
import { getAllProducts } from "./product.controller";
import IProduct from "@shared/types/ProductInterface";

describe("Product Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    req = {};
    jsonMock = jest.fn();
    res = {
      status: jest.fn().mockReturnThis(),
      json: jsonMock,
    };
  });

  it("should return an array of IProduct", () => {
    getAllProducts(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(expect.any(Array));

    const products = jsonMock.mock.calls[0][0] as IProduct[];
    products.forEach((product) => {
      expect(product).toHaveProperty("id");
      expect(product).toHaveProperty("name");
      expect(product).toHaveProperty("productType");
      expect(product).toHaveProperty("primer");
      expect(product).toHaveProperty("description");
      expect(product).toHaveProperty("snapshot");
      expect(product).toHaveProperty("images");
      expect(product).toHaveProperty("imageUrl");
      expect(product).toHaveProperty("price");
      expect(product).toHaveProperty("orientation");
    });
  });
});
