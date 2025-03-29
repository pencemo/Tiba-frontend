// import { useState, useEffect } from "react"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react"

// const TableComponent = ({ data, totalPages, currentPage, totalCars }) => {
//   const [searchValue, setSearchValue] = useState("")
//   const [filteredData, setFilteredData] = useState(data)
//   const [sortColumn, setSortColumn] = useState(null)
//   const [sortDirection, setSortDirection] = useState("asc")
//   const [pageIndex, setPageIndex] = useState(currentPage - 1)
//   const [pageSize, setPageSize] = useState(10)

//   useEffect(() => {
//     const filtered = data.filter((car) =>
//       Object.values(car).some((value) => String(value).toLowerCase().includes(searchValue.toLowerCase())),
//     )
//     setFilteredData(filtered)
//   }, [searchValue, data])

//   const sortData = (column) => {
//     if (sortColumn === column) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc")
//     } else {
//       setSortColumn(column)
//       setSortDirection("asc")
//     }

//     const sorted = [...filteredData].sort((a, b) => {
//       if (a[column] < b[column]) return sortDirection === "asc" ? -1 : 1
//       if (a[column] > b[column]) return sortDirection === "asc" ? 1 : -1
//       return 0
//     })

//     setFilteredData(sorted)
//   }

//   const pageCount = Math.ceil(filteredData.length / pageSize)
//   const pageData = filteredData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)

//   if (!data || data.length === 0) {
//     return <div>No data available</div>
//   }

//   const columns = Object.keys(data[1])

//   return (
//     <div className="container mx-auto p-4 space-y-4">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold">Car Listings</h1>
//         <Input
//           placeholder="Search..."
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           className="w-64"
//         />
//       </div>

//       <div className="border rounded-lg overflow-hidden">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               {columns.map((key) => (
//                 <TableHead key={key} className="font-semibold text-sm">
//                   <Button variant="ghost" onClick={() => sortData(key)} className="hover:bg-transparent capitalize">
//                     {key.replace("_", " ")}
//                     {sortColumn === key && <ArrowUpDown className="ml-2 h-4 w-4" />}
//                   </Button>
//                 </TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {pageData.map((car, index) => (
//               <TableRow key={index}>
//                 {columns.map((key) => (
//                   <TableCell key={key} className="p-2">
//                     {key === "daily_rate" ? `$${car[key].$numberDecimal}` : String(car[key])}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       <div className="flex justify-between items-center mt-4">
//         <div>
//           <span className="text-sm text-gray-600">
//             Page <span className="font-medium">{pageIndex + 1}</span> of{" "}
//             <span className="font-medium">{totalPages}</span>
//           </span>
//           <span className="ml-2 text-sm text-gray-600">
//             | Total Cars: <span className="font-medium">{totalCars}</span>
//           </span>
//         </div>

//         <div className="flex items-center space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
//             disabled={pageIndex === 0}
//           >
//             <ChevronLeft className="h-4 w-4" />
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setPageIndex(Math.min(totalPages - 1, pageIndex + 1))}
//             disabled={pageIndex === totalPages - 1}
//           >
//             Next
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//           <Select
//             value={pageSize.toString()}
//             onValueChange={(value) => {
//               setPageSize(Number(value))
//               setPageIndex(0)
//             }}
//           >
//             <SelectTrigger className="w-[70px]">
//               <SelectValue placeholder={pageSize} />
//             </SelectTrigger>
//             <SelectContent>
//               {[10, 20, 30, 40, 50].map((size) => (
//                 <SelectItem key={size} value={size.toString()}>
//                   {size}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TableComponent

