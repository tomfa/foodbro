import { data } from '@/data'

export const Table = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">Food</h1>
                <p className="mt-2 text-sm text-gray-300">A list of all the food.</p>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">Food</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">kcal/100g</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">kg co2/kg</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">kr/kg</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">g/100g</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                    {data.flatMap(item => item.data).map(item => (
                      <tr key={item.label}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">{item.label}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{item.kcal} </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{item.co2} </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{item.price}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{item.protein}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
