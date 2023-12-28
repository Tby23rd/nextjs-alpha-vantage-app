import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/stocks.module.css'; // Import the CSS module

const Stocks: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [symbol, setSymbol] = useState<string>(''); // State to hold the stock symbol

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const stockSymbol = 'MSFT'; // Example symbol for Microsoft; you can change this as needed
        setSymbol(stockSymbol); // Set the symbol in the state
        const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
        const url = `/api/stock/${stockSymbol}?apiKey=${apiKey}`;
        
        const response = await axios.get(url);
        console.log(response.data); // Log the fetched data
        setData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      <h1>Stock Data for {symbol}</h1> {/* Display the stock symbol */}
      {data ? (
        <div className={styles.tableContainer}>
          <table className={styles.stockTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              {data && data['Time Series (Daily)'] ? (
                Object.keys(data['Time Series (Daily)']).map((date) => (
                  <tr key={date}>
                    <td>{date}</td>
                    <td>{data['Time Series (Daily)'][date]['1. open']}</td>
                    <td>{data['Time Series (Daily)'][date]['2. high']}</td>
                    <td>{data['Time Series (Daily)'][date]['3. low']}</td>
                    <td>{data['Time Series (Daily)'][date]['4. close']}</td>
                    <td>{data['Time Series (Daily)'][date]['5. volume']}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Stocks;
