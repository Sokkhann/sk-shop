import React from "react";
import CardComponent from "../cards/MainCardComponent";

export default function HomeCardSection() {
  return (
    <div className="px-12 pt-12">
      <div className="flex justify-between">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}
