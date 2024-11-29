import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { Product } from "../../app/models/Product";
import agent from "../../app/api/agent";

const productsAdapter = createEntityAdapter<Product>()

export const fetchProductsAsync = createAsyncThunk<Product[]>(
  'catalog/fetchProductsAsync',
  async () => {
    try {
      return await agent.Catalog.list();
    } catch (error) {
      console.log(error)
    }
  }
) 