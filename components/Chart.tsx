"use client"

import {data, DataValue} from '@/data'
import {useMemo, useState} from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const datapoints = data.flatMap(item => item.data).map(item => ({
  ...item,
  kcal: item.kcal * 10,
  protein: item.protein * 10, // normalize to 1kg
}));


export const Chart = () => {
  const [yAxis, setYaxis] = useState<DataValue>('price');
  const [xAxis, setXaxis] = useState<DataValue>('kcal');
  const [header, setHeader] = useState<string>('Kcal purchased per kr');
  const labels = useMemo(() => datapoints.map(item => item.label), []);
  const xData = useMemo(() => datapoints.map(item => item[xAxis] / item[yAxis]), [xAxis, yAxis]);

  return (
    <div className={'w-10/12 items-center flex-col flex'}>

    <div className={'my-4 align-'}>
      <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className={"relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold text-gray-100 ring-1 ring-inset ring-gray-300 focus:z-10 " + (header === 'Grams protein per kcal' ? "bg-green-700" : "bg-gray-950 hover:bg-gray-800")}
        onClick={() => {
          setXaxis('protein')
          setYaxis('kcal')
          setHeader('Grams protein per kcal')
        }}
      >
        Skinny Bro
      </button>
      <button
        type="button"
        className={"relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-100 ring-1 ring-inset ring-gray-300 focus:z-10 " + (header === 'Kcal purchased per kr' ? "bg-green-700" : "bg-gray-950 hover:bg-gray-800")}
        onClick={() => {
          setXaxis('kcal')
          setYaxis('price')
          setHeader('Kcal purchased per kr')
        }}
      >
        Cheap
      </button>
      <button
        type="button"
        className={"relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-100 ring-1 ring-inset ring-gray-300 focus:z-10 " + (header === 'Kcal per kg CO2' ? "bg-green-700" : "bg-gray-950 hover:bg-gray-800")}
        onClick={() => {
          setXaxis('kcal')
          setYaxis('co2')
          setHeader('Kcal per kg CO2')
        }}
      >
        Climate
      </button>
      <button
        type="button"
        className={"relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold text-gray-100 ring-1 ring-inset ring-gray-300 focus:z-10 " + (header === 'Grams protein per kg CO2' ? "bg-green-700" : "bg-gray-950 hover:bg-gray-800")}
        onClick={() => {
          setXaxis('protein')
          setYaxis('co2')
          setHeader('Grams protein per kg CO2')
        }}
      >
        Climate Bro
      </button>
    </span>
    </div>
      <h2 className="mb-2 text-4xl mt-20">{header}</h2>
      <Line
        style={{ marginBottom: '14rem' ,marginTop: '4rem'}}
        data={{
          labels,
          datasets: [
            {
              data: xData,
              backgroundColor: "rgb(6, 79, 67)",
              pointRadius: 10,
            },
          ],
        }}
      />
    </div>

  )
}
