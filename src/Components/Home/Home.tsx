import StockReports from "../StockReports/StockReports";

export default function Home(): JSX.Element {
  return (
    <div>
      <h1 className="text-lg font-bold text-center">StockData</h1>
      <StockReports />
    </div>
  );
}
