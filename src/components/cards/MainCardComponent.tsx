import Image from "next/image";
import React from "react";
import { cardData } from "../../../data/mainData";

export default function CardComponent() {
  return (
    <div className="flex flex-wrap justify-between gap-2">
      {cardData.map((item, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <Image width={400} height={300} src={item.image} alt={item.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              {item.tags.map((tag, idx) => (
                <div key={idx} className="badge badge-outline">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
