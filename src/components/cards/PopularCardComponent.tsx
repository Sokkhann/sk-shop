import { popularCardsData } from "data/popularCardsData";
import Image from "next/image";
import React from "react";


export default function PopularCardComponent() {
  return (
    <div className="flex overflow-x-auto space-x-4 scroll-container">
      {popularCardsData.map((item, idx) => (
        <div
          key={idx}
          className="card card-side bg-base-100 w-[1000px] shadow-sm"
        >
          <figure className="w-[300px]">
            <Image width={300} height={300} src={item.image} alt={item.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{item.btnText}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
