import React from "react";
import PopularCardComponent from "../cards/PopularCardComponent";

export default function PopularCardSection() {
  return (
    <div className="px-12 pt-12">
      <div className="flex justify-between">
        <PopularCardComponent />
        
        <PopularCardComponent />
      </div>
    </div>
  );
}
