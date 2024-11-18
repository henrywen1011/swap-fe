import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Sample stock data
const allData = [
  { date: '2024-08-01', price: 1.11 },
  { date: '2024-08-15', price: 1.12 },
  { date: '2024-08-20', price: 1.15 },
  { date: '2024-09-01', price: 1.18 },
  { date: '2024-09-02', price: 1.14 },
  { date: '2024-09-03', price: 1.16 },
  { date: '2024-09-04', price: 1.17 },
  { date: '2024-09-05', price: 1.13 },
  { date: '2024-09-06', price: 1.18 },
];

// Function to filter data based on timeFrame
const filterData = (timeFrame: string) => {
  const now = new Date();
  switch (timeFrame) {
    case '1D':
      return allData.slice(-1); // Last day
    case '7D':
      return allData.slice(-5); // Last 5 days as an example
    case '1M':
      return allData.slice(-6); // Last month (you can use dynamic logic based on date)
    case '1Y':
      return allData; // Showing all data for a year
    case 'ALL':
    default:
      return allData; // Return full data set
  }
};

const ForexChart = ({ timeFrame }: { timeFrame: any }) => {
  // Filter data based on the selected time frame
  const filteredData = filterData(timeFrame);

  return (
    <ResponsiveContainer width="100%" height={window.screen.width > 760? 400: 200}>
      <AreaChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffe878" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ffe878" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[1.1, 1.2]} />
        <Tooltip />
        <Area 
          type="monotone" 
          dataKey="price" 
          stroke="#ffe878" 
          fillOpacity={1} 
          fill="url(#colorPrice)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ForexChart;
