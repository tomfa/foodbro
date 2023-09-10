import Image from "next/image";
import { Table } from "@/components/Table";
import { Chart } from "@/components/Chart";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between xl:p-24">
      <Chart />
      <Table />
    </main>
  );
}
