import Image from 'next/image'
import {Table} from "@/components/Table";
import {Chart} from "@/components/Chart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chart />
     <Table />
    </main>
  )
}
