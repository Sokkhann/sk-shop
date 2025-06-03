import Image from "next/image";
import React from "react";

export default function NewCardComponent() {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 w-[580px] h-[280px] shadow-sm">
        <figure>
          <Image
            height={300}
            width={300}
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
}
