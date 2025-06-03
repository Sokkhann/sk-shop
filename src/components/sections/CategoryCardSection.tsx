import React from "react";
import CategoryCardComponent from "../cards/CategoryCardComponent";

export default function CategoryCardSection() {
  return (
    <div className="px-12 pt-24">
      <div className="flex flex-wrap gap-4">
        <CategoryCardComponent />
        <CategoryCardComponent />
        <CategoryCardComponent />
        <CategoryCardComponent />
        <CategoryCardComponent />
        <CategoryCardComponent />
        <CategoryCardComponent />
        <CategoryCardComponent />
      </div>
    </div>
  );
}
