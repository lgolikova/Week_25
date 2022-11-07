import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";



export const data = [
  ["Language", "percent"],
  ["JavaScript", 18.8],
  ["С#", 14.7],
  ["Java", 14.3],
  ["Python", 11.2],
  ["PHP", 10.6],
  ["TypeScript", 10.4],
  ["Kotlin", 5.4],
  ["Swift", 3.4],
  ["C++", 3.3],
  ["Go", 2.2],
  ["Ruby", 2.1],
  ["Dart", 1]
];

export const options = {
  title: "Programming languages usage",
  is3D:true,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"800px"}
    />
  );
}

export default App;
