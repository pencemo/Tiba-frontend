import { InformationCircleIcon } from "hugeicons-react";
import React from "react";

function NoData() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <InformationCircleIcon size={40} className="text-muted-foreground/40"/>
      <h1 className="text-xl font-semibold text-muted-foreground">No Data Available</h1>
    </div>
  );
}

export default NoData;
