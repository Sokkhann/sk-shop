import React from "react";
import NewCardComponent from "../cards/NewCardComponent";

export default function NewCardSection() {
  return (
    <div className="pt-24 px-12">
      <div className="flex overflow-x-auto space-x-4 scroll-container">
        <NewCardComponent />
        <NewCardComponent />
        <NewCardComponent />
        <NewCardComponent />
        <NewCardComponent />
      </div>
    </div>
  );
}
