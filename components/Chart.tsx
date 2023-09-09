"use client"

import {data, DataValue} from '@/data'
import {useState} from "react";

export const Chart = () => {
  const [xAxis, setXaxis] = useState<DataValue>('kcal');
  const [yAxis, setYaxis] = useState<DataValue>('price');

  return (
    <div className={'mb-4'}>
      <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        onClick={() => {
          setYaxis('protein')
          setYaxis('kcal')
        }}
      >
        Skinny Bro
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        onClick={() => {
          setYaxis('kcal')
          setYaxis('price')
        }}
      >
        Cheap
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        onClick={() => {
          setYaxis('kcal')
          setXaxis('co2')
        }}
      >
        Climate
      </button>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
        onClick={() => {
          setYaxis('protein')
          setXaxis('co2')
        }}
      >
        Climate Bro
      </button>
    </span>
    </div>
  )
}
