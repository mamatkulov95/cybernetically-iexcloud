import { createSlice } from "@reduxjs/toolkit";
import { StockData } from "../assets/interfaces";

interface StockState {
  stockData: StockData[];
  currentPage: number;
}

const stockSlice = createSlice({
  name: "stocks",
  initialState: {
    stockData: [],
    currentPage: 1
  } as StockState,
  reducers: {
    setStockData: (state, action) => {
      state.stockData = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }
});

export const { setStockData, setCurrentPage } = stockSlice.actions;

export default stockSlice.reducer;
