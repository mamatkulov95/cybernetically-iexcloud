import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../../assets/data.json";
import { StockData } from "../../assets/interfaces";

const StockReports = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const stocksPerPage = 10;
  const { thData } = data;

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const apiKey = "pk_c80ea4d31daa4158b8c56c800e35f5a1";
        const url = `https://api.iex.cloud/v1/data/core/stock_collection/sector?collectionName=Technology&token=${apiKey}`;
        const response = await axios.get(url);
        setStockData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchStockData();
  }, []);

  const lastIndex = currentPage * stocksPerPage;
  const firstIndex = lastIndex - stocksPerPage;
  const currentStocks = stockData.slice(firstIndex, lastIndex);

  const goToPage = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <table className="w-[90vw] h-[70vh]">
        <thead>
          <tr className="border">
            {thData.map((tableHeader, index) => (
              <th className="text-left p-2" key={index}>
                {tableHeader.thName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentStocks.map((stock, index) => (
            <tr key={index} className="border py-4">
              <td className="py-2 pl-2">{firstIndex + index + 1}</td>
              <td className="pl-2">{stock.companyName}</td>
              <td className="pl-2">{stock.primaryExchange}</td>
              <td>{stock.highSource}</td>
              <td className="pl-6">{stock.volume}</td>
              <td className="px-4">{stock.symbol}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination flex gap-4 py-6">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Previous
        </button>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={lastIndex >= stockData.length}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default StockReports;
