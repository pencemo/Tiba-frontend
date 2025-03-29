import React from "react";

import { Button } from "../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import CarBox from "./CarBox";
import { SelectbySort } from "./Select";
import { useFilterContext } from "@/Context/filterContext";

function CarsGrid({
  error,
  carData,
  currentPage,
  setCurrentPage,
  totalPages,
  totalCars,
}) {
  const { sort, setSort } = useFilterContext();

  if (error) return <div>Error to load page</div>;
  return (
    <div className="w-full p-6">
      <div className="w-full flex max-md:flex-col md:items-center gap-y-3 md:justify-between mb-3">
        <h1 className="text-2xl  font-semibold">Available Cars</h1>
        <div className="flex items-center gap-2">
          <SelectbySort value={sort} setSelect={setSort} />
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 2xl:gap-6">
        {carData &&
          carData.map((car, index) => <CarBox car={car} key={index} />)}
      </div>
      <div className="flex items-center justify-between py-6">
        <div className="text-foreground max-md:hidden">
          <span className="font-medium text-foreground">{totalCars}</span> Cars Available
        </div>

        <div className="flex items-center justify-end space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CarsGrid;
